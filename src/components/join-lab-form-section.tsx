"use client";

import Image from "next/image";
import { type FormEvent, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { BASE_FIELD_CLASSNAME, CURRENT_LEVEL_OPTIONS, FORM_FIELDS } from "@/lib/join-lab-content";
import type { CurrentLevelOption } from "@/types/join-lab";

export function JoinLabFormSection() {
  const [isLevelMenuOpen, setIsLevelMenuOpen] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<CurrentLevelOption | null>(null);
  const [selectedResumeName, setSelectedResumeName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const levelMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!levelMenuRef.current?.contains(event.target as Node)) {
        setIsLevelMenuOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!selectedLevel) {
      toast.error("Please select your current level.");
      return;
    }

    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("currentLevel", selectedLevel.value);

    try {
      const response = await fetch("/api/join-lab", {
        method: "POST",
        body: formData,
      });

      const result = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(result?.message ?? "Unable to submit your application right now.");
      }

      form.reset();
      setSelectedLevel(null);
      setSelectedResumeName("");
      toast.success("Application submitted successfully. We will be in touch soon.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to submit your application right now."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="pb-20">
      <div className="mx-auto w-full max-w-screen-xl px-3 md:px-20">
        <form
          className="mx-auto flex w-full max-w-none flex-col gap-8 md:max-w-[44rem]"
          onSubmit={handleSubmit}
        >
          {FORM_FIELDS.map((field) => {
            if (field.kind === "input") {
              return (
                <input
                  className={BASE_FIELD_CLASSNAME}
                  key={field.key}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  type={field.inputType}
                />
              );
            }

            if (field.kind === "dropdown") {
              return (
                <div className="relative" key={field.key} ref={levelMenuRef}>
                  <input
                    name={field.name}
                    required
                    type="hidden"
                    value={selectedLevel?.value ?? ""}
                  />
                  <button
                    aria-expanded={isLevelMenuOpen}
                    aria-haspopup="listbox"
                    className={`flex h-14 w-full items-center rounded-[0.75rem] border bg-transparent px-4 text-left transition-colors focus:ring-[0.1875rem] focus:ring-[#BAD8FF] focus:outline-none ${
                      isLevelMenuOpen ? "border-[#0D1B2A]" : "border-[#E6E6E6]"
                    }`}
                    onClick={() => setIsLevelMenuOpen((open) => !open)}
                    type="button"
                  >
                    <span
                      className={`text-base leading-6 ${
                        selectedLevel ? "text-[#333333]" : "text-[#AEAEAE]"
                      }`}
                    >
                      {selectedLevel?.label ?? field.placeholder}
                    </span>
                    <Image
                      alt=""
                      aria-hidden
                      className={`ml-auto h-[1.125rem] w-[1.125rem] transition-transform ${
                        isLevelMenuOpen ? "rotate-180" : ""
                      }`}
                      height={18}
                      src="/assets/dropdown-arrow.svg"
                      width={18}
                    />
                  </button>

                  {isLevelMenuOpen && (
                    <div className="absolute top-[calc(100%+0.5rem)] right-0 left-0 z-20 overflow-hidden rounded-[0.5rem] bg-white shadow-[0_0.75rem_2rem_rgba(13,27,42,0.12)]">
                      {CURRENT_LEVEL_OPTIONS.map((option) => (
                        <button
                          className="w-full px-4 py-3 text-left text-base leading-6 text-[#0D1B2A] hover:bg-[#F3F7FD]"
                          key={option.value}
                          onClick={() => {
                            setSelectedLevel(option);
                            setIsLevelMenuOpen(false);
                          }}
                          type="button"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (field.kind === "textarea") {
              return (
                <textarea
                  className="min-h-28 resize-none rounded-[0.75rem] border border-[#E6E6E6] bg-transparent px-4 py-3 text-base leading-6 text-[#1A1A1A] caret-[#0D1B2A] transition-colors placeholder:text-[#AEAEAE] focus:border-[#0D1B2A] focus:ring-[0.1875rem] focus:ring-[#BAD8FF] focus:outline-none"
                  key={field.key}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                />
              );
            }

            return (
              <div className="flex flex-col gap-1.5" key={field.key}>
                <label
                  className="flex min-h-[7rem] cursor-pointer items-center justify-center rounded-[0.75rem] border border-dashed border-[#E6E6E6] px-4 py-[2.8125rem] text-base leading-6 text-[#AEAEAE] transition-colors hover:border-[#0D1B2A]"
                  htmlFor={field.id}
                >
                  {selectedResumeName || field.label}
                </label>
                <input
                  accept={field.accept}
                  className="sr-only"
                  id={field.id}
                  name={field.name}
                  onChange={(event) =>
                    setSelectedResumeName(event.currentTarget.files?.[0]?.name ?? "")
                  }
                  type="file"
                />
                <p className="text-[0.625rem] leading-[0.875rem] text-[#AEAEAE]">
                  {field.helperText}
                </p>
              </div>
            );
          })}

          <button
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-3xl bg-[#1A73E8] p-1 pr-2 text-white disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            <span className="px-2 py-2 text-base leading-6">
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
            <Image
              alt=""
              aria-hidden
              className="h-10 w-auto"
              height={40}
              src="/assets/button-arrow.svg"
              width={37}
            />
          </button>
        </form>
      </div>
    </section>
  );
}

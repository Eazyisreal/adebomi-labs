import type { CurrentLevelOption, FormFieldConfig } from "@/types/join-lab";

export const CURRENT_LEVEL_OPTIONS: CurrentLevelOption[] = [
  { value: "undergraduate", label: "Undergraduate" },
  { value: "masters", label: "Master’s Student" },
  { value: "phd", label: "PhD Applicant" },
  { value: "postdoc", label: "Postdoctoral Researcher" },
  { value: "other", label: "Other" },
];

export const FORM_FIELDS: FormFieldConfig[] = [
  {
    key: "full-name",
    kind: "input",
    name: "fullName",
    placeholder: "Full Name",
    inputType: "text",
  },
  {
    key: "email",
    kind: "input",
    name: "email",
    placeholder: "Email Address",
    inputType: "email",
  },
  {
    key: "institution",
    kind: "input",
    name: "institution",
    placeholder: "Current Institution",
    inputType: "text",
  },
  {
    key: "current-level",
    kind: "dropdown",
    name: "currentLevel",
    placeholder: "Current Level",
  },
  {
    key: "field-of-study",
    kind: "input",
    name: "fieldOfStudy",
    placeholder: "Field of Study",
    inputType: "text",
  },
  {
    key: "interest-reason",
    kind: "textarea",
    name: "interestReason",
    placeholder: "What areas interest you and why?",
  },
  {
    key: "join-reason",
    kind: "textarea",
    name: "joinReason",
    placeholder: "Why do you want to join this lab?",
  },
  {
    key: "resume-upload",
    kind: "upload",
    name: "resume",
    label: "Upload CV/Resume",
    helperText: "Attach file. File size of your documents should not exceed 2MB",
    accept: ".pdf,.doc,.docx",
    id: "resume-upload",
  },
];

export const BASE_FIELD_CLASSNAME =
  "h-14 rounded-[0.75rem] border border-[#E6E6E6] bg-transparent px-4 text-base leading-6 text-[#1A1A1A] placeholder:text-[#AEAEAE] caret-[#0D1B2A] transition-colors focus:border-[#0D1B2A] focus:outline-none focus:ring-[0.1875rem] focus:ring-[#BAD8FF]";

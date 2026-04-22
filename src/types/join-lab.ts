export type CurrentLevelOption = {
  value: string;
  label: string;
};

export type FormFieldConfig =
  | {
      key: string;
      kind: "input";
      name: string;
      placeholder: string;
      inputType: "text" | "email";
    }
  | {
      key: string;
      kind: "dropdown";
      name: "currentLevel";
      placeholder: string;
    }
  | {
      key: string;
      kind: "textarea";
      name: string;
      placeholder: string;
    }
  | {
      key: string;
      kind: "upload";
      name: string;
      label: string;
      helperText: string;
      accept: string;
      id: string;
    };

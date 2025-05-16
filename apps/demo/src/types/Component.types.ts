import type { ComponentType } from "react";

export type Field = {
  name: string;
  label: string;
  type: "text" | "number" | "textarea" | "select" | "custom";
  options?: { label: string; value: string | number }[]; // Bruges kun hvis type = select
  component?: ComponentType<any>; // Bruges kun hvis type = custom
};

export type DynamicFormProps = {
  fields: Field[];
  formData: Record<string, any>;
  onChange: (fieldName: string, value: any) => void;
};

export type FormProps = {
  fields: Field[];
  data: string[] | number[];
  onChange: (fieldName: string, value: string) => void;
};

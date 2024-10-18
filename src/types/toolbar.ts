export interface ToolbarSchemaItem {
  type: "select" | "button";
  value?: string;
  options?: { label: string; value: string }[];
}

export interface ToolbarSchema {
  [key: string]: ToolbarSchemaItem[];
}

export interface ToolbarProps {
  schema?: ToolbarSchema;
}

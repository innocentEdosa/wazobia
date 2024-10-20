export interface Node {
  type: string;
  content?: Node[];
  text?: string;
  marks?: string[];
  attrs?: { [key: string]: any };
}

export type DocumentModel = { type: string; content: Node[] };

export interface EditorProps {
  children?: React.ReactNode;
}

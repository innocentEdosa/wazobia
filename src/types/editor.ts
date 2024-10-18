export interface Node {
  type: string;
  content?: string;
  attrs?: { [key: string]: any };
}

export type DocumentModel = Node[];

export interface EditorProps {
  children?: React.ReactNode;
}

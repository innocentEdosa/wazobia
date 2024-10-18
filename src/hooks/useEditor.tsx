import { useState } from "react";
import { DocumentModel, Node } from "../types/editor";

const useEditor = () => {
  const [doc, setDoc] = useState<DocumentModel>([]);

  const addNode = (type: string) => {
    const newNode = { type, content: type === 'image' ? '' : `New ${type}` };
    setDoc([...doc, newNode]);
  };

  const renderNode = (node: Node, index: number) => {
    switch (node.type) {
      case "heading":
        return (
          <h1 contentEditable key={index}>
            {node.content}
          </h1>
        );
      case "paragraph":
        return (
          <p contentEditable key={index}>
            {node.content}
          </p>
        );
      case "image":
        return (
          <img key={index} src={node.attrs?.src || ""} alt="Uploaded Image" />
        );
      case "link":
        return (
          <a
            key={index}
            href={node.attrs?.href || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {node.content}
          </a>
        );
      default:
        return null;
    }
  };

  return {
    doc,
    renderNode,
    addNode,
  };

};

export default useEditor;

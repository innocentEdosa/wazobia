import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import { NodeViewWrapper } from "@tiptap/react";

const useEditorComponent = (Component: React.ComponentType, props: any) => {
  return Node.create({
    name: "reactComponent",

    group: "block",
    atom: true,

    addAttributes() {
      return {};
    },

    parseHTML() {
      return [
        {
          tag: "media-embed",
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return ["media-embed", mergeAttributes(HTMLAttributes)];
    },

    addNodeView() {
      return ReactNodeViewRenderer(() => {
        return (
          <NodeViewWrapper>
            <Component {...props} />
          </NodeViewWrapper>
        );
      });
    },
  });
};

export default useEditorComponent;

import React, { useState } from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { useEditor } from "@tiptap/react";
import Image from "@tiptap/extension-image";
import useEditorComponent from "../hooks/useEditorComponent";
import MediaEmbed from "../components/mediaEmbed";
import Youtube from "@tiptap/extension-youtube";
import ModalContentWrapper from "../components/ModalContentWrapper";
import Modal from "../components/modal";
import { ToolbarSchemaItem } from "../types/toolbar";
import CreateVideoLink from "../components/forms/createVideoLink";
import UploadImage from "../components/forms/uploadImage";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from '@tiptap/extension-placeholder'

interface WithEditorProps {
  handleToolbarItem: (item: ToolbarSchemaItem) => () => void;
  editor: ReturnType<typeof useEditor> | null;
  showToolbar: boolean
  handleGetHTML: () => string | undefined;
  editorContent: string;
  onChange?: (content: string) => void
}

const withEditor = <P extends WithEditorProps>(
  Component: React.ComponentType<P>
) => {
  const Hoc: React.FC<Omit<P, keyof WithEditorProps>> = (props) => {
    const [activeMediaEmbedType, setActiveMediaEmbedType] = useState<
      string | null
    >(null);

    const [showToolbar, setShowToolbar] = useState(false);
    const [editorContent, setEditorContent] = useState('');


    const onClickImageEmbed = (embedType: string) => {
      setActiveMediaEmbedType(embedType);
    };

    const MediaEmbedComponent = useEditorComponent(MediaEmbed, {
      onClickHandler: onClickImageEmbed,
    });

    const extensions = [
      Image,
      MediaEmbedComponent,
      Placeholder.configure({
        placeholder: 'Add content',
      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
        
      }),
    ];

    const editor = useEditor({
      extensions,
      onFocus: () => {
        setShowToolbar(true);
      },
      onUpdate: ({ editor }) => {
        // Update content on every keystroke
        const html = editor.getHTML();
        setEditorContent(html);
      },
      content: `<p></p>`,
    });

    const handleGetHTML = () => {
        if (editor) {
          const htmlContent = editor.getHTML();
          return htmlContent;
        }
        
      };
    

    const imageEmbedHandler = (params: { imageUrl: string }) => {
      setActiveMediaEmbedType(null);
      if (params?.imageUrl) {
        editor?.chain().focus().setImage({ src: params?.imageUrl }).run();
      }
    };

    const videoLinkEmbedHandler = (params: { url: string }) => {
      setActiveMediaEmbedType(null);
      if (params?.url) {
        editor?.commands.setYoutubeVideo({
          src: params?.url,
          height: 323,
          width: 608,
        });
      }
    };

    const handleToolbarItem = (item: ToolbarSchemaItem) => () => {
      if (!editor) {
        return;
      }

      switch (item.value) {
        case "bold":
          editor.chain().focus().toggleBold().run();
          break;
        case "italic":
          editor.chain().focus().toggleItalic().run();
          break;
        case "blockquote":
          editor.chain().focus().toggleBlockquote().run();
          break;
        case "bulletPoint":
          editor.chain().focus().toggleBulletList().run();
          break;
        case "numbering":
          editor.chain().focus().toggleOrderedList().run();
          break;
        case "paragraph":
          editor.chain().focus().setParagraph().run();
          break;
        case "heading1":
          editor.chain().focus().toggleHeading({ level: 1 }).run();
          break;
        case "image":
          editor
            .chain()
            .focus()
            .insertContent("<media-embed></media-embed>")
            .run();
          break;
      }
    };

    return (
      <>
        <Component
          {...props}
          showToolbar={showToolbar}
          handleToolbarItem={handleToolbarItem}
          editor={editor}
          handleGetHTML={handleGetHTML}
          editorContent={editorContent}
        />
        <Modal
          show={!!activeMediaEmbedType}
          hide={() => setActiveMediaEmbedType(null)}
        >
          <ModalContentWrapper
            label="Embed"
            cancelHandler={() => setActiveMediaEmbedType(null)}
          >
            <>
              {activeMediaEmbedType === "Picture" && (
                <UploadImage
                  onCancelHandler={() => setActiveMediaEmbedType(null)}
                  onSubmitHandler={imageEmbedHandler}
                />
              )}
              {activeMediaEmbedType === "Video" && (
                <CreateVideoLink
                  onSubmitHandler={videoLinkEmbedHandler}
                  onCancelHandler={() => setActiveMediaEmbedType(null)}
                />
              )}
            </>
          </ModalContentWrapper>
        </Modal>
      </>
    );
  };

  return Hoc;
};

export default withEditor;

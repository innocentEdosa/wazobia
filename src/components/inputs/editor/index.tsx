import { useEffect } from "react";
import withEditor from "../../../hoc/withEditor";
import { EditorContent } from "@tiptap/react";
import "./styles.css";
import styles from "./editor.module.css";
import Toolbar from "../../toolbar";

const Editor = withEditor(({ onChange,  editor, showToolbar, editorContent, handleToolbarItem }) => {

  useEffect(() => {
    if(editorContent) {
      onChange?.(editorContent)
    }
  }, [editorContent])


  return (
    <div className={styles.editorWrapper}>
      <div className={styles.toolBarWrapper}>
        {/* @ts-expect-error no description*/}
        {showToolbar && <Toolbar handleToolbarItem={handleToolbarItem} editor={editor} />}
      </div>
      <div className={styles.editor}>
        <EditorContent editor={editor} />
      </div>
      <div className={styles.editorCount}>0/1000 words</div>
    </div>
  );
});

export default Editor;

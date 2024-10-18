import { forwardRef } from "react";
import { EditorProps } from "../../../types/editor";
import styles from "./editor.module.css";
import Input from "../input";

const Editor = forwardRef<HTMLDivElement, EditorProps>(() => {
  return (
    <div className={styles.editorWrapper}>
      <Input placeholder="Add post title" />
      <div
        contentEditable
        className={styles.editor}
        suppressContentEditableWarning
      >
        Editable content
      </div>
      <div className={styles.editorCount}>0/1000 words</div>
    </div>
  );
});

export default Editor;

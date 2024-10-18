import { forwardRef } from "react";
import { EditorProps } from "../../../types/editor";
import styles from "./editor.module.css";

const Editor = forwardRef<HTMLDivElement, EditorProps>(() => {
  return (
    <>
      <div
        contentEditable
        className={styles.editor}
        suppressContentEditableWarning
      >
        adfadfasdfdafadsfadf
      </div>
      <div className={styles.editorCount}>0/1000 words</div>
    </>
  );
});

export default Editor;

import useFileUpload from "../../../hooks/useFileUpload";
import styles from "./imageUploadInput.module.css";
import Button from "../../buttons";
import { ButtonVariantEnum } from "../../../types/button";

const ImageUploadInput = () => {
  const { getRootProps, getInputProps } = useFileUpload();

  return (
    <div {...getRootProps?.()}>
      <input {...getInputProps?.()} />
      <label className={styles.label}>FILE UPLOAD</label>
      <div className={styles.uploadArea}>
        <Button variant={ButtonVariantEnum.SECONDARY} type="button">Import Image from Device</Button>
      </div>
    </div>
  );
};

export default ImageUploadInput;

import useFileUpload from "../../../hooks/useFileUpload";
import { useEffect } from "react";
import styles from "./imageUploadInput.module.css";
import Button from "../../buttons";
import { ButtonVariantEnum } from "../../../types/button";

const ImageUploadInput = ({
  onChangeHandler,
}: {
  onChangeHandler: (imageUrl: string) => void;
}) => {
  const { getRootProps, getInputProps, preview } = useFileUpload();

  useEffect(() => {
    if (preview) {
      onChangeHandler?.(preview);
    }
  }, [preview, onChangeHandler]);

  return (
    <div {...getRootProps?.()}>
      <input {...getInputProps?.()} />
      <label className={styles.label}>FILE UPLOAD</label>
      <div className={styles.uploadArea}>
        {!!preview && (
          <aside className={styles.previewImageWrapper}>
            <img src={preview} className={styles.previewImage} />
          </aside>
        )}
        {!preview && (
          <Button variant={ButtonVariantEnum.SECONDARY} type="button">
            Import Image from Device
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageUploadInput;

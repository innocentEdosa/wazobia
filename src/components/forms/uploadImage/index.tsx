import React, { useCallback } from "react";
import { Formik, Form, useFormikContext } from "formik";
import Button from "../../buttons";
import ImageUploadInput from "../../inputs/imageUploadInput";
import styles from "./uploadImage.module.css";
import { ButtonVariantEnum } from "../../../types/button";

interface UploadImageProps {
  onCancelHandler: () => void;
  onSubmitHandler: (values: { imageUrl: string }) => void;
}

const UploadImage: React.FC<UploadImageProps> = ({
  onSubmitHandler,
  onCancelHandler,
}) => {
  const handleSubmit = (values: { imageUrl: string }) => {
    onSubmitHandler(values);
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={styles.form}>
        <UploadImageForm onCancelHandler={onCancelHandler} />
      </Form>
    </Formik>
  );
};

const UploadImageForm: React.FC<{ onCancelHandler: () => void }> = ({
  onCancelHandler,
}) => {
  const { setFieldValue, handleSubmit } = useFormikContext<{
    imageUrl: string;
  }>();

  const handleImageChange = useCallback(
    (imageUrl: string) => {
      setFieldValue("imageUrl", imageUrl);
    },
    [setFieldValue]
  );

  return (
    <>
      <h4 className={styles.heading}>Upload Image</h4>
      <div>
        <ImageUploadInput onChangeHandler={handleImageChange} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleSubmit} type="submit">
          Embed
        </Button>
        <Button
          type="button"
          onClick={onCancelHandler}
          variant={ButtonVariantEnum.SECONDARY}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

const initialValues = {
  imageUrl: "",
};

export default UploadImage;

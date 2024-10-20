import React from "react";
import { Formik, Form } from "formik";
import Button from "../../buttons";
import Input from "../../inputs/input";
import Select from "../../inputs/select";
import styles from "./createVideoLink.module.css";
import { ButtonVariantEnum } from "../../../types/button";
import { InputVariant } from "../../../types/textField";

interface CreateVideoLinkProps {
  onCancelHandler: () => void;
  onSubmitHandler: (values: { url: string; provider: string }) => void;
}

const CreateVideoLink: React.FC<CreateVideoLinkProps> = ({
  onCancelHandler,
  onSubmitHandler,
}) => {
  const handleSubmit = (values: { url: string; provider: string }) => {
    onSubmitHandler(values);
  };

  return (
    <Formik
      enableReinitialize
      onSubmit={handleSubmit}
      initialValues={{
        url: "",
        provider: "youtube",
      }}
    >
      {({ handleChange, handleSubmit }) => (
        <Form className={styles.form}>
          <div className={styles.inputWrapper}>
            <Select
              name="provider"
              onChange={handleChange}
              label="Video Provider"
              options={providerOptions}
            />
          </div>
          <div className={styles.inputWrapper}>
            <Input
              name="url"
              onChange={handleChange}
              variant={InputVariant.PRIMARY}
              label="URL"
            />
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={handleSubmit} type="submit" >Embed</Button>
            <Button
              type="button"
              onClick={onCancelHandler}
              variant={ButtonVariantEnum.SECONDARY}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const providerOptions = [{ label: "Youtube", value: "youtube" }];

export default CreateVideoLink;

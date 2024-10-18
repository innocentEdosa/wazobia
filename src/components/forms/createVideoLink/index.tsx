import { Formik, Form } from "formik";
import Modal from "../../modal";
import Button from "../../buttons";
import Input from "../../inputs/input";
import Select from "../../inputs/select";
import ModalContentWrapper from "../../ModalContentWrapper";
import styles from "./createVideoLink.module.css";
import { ButtonVariantEnum } from "../../../types/button";
import { InputVariant } from "../../../types/textField";

const CreateVideoLink = () => {
  return (
    <Modal hide={() => {}} show={true}>
      <ModalContentWrapper label="Embed" cancelHandler={() => {}}>
        <Formik onSubmit={() => {}} initialValues={{}}>
          {() => {
            return (
              <Form className={styles.form}>
                <div className={styles.inputWrapper}>
                  <Select label="VIDEO PROVIDER" options={providerOptions} />
                </div>
                <div className={styles.inputWrapper}>
                  <Input variant={InputVariant.PRIMARY} label="URL" />
                </div>
                <div className={styles.buttonWrapper}>
                  <Button>Embed</Button>
                  <Button variant={ButtonVariantEnum.SECONDARY}>Cancel</Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalContentWrapper>
    </Modal>
  );
};

const providerOptions = [
  {
    label: "Youtube",
    value: "youtube",
  },
  {
    label: "Vimeo",
    value: "vimeo",
  },
];

export default CreateVideoLink;

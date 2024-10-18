import { Formik, Form } from "formik";
import Modal from "../../modal";
import Button from "../../buttons";
import ModalContentWrapper from "../../ModalContentWrapper";
import ImageUploadInput from "../../inputs/imageUploadInput";
import styles from "./uploadImage.module.css";
import { ButtonVariantEnum } from "../../../types/button";

const UploadImage = () => {
  return (
    <Modal hide={() => {}} show={true}>
      <ModalContentWrapper label="Embed" cancelHandler={() => {}}>
        <Formik onSubmit={() => {}} initialValues={{}}>
          {() => {
            return (
              <Form className={styles.form}>
                <h4 className={styles.heading}>Upload Image</h4>
                <div>
                  <ImageUploadInput />
                </div>
                <div className={styles.buttonWrapper}>
                  <Button>
                    Embed
                  </Button>
                  <Button variant={ButtonVariantEnum.SECONDARY}>
                    Cancel
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </ModalContentWrapper>
    </Modal>
  );
};

export default UploadImage;

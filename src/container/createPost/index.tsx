import { Formik, Form } from "formik";
import Editor from "../../components/inputs/editor";
import Button from "../../components/buttons";
import styles from "./createPost.module.css";
import CreateVideoLink from "../../components/forms/createVideoLink";

const CreatePost = () => {
  const onSubmitHandler = (params) => {
    console.log(params);
  };

  return (
    <>
      <Formik initialValues={initialValues()} onSubmit={onSubmitHandler}>
        {() => {
          return (
            <Form className={styles.form}>
              <div className={styles.inputWrapper}>
                <Editor />
              </div>
              <div className={styles.buttonWrapper}>
                <Button>Post</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
      <CreateVideoLink />
    </>
  );
};

const initialValues = () => {
  return {
    title: "",
    doc: "",
  };
};

export default CreatePost;

import { Formik, Form } from "formik";
import Editor from "../../components/inputs/editor";
import Button from "../../components/buttons";
import Input from "../../components/inputs/input";
import styles from "./createPost.module.css";

const CreatePost = () => {
  const onSubmitHandler = (params: { doc: string; title: string }) => {
    // send to the backend
    console.log(params);
  };

  return (
    <>
      <Formik initialValues={initialValues()} onSubmit={onSubmitHandler}>
        {({ handleChange, values, setFieldValue, handleSubmit }) => {
          return (
            <Form className={styles.form}>
              <div className={styles.inputWrapper}>
                <div className={styles.headingWrapper}>
                  <Input
                    name="title"
                    value={values?.title}
                    onChange={handleChange}
                    placeholder="Add place title"
                  />
                </div>
                <div className={styles.editorWrapper}>
                  <Editor
                  // @ts-ignore
                    onChange={(content: string) => {
                      setFieldValue("doc", content);
                    }}
                  />
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                <Button onClick={handleSubmit}>Post</Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

const initialValues = () => {
  return {
    title: "Add post title",
    doc: "",
  };
};

export default CreatePost;

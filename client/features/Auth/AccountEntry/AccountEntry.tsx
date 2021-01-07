import { memo } from "react";
import {
  Formik,
  useField,
  Form,
  Field,
  ErrorMessage,
  FieldAttributes,
} from "formik";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import * as S from "./AccountEntry.styled";

const InputText = ({ label, ...props }: FieldAttributes<any>) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label>
        <TextField label={label} id="standard-basic" {...field} {...props} />
      </label>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

type FormValues = {
  email?: string;
  password?: string;
};

const AccountEntry = memo(() => (
  <Formik
    initialValues={{}}
    validate={(values: FormValues) => {
      const errors: FormValues = {};

      if (!values.email) {
        errors.email = "Required!";
      }

      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <S.FormElement>
          <S.Title>Войдите в аккаунт</S.Title>
        </S.FormElement>
        <S.FormElement>
          <InputText
            id="standard-basic"
            name="email"
            type="email"
            label="Email"
          />
        </S.FormElement>
        <S.FormElement>
          <InputText
            id="standard-basic"
            name="password"
            type="password"
            label="Пароль"
          />
        </S.FormElement>
        <S.FormElement>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={isSubmitting}
          >
            Вход
          </Button>
        </S.FormElement>
      </Form>
    )}
  </Formik>
));

export { AccountEntry };

import { memo } from "react";
import { Formik, useField, Form, FieldAttributes } from "formik";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import * as S from "./RegisterAccount.styled";

const InputText = ({ label, ...props }: FieldAttributes<any>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        <TextField
          error={meta.touched && meta.error}
          helperText={meta.touched && meta.error && meta.error}
          label={label}
          id="standard-basic"
          {...field}
          {...props}
        />
      </label>
    </>
  );
};

type FormValues = {
  email?: string;
  password?: string;
  userName?: string;
  userPassword?: string;
  userPhone?: string;
};

type Field = {
  name: keyof FormValues;
  type: string;
  label: string;
};

type Fields = [Field[], Field[]];

const requiredFields: Fields = [
  [
    { name: "email", type: "email", label: "Email:" },
    { name: "password", type: "password", label: "Пароль:" },
  ],
  [
    { name: "userName", type: "text", label: "Имя:" },
    { name: "userPassword", type: "text", label: "Фамилия:" },
    { name: "userPhone", type: "tel", label: "Телефон:" },
  ],
];

const RegisterAccount = memo(() => (
  <Formik
    initialValues={{}}
    validate={(values: FormValues) => {
      const errors: FormValues = {};

      requiredFields.flat().forEach((element: Field) => {
        const currentElement = element.name;

        if (!values[currentElement]) errors[currentElement] = "Required!";
      });

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
          <S.Title>Регистрация аккаунта</S.Title>
        </S.FormElement>
        <S.FieldsSection>
          {requiredFields &&
            requiredFields.map((section) => (
              <div>
                {section.map(({ name, type, label }) => (
                  <S.FormElement>
                    <InputText name={name} type={type} label={label} />
                  </S.FormElement>
                ))}
              </div>
            ))}
        </S.FieldsSection>
        <S.FormElement>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={isSubmitting}
          >
            Регистрация
          </Button>
          <Link href="#" onClick={() => {}}>
            <S.Text>У меня уже есть аккаунт</S.Text>
          </Link>
        </S.FormElement>
      </Form>
    )}
  </Formik>
));

export { RegisterAccount };

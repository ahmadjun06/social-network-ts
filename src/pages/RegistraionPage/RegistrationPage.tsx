import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "./LoginPage.scss";
import * as yup from "yup";
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { Link } from "react-router-dom";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button/Button";
import { useAddUserMutation } from "../../store/api/authApi";

interface RegistraionFrom {
  username: string;
  userphone: string;
  userpassword: string;
  email: string;
  city: string;
}

const registrationFormSchema = yup.object({
  username: yup.string().required("Обзятельное поле"),
  userphone: yup.string().required("Обзятельное поле"),
  userpassword: yup.string().required("Обзятельное поле"),
  email: yup.string().required("Обзятельное поле"),
  city: yup.string().required("Обзятельное поле"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistraionFrom>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
      email: "",
      city: "",
    },
  });

  const [registerUser] = useAddUserMutation();

  const onRegistrationSubmit = (data: RegistraionFrom) => {
    registerUser({
      email: data.email,
      name: data.username,
      password: data.userpassword,
      phone_number: data.userphone,
      user_city: data.city,
    });
  };

  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistrationSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AppInput
                type="email"
                inputPlaceholder="Email адрес"
                {...field}
                isError={errors.email ? true : false}
                errorText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                inputPlaceholder="Имя фамилия"
                {...field}
                isError={errors.username ? true : false}
                errorText={errors.username?.message}
              />
            )}
          />
          <Controller
            name="userphone"
            control={control}
            render={({ field }) => (
              <AppInput
                type="tel"
                inputPlaceholder="Номер телефон"
                {...field}
                isError={errors.userphone ? true : false}
                errorText={errors.userphone?.message}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                type="password"
                inputPlaceholder="Пароль"
                {...field}
                isError={errors.userpassword ? true : false}
                errorText={errors.userpassword?.message}
              />
            )}
          />
          <Controller
            name="city"
            control={control}
            render={({ field }) => (
              <AppInput
                type="text"
                inputPlaceholder="Город"
                {...field}
                isError={errors.city ? true : false}
                errorText={errors.city?.message}
              />
            )}
          />
          <Button
            isDisabled={!!Object.keys(errors).length}
            buttonText="Зарегестриповаться"
            type="submit"
          />
        </form>
        <Link to="/forgot-password">Забыли пароль? </Link>
        <RegistrationInfo />
      </div>
    </Container>
  );
};

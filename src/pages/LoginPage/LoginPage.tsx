import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./LoginPage.scss";
import * as yup from "yup";
import { Container } from "../../components/Container/Container";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { AppInput } from "../../components/AppInput/AppInput";
import { RegistrationInfo } from "../../components/Registration/RegistrationInfo";
import { Button } from "../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { RootState } from "../../store/store";
import { changeUser } from "../../store/userSlice";
import { User } from "../../store/userSlice";
import { useGetUserQuery, useLoginUserMutation } from "../../store/api/authApi";

const mockUser: User = {
  user_id: 999,
  name: "pavel",
  mail: "test@test.com",
  phone_number: "935361311",
  reg_data: new Date().toISOString(),
  city: "Tashkent",
};

interface LoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  useremail: yup.string().required("Обзятельное поле"),
  userpassword: yup.string().required("Обзятельное поле"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const onRegistrationSubmit = (data: any) => {
    console.log(data);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginUser, {data: userData}] = useLoginUserMutation();

  useEffect(()=>{
    if(userData) {
      navigate("/profile");
    }
  })

  const onLoginSubmit = async (data: LoginForm) => {
    try {
      await loginUser({
        email: data.useremail,
        password: data.userpassword,
      });
     
    } catch (err) {
      throw err;
    }
  };

  return (
    <Container>
      <div className="LoginPage">
        <AppHeader type="h1" headerText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                type="email"
                inputPlaceholder="Email адрес"
                {...field}
                isError={errors.useremail ? true : false}
                errorText={errors.useremail?.message}
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
          <Button
            isDisabled={!!Object.keys(errors).length}
            buttonText="Войти"
            className="button"
            type="submit"
          />
        </form>
        <Link to="/forgot-password">Забыли пароль?</Link>
        <RegistrationInfo />
      </div>
    </Container>
  );
};

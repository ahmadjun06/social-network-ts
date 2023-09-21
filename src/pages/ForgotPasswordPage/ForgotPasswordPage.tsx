import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import "./ForgotPasswordPage.scss";
import * as yup from "yup";
import { Container } from "../../components/Container/Container";
import { AppInput } from "../../components/AppInput/AppInput";
import { Header } from "../../components/UI/Header/Header";
import { AppHeader } from "../../components/AppHeader/AppHeader";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Button } from "../../components/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";

interface PhoneForm {
  userphone: string;
}

const phoneFormSchema = yup.object({
  userphone: yup.string().required("Обзятельное поле"),
});

export const ForgotPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PhoneForm>({
    resolver: yupResolver(phoneFormSchema),
    defaultValues: {
      userphone: "",
    },
  });

  const onPhoneSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container>
      <Header />
      <div className="password">
        <form onSubmit={handleSubmit(onPhoneSubmit)}>
          <AppHeader headerText="Забыли пароль?" type="h1" />
          <Paragraph text="Укажите свой номер телефона, чтобы получить код для сброса пароля." />
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
          <Button
            isDisabled={!!Object.keys(errors).length}
            type="submit"
            buttonText="Отправить"
            className="button"
          />
        </form>
      </div>
    </Container>
  );
};

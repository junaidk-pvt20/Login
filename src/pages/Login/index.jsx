import React, { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { useForm } from "react-hook-form";
import Field from "../../components/Field";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/login/services";
import Spinner from "../../components/Spinner";
import { Cookies } from "react-cookie";
import { COOKIES } from "../../utils/constants";
import { toast } from "react-hot-toast";
import { PATH } from "../../utils/pagePath";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let cookies = new Cookies();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });


  const onSubmit = async (data) => {
    const payload = {
      usr: data?.email,
      pwd: data?.password,
    };
    setLoading(true);
    try {
      const res = await loginUser(payload);
      if (res?.data?.message?.msg === "success") {
        cookies.set(COOKIES.ACCESS_TOKEN, res?.data?.message?.data?.access_token, {
          path: PATH.DEFAULT,
        });
        toast.success(" Login Successful !");
        navigate(PATH.USERS);
        setLoading(false);
        reset();
      } else {
        toast.error(res?.data?.message?.error);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className={styles.loginForm}>
        <p className={styles.header}>8848 Digital Task</p>
        <p className={styles.subHeader}>Let’s sign in your account</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <Field
            controller={{
              name: "email",
              control: control,
              render: ({ field }) => {
                return (
                  <Input
                    {...register("email", {
                      required: "Email is required.",
                      // pattern: {
                      //   value: EMAIL_REGEX,
                      //   message: "Invalid email format",
                      // },
                    })}
                    placeholder="user@example.com"
                    invalid={errors.email}
                    {...field}
                  />
                );
              },
            }}
            error={{
              errorMessage: errors?.email?.message,
            }}
            label={{
              label: "Email",
              isRequiredSign: true,
            }}
          />

          <Field
            controller={{
              name: "password",
              control: control,
              render: ({ field }) => {
                return (
                  <Input
                    {...register("password", {
                      required: "Password is required.",
                    })}
                    type="password"
                    placeholder="Password"
                    invalid={errors.password}
                    {...field}
                  />
                );
              },
            }}
            error={{
              errorMessage: errors?.password?.message,
            }}
            label={{
              label: "Password",
              isRequiredSign: true,
            }}
          />

          <Button type="submit" label="Login" className={styles.loginButton} />
        </form>
      </div>
    </>
  );
};

export default Index;

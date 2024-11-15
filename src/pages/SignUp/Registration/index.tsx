import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { SignUpData } from "../../../types/types";
import { passwordRules } from "../../../utils/validationRules";
import { InputComponent, ButtonComponent } from "../../../components";
import { useRegisterUser } from "../../../service/auth/auth.mutation"
import { successToast } from "../../../components/Toast";
import styles from "./index.module.scss";

const Index = () => {
  const form = Form.useForm()[0];

  const { mutate } = useRegisterUser();
  const navigate = useNavigate();
  function handleSignUp(data: SignUpData) {
    const {
      firstName,
      address = "Baki",
      birth_date = "2022-12-11",
      phone = "+9949999999",
      ...userData
    } = data;

    mutate(
      {
        address,
        birth_date,
        name: firstName,
        phone,
        ...userData,
      },
      {
        onSuccess: () => {
          successToast("Qeydiyyat uğurla başa çatdı zəhmət olmasa mail adresinizi və şifrənizi daxil edərək giriş edin !")
          navigate("/signIn"); 
        },
      }
    );
  }

  return (
    <Form layout="vertical" form={form} onFinish={handleSignUp}>
      <InputComponent
        name={"firstName"}
        placeholder={"First name"}
        style={{ width: "90%" }}
        required
        label="First name"
        message={
          <span className="error_message">First name field is required</span>
        }
      />
      {["surname", "email"].map((fieldName) => (
        <InputComponent
          key={fieldName}
          name={fieldName}
          label={fieldName === "surname" ? "Last name" : "Email"}
          placeholder={fieldName === "surname" ? "Last name" : "Email"}
          style={{ width: "90%" }}
          rules={
            fieldName !== "surname"
              ? [
                  {
                    type: "email",
                    message: (
                      <span className="error_message">
                        Please enter a valid email address
                      </span>
                    ),
                  },
                ]
              : []
          }
          required
          message={
            <span className="error_message">
              {fieldName === "surname"
                ? "Last name field is required"
                : "Email field is required"}
            </span>
          }
        />
      ))}
      {["password", "password_confirmation"].map((fieldName) => (
        <InputComponent
          key={fieldName}
          name={fieldName}
          label={fieldName === "password" ? "Password" : "Confirm Password"}
          type="password"
          placeholder={
            fieldName === "password" ? "Password" : "Confirm Password"
          }
          style={{ width: "90%" }}
          required
          rules={
            fieldName === "password_confirmation"
              ? [
                  {
                    validator(_, value) {
                      const password = form.getFieldValue("password");
                      if (!value) {
                        return Promise.reject(
                          <span className="error_message">
                            Confirm Password is required
                          </span>
                        );
                      }
                      if (value !== password) {
                        return Promise.reject(
                          <span className="error_message">
                            Passwords do not match
                          </span>
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]
              : passwordRules
          }
          message={
            <span className="error_message">
              {fieldName === "password" ? "Password field is required" : " "}
            </span>
          }
        />
      ))}
      <ButtonComponent
        text="Sign Up"
        style={{ width: "90%", padding: "1.5rem 1rem", marginTop: "1rem" }}
        htmlType="submit"
      />
      <div className={styles.signup}>
        <span className={styles.signup_info}>Already have an account?</span>{" "}
        <Link to={"/signIn"} className={styles.signup_redirect}>
          Sign in
        </Link>
      </div>
    </Form>
  );
};
export default Index;

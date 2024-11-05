import { Form } from "antd";
import { Link } from "react-router-dom";

import { InputComponent, ButtonComponent } from "../../../components";
import { passwordRules } from "../../../utils/validationRules";

import styles from "./index.module.scss";

const Index = () => {
  const form = Form.useForm()[0];
  return (
    <Form layout="vertical" form={form}>
      {["userName", "email"].map((fieldName) => (
        <InputComponent
          key={fieldName}
          name={fieldName}
          label={fieldName === "userName" ? "User name" : "Email"}
          placeholder={fieldName === "userName" ? "User name" : "Email"}
          style={{ width: "90%" }}
          rules={
            fieldName !== "userName"
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
              {fieldName === "userName"
                ? "User name field is required"
                : "Email field is required"}
            </span>
          }
        />
      ))}
      {["password", "confirmPassword"].map((fieldName) => (
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
            fieldName === "confirmPassword"
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

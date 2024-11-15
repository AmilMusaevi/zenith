import { Form } from "antd";
import { Link, useNavigate } from "react-router-dom";

import { SignInData } from "../../../types/types";
import { useLoginUser } from "../../../service/auth/auth.mutation";
import { InputComponent, ButtonComponent } from "../../../components";
import { Checkbox } from "antd";
import styles from "./index.module.scss";
import { setToken } from "../../../helpers/getToken";

const Index = () => {
  const form = Form.useForm()[0];
  const navigate = useNavigate();
  const { mutate } = useLoginUser();
  const handleLogin = (data: SignInData) => {
    const { rememberMe, ...loginData } = data;
    mutate(loginData, {
      onSuccess: (response) => {
        const token = response?.access_token;

        if (token) {
          setToken(token, rememberMe);
          navigate("/");
        }
      },
    });
  };

  return (
    <Form layout="vertical" form={form} onFinish={handleLogin}>
      {["email", "password"].map((fieldName) => (
        <InputComponent
          key={fieldName}
          name={fieldName}
          type={fieldName === "password" ? "password" : "default"}
          label={fieldName === "password" ? "Password" : "Email"}
          placeholder={fieldName === "password" ? "Password" : "Email"}
          style={{ width: "90%" }}
          required
          rules={
            fieldName === "email"
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
          message={
            <span className="error_message">
              {fieldName === "password"
                ? "Password field is required"
                : "Email field is required"}
            </span>
          }
        />
      ))}
      <Form.Item name="rememberMe" valuePropName="checked" initialValue={false}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <ButtonComponent
        text="Sign In"
        style={{ width: "90%", padding: "1.5rem 1rem", marginTop: "1rem" }}
        htmlType="submit"
      />
      <div className={styles.signIn}>
        <span className={styles.signIn_info}>Don't have an account yet?</span>{" "}
        <Link to={"/signUp"} className={styles.signIn_redirect}>
          Sign up
        </Link>
      </div>
    </Form>
  );
};
export default Index;

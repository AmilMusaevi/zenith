import { Form } from "antd";
import { Link } from "react-router-dom";

import { InputComponent, ButtonComponent } from "../../../components";

import styles from "./index.module.scss";

const Index = () => {
    const form = Form.useForm()[0];
    return (
        <Form layout="vertical" form={form}>
            {["email", "password"].map((fieldName) => (
                <InputComponent
                    key={fieldName}
                    name={fieldName}
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

import React, { ReactElement } from "react";
import { Form, Input } from "antd";
import styles from "../Input/index.module.scss";
import { Rule } from "antd/es/form";

type TInput = {
  label?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  message?: ReactElement | string;
  style?: React.CSSProperties;
  rules?: Rule[];
  type?: string;
};

const InputComponent: React.FC<TInput> = ({
  label,
  name,
  placeholder,
  required = false,
  message=" ",
  rules = [],
  type = "default",
  ...rest
}) => {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[
        {
          required,
          message: message || `${label} is required`,
        },
        ...rules,
      ]}
    >
      {type != "password" ? (
        <Input
          type={type}
          placeholder={placeholder}
          className={styles.input}
          {...rest}
        />
      ) : (
        <Input.Password
          type={type}
          placeholder={placeholder}
          className={styles.input}
          {...rest}
        />
      )}
    </Form.Item>
  );
};

export default InputComponent;

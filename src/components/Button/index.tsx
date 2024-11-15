import React from "react";

import { Button } from "antd";
import { Link } from "react-router-dom";

type TButton = {
  text?: string;
  loading?: boolean;
  size?: "large" | "middle" | "small";
  shape?: "default" | "circle" | "round";
  type?: "primary" | "dashed" | "link" | "text" | "default";
  htmlType?: "submit" | "reset" | undefined;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
  style?: React.CSSProperties;
};

const ButtonComponent: React.FC<TButton> = ({
  text = "Submit",
  loading = false,
  shape = "default",
  type = "primary",
  size = "middle",
  link,
  htmlType,
  ...rest
}) => {
  const button = (
    <Button
      htmlType={htmlType}
      loading={loading}
      type={type}
      size={size}
      shape={shape}
      {...rest}
    >
      {text}
    </Button>
  );

  return link ? <Link to={link}>{button}</Link> : button;
};

export default ButtonComponent;

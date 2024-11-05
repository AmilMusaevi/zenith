
import { Col, Row } from "antd";

import Login from "./Login"

import styles from "./index.module.scss";


const SignIn = () => {
  return (
    <>
      <Row
        gutter={[24, 24]}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100vh",
          padding: "2.5rem",
        }}
      >
        <Col span={12} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Row gutter={[24, 24]} style={{ width: "100%", maxWidth: "500px" }}>
            <Col span={24}>
              <div className={styles.signup_title}>
                <img src="../../../src/assets/zenithLogo.png" alt="logo" />
                <h3>Welcome back!</h3>
                <p>Please enter your credentials to sign in!</p>
              </div>
              <Login />
            </Col>
          </Row>
        </Col>
        <Col
          span={12}
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "520px",
          }}
        >
          <img
            src="../../../src/assets/auth-side-bg.png"
            alt="authSideBackGroundImg"
            style={{
              maxWidth: "100%",
              width: "100%",
              height: "auto",
              borderRadius: "1.5rem",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SignIn;

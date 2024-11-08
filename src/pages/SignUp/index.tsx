import { Col, Row } from "antd";

import Registration from "./Registration";

import styles from "./index.module.scss";

const SignUp = () => {
  return (
    <>
      <Row
        gutter={[24, 24]}
        style={{
          display: "flex",
          alignItems: "flex-start",
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
                <h3>Sign Up</h3>
                <p>And let's get started with your free trial</p>
              </div>
              <Registration />
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

export default SignUp;

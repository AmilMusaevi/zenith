
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
          justifyContent: "center",
          height: "100vh",
          padding: "2.5rem",
          margin:"0 "
        }}
      >
        <Col span={10}>
          <Row gutter={[24, 24]} style={{ width: "100%", maxWidth: "500px" }}>
            <Col span={24}>
              <div className={styles.signup_title}>
                <img src="../../../public/assets/zenithLogo.png" alt="logo" />
                <h3>Welcome back!</h3>
                <p>Please enter your credentials to sign in!</p>
              </div>
              <Login />
            </Col>
          </Row>
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "520px",
          }}
        >
          <img
          
            src="../../../public/assets/auth-side-bg.png"
            alt="authSideBackGroundImg"
            style={{
              maxWidth: "100%",
              width: "100%",
              height:"80vh",
              objectFit:"cover",
              borderRadius: "1.5rem",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default SignIn;

import React, { useEffect } from "react";
import styles from "./index.module.scss";
import initLogin from "./init.ts";
import { Input, Space, Button } from "antd";
// import RandomCode from "./identifyCodes.ts";
const Login = () => {
  useEffect(() => {
    initLogin();
    window.onresize = function () {
      initLogin();
    };
  }, []);
  return (
    <div className={styles.loginPage}>
      <canvas id="bg-canvas" styles={{ display: "block" }}></canvas>
      <div className={styles.loginBox}>
        <div className={styles.title}>
          <h1>kanson通用后台管理系统</h1>
          <p>202471</p>
        </div>
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: "flex" }}>
            <Input placeholder="用户名" />

            <Input.Password placeholder="密码" />
            <div className={styles.captchaBox}>
              <Input placeholder="验证码" />
              <canvas
                id="code-canvas"
                width="100"
                height="32"
                style={{ cursor: "pointer" }}
              ></canvas>
            </div>
            <Button type="primary" className="loginBtn" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
export default Login;

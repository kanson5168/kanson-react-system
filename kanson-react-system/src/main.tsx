import React from "react";
import ReactDOM from "react-dom/client";
// 样式初始化一般放前面
import "normalize.css";
// ui框架的样式

// 全局样式
import "./assets/styles/global.scss";
// 组件的样式
import App from "./App.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

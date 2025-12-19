import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Warm & Medical Palette
          colorPrimary: "#2a9d8f", // Teal: Calming, Medical, Friendly
          colorInfo: "#2a9d8f",
          colorSuccess: "#52c41a",
          colorWarning: "#faad14",
          colorError: "#e76f51", // Soft Terracotta red

          // Typography & Shapes
          fontFamily: "'Nunito', sans-serif",
          fontSize: 16, // Larger font for readability
          borderRadius: 16, // Very round corners (Friendly)
          borderRadiusLG: 24,

          // Backgrounds
          colorBgLayout: "#fdfbf7", // Warm Cream
          colorBgContainer: "#ffffff",
        },
        components: {
          Layout: {
            headerBg: "#ffffff", // White header instead of dark
            headerColor: "#2a9d8f",
            bodyBg: "#fdfbf7",
          },
          Menu: {
            itemColor: "#666",
            itemSelectedColor: "#2a9d8f",
            itemHoverColor: "#2a9d8f",
            horizontalItemSelectedColor: "#2a9d8f",
            activeBarHeight: 4,
          },
          Card: {
            boxShadowTertiary: "0 4px 12px rgba(0,0,0,0.03)", // Soft shadow
          },
          Button: {
            fontWeight: 600,
            controlHeightLG: 48,
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

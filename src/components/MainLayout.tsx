import React from "react";
import { Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  HomeOutlined,
  HeartOutlined,
  MedicineBoxOutlined,
  InfoCircleOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  SmileOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    { key: "/", icon: <HomeOutlined />, label: "Tổng quan" },
    { key: "/bieu-hien", icon: <InfoCircleOutlined />, label: "Biểu hiện" },
    { key: "/phan-loai", icon: <HeartOutlined />, label: "Phân loại" },
    { key: "/cach-chua-tri", icon: <MedicineBoxOutlined />, label: "Điều trị" },
    { key: "/song-chung", icon: <SmileOutlined />, label: "Sống chung" },
    {
      key: "/trac-nghiem",
      icon: <SafetyCertificateOutlined />,
      label: "Trắc nghiệm",
    },
    { key: "/dia-chi", icon: <EnvironmentOutlined />, label: "Địa chỉ" },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
          padding: "0 24px",
          background: "rgba(255, 255, 255, 0.95)", // Glassmorphism effect
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.06)", // Soft shadow
        }}
      >
        <div
          style={{
            color: "#2a9d8f", // Teal brand color
            fontWeight: 800,
            fontSize: "1.5rem",
            marginRight: "2rem",
            cursor: "pointer",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onClick={() => navigate("/")}
        >
          <HeartOutlined /> Lưỡng Cực
        </div>
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={(e) => navigate(e.key)}
          style={{
            flex: 1,
            minWidth: 0,
            background: "transparent",
            borderBottom: "none",
            fontWeight: 600,
          }}
        />
      </Header>

      <Content style={{ padding: "32px 24px" }}>
        {/* Container to limit width for better readability (Cozy feel) */}
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            minHeight: 380,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>

      <Footer
        style={{
          textAlign: "center",
          color: "#888",
          background: "transparent",
        }}
      >
        <SmileOutlined style={{ color: "#2a9d8f" }} /> Bipolar Info ©
        {new Date().getFullYear()} — Vì sức khỏe tâm thần cộng đồng.
      </Footer>
    </Layout>
  );
};

export default MainLayout;

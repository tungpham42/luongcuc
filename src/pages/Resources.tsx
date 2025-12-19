import React from "react";
import { Typography, Row, Col, Card, Tag, Button } from "antd";
import {
  PhoneFilled,
  EnvironmentFilled,
  GlobalOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

interface Hospital {
  id: string;
  name: string;
  address: string;
  phone: string;
  area: string;
  website: string; // Đã thêm trường website
}

const data: Hospital[] = [
  {
    id: "1",
    name: "Viện Sức khỏe Tâm thần - BV Bạch Mai",
    address: "78 Giải Phóng, Đống Đa, Hà Nội",
    phone: "024 3869 3731",
    area: "Hà Nội",
    website: "http://nimh.gov.vn/",
  },
  {
    id: "2",
    name: "BV Tâm thần Trung ương 1",
    address: "Hòa Bình, Thường Tín, Hà Nội",
    phone: "024 3385 3227",
    area: "Hà Nội",
    website: "http://bvtttw1.gov.vn/",
  },
  {
    id: "3",
    name: "Bệnh viện Tâm thần TP.HCM",
    address: "766 Võ Văn Kiệt, P.1, Q.5, TP.HCM",
    phone: "028 9234 675",
    area: "TP.HCM",
    website: "https://bvtt-tphcm.org.vn/",
  },
  {
    id: "4",
    name: "Đại học Y Dược TP.HCM",
    address: "215 Hồng Bàng, P.11, Q.5, TP.HCM",
    phone: "028 3855 4269",
    area: "TP.HCM",
    website: "https://bvdaihoc.com.vn/",
  },
];

const Resources: React.FC = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2}>Địa chỉ hỗ trợ uy tín</Title>
        <Paragraph>
          Các cơ sở y tế hàng đầu sẵn sàng lắng nghe và giúp đỡ bạn.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {data.map((item) => (
          <Col xs={24} sm={12} lg={12} key={item.id}>
            <Card
              className="hover-card"
              bordered={false}
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
              bodyStyle={{ flex: 1, display: "flex", flexDirection: "column" }}
              actions={[
                <Button
                  type="text"
                  icon={<PhoneFilled />}
                  style={{ color: "#2a9d8f" }}
                  href={`tel:${item.phone}`}
                >
                  Gọi điện
                </Button>,
                <Button
                  type="text"
                  icon={<GlobalOutlined />}
                  style={{ color: "#1890ff" }} // Màu xanh link chuẩn cho website
                  href={item.website}
                  target="_blank" // Mở tab mới
                >
                  Website
                </Button>,
              ]}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <Tag
                    color={item.area === "Hà Nội" ? "cyan" : "geekblue"}
                    style={{ borderRadius: 12 }}
                  >
                    {item.area}
                  </Tag>
                </div>
                <Title
                  level={4}
                  style={{ marginTop: 0, marginBottom: 12, color: "#264653" }}
                >
                  {item.name}
                </Title>
                <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
                  <EnvironmentFilled
                    style={{ color: "#e76f51", marginTop: 4 }}
                  />
                  <Text type="secondary">{item.address}</Text>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  <PhoneFilled style={{ color: "#2a9d8f", marginTop: 4 }} />
                  <Text strong>{item.phone}</Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Resources;

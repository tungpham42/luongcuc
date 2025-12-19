import React from "react";
import { Tabs, Typography, Card, Row, Col } from "antd";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  FireFilled,
  CloudFilled,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const maniaData = [
  "Cảm giác cực kỳ vui sướng hoặc cáu kỉnh vô cớ.",
  "Nói rất nhanh, suy nghĩ nhảy cóc trong đầu.",
  "Ngủ rất ít (2-3 tiếng) nhưng không thấy mệt.",
  "Tự tin thái quá, cảm thấy mình là người đặc biệt.",
  "Tiêu xài hoang phí hoặc lái xe mạo hiểm.",
  "Dễ bị phân tâm, chuyển nhanh từ việc này sang việc khác.",
];

const depressionData = [
  "Cảm giác buồn bã, trống rỗng kéo dài.",
  "Mất hứng thú với mọi sở thích cũ.",
  "Ăn quá nhiều hoặc chán ăn bất thường.",
  "Mệt mỏi triền miên, không muốn bước xuống giường.",
  "Suy nghĩ tiêu cực về bản thân hoặc sự sống.",
  "Giảm khả năng tư duy, khó tập trung.",
];

const Symptoms: React.FC = () => {
  const items = [
    {
      key: "1",
      label: (
        <span style={{ fontSize: 16 }}>
          <FireFilled style={{ color: "#e76f51" }} /> Giai đoạn Hưng cảm
        </span>
      ),
      children: (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div
              style={{
                background: "#fff2f0",
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
              }}
            >
              <Paragraph style={{ marginBottom: 0, color: "#cf1322" }}>
                <b>Trạng thái năng lượng cao:</b> Người bệnh giống như một chiếc
                xe mất phanh, lao đi rất nhanh nhưng thiếu kiểm soát.
              </Paragraph>
            </div>
          </Col>
          {maniaData.map((item, idx) => (
            <Col xs={24} sm={12} key={idx}>
              <Card
                size="small"
                bordered={false}
                style={{
                  background: "white",
                  borderLeft: "4px solid #e76f51",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <ArrowUpOutlined style={{ color: "#e76f51", marginRight: 8 }} />{" "}
                {item}
              </Card>
            </Col>
          ))}
        </Row>
      ),
    },
    {
      key: "2",
      label: (
        <span style={{ fontSize: 16 }}>
          <CloudFilled style={{ color: "#457b9d" }} /> Giai đoạn Trầm cảm
        </span>
      ),
      children: (
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <div
              style={{
                background: "#f0f5ff",
                padding: 20,
                borderRadius: 16,
                marginBottom: 16,
              }}
            >
              <Paragraph style={{ marginBottom: 0, color: "#1d39c4" }}>
                <b>Trạng thái năng lượng thấp:</b> Thế giới trở nên xám xịt,
                chậm chạp và nặng nề.
              </Paragraph>
            </div>
          </Col>
          {depressionData.map((item, idx) => (
            <Col xs={24} sm={12} key={idx}>
              <Card
                size="small"
                bordered={false}
                style={{
                  background: "white",
                  borderLeft: "4px solid #457b9d",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                }}
              >
                <ArrowDownOutlined
                  style={{ color: "#457b9d", marginRight: 8 }}
                />{" "}
                {item}
              </Card>
            </Col>
          ))}
        </Row>
      ),
    },
  ];

  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <Title level={2} style={{ color: "#264653" }}>
          Biểu hiện lâm sàng
        </Title>
        <Paragraph>
          Các triệu chứng thay đổi tùy thuộc vào "cực" cảm xúc mà bạn đang trải
          qua.
        </Paragraph>
      </div>

      <Card
        bordered={false}
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
      >
        <Tabs
          defaultActiveKey="1"
          items={items}
          size="large"
          centered
          tabBarStyle={{ marginBottom: 32 }}
        />
      </Card>
    </div>
  );
};

export default Symptoms;

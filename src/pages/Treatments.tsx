import React from "react";
import { Steps, Typography, Card } from "antd";
import {
  MedicineBoxFilled,
  CommentOutlined,
  CoffeeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Treatments: React.FC = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2}>Lộ trình điều trị</Title>
        <Paragraph>
          Điều trị là một hành trình dài hạn, nhưng bạn sẽ thấy khỏe hơn từng
          ngày.
        </Paragraph>
      </div>

      <Card bordered={false} style={{ padding: 24 }}>
        <Steps
          direction="vertical"
          current={-1}
          items={[
            {
              title: (
                <Title level={4} style={{ margin: 0, color: "#2a9d8f" }}>
                  1. Dùng thuốc (Medication)
                </Title>
              ),
              icon: (
                <div
                  style={{
                    background: "#2a9d8f",
                    color: "white",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(42, 157, 143, 0.4)",
                  }}
                >
                  <MedicineBoxFilled />
                </div>
              ),
              description: (
                <Paragraph style={{ color: "#666", marginTop: 8 }}>
                  Đây là nền tảng quan trọng nhất. Bác sĩ thường kê toa thuốc ổn
                  định khí sắc (Mood stabilizers), thuốc chống loạn thần hoặc
                  thuốc chống trầm cảm để cân bằng hóa chất trong não bộ.
                </Paragraph>
              ),
            },
            {
              title: (
                <Title level={4} style={{ margin: 0, color: "#e9c46a" }}>
                  2. Liệu pháp tâm lý
                </Title>
              ),
              icon: (
                <div
                  style={{
                    background: "#e9c46a",
                    color: "white",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(233, 196, 106, 0.4)",
                  }}
                >
                  <CommentOutlined />
                </div>
              ),
              description: (
                <Paragraph style={{ color: "#666", marginTop: 8 }}>
                  Liệu pháp hành vi nhận thức (CBT) giúp bạn nhận diện sớm các
                  dấu hiệu tái phát và học cách xử lý các tình huống căng thẳng
                  trong cuộc sống.
                </Paragraph>
              ),
            },
            {
              title: (
                <Title level={4} style={{ margin: 0, color: "#e76f51" }}>
                  3. Lối sống lành mạnh
                </Title>
              ),
              icon: (
                <div
                  style={{
                    background: "#e76f51",
                    color: "white",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(231, 111, 81, 0.4)",
                  }}
                >
                  <CoffeeOutlined />
                </div>
              ),
              description: (
                <Paragraph style={{ color: "#666", marginTop: 8 }}>
                  Giữ lịch ngủ nghiêm ngặt, tập thể dục thường xuyên và nói
                  không với chất kích thích. Một lối sống kỷ luật là liều thuốc
                  tự nhiên tốt nhất.
                </Paragraph>
              ),
            },
            {
              title: (
                <Title level={4} style={{ margin: 0, color: "#264653" }}>
                  4. Mạng lưới hỗ trợ
                </Title>
              ),
              icon: (
                <div
                  style={{
                    background: "#264653",
                    color: "white",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 10px rgba(38, 70, 83, 0.4)",
                  }}
                >
                  <TeamOutlined />
                </div>
              ),
              description: (
                <Paragraph style={{ color: "#666", marginTop: 8 }}>
                  Đừng đi một mình. Hãy chia sẻ với gia đình, bạn bè tin cậy
                  hoặc tham gia các nhóm hỗ trợ cộng đồng.
                </Paragraph>
              ),
            },
          ]}
        />
      </Card>
    </div>
  );
};

export default Treatments;

import React, { useState } from "react";
import {
  Typography,
  Form,
  Checkbox,
  Button,
  Card,
  Modal,
  Alert,
  Row,
  Col,
} from "antd";
import {
  SafetyCertificateFilled,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const questions = [
  "Bạn có cảm thấy hưng phấn tột độ, hoặc dễ cáu gắt bất thường?",
  "Bạn cảm thấy tự tin quá mức vào năng lực bản thân?",
  "Bạn ngủ ít hơn hẳn (ví dụ 3 tiếng) nhưng không thấy mệt?",
  "Bạn nói nhanh và nói nhiều đến mức người khác không xen vào được?",
  "Suy nghĩ trong đầu bạn chạy rất nhanh, nhảy từ ý này sang ý khác?",
  "Bạn rất dễ bị phân tâm bởi mọi thứ xung quanh?",
  "Bạn tiêu tiền hoang phí hoặc tham gia các hoạt động mạo hiểm?",
  "Nhu cầu tình dục của bạn tăng cao đột biến?",
];

const SelfTest: React.FC = () => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);

  const onFinish = (values: any) => {
    // values sẽ trả về dạng { q0: true, q1: undefined, q2: false... }
    // Chỉ đếm những value thực sự bằng true
    const yesCount = Object.values(values).filter((v) => v === true).length;
    setScore(yesCount);
    setIsModalOpen(true);
  };

  return (
    <div style={{ maxWidth: 800, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <Title level={2} style={{ color: "#2a9d8f" }}>
          <SafetyCertificateFilled /> Trắc nghiệm MDQ
        </Title>
        <Paragraph>
          Hãy trả lời trung thực về cảm giác của bạn trong thời gian gần đây.
        </Paragraph>
      </div>

      <Alert
        message="Lưu ý"
        description="Kết quả này chỉ mang tính chất tham khảo, không thay thế chẩn đoán y khoa."
        type="info"
        showIcon
        style={{
          marginBottom: 24,
          borderRadius: 12,
          border: "none",
          background: "#e6f7ff",
        }}
      />

      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={[16, 16]}>
          {questions.map((q, index) => (
            <Col span={24} key={index}>
              {/* Dùng thẻ label bao quanh Card để bấm vào đâu cũng ăn checkbox */}
              <label style={{ cursor: "pointer", display: "block" }}>
                <Card
                  hoverable
                  bodyStyle={{
                    padding: 16,
                    display: "flex",
                    alignItems: "center",
                  }}
                  style={{ borderRadius: 12, border: "1px solid #f0f0f0" }}
                >
                  <Form.Item
                    name={`q${index}`}
                    valuePropName="checked"
                    noStyle // Quan trọng: Loại bỏ padding/margin mặc định của Form.Item
                  >
                    <Checkbox
                      style={{ transform: "scale(1.2)", marginRight: 16 }}
                    />
                  </Form.Item>
                  <span style={{ fontSize: 16, color: "#4a4a4a", flex: 1 }}>
                    {q}
                  </span>
                </Card>
              </label>
            </Col>
          ))}
        </Row>

        <Form.Item style={{ marginTop: 32, textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            shape="round"
            style={{ height: 50, padding: "0 40px", fontSize: 18 }}
          >
            Xem kết quả ngay
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title={null}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button
            key="back"
            type="primary"
            shape="round"
            onClick={() => setIsModalOpen(false)}
          >
            Đã hiểu
          </Button>,
        ]}
        centered
        width={400}
      >
        <div style={{ textAlign: "center", padding: 20 }}>
          {score >= 5 ? (
            <div style={{ color: "#e76f51" }}>
              <SafetyCertificateFilled
                style={{ fontSize: 60, marginBottom: 16, color: "#e76f51" }}
              />
              <Title level={3} style={{ color: "#e76f51", margin: 0 }}>
                Nguy cơ cao ({score}/{questions.length})
              </Title>
              <Paragraph style={{ fontSize: 16, marginTop: 16 }}>
                Bạn có khá nhiều dấu hiệu liên quan đến hưng cảm. Đừng lo lắng,
                hãy đến gặp bác sĩ tâm thần để được trò chuyện và chẩn đoán
                chính xác.
              </Paragraph>
            </div>
          ) : (
            <div style={{ color: "#2a9d8f" }}>
              <CheckCircleOutlined
                style={{ fontSize: 60, marginBottom: 16, color: "#2a9d8f" }}
              />
              <Title level={3} style={{ color: "#2a9d8f", margin: 0 }}>
                Nguy cơ thấp ({score}/{questions.length})
              </Title>
              <Paragraph style={{ fontSize: 16, marginTop: 16 }}>
                Hiện tại bạn ít có biểu hiện điển hình. Tuy nhiên, hãy luôn lắng
                nghe cảm xúc của bản thân và tìm kiếm sự giúp đỡ khi cần.
              </Paragraph>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SelfTest;

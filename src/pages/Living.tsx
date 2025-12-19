import React from "react";
import { Typography, Row, Col, Card, Timeline, Collapse } from "antd";
import {
  ClockCircleOutlined,
  SmileOutlined,
  ThunderboltOutlined,
  CoffeeOutlined,
  ReadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Living: React.FC = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2}>Sống chung & Hạnh phúc</Title>
        <Paragraph style={{ fontSize: 16 }}>
          Bệnh không định nghĩa con người bạn. Với lối sống kỷ luật và tích cực,
          bạn hoàn toàn có thể cân bằng cảm xúc.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <ReadOutlined /> Lời khuyên hữu ích
              </>
            }
            bordered={false}
            className="hover-card"
            style={{ height: "100%", background: "#fff" }}
          >
            <Collapse
              accordion
              defaultActiveKey={["1"]}
              ghost // Removes borders for a cleaner look
              items={[
                {
                  key: "1",
                  label: (
                    <span style={{ fontWeight: 600 }}>
                      Quy tắc giấc ngủ (Sleep Hygiene)
                    </span>
                  ),
                  children:
                    "Giấc ngủ là yếu tố quan trọng nhất. Thiếu ngủ là tác nhân số 1 gây ra cơn hưng cảm. Hãy đi ngủ và thức dậy cùng một giờ mỗi ngày, kể cả cuối tuần.",
                },
                {
                  key: "2",
                  label: (
                    <span style={{ fontWeight: 600 }}>
                      Theo dõi tâm trạng (Mood Charting)
                    </span>
                  ),
                  children:
                    "Sử dụng ứng dụng hoặc sổ tay để ghi lại cảm xúc hàng ngày. Điều này giúp bác sĩ điều chỉnh thuốc và giúp bạn nhận ra các dấu hiệu cảnh báo sớm.",
                },
                {
                  key: "3",
                  label: (
                    <span style={{ fontWeight: 600 }}>
                      Kiểm soát căng thẳng
                    </span>
                  ),
                  children:
                    "Stress là kẻ thù. Hãy học các kỹ thuật thư giãn, thiền, hoặc đơn giản là biết từ chối bớt công việc khi cảm thấy quá tải.",
                },
              ]}
            />
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card
            title={
              <>
                <ClockCircleOutlined /> Lịch trình mẫu ổn định
              </>
            }
            bordered={false}
            className="hover-card"
          >
            <Timeline
              mode="left"
              items={[
                {
                  color: "#faad14", // Yellow Sun
                  children: (
                    <>
                      <b style={{ color: "#faad14" }}>07:00</b> - Thức dậy, đón
                      ánh nắng mặt trời.
                    </>
                  ),
                },
                {
                  color: "#2a9d8f", // Teal
                  children: "07:30 - Uống thuốc buổi sáng (nếu có).",
                },
                {
                  color: "gray",
                  dot: <CoffeeOutlined />,
                  children: "08:00 - Làm việc/Học tập (tránh stress).",
                },
                {
                  color: "#e76f51", // Energy Red
                  dot: <ThunderboltOutlined />,
                  children: (
                    <>
                      <b style={{ color: "#e76f51" }}>17:30</b> - Tập thể dục
                      (Gym, chạy bộ, yoga).
                    </>
                  ),
                },
                {
                  color: "#722ed1", // Relax Purple
                  children: "21:00 - Tắt thiết bị điện tử, thư giãn.",
                },
                {
                  color: "#1d39c4", // Sleep Blue
                  dot: <ClockCircleOutlined />,
                  children: (
                    <>
                      <b style={{ color: "#1d39c4" }}>22:30</b> - Đi ngủ (ngủ đủ
                      7-8 tiếng).
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
      </Row>

      <Card
        style={{
          marginTop: 24,
          background: "#fffbe6",
          border: "1px solid #ffe58f",
        }}
      >
        <Title level={4} style={{ color: "#d48806" }}>
          <SmileOutlined /> Dành cho người thân
        </Title>
        <ul style={{ paddingLeft: 20, color: "#666" }}>
          <li style={{ marginBottom: 8 }}>
            Hãy kiên nhẫn: Người bệnh không cố ý gây ra các hành vi khó chịu.
          </li>
          <li style={{ marginBottom: 8 }}>
            Học cách nhận biết dấu hiệu: Nếu thấy họ ngủ ít đi hoặc nói quá
            nhiều, hãy nhắc nhở nhẹ nhàng.
          </li>
          <li>Đừng tranh luận khi họ đang trong cơn hưng cảm.</li>
        </ul>
      </Card>
    </div>
  );
};

export default Living;

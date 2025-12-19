import React from "react";
import { Collapse, Typography, Tag, Card } from "antd";
import type { CollapseProps } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <span style={{ fontWeight: 700, fontSize: 16, color: "#e76f51" }}>
        Rối loạn lưỡng cực I (Bipolar I)
      </span>
    ),
    children: (
      <div style={{ padding: "0 12px" }}>
        <Tag
          color="red"
          style={{ padding: "4px 12px", borderRadius: 20, marginBottom: 12 }}
        >
          Nghiêm trọng nhất
        </Tag>
        <Paragraph>
          Đây là dạng cổ điển nhất. Bạn có ít nhất một giai đoạn{" "}
          <b>Hưng cảm (Mania)</b> kéo dài trên 7 ngày hoặc nghiêm trọng đến mức
          cần nhập viện. Các giai đoạn trầm cảm cũng thường xảy ra xen kẽ.
        </Paragraph>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <span style={{ fontWeight: 700, fontSize: 16, color: "#e9c46a" }}>
        Rối loạn lưỡng cực II (Bipolar II)
      </span>
    ),
    children: (
      <div style={{ padding: "0 12px" }}>
        <Tag
          color="gold"
          style={{ padding: "4px 12px", borderRadius: 20, marginBottom: 12 }}
        >
          Phổ biến
        </Tag>
        <Paragraph>
          Bạn trải qua các giai đoạn trầm cảm và <b>Hưng cảm nhẹ (Hypomania)</b>
          . Hypomania nhẹ hơn Mania, bạn vẫn có thể làm việc nhưng cảm thấy rất
          khác lạ. Bạn chưa bao giờ có hưng cảm "toàn phát".
        </Paragraph>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <span style={{ fontWeight: 700, fontSize: 16, color: "#2a9d8f" }}>
        Rối loạn khí sắc chu kỳ (Cyclothymia)
      </span>
    ),
    children: (
      <div style={{ padding: "0 12px" }}>
        <Tag
          color="cyan"
          style={{ padding: "4px 12px", borderRadius: 20, marginBottom: 12 }}
        >
          Mãn tính nhẹ
        </Tag>
        <Paragraph>
          Cảm xúc của bạn lên xuống thất thường kéo dài ít nhất 2 năm, nhưng
          cường độ không đủ mạnh để chẩn đoán là Bipolar I hay II. Tuy nhiên, nó
          vẫn gây khó chịu đáng kể.
        </Paragraph>
      </div>
    ),
  },
];

const Types: React.FC = () => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <Title level={2}>Phân loại hội chứng</Title>
        <Paragraph style={{ maxWidth: 600, margin: "0 auto" }}>
          Việc xác định đúng loại là chìa khóa để bác sĩ đưa ra phác đồ điều trị
          chính xác nhất cho bạn.
        </Paragraph>
      </div>

      <Card bordered={false} className="hover-card">
        <Collapse
          items={items}
          defaultActiveKey={["1"]}
          accordion
          ghost
          expandIconPosition="end"
          size="large"
        />
        <div
          style={{
            marginTop: 24,
            padding: 16,
            background: "#e6f7ff",
            borderRadius: 12,
            display: "flex",
            gap: 12,
          }}
        >
          <InfoCircleOutlined style={{ fontSize: 20, color: "#1890ff" }} />
          <Text type="secondary">
            Lưu ý: Chỉ có bác sĩ chuyên khoa mới có thể chẩn đoán chính xác loại
            rối loạn bạn mắc phải.
          </Text>
        </div>
      </Card>
    </div>
  );
};

export default Types;

import React from "react";
import { Form, Input, InputNumber, Select, DatePicker, Button, Card, Typography } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;
const { Option } = Select;

interface ExpenseFormValues {
  date: moment.Moment;
  description: string;
  category: string;
  amount: number;
}

const categories = ["Yiyecek", "Faturalar", "Eğlence", "Ulaşım", "Sağlık", "Diğer"];

const AddEditExpense: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: ExpenseFormValues) => {
    const expenseData = {
      ...values,
      date: values.date.format("YYYY-MM-DD"),
    };
    console.log("Gönderilen Harcama:", expenseData);
    // TODO: API veya state işlemi yapılacak
  };

  return (
    <Card style={{ maxWidth: 500, margin: "auto", marginTop: 30 }}>
      <Title level={3} style={{ textAlign: "center" }}>
       Harcama Ekle / Düzenle
      </Title>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          date: dayjs(),
          category: "Yiyecek",
          amount: 0,
          description: "",
        }}
      >
        <Form.Item
          label="Tarih"
          name="date"
          rules={[{ required: true, message: "Lütfen tarih seçiniz" }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Açıklama"
          name="description"
          rules={[{ required: true, message: "Lütfen açıklama giriniz" }]}
        >
          <Input placeholder="Örn: Market alışverişi" />
        </Form.Item>

        <Form.Item
          label="Kategori"
          name="category"
          rules={[{ required: true, message: "Lütfen kategori seçiniz" }]}
        >
          <Select>
            {categories.map((cat) => (
              <Option value={cat} key={cat}>
                {cat}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Tutar (₺)"
          name="amount"
          rules={[
            { required: true, message: "Lütfen tutar giriniz" },
            {
              type: "number",
              min: 0.01,
              message: "Tutar sıfırdan büyük olmalı",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            min={0.01}
            step={0.01}
            placeholder="Örn: 125.50"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddEditExpense;

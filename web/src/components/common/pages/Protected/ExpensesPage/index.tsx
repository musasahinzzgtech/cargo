import React, { useState } from "react";
import { Card, Table, Typography, Button, Space, Modal, Row, Col } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  WalletOutlined,
  CreditCardOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { PROTECTED_ROUTES } from "constants/routes/protectedRoutes";

const { Title, Text } = Typography;
const { confirm } = Modal;

interface Expense {
  key: string;
  date: string;
  description: string;
  category: string;
  amount: number;
}
const initialExpenses: Expense[] = [
  {
    key: "1",
    date: "2025-07-01",
    description: "Market Alışverişi",
    category: "Yiyecek",
    amount: 120.5,
  },
  {
    key: "2",
    date: "2025-07-03",
    description: "İnternet Faturası",
    category: "Faturalar",
    amount: 45,
  },
  {
    key: "3",
    date: "2025-07-05",
    description: "Sinema Bileti",
    category: "Eğlence",
    amount: 30,
  },
];


const ExpensesPage: React.FC = () => {
  const navigate = useNavigate();
  const [balance] = useState(1000);
  const [creditLimit] = useState(500);
  const [spent] = useState(350);
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
 const cardData = [
    {
      title: "Mevcut Bakiye",
      value: balance,
      icon: <WalletOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
      color: "#e6f7ff",
    },
    {
      title: "Kredi Limiti",
      value: creditLimit,
      icon: <CreditCardOutlined style={{ fontSize: 32, color: "#52c41a" }} />,
      color: "#f6ffed",
    },
    {
      title: "Toplam Harcama",
      value: spent,
      icon: <BarChartOutlined style={{ fontSize: 32, color: "#faad14" }} />,
      color: "#fff7e6",
    },
  ];
  const showDeleteConfirm = (key: string) => {
    confirm({
      title: "Bu harcamayı silmek istediğinize emin misiniz?",
      icon: <ExclamationCircleOutlined />,
      okText: "Evet",
      okType: "danger",
      cancelText: "Hayır",
      onOk() {
        setExpenses((prev) => prev.filter((expense) => expense.key !== key));
      },
    });
  };
  const handleEdit = (key: string) => {
    // Your edit logic here (e.g. open modal with expense info)
    alert(`Edit expense with key: ${key}`);
  };

  const columns = [
    {
      title: "Tarih",
      dataIndex: "date",
      key: "date",
      sorter: (a: Expense, b: Expense) =>
        new Date(a.date).getTime() - new Date(b.date).getTime(),
    },
    {
      title: "Açıklama",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
      filters: [
        { text: "Yiyecek", value: "Yiyecek" },
        { text: "Faturalar", value: "Faturalar" },
        { text: "Eğlence", value: "Eğlence" },
      ],
      onFilter: (value: string, record: Expense) =>
        record.category.indexOf(value) === 0,
    },
    {
      title: "Tutar (₺)",
      dataIndex: "amount",
      key: "amount",
      sorter: (a: Expense, b: Expense) => a.amount - b.amount,
      render: (amount: number) => <Text>{amount.toFixed(2)} ₺</Text>,
    },
    {
      title: "İşlemler",
      key: "actions",
      render: (_: any, record: Expense) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)}
          />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(record.key)}
          />
        </Space>
      ),
    },
  ];

return (
    <div style={{ margin: "auto", padding: "20px", maxWidth: 1000 }}>
      <Row gutter={16} style={{ marginBottom: 20 }}>
        {cardData.map(({ title, value, icon, color }) => (
          <Col xs={24} sm={8} key={title}>
            <Card
              style={{
                textAlign: "center",
                backgroundColor: color,
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
              hoverable
            >
              <div style={{ marginBottom: 12 }}>{icon}</div>
              <Title level={4}>{title}</Title>
              <Text strong style={{ fontSize: 24 }}>
                {value.toFixed(2)} ₺
              </Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Row justify="end" style={{ marginBottom: 12, marginTop: 56 }}>
        <Col>
          <Button onClick={() => navigate(PROTECTED_ROUTES.createExpense)}>
            Harcama Ekle
          </Button>
        </Col>
      </Row>

      <Table
        columns={columns as any}
        dataSource={expenses}
        pagination={{ pageSize: 5 }}
        style={{ height: "100%" }}
      />
    </div>
  );
};

export default ExpensesPage;

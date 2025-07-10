import {
  Button,
  Form,
  message,
  Input,
  DatePicker,
  Select,
  Row,
  Col,
  Result,
} from "antd";
import React, { useState } from "react";
import Styled from "./Content.styled";
import { loginPathname } from "constants/routes/publicRoutes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUserAsync } from "store/auth/asyncActions";
import { unwrapResult } from "@reduxjs/toolkit";
import dayjs from "dayjs";

const { Option } = Select;
const { TextArea } = Input;

const Content = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const payload = {
        ...values,
        birthday: dayjs(values.birthday).format("YYYY-MM-DD"),
        address: {
          street: values.street,
          city: values.city,
          state: values.state,
          postalCode: values.postalCode,
          country: values.country,
          fullAdress: values.fullAdress,
        },
      };

      const resultAction = await dispatch(registerUserAsync(payload));
      unwrapResult(resultAction);
      setSuccess(true);
    } catch (error) {
      message.error("Kayıt başarısız oldu.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <Styled.ContentWrapper>
        <Result
          status="success"
          title="Kayıt Başarılı!"
          subTitle="Kısa süre içinde giriş sayfasına yönlendirileceksiniz."
          extra={[
            <Button type="primary" key="login" onClick={() => navigate(loginPathname)}>
              Girişe Git
            </Button>,
          ]}
        />
      </Styled.ContentWrapper>
    );
  }

  return (
    <Styled.ContentWrapper>
      <Form layout="vertical" form={form} autoComplete="off" onFinish={onFinish}>
        {/* Genel Bilgiler */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Ad"
              name="name"
              rules={[{ required: true, message: "Lütfen adınızı girin!" }]}
            >
              <Input placeholder="Ad" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Soyad"
              name="surname"
              rules={[{ required: true, message: "Lütfen soyadınızı girin!" }]}
            >
              <Input placeholder="Soyad" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="E-posta"
              name="email"
              rules={[
                { required: true, message: "Lütfen e-posta adresinizi girin!" },
                { type: "email", message: "Geçerli bir e-posta girin!" },
              ]}
            >
              <Input placeholder="E-posta" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Doğum Tarihi"
              name="birthday"
              rules={[{ required: true, message: "Lütfen doğum tarihinizi seçin!" }]}
            >
              <DatePicker format="DD/MM/YYYY" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Cinsiyet"
              name="gender"
              rules={[{ required: true, message: "Lütfen cinsiyet seçin!" }]}
            >
              <Select placeholder="Cinsiyet seçin">
                <Option value="male">Erkek</Option>
                <Option value="female">Kadın</Option>
                <Option value="other">Diğer</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Telefon Numarası"
              name="phoneNumber"
              rules={[{ required: true, message: "Lütfen telefon numaranızı girin!" }]}
            >
              <Input placeholder="Telefon Numarası" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Şifre"
              name="password"
              rules={[{ required: true, message: "Lütfen şifre girin!" }]}
            >
              <Input.Password placeholder="Şifre" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Kullanıcı Türü"
              name="userType"
              rules={[{ required: true, message: "Lütfen kullanıcı türü seçin!" }]}
            >
              <Select placeholder="Kullanıcı türü seçin">
                <Option value="BUSINESS">İşletme</Option>
                <Option value="STANDART">Standart</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Adres Bilgileri */}
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Cadde / Sokak"
              name="street"
              rules={[{ required: true, message: "Lütfen cadde/sokak girin!" }]}
            >
              <Input placeholder="Cadde / Sokak" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Şehir"
              name="city"
              rules={[{ required: true, message: "Lütfen şehir girin!" }]}
            >
              <Input placeholder="Şehir" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="İlçe / Semt"
              name="state"
              rules={[{ required: true, message: "Lütfen ilçe/semt girin!" }]}
            >
              <Input placeholder="İlçe / Semt" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Posta Kodu"
              name="postalCode"
              rules={[{ required: true, message: "Lütfen posta kodu girin!" }]}
            >
              <Input placeholder="Posta Kodu" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Ülke"
              name="country"
              rules={[{ required: true, message: "Lütfen ülke girin!" }]}
            >
              <Input placeholder="Ülke" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Tam Adres"
              name="fullAdress"
              rules={[{ required: true, message: "Lütfen tam adresi girin!" }]}
            >
              <TextArea rows={4} placeholder="Tam Adres" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Kayıt Ol
          </Button>
        </Form.Item>
      </Form>
    </Styled.ContentWrapper>
  );
};

export default Content;

import React from "react";
import { MenuProps } from "antd";
import { PieChartOutlined, SearchOutlined } from "@ant-design/icons";
import {
  homePathname,
  searchPathname,
} from "constants/routes/protectedRoutes";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem("Ana Sayfa", homePathname, <PieChartOutlined />),
  getItem("Arama", searchPathname, <SearchOutlined />),

  // getItem("Harcamalar", expensesPathname, <ContainerOutlined />),
  // getItem("Practices", "practices", <RobotOutlined />, [
  //   getItem("Quiz", quizPathname),
  //   getItem("Algorithms", algorithmsPathname),
  // ]),
  // getItem("Job Offers", jobOffersPathname, <FireOutlined />),
  // getItem("Learning", learningPathname, <BookOutlined />),
];

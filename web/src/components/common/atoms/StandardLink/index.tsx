import { Typography } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const StandardLink = ({
  pathname,
  value,
}: {
  pathname: string;
  value: string;
}) => {
  const navigate = useNavigate();
  return (
    <Typography.Link onClick={() => navigate(pathname)}>
      {value}
    </Typography.Link>
  );
};

export default StandardLink;

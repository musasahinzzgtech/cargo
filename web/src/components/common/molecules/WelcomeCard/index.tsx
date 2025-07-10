import { Button, Card } from "antd";
import React from "react";

const WelcomeCard = () => {
  return (
    <Card
      bordered={false}
      style={{ backgroundColor: "rgba(22, 119, 255, 0.1)" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <div style={{ flex: "1.5", display: "grid", gap: "3rem" }}>
          <div style={{ display: "grid", gap: "1rem" }}>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                lineHeight: "1.5",
              }}
            >
              Welcome back 👋 Musa Şahin Kundakcı
            </div>
            <div>
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything.
            </div>
          </div>

          <Button type="primary" style={{ width: "fit-content" }}>
            Start Improve
          </Button>
        </div>
        <div style={{ flex: "1", display: "flex", justifyContent: "flex-end" }}>
          <img
            src="/assets/person-standing.png"
            alt="person-standing"
            style={{ width: "10rem", objectFit: "contain" }}
          />
        </div>
      </div>
    </Card>
  );
};

export default WelcomeCard;

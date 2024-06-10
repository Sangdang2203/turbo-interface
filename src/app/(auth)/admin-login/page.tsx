"use client";

import { Tabs, Tab, Container } from "@mui/material";
import AdminLoginForm from "./AdminLoginForm";
import React from "react";

export default function LoginPage() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Tabs
        value={value}
        onChange={handleChange}
        centered>
        <Tab label="Đăng nhập tài khoản" />
      </Tabs>

      {value === 0 && <AdminLoginForm />}
    </Container>
  );
}

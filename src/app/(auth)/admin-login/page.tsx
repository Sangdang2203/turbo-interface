"use client";

import { Tabs, Tab, Container } from "@mui/material";
import { useSession } from "next-auth/react";
import AdminLoginForm from "./AdminLoginForm";
import React from "react";

export default function LoginPage() {
  const [value, setValue] = React.useState(0);
  const { data: session } = useSession();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container className="my-[13%]">
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

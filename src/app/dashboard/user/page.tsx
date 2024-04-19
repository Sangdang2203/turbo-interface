"use client";


import React from "react";
import { Box, Paper, Tab, Tabs } from "@mui/material";
import { useSession } from "next-auth/react";
import EmployeeInfoPage from "./EmployeeInfo";

export default function EmployeeInfo() {
  const [value, setValue] = React.useState(0);
  const { data: session } = useSession();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper
        sx={{
          maxWidth: { xs: 320, sm: 480, lg: 1024 },
          bgcolor: "background.paper",
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          className="flex justify-center">
          <Tab
            value={0}
            label="Informations"
            className="p-2 font-semibold"
          />
        </Tabs>
        {value === 0 && <EmployeeInfoPage />}
      </Paper>
    </>
  );
}

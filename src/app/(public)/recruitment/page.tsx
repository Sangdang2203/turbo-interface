"use client";

import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import * as React from "react";
import JobRequirement from "./jobs/JobRequirement";
import Internship from "./intern/Internship";
import EmployeeTreatment from "./treatment/EmployeeTreatment";

// export const metadata = () => {
//   return {
//     title: "Recruitment"
//   }
// }

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const RecruitmentPage = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab className="ml-4" label="Cơ hội nghề nghiệp" {...a11yProps(0)} />
            <Tab className="ml-4" label="Thực tập sinh" {...a11yProps(1)} />
            <Tab className="ml-4" label="Đãi ngộ nhân viên" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <JobRequirement />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Internship />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <EmployeeTreatment />
        </CustomTabPanel>
      </Box>
    </Container>
  )
}

export default RecruitmentPage;
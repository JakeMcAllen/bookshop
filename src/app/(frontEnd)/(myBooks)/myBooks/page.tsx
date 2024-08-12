"use client";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import Add_book from "../../../../../pages/Book_management/Add_book";
import Modify_book from "../../../../../pages/Book_management/modify_book";
import Delete_book from "../../../../../pages/Book_management/delete_book";



function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function MyBooks() {

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
    <>
      <Typography variant="h2"> My books management </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="ADD" {...a11yProps(0)} />
          <Tab label="Modify" {...a11yProps(1)} />
          <Tab label="Delete" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Add_book />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Modify_book />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Delete_book />
      </CustomTabPanel>
    </>
  );
}


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
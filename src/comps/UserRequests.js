import React from "react";
import { Box, Card, Paper, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import AllRequest from "./AllRequest";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import PendingRequest from "./PendingRequest";
import SuccessRequest from "./SuccessRequest";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import PendingIcon from "@mui/icons-material/Pending";
import FavoriteIcon from "@mui/icons-material/Favorite";
const UserRequests = () => {
  const [value, setValue] = React.useState("1");

  const tabFields = [
    {
      label: "All",
      value: "1",
      component: <AllRequest />,
      icon: <AllInboxIcon />,
    },
    {
      label: "pending",
      value: "2",
      component: <PendingRequest />,
      icon: <PendingIcon />,
    },
    {
      label: "success",
      value: "3",
      component: <SuccessRequest />,
      icon: <FavoriteIcon />,
    },
  ];

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabFields.map((tab) => {
              return (
                <Tab
                  icon={tab.icon}
                  iconPosition="end"
                  value={tab.value}
                  label={tab.label}
                  sx={{
                    textTransform: "capitalize",
                    padding: "0 20px",
                    color: "text.secondary",
                    letterSpacing: "1px",
                    fontWeight: "bold",
                  }}
                ></Tab>
              );
            })}
          </TabList>
        </Box>
        <Box>
          {tabFields.map((tab) => {
            return (
              <TabPanel value={tab.value} sx={{ background: "whitesmoke" }}>
                {tab.component}
              </TabPanel>
            );
          })}
        </Box>
      </TabContext>
    </Box>
  );
};

export default UserRequests;

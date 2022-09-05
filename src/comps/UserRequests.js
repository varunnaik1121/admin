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
import { useEffect, useState } from "react";
import TimeAgo from "javascript-time-ago";

// English.
import en from "javascript-time-ago/locale/en";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";

const UserRequests = () => {
  const [value, setValue] = React.useState("1");
  const [requests, setRequests] = useState(null);
  const [loading, setLoading] = useState(false);

  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");

  useEffect(() => {
    setLoading(true);
    // const getDataFromFirebase = async (path) => {
    //   const collectionRef = collection(db, path);
    //   getDocs(collectionRef)
    //     .then((data) =>
    //       setRequests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    //     )
    //     .then(() => setLoading(false))
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // getDataFromFirebase("requests");
    const collectionRef = collection(db, "requests");

    const unsub = onSnapshot(collectionRef, (snapshot) => {
      setRequests(
        snapshot.docs.map((doc) => {
          let data = doc.data();
          let time = timeAgo.format(data.timestamp.seconds * 1000);
          return { ...doc.data(), id: doc.id, time };
        })
      );
      setLoading(false);
    });

    return () => unsub();
  }, []);
  console.log(requests);

  const tabFields = [
    {
      label: "All",
      value: "1",
      component: <AllRequest requests={requests} loading={loading} />,
      icon: <AllInboxIcon />,
    },
    {
      label: "pending",
      value: "2",
      component: <PendingRequest requests={requests} loading={loading} />,
      icon: <PendingIcon />,
    },
    {
      label: "success",
      value: "3",
      component: <SuccessRequest requests={requests} loading={loading} />,
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
            {tabFields.map((tab, key) => {
              return (
                <Tab
                  key={key}
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
          {tabFields.map((tab, key) => {
            return (
              <TabPanel
                key={key}
                value={tab.value}
                sx={{
                  width: "auto",
                  padding: {
                    xs: "0 !important",
                  },
                }}
              >
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

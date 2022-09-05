import { Container, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import UserRequests from "./UserRequests";
import { getRequestFromFirebase } from "../services/firebase";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import Loading from "../Loading/Loading";
const Feed = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        flexGrow: 1,

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MailOutlineIcon color="primary" fontSize="medium" />
        <Typography
          variant="subtitle1"
          sx={{
            color: "text.primary",
            fontWeight: "bold",
            padding: "30px 5px 30px 5px",
            textAlign: "left",
            letterSpacing: "1px",
          }}
        >
          Company Requests
        </Typography>
      </Box>
      <UserRequests />
    </Container>
  );
};

export default Feed;

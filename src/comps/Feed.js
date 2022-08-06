import { Container, Typography, Box } from "@mui/material";
import React from "react";
import UserRequests from "./UserRequests";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
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

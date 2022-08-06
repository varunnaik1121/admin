import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { Skeleton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Cards = ({ companyName, profileUrl, time }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <Card
        sx={{
          maxWidth: 350,
          minWidth: {
            xs: "100%",
            md: "450px",
          },
          maxWidth: {
            xs: "400px",
            sm: "450px",
          },
          margin: "10px 25px 15px 5px",
          cursor: "pointer",
        }}
      >
        <CardHeader
          avatar={
            loading ? (
              <Skeleton variant="circular" width={50} height={50} />
            ) : (
              <Avatar sx={{ backgroundColor: "black" }}>{profileUrl}</Avatar>
            )
          }
          title={
            loading ? (
              <Skeleton
                variant="rectangular"
                width={130}
                height={10}
                sx={{ borderRadius: "4px" }}
              />
            ) : (
              <Typography
                variant="subtitle1"
                fontSize={16}
                sx={{ maxWidth: "70%" }}
                fontWeight={600}
              >
                {companyName}
              </Typography>
            )
          }
          subheader={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {loading ? (
                <Skeleton
                  variant="rectangular"
                  width={"85%"}
                  height={10}
                  sx={{ marginTop: "10px" }}
                />
              ) : (
                <>
                  <Typography
                    variant="subtitle2"
                    fontWeight={300}
                    fontSize={12}
                  >
                    {time}{" "}
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={
                      <FiberManualRecordIcon fontSize="small" color="success" />
                    }
                    disableFocusRipple
                    disableTouchRipple
                    disableRipple
                    sx={{
                      textTransform: "capitalize",
                      margin: "0 5px",
                      fontWeight: 500,
                      fontSize: "12px",
                    }}
                    color="success"
                  >
                    pending
                  </Button>
                </>
              )}
            </Box>
          }
          action={
            <Box sx={{ display: "flex", marginTop: "10px" }}>
              {loading ? (
                <Skeleton
                  width={40}
                  height={40}
                  variant="circular"
                  sx={{ marginRight: 2 }}
                />
              ) : (
                <Tooltip title="reject">
                  <IconButton
                    sx={{
                      backgroundColor: "#FF3131",
                      color: "#fff",
                      marginRight: "10px",
                      boxShadow: "2px 2px 4px rgba(0,0,0,.1)",
                    }}
                    disableRipple
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {loading ? (
                <Skeleton width={40} height={40} variant="circular" />
              ) : (
                <Tooltip title="accept">
                  <IconButton
                    sx={{
                      backgroundColor: "#03c04a",
                      color: "#fff",
                      margin: "0 4px",
                    }}
                    disableRipple
                  >
                    <DoneIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          }
        />
      </Card>
    </Box>
  );
};

export default Cards;

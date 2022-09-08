import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  IconButton,
  Tooltip,
  Typography,
  Button,
  Link,
} from "@mui/material";
import { Avatar } from "@mui/material";

import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { Skeleton } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../services/firebase";
import ModalOpen from "./ModalOpen";

const CardComp = ({
  requests,
  loading,
  index,
  profileUrl,
  time,
  status,
  companyName,
  id,
  companyId,
}) => {
  const [openAcceptModal, setOpenAcceptModal] = React.useState(false);
  const handleAcceptModalOpen = () => setOpenAcceptModal(true);
  const handleAcceptModalClose = () => setOpenAcceptModal(false);
  const [tempLoading, setTempLoading] = useState(false);
  const [openDeclineModal, setOpenDeclineModal] = React.useState(false);
  const handleDeclineModalOpen = () => setOpenDeclineModal(true);
  const handleDeclineModalClose = () => setOpenDeclineModal(false);

  // Create formatter (English).

  console.log({ requests });
  const addVerifiedCompany = async (index) => {
    setTempLoading(true);
    try {
      const currentDocId = requests[index].id;
      const collectionRef = collection(db, "companies");
      const docRef = doc(db, "requests", currentDocId);
      const payload = { ...requests[index], status: "success" };
      await addDoc(collectionRef, payload);
      await updateDoc(docRef, { ...payload, status: "success" });
      await addDoc(collection(db, "verifiedCompanies"), { companyId });
      setTempLoading(false);
      handleAcceptModalClose();
    } catch (err) {
      setTempLoading(true);
      console.log(err);
    }
  };

  const deleteCompany = async (index) => {
    setTempLoading(true);
    try {
      const currentDocId = requests[index].id;
      const payload = { ...requests[index], status: "rejected" };
      const docRef = doc(db, "requests", currentDocId);
      await updateDoc(docRef, payload);
      setTempLoading(false);
      handleDeclineModalClose();
    } catch (err) {
      setTempLoading(true);
      console.log(err);
    }
  };

  return (
    <Card
      sx={{
        minWidth: {
          xs: "100%",
          md: "450px",
        },
        maxWidth: {
          xs: "400px",
          sm: "450px",
        },
        margin: "10px 25px 15px 5px",
      }}
    >
      <CardHeader
        avatar={
          loading ? (
            <Skeleton variant="circular" width={50} height={50} />
          ) : (
            <Avatar sx={{ backgroundColor: "black" }}>
              {companyName.charAt(0).toUpperCase()}
            </Avatar>
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
            <Link
              href={`/company/${id}`}
              underline="hover"
              sx={{ color: "text.primary" }}
            >
              <Typography
                variant="subtitle1"
                fontSize={16}
                sx={{ maxWidth: "70%" }}
                fontWeight={600}
              >
                {companyName}
              </Typography>
            </Link>
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
                <Typography variant="subtitle2" fontWeight={500} fontSize={12}>
                  {time}{" "}
                </Typography>
                <Button
                  variant="text"
                  endIcon={
                    <FiberManualRecordIcon
                      fontSize="small"
                      color={status === "success" ? "success" : "error"}
                    />
                  }
                  disableFocusRipple
                  disableTouchRipple
                  disableRipple
                  sx={{
                    textTransform: "capitalize",
                    margin: "0 5px",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                  color={status === "success" ? "success" : "error"}
                >
                  {status}
                </Button>
              </>
            )}
          </Box>
        }
        action={
          status == "success" ? (
            <IconButton sx={{ margin: "10px", fontWeight: "500" }}>
              <Box
                fontWeight={500}
                fontSize="15px"
                sx={{
                  letterSpacing: "1px",
                  color: status === "success" ? "#03c04a" : "#FF3131",
                }}
              >
                Accepted
              </Box>
            </IconButton>
          ) : (
            <>
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
                      onClick={handleDeclineModalOpen}
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
                      onClick={handleAcceptModalOpen}
                    >
                      <DoneIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <ModalOpen
                open={openAcceptModal}
                text={"accept"}
                index={index}
                subText={
                  "accepting the request allows a company to stat posting their jobs."
                }
                heading={"Are you sure you want to accept the request of "}
                companyName={companyName}
                onClick={addVerifiedCompany}
                close={handleAcceptModalClose}
                loading={tempLoading}
              />
              <ModalOpen
                open={openDeclineModal}
                text={"reject"}
                index={index}
                subText={
                  "rejecting the request will cause the temporary delete of company request."
                }
                heading={"Are you sure you want to reject the request of "}
                companyName={companyName}
                onClick={deleteCompany}
                close={handleDeclineModalClose}
                loading={tempLoading}
              />
            </>
          )
        }
      />
    </Card>
  );
};

export default CardComp;

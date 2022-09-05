import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { Box, Typography, Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Loading from "../Loading/Loading";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "80%",
    md: "450px",
  },

  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  boxShadow: 24,
  p: 4,
};

const ModalOpen = ({
  open,
  onClick,
  close,
  text,
  heading,
  loading,
  companyName,
  index,
  subText,
}) => {
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              {heading}
              <Typography
                variant="h6"
                component={"span"}
                sx={{
                  color: "text.primary",
                  fontWeight: "bold",
                }}
              >
                {companyName}?
              </Typography>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ m: 3, fontSize: "14px", color: "text.secondary" }}
            >
              {subText}
            </Typography>
            <Box>
              <Button
                sx={{ textTransform: "capitalize", m: "0 12px" }}
                variant="outlined"
                onClick={close}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                disabled={loading}
                variant="outlined"
                onClick={() => onClick(index)}
                sx={{
                  ":hover": {
                    background: text === "accept" ? "#03c04a" : "#FF3131",
                    color: "#fff",
                  },
                  textTransform: "capitalize",
                }}
              >
                {loading ? "loading..." : text}
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ModalOpen;

import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import SingleComp from "./Card";

const SuccessRequest = ({ requests, loading }) => {
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    const filterPendingRequests = () => {
      const filteredRequests = requests?.filter(
        (request) => request.status === "success"
      );
      setSuccess(filteredRequests);
    };
    filterPendingRequests();
  }, []);

  console.log({ requests });

  if (loading) {
    <div>
      <>
        <SingleComp loading={loading} />
        <SingleComp loading={loading} />
      </>
    </div>;
  }
  return (
    <div>
      <Box sx={{ padding: "20px" }}>
        <Typography sx={{ fontWeight: 500 }}>
          {success.length} pending requests found
        </Typography>
      </Box>
      {success?.map((request, key) => {
        return (
          <SingleComp
            companyName={request.name}
            status={request.status}
            time={request.time}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default SuccessRequest;

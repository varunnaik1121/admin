import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import SingleComp from "../comps/Card";
const PendingRequest = ({ requests, loading }) => {
  const [pendings, setPendings] = useState(null);
  useEffect(() => {
    const filterPendingRequests = () => {
      const filteredRequests = requests?.filter(
        (request) => request.status === "pending"
      );
      setPendings(filteredRequests);
    };
    filterPendingRequests();
  }, []);
  if (pendings?.length === 0) {
    return <Box sx={{ padding: "20px" }}>0 pending requests found</Box>;
  }

  return (
    <Box>
      {pendings?.map((request, key) => {
        return (
          <SingleComp
            companyName={request.name}
            status={request.status}
            time={request.time}
            key={key}
          />
        );
      })}
    </Box>
  );
};

export default PendingRequest;

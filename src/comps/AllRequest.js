import React, { useEffect, useState } from "react";
import { Box, Card, Typography } from "@mui/material";
import SingleCard from "./Card";

const AllRequest = ({ requests, loading }) => {
  if (requests && requests.length === 0) {
    return (
      <Box sx={{ border: "1px solid red" }}>
        <Typography variant="subtitle1">No requests found</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {loading ? (
        <>
          <SingleCard loading={loading} />
          <SingleCard loading={loading} />
          <SingleCard loading={loading} />
          <SingleCard loading={loading} />
        </>
      ) : (
        <>
          {requests &&
            requests.map((request, key) => {
              return (
                <SingleCard
                  requests={requests}
                  loading={loading}
                  index={key}
                  companyName={request.name}
                  status={request.status}
                  time={request.time}
                  profileUrl={"V"}
                  key={key}
                  id={request.id}
                  companyId={request?.companyId}
                />
              );
            })}
        </>
      )}
    </Box>
  );
};

export default AllRequest;

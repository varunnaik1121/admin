import React from "react";
import {
  CardHeader,
  Typography,
  Link,
  IconButton,
  Skeleton,
} from "@mui/material";

const CardHeaderComp = ({
  title,
  subTitle,
  link,
  titleVariant,
  fontWeight,
  icon,
  loading,
}) => {
  return (
    <>
      <CardHeader
        sx={{ margin: 0, padding: "10px 20px" }}
        title={
          loading ? (
            <Skeleton variant="text" width={"80%"} height={25} />
          ) : (
            <Typography variant={titleVariant} fontWeight={fontWeight}>
              {title}
              <IconButton
                color="default"
                size="small"
                sx={{ padding: "0 10px" }}
              >
                {icon}
              </IconButton>
            </Typography>
          )
        }
        subheader={
          loading ? (
            <Skeleton variant="text" width={"60%"} height={25} />
          ) : link ? (
            <Link
              href={subTitle}
              underline="hover"
              target={"_blank"}
              sx={{ fontSize: "14px", fontWeight: "bold", padding: "0" }}
            >
              {subTitle}
            </Link>
          ) : (
            <Typography paragraph fontSize={14} color="text.secondary">
              {subTitle}
            </Typography>
          )
        }
      ></CardHeader>
    </>
  );
};

export default CardHeaderComp;

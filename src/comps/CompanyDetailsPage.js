import {
  Container,
  Card,
  CardHeader,
  Avatar,
  Typography,
  Box,
  IconButton,
  ImageList,
  ImageListItem,
  Skeleton,
} from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CardHeaderComp from "./CardHeaderComp";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";
import CoffeeIcon from "@mui/icons-material/Coffee";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import WorkIcon from "@mui/icons-material/Work";

import { useState } from "react";

import { Button } from "@mui/material";
import { collection, updateDoc, addDoc } from "firebase/firestore";
const CompanyDetailsPage = () => {
  const { id } = useParams();
  const [companyDetails, setCompanyDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    name,
    about,
    benefits,
    specialities,
    images,
    companyProfile,
    type,
    headquatar,
    industry,
    website,
    status,
  } = companyDetails;

  useEffect(() => {
    setLoading(true);
    const getCompanyData = async (id) => {
      const docRef = doc(db, "requests", id);
      const data = await getDoc(docRef).then((data) => data.data());
      setCompanyDetails(data);
      setLoading(false);
    };
    getCompanyData(id);
  }, []);
  console.log(companyDetails);

  // const addVerifiedCompany = async (index) => {
  //   setLoading(true);
  //   try {
  //     const currentDocId = id;
  //     const collectionRef = collection(db, "companies");
  //     const docRef = doc(db, "requests", currentDocId);
  //     const payload = { ...companyDetails, status: "success" };
  //     await addDoc(collectionRef, payload);
  //     await updateDoc(docRef, { ...payload, status: "success" });
  //     setLoading(false);
  //     window.location.reload();
  //   } catch (err) {
  //     setLoading(false);
  //     console.log(err);
  //   }
  // };

  return (
    <Container maxWidth="md" sx={{ padding: "30px 20px" }}>
      <Typography
        variant="h4"
        textAlign={"center"}
        color="text.primary"
        paddingBottom={2}
        fontWeight={500}
      >
        Company{" "}
        <Typography
          variant="h4"
          component={"span"}
          color="primary"
          fontWeight={500}
        >
          Details
        </Typography>
      </Typography>

      <Card>
        <CardHeader
          avatar={
            loading ? (
              <Skeleton variant="circular" width={50} height={50} />
            ) : (
              <Avatar
                sx={{ bgcolor: "white", height: "50px", width: "50px" }}
                src={companyProfile}
              ></Avatar>
            )
          }
          title={
            loading ? (
              <Skeleton variant="text" width={180} height={20} />
            ) : (
              <Typography
                variant="h5"
                fontWeight={500}
                textTransform="capitalize"
              >
                {name}
              </Typography>
            )
          }
          subheader={
            loading ? (
              <Skeleton variant="text" width={250} height={20} />
            ) : (
              `${industry}. ${headquatar}`
            )
          }
        ></CardHeader>
      </Card>
      <Card sx={{ marginTop: "15px", paddingBottom: "20px" }}>
        <CardHeaderComp
          title={"Overview"}
          subTitle={about}
          titleVariant={"h6"}
          fontWeight={600}
          icon={<DescriptionIcon />}
          loading={loading}
        />

        <CardHeaderComp
          title={"website link"}
          subTitle={website}
          titleVariant={"subtitle1"}
          fontWeight={600}
          link
          icon={<LinkIcon />}
          loading={loading}
        />
        <CardHeaderComp
          title={"industry"}
          subTitle={industry}
          titleVariant={"subtitle1"}
          fontWeight={600}
          icon={<ApartmentIcon />}
          loading={loading}
        />
        <CardHeaderComp
          title={"headquatars"}
          subTitle={headquatar}
          titleVariant={"subtitle1"}
          fontWeight={600}
          icon={<LocationOnIcon />}
          loading={loading}
        />
        <CardHeaderComp
          title={"specialities"}
          subTitle={specialities}
          titleVariant={"subtitle1"}
          fontWeight={600}
          icon={<AlignVerticalBottomIcon />}
          loading={loading}
        />
        <CardHeaderComp
          title={"benefits"}
          subTitle={benefits}
          titleVariant={"subtitle1"}
          fontWeight={600}
          icon={<CoffeeIcon />}
          loading={loading}
        />
        <CardHeaderComp
          title={"work type"}
          subTitle={type}
          titleVariant={"subtitle1"}
          fontWeight={600}
          icon={<WorkIcon />}
          loading={loading}
        />
        {loading ? (
          <Skeleton
            variant="text"
            width={200}
            height={20}
            sx={{ m: "10px" }}
          ></Skeleton>
        ) : (
          <Typography fontWeight={"bold"} sx={{ padding: "0 20px" }}>
            life at {name}
          </Typography>
        )}
        <ImageList
          cols={3}
          rowHeight={120}
          sx={{ padding: "20px 30px", width: "100%" }}
        >
          {images?.map((image, i) => {
            return (
              <ImageListItem key={i}>
                <img
                  src={`${image}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={"image"}
                  loading="lazy"
                  style={{ width: "100px", height: "100px" }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>

        <IconButton></IconButton>
        {status === "pending" ? (
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Button variant="outlined" sx={{ margin: "0 10px" }} color="error">
              Decline
            </Button>
            <Button variant="outlined" color="success">
              Accept
            </Button>
          </Box>
        ) : (
          <Typography textAlign="center" fontWeight="bold" color="green">
            Verified
          </Typography>
        )}
      </Card>
    </Container>
  );
};

export default CompanyDetailsPage;

import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
  Box,
  Grid,
  Typography,
  Avatar,
} from "@material-ui/core";
import moment from "moment";

import axios from "axios";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { TiCancel } from "react-icons/ti";
import { FiPercent } from "react-icons/fi";
import Topbar from "./Topbar";



const useStyles = makeStyles({
  main: {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: "#1b2531",
  },
  head: {
    // display: "flex",
    //  justifyContent: "center",
  },
  subhead: {
    width: "100%",
    border: "1px solid #283046",
    borderRadius: "5px",
    backgroundColor: "#283046",
    marginTop: "27px",
  },
  table: {
    color: "#d6d7dc",
  },
  data: {
    color: "#b4bed2",
  },
  submain: {
    minHeight: "238px",
    backgroundColor: "#283046",
    marginTop:"30px"
  },
  num: {
    color: "white",
    fontSize: "20px",
    fontWeight: "600",
  },
  txt: {
    color: "white",
    fontSize: "12px",
    fontWeight: "400",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:"30px"
  },
  avtar:{
    backgroundColor: "white", 
    color: "black" ,
    marginRight:"12px"
  }
});

// const url="https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01";

const Tables = () => {
  const [Data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios({
        url: "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-06-01&todate=2022-07-01",
      }).then((result) => {
        if (result.status === 200) {
          // console.log("hkhkhkhhkk====>",result?.data?.data);
          setData(result?.data?.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const classes = useStyles();

  return (
    
    <Box className={classes.main}>
      <Topbar/>
      <Box className={classes.submain}>
        <Grid container spacing={1}>
          <Grid item xs={6} sm={4} md={4} className={classes.grid}>
            <Box>
              <Box style={{ display: "flex" }}>
                <Avatar className={classes.avtar}>
                  <FiDownload />
                </Avatar>
                <Box>
                  <Typography className={classes.num}>3154</Typography>
                  <Typography className={classes.txt}>App Installs</Typography>
                </Box>
              </Box>

              <Box style={{ marginTop: "60px" }}>
              <Box style={{ display: "flex" }}>
                <Avatar className={classes.avtar}>
                  <TiCancel />
                </Avatar>
                <Box>
                  <Typography className={classes.num}>2010</Typography>
                  <Typography className={classes.txt}>App Un-Unistalled</Typography>
                </Box>
              </Box>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4} className={classes.grid}>
            <Box>
              <Box style={{ display: "flex" }}>
                <Avatar className={classes.avtar}>
                  <FiDownload />
                </Avatar>
                <Box>
                  <Typography className={classes.num}>900</Typography>
                  <Typography className={classes.txt}>Active Installs</Typography>
                </Box>
              </Box>
              <Box style={{ marginTop: "60px" }}>
              <Box style={{ display: "flex" }}>
                <Avatar className={classes.avtar}>
                  <AiOutlineUser />
                </Avatar>
                <Box>
                  <Typography className={classes.num}>840</Typography>
                  <Typography className={classes.txt}>Alive App Usera</Typography>
                </Box>
              </Box>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={4} md={4} className={classes.grid}>
            <Box>
              <Box style={{ display: "flex" }}>
                <Avatar className={classes.avtar}>
                  <FiPercent />
                </Avatar>
                <Box>
                  <Typography className={classes.num}>14.85%</Typography>
                  <Typography className={classes.txt}>Churn Rate</Typography>
                </Box>
              </Box>
              <Box style={{ marginTop: "60px" }}>
              <Box style={{ display: "flex" }}>
                <Avatar className={classes.avtar}>
                  <FiPercent />
                </Avatar>
                <Box>
                  <Typography className={classes.num}>14.85%</Typography>
                  <Typography className={classes.txt}>Alive churn Rate</Typography>
                </Box>
              </Box>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <TableContainer className={classes.head}>
        <Table className={classes.subhead}>
          <TableHead style={{ backgroundColor: "#283046" }}>
            <TableRow>
              <TableCell className={classes.table} align="center">
                Date
              </TableCell>
              <TableCell className={classes.table} align="center">
                Day installs
              </TableCell>
              <TableCell className={classes.table} align="center">
                Platform
              </TableCell>
              <TableCell className={classes.table} align="center">
                Day_Uninstalls
              </TableCell>
              <TableCell className={classes.table} align="center">
                Platform
              </TableCell>
              <TableCell className={classes.table} align="center">
                Churn Rate
              </TableCell>
              <TableCell className={classes.table} align="center">
                Churn Platform
              </TableCell>
            </TableRow>
          </TableHead>

          {Data.map((val) => {
            console.log("dasdsad====sjhfshf>", val);
            return (
              <TableBody>
                <TableRow>
                  <TableCell className={classes.data} align="center">
                    {val?.created_At.slice(0, 10)}
                  </TableCell>
                  {/* <TableCell align="center">{val?.created_At.moment().format(" DD MM YYYY")}</TableCell> */}
                  <TableCell className={classes.data} align="center">
                    {val?.totalinstall}
                  </TableCell>
                  <TableCell className={classes.data} align="center">
                    <AiFillAndroid style={{ marginRight: "2px" }} />
                    {val?.android_install} <br />{" "}
                    <AiFillApple style={{ marginRight: "2px" }} />
                    {val?.ios_install}{" "}
                  </TableCell>
                  <TableCell className={classes.data} align="center">
                    {val?.android_uninstall}
                  </TableCell>
                  <TableCell className={classes.data} align="center">
                    <AiFillAndroid />
                    {val?.android_uninstall} <br />{" "}
                    <AiFillApple style={{ textAlign: "center" }} />
                    {val?.ios_uninstall}
                  </TableCell>
                  <TableCell className={classes.data} align="center">
                    {val?.totalchurn}%
                  </TableCell>
                  <TableCell className={classes.data} align="center">
                    <AiFillAndroid />
                    {val?.android_churn}
                    <br /> <AiFillApple style={{ marginRight: "2px" }} />
                    {val?.ios_churn}
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          })}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Tables;

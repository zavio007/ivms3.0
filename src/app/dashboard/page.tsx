"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./dashbaord.module.scss";
import LayoutDash from "../../components/LayoutDash/page";
import { Box, Card } from "@mui/material";
import Image from "next/image";
import SimpleLineChart from "@/components/LineChartDash/page";

const Dashboard = () => {
  let videoSrc = "http://80.13.46.193:2503/mjpg/video.mjpg";
  return (
    <div>
      <LayoutDash>
        <>
          <Grid container spacing={3} p={2}>
            <Grid item lg={6} xs={12}>
              <Card>
                <div className={styles.dFlex}>
                  <Image
                    src={videoSrc}
                    alt=""
                    width={500}
                    height={300}
                    unoptimized={true}
                  />
                  <Image
                    src={videoSrc}
                    alt=""
                    width={500}
                    height={300}
                    unoptimized={true}
                  />
                  <Image
                    src={videoSrc}
                    alt=""
                    width={500}
                    height={300}
                    unoptimized={true}
                  />
                  <Image
                    src={videoSrc}
                    alt=""
                    width={500}
                    height={300}
                    unoptimized={true}
                  />
                </div>
              </Card>
              {/* Dashboard Widgets */}
            </Grid>

            <Grid item xs={12} lg={6} spacing={2}>
              <Card sx={{ height: "48%", width: "99%" }}>
                <SimpleLineChart />
              </Card>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Card sx={{ marginTop: "2%", height: "50%", width: "49%" }}>
                  <div className={styles.contentBar}>
                    <h3> Analytics: </h3>
                    <ul>
                      <li> No of people</li>
                      <li> No of Male</li>
                      <li> No of Female</li>
                    </ul>
                  </div>
                </Card>
                <Card sx={{ marginTop: "2%", height: "50%", width: "49%" }}>
                  <div className={styles.contentBar}>
                    <h3> Open Alert: </h3>
                    <ul>
                      <li>
                        <span className={styles.warning}></span> ALert One
                      </li>
                      <li>
                        <span className={styles.danger}></span> ALert One
                      </li>
                      <li>
                        <span className={styles.sucess}></span> ALert One
                      </li>
                    </ul>
                  </div>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </>
      </LayoutDash>
    </div>
  );
};

export default Dashboard;

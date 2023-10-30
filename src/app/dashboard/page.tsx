"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./dashbaord.module.scss";
import LayoutDash from "../../components/LayoutDash/page";
import { Box, Card, Typography } from "@mui/material";
import Image from "next/image";
import SimpleLineChart from "@/components/LineChartDash/page";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import Groups2Icon from "@mui/icons-material/Groups2";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import MissedVideoCallIcon from "@mui/icons-material/MissedVideoCall";
import TableDash from "@/components/TableDash/page";
import { CardHeader } from "@mui/material";

const Dashboard = () => {
  let videoSrc = "https://webcam.sparkassenplatz.info/cgi-bin/faststream.jpg";
  const shadowStyle = {
    borderRadius: "10px",
    paddinf: "2rem",
    background: "#e0e0e0",
    boxShadow: " 20px 20px 60px #bebebe,  -20px -20px 60px #ffffff",
  };

  return (
    <div>
      <LayoutDash>
        <>
          <Grid container spacing={3} p={2}>
            <Grid item lg={6} xs={12}>
              <Card style={shadowStyle}>
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
              <Card sx={{ height: "48%", width: "99%" }} style={shadowStyle}>
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
                <Card
                  sx={{ marginTop: "1%", height: "50%", width: "49%" }}
                  style={shadowStyle}
                >
                  <div className={styles.anomaliesCard}>
                    <h3> Anomalies: </h3>

                    <ul>
                      <li>
                        <span className={styles.color}>
                          <PrivacyTipIcon />
                        </span>
                        10 Securities Unvavailable
                      </li>
                      <li>
                        <span className={styles.shine}>
                          <Groups2Icon />
                        </span>
                        10 Crowding Detected
                      </li>
                      <li>
                        <span className={styles.rotate}>
                          <MissedVideoCallIcon />
                        </span>
                        10 Crowding Detected
                      </li>
                      <li>
                        <span className={styles.spin}>
                          <EmergencyRecordingIcon />
                        </span>
                        10 Crowding Detected
                      </li>
                    </ul>
                  </div>
                </Card>

                <Card
                  sx={{ marginTop: "1%", height: "50%", width: "49%" }}
                  style={shadowStyle}
                >
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
                        <span className={styles.black}></span> ALert One
                      </li>
                    </ul>
                  </div>
                </Card>
              </Box>
            </Grid>
          </Grid>
          <Grid item lg={12}>
            <Card
              sx={{ margin: "1rem", height: "50%", width: "98%" }}
              style={shadowStyle}
            >
              <Typography
                sx={{ padding: "1rem", background: "#fff", fontWeight: "700" }}
              >
                {" "}
                Anomaly List{" "}
              </Typography>
              <TableDash />
            </Card>
          </Grid>
        </>
      </LayoutDash>
    </div>
  );
};

export default Dashboard;

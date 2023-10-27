"use client";
import React, { useState } from "react";
import Container from "@mui/material/Container";
import styles from "./settings.module.scss";
import LayoutDash from "../../components/LayoutDash/page";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopCircleIcon from "@mui/icons-material/StopCircle";

import { log } from "console";
import ModalMui from "@/components/ModalMui/page";
import WebSocketComponent from "@/components/WebSocketComponent/page";

const Settings = () => {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary,/
  }));

  const [start, setStart] = useState(false);
  const startFn = () => {
    setStart(!start);
  };
  console.log(start);
 

  return (
    <div>
      <LayoutDash>
        <Container>
          <Grid container spacing={3} sx={{ flexGrow: 1 }}>
            {/* Dashboard Widgets */}
            <Grid xs={12} sm={6} md={4}>
              <Link href="/settings/addcamera">
                <Button variant="outlined">Add camera</Button>
              </Link>
            </Grid>
            <Grid xs={12} lg={12}>
              <div className={styles.gridOne}>
                <div className={styles.listItem}>
                  <div className={styles.one}>
                    <Typography> SI No : 1 </Typography>
                  </div>
                  <div className={styles.one}>
                    <Typography>
                      {" "}
                      <span>Name :</span> Terrace Cam
                    </Typography>
                  </div>
                  <div className={styles.one}>
                    <Typography>
                      {" "}
                      <span>IP :</span> http://localhost:3000/settings
                    </Typography>
                  </div>
                  <div className={styles.one}>
                    <Typography>
                      {" "}
                      <span>Location :</span> Kozhikode
                    </Typography>
                  </div>
                  <div>
                    <div>
                      {start ? ( // If start is true, render the "Stop" button
                        <Button variant="outlined" onClick={startFn}  color="error">
                          <StopCircleIcon />
                        </Button>
                        
                      ) : (
                        // If start is false, render the "Start" button
                        <Button variant="outlined" onClick={startFn} color="success">
                          <PlayArrowIcon />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div>
                  <ModalMui srcImage="http://95.161.27.60/mjpg/video.mjpg" 
                  modalName="View" modal_Head="videoName" modalDesc="lorem ipsum content update"/>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </Grid>
           
          </Grid>
        </Container>
      </LayoutDash>
    </div>
  );
};

export default Settings;

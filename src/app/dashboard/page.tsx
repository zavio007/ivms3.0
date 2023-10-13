"use client";
import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./dashbaord.module.scss";
import LayoutDash from "../../components/LayoutDash/page";
import { Card } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
    <LayoutDash>
    <Container>
        <Grid container spacing={3}>
          {/* Dashboard Widgets */}
          <Grid item xs={12} sm={6} md={4}>
            {/* Your first widget content */}
            <Card>
              <video>
                
              </video>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Your second widget content */}
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {/* Your third widget content */}
          </Grid>
        </Grid>
      </Container>
    </LayoutDash>
   
    </div>
  );
};

export default Dashboard;

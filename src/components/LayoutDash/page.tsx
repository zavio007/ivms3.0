// pages/yourpage.tsx

import React, { ReactNode } from "react";
import styles from "./dashbaord.module.scss";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import SwipeableTemporaryDrawer from "@/components/swipeRight/page";
import SettingsIcon from "@mui/icons-material/Settings";

const LayoutDash: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <AppBar position="static" className={styles.topBar}>
        <Toolbar className={styles.dFlex}>
          <Link href="/dashboard">
          <Typography variant="h6">Dashboard</Typography>
          </Link>
          <div className={styles.dflex}>
            <Link href="/settings">
              <button>
                <SettingsIcon sx={{ fontSize: "2rem" }} /> On boarding
              </button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableTemporaryDrawer />

      {children}
    </div>
  );
};

export default LayoutDash;

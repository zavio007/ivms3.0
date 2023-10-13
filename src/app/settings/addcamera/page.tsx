"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import LayoutDash from "@/components/LayoutDash/page";
import Card from "@mui/material/Card";
import { Button, FormControlLabel, FormGroup, Grid, Typography } from "@mui/material";
import styles from "./addcamera.module.scss";
import DoneIcon from "@mui/icons-material/Done";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function BasicTextFields() {
  const [click, setClicked] = useState(false);
  console.log(click);

  const customCheck = {
    color: "#000",
    borderRadius: "10px",
    width: "150px",
    // border: click ? "1px solid" : "1px solid #fff",
    // borderColor: click ? "#e31e26" : "#000",
    fontSize:'2em',
    fontWeight:'900 !important'
  };

  const labelClick = (event: { target: { checked: any } }) => {
    const ischecked = event.target.checked;
    ischecked ? setClicked(true) : setClicked(false);
  };

  return (
    <LayoutDash>
      <Card
        sx={{
          minWidth: 300, // Initial minimum width
          m: 2, // Margin
          p: 2, // Padding
          "@media (min-width: 600px)": {
            minWidth: 500, // Adjust the minimum width for screens wider than 600px
            m: 4, // Adjust margin
            p: 3, // Adjust padding
          },
        }}
      >
        <Box
          component="form"
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(1, 1fr)", // Single column by default
            "@media (min-width: 600px)": {
              gridTemplateColumns: "repeat(3, 1fr)", // Change to a three-column layout for screens wider than 600px
            },
          }}
        >
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Name"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="IP"
            variant="filled"
          />
          <TextField
            sx={{ width: "100%" }}
            id="filled-basic"
            label="Location"
            variant="filled"
          />
        </Box>

        <Box m={2}>
          <Typography variant="h6" mb={2}> Select Features</Typography>
          <FormGroup className={styles.flexLables}>
            <FormControlLabel
              style={customCheck}
              control={
                <Checkbox
                  onChange={labelClick}
                  icon={<AddTaskIcon />}
                  checkedIcon={<TaskAltIcon />}
                  sx={{
                    color: "#000",
                    '&.Mui-checked': {
                      color:"#e31e26",
                    },
                  }}

                />
              }
              label="No of plates"
            />
            <FormControlLabel
              style={customCheck}
              control={
                <Checkbox
                  onChange={labelClick}
                  icon={<AddTaskIcon />}
                  checkedIcon={<TaskAltIcon />}
                  sx={{
                    color: "#000",
                    '&.Mui-checked': {
                      color:"#e31e26",
                    },
                  }}

                />
              }
              label="People Count"
            />
            <FormControlLabel
              style={customCheck}
              control={
                <Checkbox
                  onChange={labelClick}
                  icon={<AddTaskIcon />}
                  checkedIcon={<TaskAltIcon />}
                  sx={{
                    color: "#000",
                    '&.Mui-checked': {
                      color:"#e31e26",
                    },
                  }}

                />
              }
              label="Incidents"
            />
          </FormGroup>
        </Box>
      </Card>
      <Box
        sx={{
          minWidth: 300, // Initial minimum width
          m: 2, // Margin
          p: 2, // Padding
          "@media (min-width: 600px)": {
            minWidth: 500, // Adjust the minimum width for screens wider than 600px
            m: 2, // Adjust margin
            p: 2, // Adjust padding
          },
        }}
      >
         <div className={styles.btnDiv}>
        <button> Add </button>
      </div>
       
      </Box>
     
    </LayoutDash>
  );
}

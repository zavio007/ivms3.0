import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Image } from "react-bootstrap";
import DragAndResizeBox from "../DragAndResizeBox/page";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import WebSocketComponent from "../WebSocketComponent/page";

interface ModalMuiProps {
  modalName: string; // Specify the prop type
  srcImage: string;
  modal_Head: string;
  modalDesc: string;
}

const ModalMui: React.FC<ModalMuiProps> = ({
  modalName,
  srcImage,
  modal_Head,
  modalDesc,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [maxWidth, setMaxWidth] = React.useState<DialogProps["maxWidth"]>("lg");

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {modalName}
      </Button>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        sx={{
            width:'100%',
            minWidth:'900px'
        }}
      >
        <DialogTitle>{modal_Head}</DialogTitle>
        <DialogContent    sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:'100%',
            flexDirection:'column'
        }}>
          <DialogContentText>{modalDesc}</DialogContentText>
          <Box>
            <DragAndResizeBox videoSrc={srcImage} />
          </Box>

          <div>
          {/* <WebSocketComponent/> */}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalMui;

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { CloseIcon } from "../../../../components/SideBar/icons";
import HouseholdTabs from "../Tabs/Tabs";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HouseholdModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{ textTransform: "capitalize" }}>
        Show more details
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="flex justify-between items-center">
          <span>Household Details</span>
          <span onClick={handleClose} className="cursor-pointer">
            <CloseIcon />
          </span>
        </DialogTitle>
        <DialogContent sx={{px:0}}>
            <HouseholdTabs/>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}

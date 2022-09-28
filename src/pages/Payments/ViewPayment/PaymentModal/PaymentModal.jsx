import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { AlphaIcon } from "../../../../components/SideBar/icons";
import Table from "../../../../components/Table/Table";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaymentModal(props) {
  const { columns, dummyHouseHold, type } = props;

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
        View Recipients
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullScreen
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <header className="flex justify-between">
            <span style={{ color: "#0660FE" }}>Recipients</span>
            {type === "residents" && (
              <div className="flex items-start">
                <p className="m-0 text-base">
                  NB: All alphas are denoted with the icon{" "}
                </p>
                <span className="ml-2">
                  <AlphaIcon />
                </span>
              </div>
            )}
          </header>
        </DialogTitle>
        <DialogContent>
          <Table height="100vh" columns={columns} data={dummyHouseHold} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { AlphaIcon } from '../../../../SideBar/icons';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PaymentModal(props) {
    const {columns,dummyHouseHold,type} = props

    console.log(props);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div>
      <Button onClick={handleClickOpen} sx={{textTransform:"capitalize"}}>
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
            <header className='flex justify-between'>
                <span style={{color:"#0660FE"}}>Recipients</span>
         {type==="residents"&&  <div className="flex items-start">
                <p className='m-0 text-base'>NB: All alphas are denoted with the icon </p><span className='ml-2'><AlphaIcon/></span>
            </div>}
            </header>
        </DialogTitle>
        <DialogContent>

            <Box
      sx={{
        height: 700,
        width: '100%',
        '& .MuiDataGrid-columnSeparator--sideRight': {
          display: 'none !important',
      },
      '& .MuiDataGrid-columnHeaderTitle':{
        fontWeight:600
      },
      }}
    >
       <div style={{ height: 700, width: '100%', }} className="bg-white">
          <DataGrid
            rows={dummyHouseHold}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10,20,40]}
            disableSelectionOnClick
            disableColumnMenu
          />
        </div>
    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

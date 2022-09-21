import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import HouseDropDown from '../DropDown'


function ResidentList() {

     const dummyResidents = [
        {
            id:1,
            resCode:7373,
            name:"Christopher",
            gender:"Male",
            number:"038373383",
            category:"Alpha",
            class:"Tenant (Resident)",

        },
        {
            id:2,
            resCode:1233,
            name:"Chris",
            gender:"Feale",
            number:"33373383",
            category:"Resident",
            class:"Tenant (Resident)",
            
        }
    ]
    const columns = [
        {field:"resCode", headerName:"Res. Code",sortable:false,width:180},
        {field:"name", headerName:"Name",sortable:false,width:230},
        {field:"gender", headerName:"Gender",sortable:false,width:230},
        {field:"number", headerName:"Phone No.",sortable:false,width:220},
        {field:"category", headerName:"Category",sortable:true,width:250},
        {field:"class", headerName:"Resident Class",sortable:false,width:220},
        {field:"toggle", headerName:"",sortable:false,width:30,
        renderCell:params=> <HouseDropDown {...params}/>
        },
      
        
      ]
  return (
    <Box
      sx={{
        height: 700,
        marginTop:"54px",
        width: '100%',
        '& .MuiDataGrid-columnSeparator--sideRight': {
          display: 'none !important',
      },
      '& .MuiDataGrid-columnHeaderTitle':{
        fontWeight:600
      },
      '& .MuiDataGrid-root':{
        border:0
      }
      }}
    >
       <div style={{ height: 700, width: '100%', }} className="bg-white">
          <DataGrid
            rows={dummyResidents}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            disableColumnMenu
          />
        </div>
            </Box>
  )
}

export default ResidentList
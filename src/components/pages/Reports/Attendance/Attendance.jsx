import React from 'react'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import CSS from '../../../PrintAndDownload/PrintAndDownload.module.css'
import ReportsDropDown from '../ReportsDropDown'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import ProfilePicture from '../../../../images/security.jpeg'


function GuardName(params){
  return <div className='flex items-center'>
    <img src={ProfilePicture} className="w-10 h-10 rounded-full object-cover" alt="" />
    <p className='mb-0 ml-2'>{params.row.guardName}</p>
  </div>
}

function AttendanceDetails() {

  const dummy = [
    {
        id:1,
        date:"21 March, 2022",
        guardName:"Kunle Asa",
        guardCode:"A7373",
        number:"093837373",
        clockin:"9:01Am",
        clockout:"5:31pm",

    },
    {
        id:2,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        number:"093837373",
        clockin:"9:01Am",
        clockout:"5:31pm",
    },
    {
        id:3,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        number:"093837373",
        clockin:"9:01Am",
        clockout:"5:31pm",
    }
    ,
    {
        id:4,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        number:"093837373",
        clockin:"9:01Am",
        clockout:"5:31pm",
    }
  ]

  const columns = [
    { sortable:false,field: 'date', headerName: 'Date', width: 140 },
    { sortable:false,field: 'guardCode', headerName: 'Guard Code', width: 130 },
    { sortable:false,field: 'guardName', headerName: 'Guard Name', width: 220, 
    renderCell:(params)=>{
      return <GuardName {...params}/>
    }
    },
    { sortable:false,field: 'number', headerName: 'Phone No.', width: 150,},
    { sortable:false,field: 'clockin', headerName: 'Clock - in', width: 180,},
    { sortable:false,field: 'clockout', headerName: 'Clock - out', width: 130,},
    { sortable:false,field:'toggle', headerName: '', 
    renderCell:(params)=>{
       return <ReportsDropDown params={params} viewUrl={"/reports/guard-report/"}/>
    },  
  
}
  ];

  return (
    <div>
        <div className="mt-8">
        <h6 className='mb-8'>Security Guard Attendance Report</h6>
                <header className='row' style={{paddingLeft:10}}>

            <div className={`col-lg-3 bg-white p-3 rounded-md w-72 mr-8`} style={{boxShadow:'0px 2px 4px rgba(102, 104, 105, 0.25)'}}>
                <h6 className='font-extralight text-sm'>
                    Total Number of Guards
                </h6>
                <p className='text-3xl font-semibold' style={{color:'#0446B9'}}>14</p>
                <hr />
                <p className='text-sm text-muted font-extralight'>21 March 2022</p>
            </div>

            <div className={`col-lg-3 bg-white p-3 rounded-md w-72`}style={{boxShadow:'0px 2px 4px rgba(102, 104, 105, 0.25)'}}>
                <h6 className='font-extralight text-sm'>
                    Guards on Duty
                </h6>
                <p className='text-3xl font-semibold' style={{color:'#0446B9'}}>8</p>
                <hr />
                <p className='text-sm text-muted font-extralight'>21 March 2022</p>
            </div>
                </header>
                <header className={`flex items-baseline mt-8 justify-between ${CSS.header}`}>
         <div className='flex justify-between items-baseline'>
            <p className='mb-0 mr-3'>Attendance Report List</p>
            <div className='flex ml-3'>
                    <input type="date" name="" id="" className='ml-5 border bg-white focus:ring-indigo-500 focus:border-indigo-500 block h-9 pl-7 pr-12 border-gray-300 rounded-md' />
                    <input type="date" name="" id="" className='ml-5 border bg-white focus:ring-indigo-500 focus:border-indigo-500 block h-9 pl-7 pr-12 border-gray-300 rounded-md' />
                    </div>
                 </div>
               <PrintAndDownload/>
                </header>
        </div>


        <Box
      sx={{
        height: 300,
        width: '100%',
        '& .MuiDataGrid-columnSeparator--sideRight': {
          display: 'none !important',
      },
      '& .MuiDataGrid-columnHeaderTitle':{
        fontWeight:600
      },
         "& .MuiCheckbox-root":{
            color:'#D9D9D9'
          },
          '& .MuiCheckbox-root.Mui-checked':{
            color:"#0446B9"
          }
      }}
    >
           <div className='bg-white mt-8'>
        <div style={{ height: 400, width: '100%', }} className="bg-white">
          <DataGrid
            rows={dummy}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      
    </div> 
    </Box>
    </div>
  )
}

export default AttendanceDetails
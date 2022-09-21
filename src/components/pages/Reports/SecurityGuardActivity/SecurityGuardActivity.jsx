import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import ReportsDropDown from '../ReportsDropDown'
import ProfilePicture from '../../../../images/security.jpeg'
import { SearchIcon } from '../../../SideBar/icons'


function GuardName(params){
  return <div className='flex items-center'>
    <img src={ProfilePicture} className="w-10 h-10 rounded-full object-cover" alt="" />
    <p className='mb-0 ml-2'>{params.row.guardName}</p>
  </div>
}

function SecurityGuardActivity() {

  const dummy = [
    {
        id:1,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        checkInCount:1,
        checkOutCount:2,
        panicAlert:1,
    },
    {
        id:2,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        checkInCount:1,
        checkOutCount:2,
        panicAlert:1,
    },
    {
        id:3,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        checkInCount:1,
        checkOutCount:2,
        panicAlert:1,
    }
    ,
    {
        id:4,
        date:"21 March, 2022",
        guardName:"Kunle",
        guardCode:"A7373",
        checkInCount:1,
        checkOutCount:2,
        panicAlert:1,
    }
  ]

  const columns = [
    { sortable:false,field: 'date', headerName: 'Date', width: 160 },
    { sortable:false,field: 'guardName', headerName: 'Guard Name', width: 180,
      renderCell:(params)=>{
        return <GuardName {...params}/>
      }
    },
    { sortable:false,field: 'guardCode', headerName: 'Guard Code', width: 180,},
    { sortable:false,field: 'checkInCount', headerName: 'Check - in count', width: 170 },
    { sortable:false,field: 'checkOutCount', headerName: 'Check - out count', width: 170 },
    { sortable:false,field: 'panicAlert', headerName: 'Panic Alert', width: 120 },
    { sortable:false,field:'toggle', headerName: '', 
    renderCell:(params)=>{
       return <ReportsDropDown params={params} viewUrl={"/reports/guard-report/"}/>
    },  
  
}
  ];

  

  return (
    <div>
        <div className="mt-8">
                <header className='flex items-baseline mb-8'>
                    <h4>Security Guard Report List</h4>
                    <div className='flex ml-3'>
                    <input type="date" name="" id="" className='ml-5 border p-1 rounded bg-white' />
                    <input type="date" name="" id="" className='ml-5 border p-1 rounded bg-white' />
                    </div>
                </header>
                <div className="col-lg-12">
          <div className="row mb-4 items-baseline">
            <div className="col-lg-6 mb-1">
            <div className="flex items-baseline">
              <div className='w-4/5'>
                    <div className="relative rounded-md h-9">
                      <div className="absolute inset-y-0 left-0 pl-1 flex items-center pointer-events-none">
                        <span className="text-gray-500">
                           <SearchIcon/>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 border-gray-300 rounded-md h-9"
                        placeholder="Search"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                          id="SortBy"
                          name="SortBy"
                          className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-4 border bg-transparent text-gray-500 rounded"
                        >
                          <option>Category</option>
                        </select>
                      </div>
                    </div>
            </div>
            </div>
            </div>
          
            <div className="col-lg-6 flex justify-end">
           
            <PrintAndDownload/>
            </div>
          </div>
            </div>
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

export default SecurityGuardActivity
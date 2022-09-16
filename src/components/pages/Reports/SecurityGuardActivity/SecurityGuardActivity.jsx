import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import ReportsDropDown from '../ReportsDropDown'
import ProfilePicture from '../../../../images/security.jpeg'


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
                          <svg width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.125 16.7999L10.225 10.8999C9.72505 11.3166 9.15005 11.6416 8.50005 11.8749C7.85005 12.1082 7.20005 12.2249 6.55005 12.2249C4.93338 12.2249 3.57105 11.6706 2.46305 10.5619C1.35438 9.4539 0.800049 8.0999 0.800049 6.4999C0.800049 4.8999 1.35438 3.54557 2.46305 2.4369C3.57105 1.3289 4.92505 0.774902 6.52505 0.774902C8.12505 0.774902 9.48338 1.3289 10.6 2.4369C11.7167 3.54557 12.275 4.8999 12.275 6.4999C12.275 7.1999 12.15 7.8749 11.9 8.5249C11.65 9.1749 11.325 9.7249 10.925 10.1749L16.875 16.1249C16.9584 16.2082 17 16.3126 17 16.4379C17 16.5626 16.9417 16.6832 16.8251 16.7999C16.725 16.8999 16.6127 16.9499 16.488 16.9499C16.3627 16.9499 16.2417 16.8999 16.125 16.7999ZM6.55005 11.2249C7.86672 11.2249 8.98338 10.7709 9.90005 9.8629C10.8167 8.95424 11.275 7.83324 11.275 6.4999C11.275 5.16657 10.8167 4.04557 9.90005 3.1369C8.98338 2.2289 7.86672 1.7749 6.55005 1.7749C5.21672 1.7749 4.09172 2.2289 3.17505 3.1369C2.25838 4.04557 1.80005 5.16657 1.80005 6.4999C1.80005 7.83324 2.25838 8.95424 3.17505 9.8629C4.09172 10.7709 5.21672 11.2249 6.55005 11.2249Z" fill="#8C8D8E"/>
                        </svg>
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
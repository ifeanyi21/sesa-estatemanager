import React from 'react'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import ReportsDropDown from '../ReportsDropDown'
import DetailedInfoGraphics from '../DetailedInfoGraphics'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { SearchIcon } from '../../../SideBar/icons'

function EventsReports() {
    const dummyEvents = [
        {
            id:1,
            eventCode:'E90373',
            eventName:"Child Dedication",
            propCode:"P03933",
            guests:20,
            totalCheckIn:"19",
            startDate:"04/06/22",
            endDate:"04/06/22",
        },
        {
            id:2,
            eventCode:'E90373',
            eventName:"Child Dedication",
            propCode:"P03933",
            guests:20,
            totalCheckIn:"19",
            startDate:"04/06/22",
            endDate:"04/06/22",
        },
        {
            id:3,
            eventCode:'E90373',
            eventName:"Child Dedication",
            propCode:"P03933",
            guests:20,
            totalCheckIn:"19",
            startDate:"04/06/22",
            endDate:"04/06/22",
        }
        ,
        {
            id:4,
            eventCode:'E90373',
            eventName:"Child Dedication",
            propCode:"P03933",
            guests:20,
            totalCheckIn:"19",
            startDate:"04/06/22",
            endDate:"04/06/22",
        }
      ]

      const columns = [
        { sortable:false,field: 'eventCode', headerName: 'Event Code', width: 130 },
        { sortable:false,field: 'eventName', headerName: 'Event Name', width: 160 },
        { sortable:false,field: 'propCode', headerName: 'Prop. Code', width: 140,},
        { sortable:false,field: 'guests', headerName: 'Expected Guest', width: 140 },
        { sortable:false,field: 'totalCheckIn', headerName: 'Total Check - in', width: 140 },
        { sortable:false,field: 'startDate', headerName: 'Start Date', width: 120 },
        { sortable:false,field: 'endDate', headerName: 'End Date', width: 120 },
        { sortable:false,field:'toggle', headerName: '', 
        renderCell:(params)=>{
           return <ReportsDropDown params={params} viewUrl={"/reports/event-report/"}/>
        },  
      
    }
      ];

  return (
    <div>
   
          <div className='flex justify-between'>
            <h6 className='my-8'>Event Report</h6>
           <div className="mb-4 flex justify-end items-center" style={{marginTop:'2rem'}}>
                <span>Sort By</span> 
                <select name="" id="" className='ml-2'>
                    <option value="">Today</option>
                </select>
            </div>
      </div>
          <DetailedInfoGraphics title="Top 3 Event Check-In" totalCount={15}/>
        <div className="mt-8">
                <header className='flex items-baseline mb-8'>
                    <p className='text-lg'>Visitor Report List</p>
                    <div className='flex ml-3'>
                    <input type="date" name="" id="" className='ml-5 border p-2 rounded bg-white' />
                    <input type="date" name="" id="" className='ml-5 border p-2 rounded bg-white' />
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
                          <option>Sort By</option>
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
            rows={dummyEvents}
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

export default EventsReports
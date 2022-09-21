import React from 'react'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import ReportsDropDown from '../ReportsDropDown'
import DetailedInfoGraphics from '../DetailedInfoGraphics'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { SearchIcon } from '../../../SideBar/icons'
import DateRangePicker from '../../../DatePicker/DateRangePicker'

function VisitorAccess() {
    const dummyVisitor = [
        {
            id:1,
            date:"21 March, 2022",
            modeOfEntry:"Car",
            accessCode:'R90373',
            visitorName:"Kunle",
            visitorNumber:"088393838",
            propCode:"P03933",
            visitorType:"WIV",
            checkIn:"3:19pm",
            checkOut:"6:49pm",
        },
        {
            id:2,
            date:"21 March, 2022",
            modeOfEntry:"Car",
            accessCode:'R90373',
            visitorName:"Kunle",
            visitorNumber:"088393838",
            propCode:"P03933",
            visitorType:"WIV",
            checkIn:"3:19pm",
            checkOut:"6:49pm",
        },
        {
            id:3,
            date:"21 March, 2022",
            modeOfEntry:"Car",
            accessCode:'R90373',
            visitorName:"Kunle",
            visitorNumber:"088393838",
            propCode:"P03933",
            visitorType:"WIV",
            checkIn:"3:19pm",
            checkOut:"6:49pm",
        }
        ,
        {
            id:4,
            date:"21 March, 2022",
            modeOfEntry:"Car",
            accessCode:'R90373',
            visitorName:"Kunle",
            visitorNumber:"088393838",
            propCode:"P03933",
            visitorType:"WIV",
            checkIn:"3:19pm",
            checkOut:"6:49pm",
        }
      ]
      const mostHouse = [
        {
          code:"P02393",
          count:200,
        },
        {
          code:"P04393",
          count:100,
        },
        {
          code:"P02363",
          count:40,
        }
      ]

      const columns = [
        { sortable:false,field: 'date', headerName: 'Date', width: 130 },
        { sortable:false,field: 'accessCode', headerName: 'Access Code', width: 110 },
        { sortable:false,field: 'visitorName', headerName: 'Visitor Name', width: 130 },
        { sortable:false,field: 'visitorNumber', headerName: 'Visitor No.', width: 100,},
        { sortable:false,field: 'propCode', headerName: 'Prop. Code', width: 100,},
        { sortable:false,field: 'visitorType', headerName: 'Visitor Type', width: 110,},
        { sortable:false,field: 'modeOfEntry', headerName: 'Mode of Entry', width: 120 },
        { sortable:false,field: 'checkIn', headerName: 'Check - in', width: 100 },
        { sortable:false,field: 'checkOut', headerName: 'Check - out', width: 100 },
        { sortable:false,field:'toggle', headerName: '', 
        renderCell:(params)=>{
           return <ReportsDropDown params={params} viewUrl={"/reports/visitor-report/"}/>
        },  
      
    }
      ];

  return (
    <div>
           <div className='flex justify-between'>
         <h6 className='my-8'>Visitor Access Report</h6>
           <div className="mb-4 flex justify-end items-center" style={{marginTop:'2rem'}}>
                <span>Sort By</span> 
                <select name="" id="" className='ml-2'>
                    <option value="">Today</option>
                </select>
            </div>
      </div>
          <DetailedInfoGraphics title="Top 3 Most Visited Houses" fam={mostHouse}/>
        <div className="mt-8">
                <header className='flex items-baseline mb-8'>
                    <p className='text-lg'>Visitor Report List</p>
                    <div className='flex ml-9'>
                         <DateRangePicker/>
                    </div>
                </header>
                <div className="col-lg-12">
          <div className="row items-baseline">
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
            rows={dummyVisitor}
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

export default VisitorAccess
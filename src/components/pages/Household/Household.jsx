import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import EmptyData from '../../EmptyData/EmptyData'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
import { SearchIcon } from '../../SideBar/icons'
import HouseholdDropDown from './HouseholdDropDown'

function Status(params){
  return(
    <div className={params.row.status === "Active"?"text-success":"text-orange-600"}>{params.row.status}</div>
  )
}

function Household() {
    const dummyHouseHold = [
        {
          id:1,
          propertyCode:'H7383',
          address:"Block 23",
          propertyCategory:"Residential",
          propertyName:"Property Name",
          occupants:'3',
          RFID:'8',
          accessCard:'20',
          status:"Active"
        },
        {
          id:2,
          propertyCode:'H73836',
          address:"Block 231",
          propertyCategory:"Residential",
          propertyName:"Name",
          occupants:'2',
          RFID:'4',
          accessCard:'21',
          status:"Active"
        },
        {
          id:3,
          propertyCode:'H73383',
          address:"Block 233",
          propertyCategory:"Residential",
          propertyName:"Property Name",
          occupants:'32',
          RFID:'8',
          accessCard:'3',
          status:"Inactive"
        }
      ]

      const columns = [
        {field:"propertyCode", headerName:"Property Code",sortable:false,width:119},
        {field:"address", headerName:"Address",sortable:false,width:190},
        {field:"propertyCategory", headerName:"Property Category",sortable:false,width:160},
        {field:"propertyName", headerName:"Property Name",sortable:false,width:150},
        {field:"occupants", headerName:"Occupants",sortable:false,width:100},
        {field:"RFID", headerName:"RFID",sortable:false,width:70},
        {field:"accessCard", headerName:"Access Card",sortable:false,width:110},
        {field:"status", headerName:"Status",sortable:true,width:90,
        renderCell:params=> <Status {...params}/>
        },
        {field:"toggle", headerName:"",sortable:false,width:80,
        renderCell:params=> <HouseholdDropDown {...params}/>
        },
      
        
      ]

      const [sort, setSort] = useState("propertyName")
      const [data, setData] = useState([])

      useEffect(()=>{
        setData(dummyHouseHold)
    // eslint-disable-next-line 
      },[])
    

      const handleSearch = (e)=>{
        const searchValue = e.target.value;
        const findItem = dummyHouseHold.filter(item=>{
         return item[sort].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
    
        setData(findItem)
    
      }
  return (
    <>
    {
      dummyHouseHold.length>0? <div>
      <h4 className='font-medium'>Household Data</h4>
      <div className="mt-8">
      <div className="col-lg-12">
          <div className="row items-baseline">
            <div className="col-lg-6 mb-1">
            <div className="flex items-baseline">
            <p className='mr-1 w-2/5 mb-0 text-lg font-normal'>Household List</p>
              <div className='w-full'>
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
                        onChange={handleSearch}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                      <select
                          id="SortBy"
                          name="SortBy"
                         className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-4 border bg-transparent text-gray-500 rounded"
                          onChange={(e)=>setSort(e.target.value)}
                        >
                          <option value={'propertyName'}>Property Name</option>
                          <option value={'propertyCode'}>Property Code</option>
                          <option value={'address'}>Address</option>
                          <option value={'propertyCategory'}>Property Category</option>
                          <option value={'occupants'}>Occupants</option>
                          <option value={'RFID'}>RFID</option>
                          <option value={'accessCard'}>Access Card</option>
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


      <div className='bg-white mt-8'>
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
        "& .MuiCheckbox-root":{
            color:'#D9D9D9'
          },
          '& .MuiCheckbox-root.Mui-checked':{
            color:"#0446B9"
          }
      }}
    >
       <div style={{ height: 700, width: '100%', }} className="bg-white">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            disableColumnMenu
          />
        </div>
    </Box>
       
      
    </div>
   </div>
 </div>:<EmptyData text='Household List'/>
    }
    </>
   
  )
}

export default Household
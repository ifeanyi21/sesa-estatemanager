import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React, { useEffect, useState } from 'react'
import EmptyData from '../../EmptyData/EmptyData'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
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
import React, { useEffect, useState } from 'react'
import EmptyData from '../../EmptyData/EmptyData'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
import SiteWorkerDropDown from './SiteWorkerDropDown'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'


function Status(params){
  return(
    <div className={params.row.status === "Active"?"text-success":"text-orange-400"}>{params.row.status}</div>
  )
}

function KYR(params){

  return <div className={params.row.KYR === "Full Match" || params.row.KYR === "Partial Match" ?"text-primary":"text-danger"}>{params.row.KYR}</div>
}

function SiteWorker() {
    const dummySiteWorker = [
        {
          id:1,
          code:'H7383',
          name:"Chris",
          number:"80837383993",
          workDays:"Tuesday, Wednesday, Thursday",
          workLocation:"Block 23 Estate",
          KYR:"Full Match",
          status:"Active"
        },
        {
          id:2,
          code:'H7683',
          name:"Doe",
          number:"808373833",
          workDays:"Monday, Thursday, Friday,",
          workLocation:"Block 43 Estate",
          KYR:"Full Match",
          status:"Inactive"
        },
        {
          id:3,
          code:'H7383',
          name:"John ",
          number:"80831283993",
          workDays:"Monday, Tuesday, Saturday",
          workLocation:"Block 23 Estate",
          KYR:"Not Validated",
          status:"Active"
        }
      ]

      const columns = [
        {field:"code", headerName:"Code",sortable:false,width:100},
        {field:"name", headerName:"Name",sortable:false,width:120},
        {field:"number", headerName:"Phone No.",sortable:false,width:130},
        {field:"workDays", headerName:"Work Days",sortable:false,width:270},
        {field:"workLocation", headerName:"Work Location",sortable:false,width:150},
        {field:"status", headerName:"Status",sortable:true,width:120,
        renderCell:params=> <Status {...params}/>
        },
        {field:"KYR", headerName:"KYR",width:100, sortable:true,
        renderCell:params=><KYR {...params}/>
      },

        {field:"toggle", headerName:"",sortable:false,width:80,
        renderCell:params=> <SiteWorkerDropDown {...params}/>
        },
      
        
      ]

      const [sort, setSort] = useState("name")
      const [data, setData] = useState([])

      useEffect(()=>{
        setData(dummySiteWorker)
    // eslint-disable-next-line 
      },[])
    

      const handleSearch = (e)=>{
        const searchValue = e.target.value;
        const findItem = dummySiteWorker.filter(item=>{
         return item[sort].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
    
        setData(findItem)
    
      }

  return (
    <>
    {
      dummySiteWorker.length>0? <div>
      <h4 className='font-medium'>Site Worker Data</h4>
      <div className="mt-8">
      <div className="col-lg-12">
          <div className="row mb-8 items-baseline">
            <div className="col-lg-6 mb-3">
            <div className="flex items-baseline">
            <p className='mr-3 w-2/4 text-lg mb-0'>Site Worker List <span className='text-primary'>({dummySiteWorker.length})</span></p>
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
                         className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-1 border bg-transparent text-gray-500 rounded"
                          onChange={(e)=>setSort(e.target.value)}
                        >
                          <option value={'name'}>Name</option>
                          <option value={'code'}>Code</option>
                          <option value={'workDays'}>Work Days</option>
                          <option value={'workLocation'}>Work Location</option>
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
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection
            disableSelectionOnClick
            disableColumnMenu
          />
        </div>
    </Box>
   </div>
 </div>:<EmptyData text='Site Worker'/>
    }
    </>
  )
}

export default SiteWorker
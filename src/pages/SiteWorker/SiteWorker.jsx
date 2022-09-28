import React, { useEffect, useState } from 'react'
import EmptyData from '../../components/EmptyData/EmptyData'
import PrintAndDownload from '../../components/PrintAndDownload/PrintAndDownloadButton'
import SiteWorkerDropDown from './SiteWorkerDropDown'
import { SearchIcon } from '../../components/SideBar/icons'
import Table from '../../components/Table/Table'
import { Box, FormControl, MenuItem, Select } from '@mui/material'


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
        {field:"code", headerName:"Code",sortable:false,flex:1,minWidth:100},
        {field:"name", headerName:"Name",sortable:false,flex:1,minWidth:120},
        {field:"number", headerName:"Phone No.",sortable:false,flex:1,minWidth:130},
        {field:"workDays", headerName:"Work Days",sortable:false,flex:1,minWidth:260},
        {field:"workLocation", headerName:"Work Location",sortable:false,flex:1,minWidth:140},
        {field:"status", headerName:"Status",sortable:true,flex:1,minWidth:120,
        renderCell:params=> <Status {...params}/>
        },
        {field:"KYR", headerName:"KYR",flex:1,minWidth:100, sortable:true,
        renderCell:params=><KYR {...params}/>
      },

        {field:"toggle", headerName:"",sortable:false,
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
                         <Box
                            sx={{
                              "& .MuiOutlinedInput-notchedOutline": {
                                border: 0,
                              },
                            }}
                            className="focus:ring-indigo-500 focus:border-indigo-500 h-10 border bg-transparent text-gray-500 rounded"
                          >
                            <FormControl
                              fullWidth
                              size="small"
                              sx={{ border: 0 }}
                            >
                              <Select
                                sx={{
                                  "& legend": { display: "none" },
                                  "& fieldset": { top: 0 },
                                  border: 0,
                                }}
                                label="Sort By"
                                name="Sort By"
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                              >
                         <MenuItem value={'name'}>Name</MenuItem>
                          <MenuItem value={'code'}>Code</MenuItem>
                          <MenuItem value={'workDays'}>Work Days</MenuItem>
                          <MenuItem value={'workLocation'}>Work Location</MenuItem>
                              </Select>
                            </FormControl>
                          </Box>
                      {/* <select
                          id="SortBy"
                          name="SortBy"
                         className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-1 border bg-transparent text-gray-500 rounded"
                          onChange={(e)=>setSort(e.target.value)}
                        >
                          <option value={'name'}>Name</option>
                          <option value={'code'}>Code</option>
                          <option value={'workDays'}>Work Days</option>
                          <option value={'workLocation'}>Work Location</option>
                        </select> */}
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

             <Table height="60vh" columns={columns} data={data} checkboxSelection={true} />
   </div>
 </div>:<EmptyData text='Site Worker'/>
    }
    </>
  )
}

export default SiteWorker
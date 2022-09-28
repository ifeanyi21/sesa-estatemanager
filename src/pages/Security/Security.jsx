import React, { useEffect, useState } from 'react'
import EmptyData from '../../components/EmptyData/EmptyData'
import PrintAndDownload from '../../components/PrintAndDownload/PrintAndDownloadButton'
import SecurityDropDown from './SecurityDropDown'
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

function Security() {
    const dummySecurity = [
        {
          id:1,
          code:'H7383',
          name:"Chris",
          number:"80837383993",
          KYR:"Full Match",
          status:"Active"
        },
        {
          id:2,
          code:'H7683',
          name:"Doe",
          number:"808373833",
          KYR:"Full Match",
          status:"Inactive"
        },
        {
          id:3,
          code:'H7383',
          name:"John ",
          number:"80831283993",
          KYR:"Not Validated",
          status:"Active"
        }
      ]

      const columns = [
        {field:"code", headerName:"Code",sortable:false,flex:1,minWidth:200},
        {field:"name", headerName:"Name",sortable:false,flex:1,minWidth:220},
        {field:"number", headerName:"Phone No.",sortable:false,flex:1,minWidth:200},
        {field:"status", headerName:"Status",sortable:true,flex:1,minWidth:170,
        renderCell:params=> <Status {...params}/>
        },
        {field:"KYR", headerName:"KYR",flex:1,minWidth:180, sortable:true,
        renderCell:params=><KYR {...params}/>
      },

        {field:"toggle", headerName:"",sortable:false,
        renderCell:params=> <SecurityDropDown {...params}/>
        },
      
        
      ]

      const [sort, setSort] = useState("name")
      const [data, setData] = useState([])

      useEffect(()=>{
        setData(dummySecurity)
    // eslint-disable-next-line 
      },[])
    

      const handleSearch = (e)=>{
        const searchValue = e.target.value;
        const findItem = dummySecurity.filter(item=>{
         return item[sort].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
    
        setData(findItem)
    
      }

  return (
    <>
    {
      dummySecurity.length>0? <div>
      <h4 className='font-medium'>Securtity Guard Data</h4>
      <div className="mt-8">
      <div className="col-lg-12">
          <div className="row mb-4 items-baseline">
            <div className="col-lg-6 mb-2">
            <div className="flex items-baseline">
            <p className='w-3/5 text-lg'>Security Guard List <span className='text-primary'>({dummySecurity.length})</span></p>
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
                              </Select>
                            </FormControl>
                          </Box>
                      {/* <select
                          id="SortBy"
                          name="SortBy"
                          className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-4 border bg-transparent text-gray-500 rounded"
                          onChange={(e)=>setSort(e.target.value)}
                        >
                          <option value={'name'}>Name</option>
                          <option value={'code'}>Code</option>
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

             <Table height="60vh" columns={columns} data={data} checkboxSelection={true}/>
   </div>
 </div>:<EmptyData text='Security Guard'/>
    }
    </>
  )
}

export default Security

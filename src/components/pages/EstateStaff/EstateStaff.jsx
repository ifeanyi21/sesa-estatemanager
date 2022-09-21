import React, { useEffect, useState } from 'react'
import EmptyData from '../../EmptyData/EmptyData'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
import EstateStaffDropDown from './EstateStaffDropDown'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { SearchIcon } from '../../SideBar/icons'

function Status(params){
  return(
    <div className={params.row.status === "Active"?"text-success":"text-orange-400"}>{params.row.status}</div>
  )
}

function KYR(params){

  return <div className={params.row.KYR === "Full Match" || params.row.KYR === "Partial Match" ?"text-primary":"text-danger"}>{params.row.KYR}</div>
}

function EstateStaff() {
    const dummyEstateStaff = [
        {
          id:1,
          code:'H7383',
          name:"Chris",
          number:"80837383993",
          workDays:"Monday, Wednesday, Friday",
          KYR:"Full Match",
          status:"Active"
        },
        {
          id:2,
          code:'H7683',
          name:"Doe",
          number:"808373833",
          workDays:"Saturday",
          KYR:"Full Match",
          status:"Inactive"
        },
        {
          id:3,
          code:'H7383',
          name:"John ",
          number:"80831283993",
          workDays:"Monday, Tuesday",
          KYR:"Not Validated",
          status:"Active"
        }
      ]

      const columns = [
        {field:"code", headerName:"Staff Code",sortable:false,width:130},
        {field:"name", headerName:"Staff Name",sortable:false,width:190},
        {field:"number", headerName:"Phone No.",sortable:false,width:180},
        {field:"workDays", headerName:"Work Days",sortable:false,width:260},
        {field:"status", headerName:"Status",sortable:true,width:110,
        renderCell:params=> <Status {...params}/>
        },
        {field:"KYR", headerName:"KYR",width:120, sortable:true,
        renderCell:params=><KYR {...params}/>
      },

        {field:"toggle", headerName:"",sortable:false,width:80,
        renderCell:params=> <EstateStaffDropDown {...params}/>
        },
      
        
      ]

      const [sort, setSort] = useState("name")
      const [data, setData] = useState([])

      useEffect(()=>{
        setData(dummyEstateStaff)
    // eslint-disable-next-line 
      },[])
    

      const handleSearch = (e)=>{
        const searchValue = e.target.value;
        const findItem = dummyEstateStaff.filter(item=>{
         return item[sort].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
    
        setData(findItem)
    
      }

      

  return (
    <>
    {
      dummyEstateStaff.length>0? <div>
      <h4 className='font-medium'>Estate Staff Data</h4>
      <div className="mt-8">
      <div className="col-lg-12">
          <div className="row mb-8 items-baseline">
            <div className="col-lg-6 mb-1">
            <div className="flex items-baseline">
            <p className='mr-2 w-3/6 text-lg'>Estate Staff List <span className='text-primary'>({dummyEstateStaff.length})</span></p>
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
                          <option value={'name'}>Staff Name</option>
                          <option value={'code'}>Staff Code</option>
                          <option value={'workDays'}>Work Days</option>
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
 </div>:<EmptyData text='Estate Staff'/>
    }
    </>
  )
}

export default EstateStaff
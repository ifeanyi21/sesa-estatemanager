import React, { useEffect, useState } from 'react'
import EmptyData from '../../EmptyData/EmptyData'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
import { Box, Rating } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import ArtisanDropDown from './ArtisanDropDown'
import { SearchIcon } from '../../SideBar/icons'



function Artisan() {
    const dummyArtisan = [
        {
          id:1,
          code:'H7383',
          name:"Chris",
          businessName:"Farm City",
          number:"80837383993",
          category:"Painter",
          rating:5
        },
        {
          id:2,
          code:'H7683',
          name:"Doe",
          businessName:"Farmer's Inc",
          number:"80837383993",
          category:"Plumber",
          rating:3
        },
        {
          id:3,
          code:'H7383',
          name:"John ",
          businessName:"Farmer's Inc",
          number:"80837383993",
          category:"Mech",
          rating:2
        }
      ]

      const columns = [
        {field:"code", headerName:"Code",sortable:false,width:120},
        {field:"name", headerName:"Name",sortable:false,width:180},
        {field:"businessName", headerName:"Business Name",sortable:false,width:250},
        {field:"number", headerName:"Phone No.",sortable:false,width:170},
        {field:"category", headerName:"Category",sortable:false,width:140},
        {field:"rating", headerName:"Rating",sortable:true,width:170,
        renderCell:params=> <Rating defaultValue={params.row.rating} readOnly/>
        },
        {field:"toggle", headerName:"",sortable:false,width:80,
        renderCell:params=> <ArtisanDropDown {...params}/>
        },
      
        
      ]

      const [sort, setSort] = useState("name")
      const [data, setData] = useState([])

      useEffect(()=>{
        setData(dummyArtisan)
    // eslint-disable-next-line 
      },[])
    

      const handleSearch = (e)=>{
        const searchValue = e.target.value;
        const findItem = dummyArtisan.filter(item=>{
         return item[sort].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        })
    
        setData(findItem)
    
      }
      
  return (
    <>
    {
      dummyArtisan.length>0? <div>
      <h4 className='font-medium'>Artisan Data</h4>
      <div className="mt-8">
      <div className="col-lg-12">
          <div className="row mb-4 items-baseline">
            <div className="col-lg-6 mb-2">
            <div className="flex items-baseline">
            <p className='mr-3 w-2/5 text-lg'>Artisan List <span className='text-primary'>({dummyArtisan.length})</span></p>
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
                          className="focus:ring-indigo-500 focus:border-indigo-500 h-9 py-0 pl-1 pr-0 border bg-transparent text-gray-500 rounded"
                          onChange={(e)=>setSort(e.target.value)}
                        >
                          <option value={'name'}>Name</option>
                          <option value={'code'}>Code</option>
                          <option value={'businessName'}>Business Name</option>
                          <option value={'category'}>Category</option>
                          
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
      }
      }}
    >
       <div style={{ height: 700, width: '100%', }} className="bg-white">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]} 
            disableSelectionOnClick
            disableColumnMenu
          />
        </div>
    </Box>
         </div>
    </div>:<EmptyData text='Artisan'/>
    }
    </>
  
  )
}

export default Artisan

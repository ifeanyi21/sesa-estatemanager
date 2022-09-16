import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import PrintAndDownload from '../../../PrintAndDownload/PrintAndDownloadButton'
import LinearProgress from '@mui/material/LinearProgress';

function Status(params) {
  return (
    <div
      className={
        params.row.status === "active" ? "text-success capitalize" : "text-orange-400 capitalize"
      }
    >
      {params.row.status}
    </div>
  );
}

function FullName(params) {
  return (
    <div
      className='capitalize'>
      {params.row.f_name}  {params.row.l_name}
    </div>
  );
}

function ResidentProfile() {
  
      const columns = [
        { sortable:false,field: 'id', headerName: 'Res. Code', width: 170 },
        {
          sortable: false, field: 'name', headerName: 'Name', width: 180,
         renderCell: (params) => {
        return <FullName {...params} />
          }
        },
        { sortable:false,field: 'phone', headerName: 'Phone No.', width: 180 },
        { sortable:false,field: 'category', headerName: 'Category', width: 180,},
        { sortable:false,field: 'class', headerName: 'Resident Class', width: 200 },
        { sortable:true,field: 'status', headerName: 'Status', width: 110,
        renderCell:(params)=>{
          return <Status {...params}/>
        }
        },
      ];
      const [data, setData] = useState([])
  const [sort, setSort] = useState("f_name")
    const [loading, setLoading] = useState(true);

  const GetResidents = async () => {
    const token = localStorage.getItem("sesaToken")

    const req = await fetch("https://real.sesadigital.com/api/users", {
      method:"GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    
    });

    const data = await req.json()
    setData(data)
    setLoading(false)
  };

  useEffect(() => {
    GetResidents()
  },[]);


      const handleSearch = (e) => {
    const searchValue = e.target.value;

    if (searchValue.length > 0) {
         const findItem = data.filter(item=>{
      return item[sort].toString().toLocaleLowerCase().includes(searchValue.toString().toLocaleLowerCase())
    })
      setData(findItem);
    } else {
       GetResidents()
    }
   
  };

  return (
    <div className="mt-8">
               <div className="col-lg-12">
          <div className="row items-baseline">
            <div className="col-lg-5">
            <div className="flex items-baseline">
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
                          <option value={'f_name'}>Resident Name</option>
                          <option value={'id'}>Resident Code</option>
                          {/* <option value={'category'}>Category</option>
                          <option value={'class'}>Resident Class</option> */}
                          
                        </select>
                      </div>
                    </div>
            </div>
            </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 flex justify-end">
            <PrintAndDownload/>
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
          <div className='bg-white mt-5'>
        <div style={{ height: 400, width: '100%', }} className="bg-white">
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
              disableColumnMenu
               components={{
              LoadingOverlay: LinearProgress,
               }}
                loading={loading}

          />
        </div>
      
    </div>
    </Box>
  
    </div>
  )
}

export default ResidentProfile
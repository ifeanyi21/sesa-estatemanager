import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React,{useState} from 'react'
import BarChartContainer from '../../../Charts/BarChart/BarChart'
import DoughnutChart from '../../../Charts/DoughnutChart'
import { DotIcon } from '../../../SideBar/icons'

function WorkRate() {
    const chartData = [
        {
          id:1,
          time:"5am",
          securityGuard: 383,
          system:200
        },
        {
          id:2,
          time:"6am",
          securityGuard: 883,
           system:500
        },
        {
          id:3,
          time:"7am",
          securityGuard: 898,
           system:800
        },
        {
          id:4,
          time:"8am",
          securityGuard: 383,
           system:240
        },
        {
          id:5,
          time:"9am",
          securityGuard: 903,
           system:100
        },
        {
          id:6,
          time:"10am",
          securityGuard: 203,
           system:202
        },
        {
          id:7,
          time:"11am",
          securityGuard: 813,
           system:290
        }
       
      ]

      const totalCheckin = [30000,20000]

      const totalCheckOut = [40000,20000]

          // eslint-disable-next-line 
      const [userData, setUserData] = useState({
        datasets:[{
          data: totalCheckin.map(data=>data),
          backgroundColor:["#08D231","#F7E541"]
    
        }
        ]
      })

        // eslint-disable-next-line 
      const [userCheckout, setUserCheckout] = useState({
        datasets:[{
          data: totalCheckOut.map(data=>data),
          backgroundColor:["#3D08D2","#F74183"]
    
        }
        ]
      })

        const columns = [
    { sortable:false,field: 'date', headerName: 'Date', width: 120 },
    { sortable:false,field: 'modeOfContact', headerName: 'Mode Of Contact', width: 140 },
    { sortable:false,field: 'accessCode', headerName: 'Access Code', width: 140 },
    { sortable:false,field: 'name', headerName: 'Name', width: 140 },
    { sortable:false,field: 'number', headerName: 'Number', width: 140,},
    { sortable:false,field: 'modeOfEntry', headerName: 'Mode of Entry',width:120,},
    { sortable:false,field: 'nos', headerName: 'Nos of Occ.', width: 120,},
    { sortable:false,field: 'accessType', headerName: 'Access Type', width: 120,},
    { sortable:false,field: 'time', headerName: 'Time', width: 80,},
   
  ];

   const workRate = [
        {
            id:1,
            date:"21 March, 2021",
            modeOfContact:'Security',
            accessCode:"V31483",
            name:"Daniella Rio",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        },
        {
            id:2,
            date:"21 March, 2021",
            modeOfContact:'Security',
            accessCode:"V38373",
            name:"Daniella Rio",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        },
        {
            id:3,
              date:"21 March, 2021",
            modeOfContact:'Security',
            accessCode:"V32283",
            name:"Deji",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
        ,
        {
            id:4,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:5,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:6,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:7,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:8,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:9,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:10,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:11,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:12,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
         ,
        {
            id:13,
          date:"21 March, 2021",
              modeOfContact:'System',
            accessCode:"V38383",
            name:"Sola Ayo",
            number:"0904848494",
            modeOfEntry:"Car",
            nos:"2",
            accessType:"Check in",
            time:"3:15pm"
        }
      ]

      const [pageSize, setPageSize] = useState(5);

  return (
    <div>
        <div className="row">
            <div className="col-12 mb-4 flex justify-end" style={{marginTop:'2rem'}}>
                <span>Sort By</span> 
                <select name="" id="" className='ml-2'>
                    <option value="">Today</option>
                </select>
            </div>
            <div className="col-lg-8 mb-5" >
                <div className="bg-white p-4 rounded" style={{height:490}}>
                  <h4 className='mb-8'>Check In</h4>
                  <BarChartContainer data = {chartData} Xaxis="time" Yaxis="securityGuard" datakey="securityGuard" fill="#08D231" datakey1="system" fill1="#F7E541" />
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="bg-white p-4 rounded" style={{height:490}}>
                    <DoughnutChart chartData={userData} options={{
                    plugins: {
                      legend: {
                        display: true,
                        position: "bottom",
                        labels:{
                          usePointStyle:true,
                          pointStyle:"circle",
                        }
                      },
                    },
                  }}/>
                  <div className="flex justify-between my-8">
                   <div className='flex items-center'><DotIcon color="#08D231"/> <span className='ml-2'>Security Guard</span> </div>
                  <p className='m-0'>20,000</p>
                </div>
                <div className="flex justify-between">
              <div className='flex items-center'> <DotIcon color="#F7E541"/> <span className='ml-2'>System</span>  </div>
                  <p className='m-0'>20,000</p>
                </div>
                </div>
            </div>
            <div className="col-lg-8 mb-5">
                <div className="bg-white p-4 rounded" style={{height:490}}>
                    <h4 className='mb-8'>Check Out</h4>
               <BarChartContainer data = {chartData} Xaxis="time" Yaxis="securityGuard" datakey="securityGuard" fill="#3D08D2" datakey1="system" fill1="#F74183" />
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="bg-white p-4 rounded" style={{height:490}}>
                <DoughnutChart chartData={userCheckout} options={{
                  plugins: {
                    legend: {
                      display: true,
                      position: "bottom",
                      labels:{
                        usePointStyle:true,
                        pointStyle:"circle",
                      }
                    },
                  },
                }}/>
                <div className="flex justify-between my-8">
                  <div className='flex items-center'><DotIcon color="#3D08D2"/> <span className='ml-2'>Security Guard</span> </div>
                  <p className='m-0'>20,000</p>
                </div>
                <div className="flex justify-between">
                  <div className='flex items-center'> <DotIcon color="#F74183"/> <span className='ml-2'>System</span>  </div>
                  <p className='m-0'>20,000</p>
                </div>
                </div>
            </div>
            <div className="col-lg-12">
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
          },
          '& .MuiDataGrid-footerContainer':{
            borderTop:0,
            backgroundColor:'#F1F1F1',
            paddingTop:4
          },
          "& .MuiDataGrid-selectedRowCount":{
            display:'none'
          }
      }}
    >
           <div className='bg-white mt-8'>
        <div style={{ height: 400, width: '100%', }} className="bg-white">
          <DataGrid
            rows={workRate}
            columns={columns}
            checkboxSelection
            disableSelectionOnClick
            disableColumnMenu
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            //onSelectionModelChange={(ids) => onRowsSelectionHandler(ids)}
          />
        </div>
      
    </div> 
    </Box>
            </div>
        </div>
    </div>
  )
}

export default WorkRate
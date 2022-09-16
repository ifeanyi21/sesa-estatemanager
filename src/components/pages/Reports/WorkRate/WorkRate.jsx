import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React,{useState} from 'react'
import BarChart from '../../../Charts/BarChart/BarChart'
import DoughnutChart from '../../../Charts/DoughnutChart'

function WorkRate() {
    const chartData = [
        {
          id:1,
          day:"Monday",
          funds: 3883,
        },
        {
          id:2,
          day:"Tuesday",
          funds: 8883,
        },
        {
          id:3,
          day:"Wednesday",
          funds: 883,
        },
        {
          id:4,
          day:"Thursday",
          funds: 883,
        },
        {
          id:5,
          day:"Friday",
          funds: 883,
        },
        {
          id:6,
          day:"Saturday",
          funds: 883,
        },
        {
          id:7,
          day:"Sunday",
          funds: 883,
        }
       
      ]
    
      // eslint-disable-next-line 
      const [userData, setUserData] = useState({
        labels: chartData.map(data=> data.day),
        datasets:[{
          label: "Security Guard",
          data: chartData.map(data=>data.funds),
          backgroundColor:["#08D231"]
    
        },
        {
            label: "System",
            data: chartData.map(data=>data.funds),
            backgroundColor:["#F7E541"],
      
          }]
      })

        // eslint-disable-next-line 
      const [userCheckout, setUserCheckout] = useState({
        labels: chartData.map(data=> data.day),
        datasets:[{
          label: "Security Guard",
          data: chartData.map(data=>data.funds),
          backgroundColor:["#3D08D2"]
    
        },
        {
            label: "System",
            data: chartData.map(data=>data.funds),
            backgroundColor:["#F74183"],
      
          }]
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
            <div className="col-lg-8 mb-5">
                <div className="bg-white p-4 rounded" style={{height:380}}>
                    <BarChart chartData={userData} options={{
                       responsive: true,
                       maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            display: true,
                            position: "top",
                            labels:{
                              usePointStyle:true,
                              pointStyle:"circle",
                            }
                          },
                        },
                      }}/>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="bg-white p-4 rounded" style={{height:380}}>
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
                </div>
            </div>
            <div className="col-lg-8 mb-5">
                <div className="bg-white p-4 rounded" style={{height:380}}>
                <BarChart chartData={userCheckout} options={{
                     responsive: true,
                     maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: true,
                        position: "top",
                        labels:{
                          usePointStyle:true,
                          pointStyle:"circle",
                        }
                      },
                    },
                  }}/>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="bg-white p-4 rounded" style={{height:380}}>
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
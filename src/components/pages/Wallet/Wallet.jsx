import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import WalletCard from '../../WalletCard/WalletCard'
import WalletDropDown from './WalletDropDown'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'
import BarChartContainer from '../../Charts/BarChart/BarChart'

function Balance(params){
  return(
    <p className={params.row.transactionType === "Credit"?"text-success mb-0":"text-danger mb-0" }>₦ {params.row.balance}</p>
  )
}

function Wallet() {
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
          funds: 283,
        },
        {
          id:4,
          day:"Thursday",
          funds: 983,
        },
        {
          id:5,
          day:"Friday",
          funds: 1083,
        },
        {
          id:6,
          day:"Saturday",
          funds: 6883,
        },
        {
          id:7,
          day:"Sunday",
          funds: 2883,
        }
       
      ]
    
      // eslint-disable-next-line 
      const [userData, setUserData] = useState({
        labels: chartData.map(data=> data.day),
        datasets:[{
          label: "Wallet Trend",
          data: chartData.map(data=>data.funds),
          backgroundColor:["#08D231"]
    
        }]
      })

      const dummyWallet = [
        {
            id:1,
            date:'21 March, 2021',
            transactionType:'Credit',
            transactionCategory:'Fund Wallet',
            transactionId:"77266272",
            amount:'5,000',
            time: '3:45pm',
            balance:'2,000'
        },
        {
            id:2,
            date:'22 March, 2022',
            transactionType:'Debit',
            transactionCategory:'Product Purchase',
            transactionId:"772669072",
            amount:'9,000',
            time: '3:35pm',
            balance:'8,000'
        },
        {
            id:3,
            date:'22 March, 2022',
            transactionType:'Credit',
            transactionCategory:'Fund Wallet',
            transactionId:"772669072",
            amount:'9,000',
            time: '3:35pm',
            balance:'8,000'
        },
        {
            id:4,
            date:'22 March, 2022',
            transactionType:'Credit',
            transactionCategory:'Fund Wallet',
            transactionId:"772669072",
            amount:'9,000',
            time: '3:35pm',
            balance:'8,000'
        }
    ]

    const columns = [
      { sortable:false,field: 'date', headerName: 'Date', width: 150 },
      { sortable:false,field: 'transactionType', headerName: 'Transaction Type', width: 160 },
      { sortable:false,field: 'transactionCategory', headerName: 'Transaction Category', width: 200 },
      { sortable:false,field: 'transactionId', headerName: 'Transaction ID', width: 170 },
      { sortable:false,field: 'amount', headerName: 'Amount', width: 120,
      renderCell:(params)=>{
        return <Balance {...params}/>
      }
      },
      { sortable:false,field: 'time', headerName: 'Time', width: 100 },
      { sortable:false,field: 'balance', headerName: 'Balance', width: 130 },
      { sortable:false,field:'toggle', headerName: '', 
      renderCell:(params)=>{
         return <WalletDropDown {...params}/>
      },  
    
  }
    ];

    const [sort, setSort] = useState("transactionCategory")
    const [data, setData] = useState([])

    useEffect(()=>{
      setData(dummyWallet)
  // eslint-disable-next-line 
    },[])
  

    const handleSearch = (e)=>{
      const searchValue = e.target.value;
      const findItem = dummyWallet.filter(item=>{
       return item[sort].toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      })
  
      setData(findItem)
  
    }

  return (
    <div>
        <div className="row">
            <div className="col-lg-8 mb-3">
                <div className="p-9 bg-white" style={{height:380}}>
                  <header className='flex justify-between mb-2'>
                    <p className='m-0'>Wallet Trend</p>
                     <select name="" id="" className='ml-2'>
                    <option value="">Today</option>
                </select>
                  </header>
                  <BarChartContainer data = {chartData} Xaxis="day" Yaxis="funds" datakey="funds" fill="#08D231" />
                </div>
            </div>
            <div className="col-lg-4 mb-3">
                <div className="p-3 bg-white">
                    <WalletCard name='Estate Wallet' to={'/wallet'}/>
                    <div className='mt-5 mb-4 flex justify-between'>
                        <Link to={'/wallet/request'} style={{backgroundColor:'#0556E5'}} className='text-white rounded-md p-4 no-underline'>Fund Wallet</Link>
                        <Link to={'/wallet/request'} style={{backgroundColor:'#E1ECFE', color:'#0556E5'}} className='rounded-md p-4 no-underline'>Request</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-7">
            <div className="flex items-baseline">
                  <h6 className='mr-3 w-2/5'>Transaction List</h6>
                  <div className='ml-4 w-full'>
                    <div className="mt-1 relative rounded-md h-9">
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
                          <option value={'transactionCategory'}>Transaction Category</option>
                          <option value={'amount'}>Amount</option>
                          <option value={'transactionType'}>Transaction Type</option>
                          <option value={'transactionId'}>Transaction ID</option>
                          <option value={'date'}>Date</option>
                          <option value={'time'}>Time</option>
                          <option value={'balance'}>Balance</option>
                        </select>
                      </div>
                    </div>
            </div>
                    
                  </div>
            </div>
            <div className="col-lg-5">
            <PrintAndDownload/>
            </div>
          </div>
            </div>
        </div>
        <div className="mt-8">
        <Box
      sx={{
        height: 300,
        width: '100%',
        '& .MuiDataGrid-columnSeparator--sideRight': {
          display: 'none !important',
      },
      '& .MuiDataGrid-columnHeaderTitle':{
        fontWeight:600
      }
      }}
    >
      <div style={{ height: 400, width: '100%', }} className="bg-white">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
      />
    </div>
    </Box>
 
       
        </div>
    </div>
  )
}

export default Wallet
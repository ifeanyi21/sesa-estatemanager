import React,{useState} from 'react'
import DoughnutChart from '../../../Charts/DoughnutChart'
import WalletCard from '../../../WalletCard/WalletCard'
import CSS from '../Overview.module.css'


function SideBarColoumn() {
  const chartData = [
    {
      id:1,
      wallet:"Security Levy",
      funds: 12000,
    },
    {
      id:3,
      wallet:"Estate Dues",
      funds: 9000,
    },
    {
      id:4,
      wallet:"LAWMA",
      funds: 6000,
    },
   
  ]

  // eslint-disable-next-line 
  const [userData, setUserData] = useState({
    labels: chartData.map(data=> data.wallet),
    datasets:[{
      label: "Wallet Trend",
      data: chartData.map(data=>data.funds),
      backgroundColor:["#084CD1","#E95FCA","#3CE712","#E1E3F9","#DEEDFA"]

    }]
  })
  return (
    <div className={`${CSS.SideBarColoumnsm} border-l rounded-bl-md border-gray-300 p-4 bg-white`} style={{width:'24%',height:800}}>
        <WalletCard to={'/wallet'} name='Estate Wallet'/>
      <div className='mt-8 rounded py-5 shadow-md px-2 mb-2' style={{height:500}}>
        <h6 className='text-xl font-medium text-left pl-8 mb-4'>Today's Inflow</h6>
      <DoughnutChart chartData={userData}  options={{
          responsive: true,
          maintainAspectRatio: false,
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
  )
}

export default SideBarColoumn
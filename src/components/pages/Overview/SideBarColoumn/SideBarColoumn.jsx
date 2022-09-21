import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import WalletCard from '../../../WalletCard/WalletCard'
import CSS from '../Overview.module.css'
import {DotIcon} from '../../../SideBar/icons'


function SideBarColoumn() {
  const chartData = [
    {
      id:1,
      name:"Security Levy",
      funds: 12000,
    },
    {
      id:3,
      name:"Estate Dues",
      funds: 9000,
    },
    {
      id:4,
      name:"LAWMA",
      funds: 6000,
    },
   
  ]

  const COLORS = ["#E95FCA", "#084CD1", "#3CE712",];

  return (
    <div className={`${CSS.SideBarColoumnsm} border-l rounded-bl-md border-gray-300 p-4 bg-white`} style={{width:'24%', height:1000}}>
        <WalletCard to={'/wallet'} name='Estate Wallet'/>
      <div className='mt-8 rounded py-5 px-4 shadow-lg' style={{width:'100%',height:600}}>
        <h6 className='font-medium text-left'>Today's Inflow</h6>
        <ResponsiveContainer width={"100%"} height={"75%"}>
            <PieChart>
            <Pie
              data={chartData}
              cx={130}
              cy={150}
              innerRadius={70}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={10}
              dataKey="funds"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div>
           <div className='flex justify-between mb-6'>
          <div className='text-base mb-0 flex items-center'>
            <DotIcon color="#E95FCA"/>
            <span className='ml-3'>Security Levy</span>
          </div>
          <span>₦ 12,000</span>
        </div>

            <div className='flex justify-between mb-6'>
          <div className='text-base mb-0 flex items-center'>
               <DotIcon color="#3CE712"/>
            <span className='ml-3'>Estate Dues</span>
          </div>
          <span>₦ 9,000</span>
        </div>

            <div className='flex justify-between mb-6'>
          <div className='text-base mb-0 flex items-center'>
               <DotIcon color="#084CD1"/>
            <span className='ml-3'>LAWMA</span>
          </div>
          <span>₦ 6,000</span>
        </div>

        </div>
      </div>
            
    </div>
  )
}

export default SideBarColoumn
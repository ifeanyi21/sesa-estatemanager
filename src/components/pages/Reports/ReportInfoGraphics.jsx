import React,{useState} from 'react'
import LineChartContainer from '../../Charts/LineChart/LineChart'
import {DotIcon} from '../../SideBar/icons'

function ReportInfoGraphics() {
    const chartData = [
        {
            id:1,
            day:"Mon",
            checkout:83,
            checkin: 10,
          },
          {
            id:3,
            day:"Tues",
            checkout:3,
            checkin: 30,
          },
          {
            id:4,
            day:"Wed",
            checkout:13,
            checkin: 62,
          },
          {
            id:5,
            day:"Thur",
            checkout:73,
            checkin: 13,
          },
          {
            id:6,
            day:"Fri",
            checkout:53,
            checkin: 49,
          },
          {
            id:7,
            day:"Sat",
            checkout:21,
            checkin: 99,
          },
          {
            id:8,
            day:"Sun",
            checkout:48,
            checkin: 100,
          },
       
      ]
    
      const checkOut = [
        {
            id:1,
            day:"Monday",
            funds: 20,
          },
          {
            id:3,
            day:"Tuesday",
            funds: 9,
          },
          {
            id:4,
            day:"Wednesday",
            funds: 42,
          },
          {
            id:5,
            day:"Thursday",
            funds: 33,
          },
          {
            id:6,
            day:"Friday",
            funds: 69,
          },
          {
            id:7,
            day:"Saturday",
            funds: 19,
          },
          {
            id:28,
            day:"Sunday",
            funds: 9,
          },
       
      ]
      // eslint-disable-next-line 
  const [userData, setUserData] = useState({
    labels: chartData.map(data=> data.day),
    datasets:[{
      label: "Check In",
      data: chartData.map(data=>data.funds),
      backgroundColor:["#3DEABA"]

    },{
        label: "Check Out",
        data: checkOut.map(data=>data.funds),
        backgroundColor:["#AE1911"]
    }]
  })
  return (
    <div className="bg-white p-4">
    <div className="row">
        <div className="col-lg-5 mb-3 border-r-2" style={{height:350}}>
            <div className="p-3 mb-16">
            <h6>Count</h6>
            </div>
           
        <div className="bg-white p-3 flex justify-center mx-auto">
            <div>
                 <p>Check In</p>
                 <div className='flex items-center'>
                  <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="47" height="47" rx="23.5" fill="#CBF1DE"/>
                    <mask id="mask0_511_36488" style={{maskType:"alpha"}}  maskUnits="userSpaceOnUse" x="8" y="8" width="31" height="30">
                    <rect x="8.7041" y="8.26953" width="29.5926" height="29.5926" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_511_36488)">
                    <path d="M25.3502 15.0512C24.6721 15.0512 24.0917 14.8096 23.6092 14.3262C23.1258 13.8437 22.8842 13.2634 22.8842 12.5852C22.8842 11.907 23.1258 11.3263 23.6092 10.8429C24.0917 10.3604 24.6721 10.1191 25.3502 10.1191C26.0284 10.1191 26.6091 10.3604 27.0925 10.8429C27.575 11.3263 27.8163 11.907 27.8163 12.5852C27.8163 13.2634 27.575 13.8437 27.0925 14.3262C26.6091 14.8096 26.0284 15.0512 25.3502 15.0512ZM18.9693 36.6292C18.5172 36.6292 18.1576 36.4701 17.8904 36.152C17.6233 35.833 17.5411 35.4578 17.6438 35.0262L20.788 19.2435L18.5686 20.1066V23.0659C18.5686 23.4153 18.4506 23.7079 18.2147 23.9438C17.978 24.1806 17.6849 24.2989 17.3356 24.2989C16.9862 24.2989 16.6932 24.1806 16.4564 23.9438C16.2205 23.7079 16.1025 23.4153 16.1025 23.0659V20.1375C16.1025 19.6443 16.2361 19.1921 16.5033 18.7811C16.7704 18.3701 17.1403 18.0619 17.613 17.8564L22.3293 15.8527C22.9253 15.6061 23.5315 15.5802 24.148 15.775C24.7645 15.9707 25.2475 16.3459 25.5968 16.9008L26.8299 18.8736C27.282 19.5929 27.8676 20.2094 28.5869 20.7232C29.3062 21.2369 30.1282 21.576 31.053 21.7404C31.3612 21.7815 31.6181 21.92 31.8236 22.1559C32.0291 22.3927 32.1319 22.6549 32.1319 22.9426C32.1319 23.3331 31.9933 23.6569 31.7163 23.9142C31.4385 24.1707 31.1249 24.2681 30.7755 24.2064C29.6864 24.042 28.6745 23.6976 27.7398 23.1732C26.8044 22.6495 26.0078 21.9973 25.3502 21.2164L24.6104 24.9154L26.4291 26.6417C26.6757 26.8883 26.866 27.1604 27 27.4579C27.1332 27.7563 27.1998 28.0802 27.1998 28.4296V35.3961C27.1998 35.7455 27.0818 36.0381 26.8459 36.2741C26.6091 36.5108 26.3161 36.6292 25.9667 36.6292C25.6174 36.6292 25.3247 36.5108 25.0888 36.2741C24.8521 36.0381 24.7337 35.7455 24.7337 35.3961V29.231L22.1444 26.765L20.1407 35.7044C20.079 35.951 19.9405 36.1668 19.7252 36.3517C19.509 36.5367 19.257 36.6292 18.9693 36.6292Z" fill="#17814D"/>
                    </g>
                    </svg>

         
                   <p className='text-base mb-0 ml-3'>5,000</p>
                 </div>
  
            </div>
            <div className='px-3 mx-auto'>
            <p>Check Out</p>
              <div className='flex items-center'>
                <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="47" height="47" rx="23.5" fill="#F3CDCB"/>
                  <mask id="mask0_511_36496" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="8" y="8" width="31" height="30">
                  <rect x="8.7041" y="8.26953" width="29.5926" height="29.5926" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_511_36496)">
                  <path d="M25.3502 15.0512C24.6721 15.0512 24.0917 14.8096 23.6092 14.3262C23.1258 13.8437 22.8842 13.2634 22.8842 12.5852C22.8842 11.907 23.1258 11.3263 23.6092 10.8429C24.0917 10.3604 24.6721 10.1191 25.3502 10.1191C26.0284 10.1191 26.6091 10.3604 27.0925 10.8429C27.575 11.3263 27.8163 11.907 27.8163 12.5852C27.8163 13.2634 27.575 13.8437 27.0925 14.3262C26.6091 14.8096 26.0284 15.0512 25.3502 15.0512ZM18.9693 36.6292C18.5172 36.6292 18.1576 36.4701 17.8904 36.152C17.6233 35.833 17.5411 35.4578 17.6438 35.0262L20.788 19.2435L18.5686 20.1066V23.0659C18.5686 23.4153 18.4506 23.7079 18.2147 23.9438C17.978 24.1806 17.6849 24.2989 17.3356 24.2989C16.9862 24.2989 16.6932 24.1806 16.4564 23.9438C16.2205 23.7079 16.1025 23.4153 16.1025 23.0659V20.1375C16.1025 19.6443 16.2361 19.1921 16.5033 18.7811C16.7704 18.3701 17.1403 18.0619 17.613 17.8564L22.3293 15.8527C22.9253 15.6061 23.5315 15.5802 24.148 15.775C24.7645 15.9707 25.2475 16.3459 25.5968 16.9008L26.8299 18.8736C27.282 19.5929 27.8676 20.2094 28.5869 20.7232C29.3062 21.2369 30.1282 21.576 31.053 21.7404C31.3612 21.7815 31.6181 21.92 31.8236 22.1559C32.0291 22.3927 32.1319 22.6549 32.1319 22.9426C32.1319 23.3331 31.9933 23.6569 31.7163 23.9142C31.4385 24.1707 31.1249 24.2681 30.7755 24.2064C29.6864 24.042 28.6745 23.6976 27.7398 23.1732C26.8044 22.6495 26.0078 21.9973 25.3502 21.2164L24.6104 24.9154L26.4291 26.6417C26.6757 26.8883 26.866 27.1604 27 27.4579C27.1332 27.7563 27.1998 28.0802 27.1998 28.4296V35.3961C27.1998 35.7455 27.0818 36.0381 26.8459 36.2741C26.6091 36.5108 26.3161 36.6292 25.9667 36.6292C25.6174 36.6292 25.3247 36.5108 25.0888 36.2741C24.8521 36.0381 24.7337 35.7455 24.7337 35.3961V29.231L22.1444 26.765L20.1407 35.7044C20.079 35.951 19.9405 36.1668 19.7252 36.3517C19.509 36.5367 19.257 36.6292 18.9693 36.6292Z" fill="#AE1911"/>
                  </g>
                  </svg>

                <p className='text-base mb-0 ml-3'>5,000</p>
              </div>
           

            </div>
        </div>
        </div>
        <div className="col-lg-7 mb-3" style={{height:350}}>
          <div className="flex justify-between">
            <h6>Trend</h6>
            <div className="flex justify-between">
              <div className="flex items-baseline"><DotIcon color="#08D231"/> <span className="ml-1">Check-in</span> </div>
              <div className="flex items-baseline ml-3"><DotIcon color="#AE1911"/> <span className="ml-1">Check-out</span> </div>
            </div>
          </div>
          <LineChartContainer data = {chartData} Xaxis="day" Yaxis="funds" datakey="funds" fill1="#25BF18" fill2="#AE1911"/>
        </div>
    </div>
</div>
  )
}

export default ReportInfoGraphics
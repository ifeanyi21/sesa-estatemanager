import React from 'react'
import { Link } from 'react-router-dom'

function EventRequests() {
    const requests = [
        {
          id:1,
          code:"R63636",
          pCode:"P03636",
          status:"Pending"
        },
        {
          id:2,
          code:"R63636",
          pCode:"P03636",
          status:"Approved"
        },
        {
          id:3,
          code:"R63636",
          pCode:"P03636",
          status:"Declined"
        }
      ]
  return (
    <div>
    <div className="row">
      {
        requests.map(request=>{
          return(
            <div key={request.id} className="p-3 col-lg-5 mb-8 mr-16">
            <div className="  bg-white rounded p-3">
                <header className='flex justify-between items-baseline mb-8'>
                <Link to={'/approvals/event/'+request.id} className='p-2 no-underline rounded' style={{backgroundColor:'#EEF2FD',color:"#0446B9"}}>
                ResidentUser Request
                </Link>
                <p>21 March, 2021</p>
                </header>
                <main>
                    <p>Resident Code : <span>{request.code}</span></p>
                    <p>Property Code : <span>{request.pCode}</span></p>
                    <p>Status : <span className={`${request.status === "Pending" &&'text-warning'} ${request.status === "Approved" &&'text-success'} ${request.status === "Declined" &&'text-danger'}`}>{request.status}</span></p>
                </main>
               
            </div>
            </div>
          )
        })
      }
       
        
    </div>
</div>
  )
}

export default EventRequests
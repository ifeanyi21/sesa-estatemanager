import React from 'react'
import {Link} from 'react-router-dom'
import SiteWorkerForm from '../Form/SiteWorkerForm'

function AddSiteWorker() {
  return (
    <div>
        <Link to='/site-worker' className='no-underline text-sm'>
            Site Worker
        </Link> <span className='text-sm'>/ Add Site Worker</span> 
        <div className="bg-white p-4 mt-8 rounded">
            <SiteWorkerForm/>
        </div>
    </div>
  )
}

export default AddSiteWorker



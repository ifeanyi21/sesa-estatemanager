import React from 'react'
import {Link} from 'react-router-dom'
import PrintAndDownload from '../../PrintAndDownload/PrintAndDownloadButton'
import { TransactionIcon } from '../../SideBar/icons'
import WalletCard from '../../WalletCard/WalletCard'
import RequestTab from './RequestTab/RequestTab'

function Request() {
  return (
    <div>
        <Link to='/wallet' className='no-underline'>
            Wallet
        </Link> / Wallet Details

        <div className="mt-8">
            <div className="row">
                <div className="col-lg-8 mb-5">
                    <div className="bg-white p-3 rounded-md">
                        <div className="row">
                        <div className="col-lg-4">
                            <h4>Request History</h4>
                        </div>
                        <div className="col-lg-8 flex justify-end">
                            <select name="" id="" className='mr-5'>
                                <option value="">Today</option>
                                <option value="">This week</option>
                            </select>
                            <PrintAndDownload/>
                        </div>
                        </div>

                        <div className="mt-8">
                            <p className='text-muted'>21 March, 2021</p>

                            <div className="row">
                                <div className="table-responsive">
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <td><TransactionIcon/></td>
                                                <td>Estate Withdrawal Request</td>
                                                <td>Pending</td>
                                                <td>Description</td>
                                                <td>₦5,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                   
                    </div>
              
                </div>
                <div className="col-lg-4">
                    <div className="p-3 bg-white rounded-md" >
                    <WalletCard name='Estate Wallet' to='/wallet'/>

                    <div className="mt-8">
                        <RequestTab/>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Request
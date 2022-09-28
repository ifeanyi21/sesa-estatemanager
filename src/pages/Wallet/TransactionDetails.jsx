import React from 'react'
import {Link} from 'react-router-dom'
import PrintAndDownload from '../../components/PrintAndDownload/PrintAndDownloadButton'

function TransactionDetails() {
  return (
    <div>
         <Link to='/wallet' className='no-underline'>
            Wallet
        </Link> / Transaction Details

        <div className="mt-8 p-5 bg-white">
            <div className="p-3 bg-red-200 h-28 rounded"></div>
            <header className='flex justify-end mt-8'>
                <PrintAndDownload/>
            </header>
            <div className="table-responsive mt-8">
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                        <td>Transaction Date</td>
                        <td>21 March, 2021</td>
                        </tr>
                        <tr>
                        <td>Transaction Time</td>
                        <td>3:45pm</td>
                        </tr>
                        <tr>
                        <td>Transaction Type</td>
                        <td>Credit</td>
                        </tr>
                        <tr>
                        <td>Transaction Category</td>
                        <td>Product Purchase</td>
                        </tr>
                        <tr>
                        <td>Transaction Source</td>
                        <td>A79282</td>
                        </tr>
                        <tr>
                        <td>Transaction Amount</td>
                        <td>23,000</td>
                        </tr>
                        <tr>
                        <td>Transaction ID</td>
                        <td>T627282</td>
                        </tr>
                        <tr>
                        <td>Transaction Narration</td>
                        <td></td>
                        </tr>
                        <tr>
                        <td>Balance</td>
                        <td>₦5,000</td>
                        </tr>
                    </tbody>
                </table>
                </div>
        </div>
    </div>
  )
}

export default TransactionDetails
import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ViewRule() {
  return (
    <div>
        <Link to={'/rules'} className="no-underline">Estate Rules & Reg.</Link> <span>/ Details</span>

        <div className="bg-white p-4 mt-10">
            <Form>
                <div className="row">
                    <div className="col-lg-6 mb-5">
                        <label className='mb-3'>Rule Title</label>
                        <Form.Control/>
                    </div>
                    <div className="col-lg-9 mb-5">
                        <label className='mb-3'>Estate Rules & Regulations</label>
                        <Form.Control as={'textarea'} rows={6}/>
                    </div>
                </div>
            </Form>
        </div>
    </div>
  )
}

export default ViewRule
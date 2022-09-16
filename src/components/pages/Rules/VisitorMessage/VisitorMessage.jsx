import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function VisitorMessage() {
  return (
    <div>
    <Link to={'/rules'} className="no-underline">Estate Rules & Reg.</Link> <span>/ Add Visitor Message</span>

    <div className="bg-white p-4 mt-10">
        <Form>
            <div className="row">
                <div className="col-lg-9 mb-5">
                    <label className='mb-3'>Add Message</label>
                    <Form.Control as={'textarea'} rows={6}/>
                </div>
                <div className="col-lg-12">
                    <div className="flex justify-end">
                        <button className='btn btn-primary btn-sm'>Upload</button>
                    </div>
                </div>
            </div>
        </Form>
    </div>
</div>
  )
}

export default VisitorMessage
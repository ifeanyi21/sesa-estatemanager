import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import LoadingIcon from '../../../../images/loadingIcon.gif'

export default function ValidateUserModal(props) {
  const [loading, setLoading] = useState(false)

  const handleVerification = (e)=>{
    e.preventDefault()

    setLoading(true)

    setTimeout(()=>{
      setLoading(false)
    console.count()
    },3000)
  }
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      {
        !loading&& <Modal.Header className='border-0' closeButton>
      </Modal.Header>
      }
   
      <Modal.Body className='p-5'>
        {
          !loading?  <>
             <h4 className='text-center mb-5'>Profile Verification</h4>
        <Form onSubmit={handleVerification}>
            <div className="row text-sm">
                <div className="col-lg-12 mb-14">
                    <label className='mb-3'>ID Type</label>
                    <Form.Select style={{fontSize:'0.875rem'}}>
                        <option value={0}>Mobile Number</option>
                        <option value={1}>Government ID</option>
                        <option value={2}>BVN</option>
                    </Form.Select>
                </div>
                <div className="col-lg-12 mb-20">
                    <label className='mb-3'>ID Number</label>
                    <Form.Control required />
                </div>
                <div className="col-lg-12 mb-3 text-center">
                  <p className='text-base mb-4'>Powered By <span className='font-bold'>Identity Pass</span> </p>
                    <Button type='submit' className='w-full'>Confrim</Button>
                </div>
              
            </div> 
            </Form>
        </>:
          <img src={LoadingIcon} alt="" />
        }
      </Modal.Body>
    </Modal>
  );
}

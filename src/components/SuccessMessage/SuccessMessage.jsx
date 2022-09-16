import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate,useLocation } from 'react-router-dom';
import { DoneIcon } from '../SideBar/icons';

function SuccessModal(props) {
  const { text,redirecturl, id} = props
  const navigate = useNavigate()
  const location = useLocation()

  const handleRedirectToViewPage = ()=>{
    navigate(redirecturl+'/'+id)
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Body className='text-center mt-5'>
        <div className='rounded-full block mx-auto w-1/4 text-8xl mb-5'>
        <DoneIcon/>
        </div>
        {
          location.pathname==="/payments/add-payment/add-reciepients" ? <p>You have successfully created a payment dues</p> :
        <p>You have successfully added {text}</p>
        }
        
      </Modal.Body>
    
      <div className='text-center mb-5 col-12 mx-auto'>
        <Button className='w-72' onClick={handleRedirectToViewPage}>View Details</Button>
      </div>

      
    
      
     
    </Modal>
  );
}

export default SuccessModal 
import Modal from 'react-bootstrap/Modal';
import ProfilePicture from '../../../images/security.jpeg'

export default function GenerateID(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='border-0'></Modal.Header>
      <Modal.Body className='p-4'>
        <div className="row border-2 border-gray-500 p-4">
            <div className="col-lg-3">
                <img src={ProfilePicture} className='rounded-full w-24 h-24 object-cover'  alt="ID" />
            </div>
            <div className="col-lg-6 mb-10">
                <p className='m-0'>Ajao Estate</p>
                <p className='text-xs text-muted'>Estate Name</p>
                <div className='my-3'></div>
                <p className='m-0'>Isaac Newton</p>
                <p className='text-xs text-muted'>Estate Staff</p>
                <div className='my-3'></div>
                <p className='m-0'>098383</p>
                <p className='text-xs text-muted'>Staff ID</p>
            </div>
            <div className="text-center text-xs text-muted">
            <p className='mb-2'>If found please return to the EstateManager at No 12, Adeniran Ajao Estate</p>
            <p className='m-0'>Powered by SESAdigital ( www.sesadigital.com)</p>
            </div>
        </div>
        <div className="flex justify-center mt-10">
        <button className='btn btn-primary btn-lg w-80'>Print</button>
        </div>

      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}


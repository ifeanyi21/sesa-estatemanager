import React,{useState,useContext} from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AlphaIcon } from '../../../SideBar/icons'
import SuccessModal from '../../../SuccessMessage/SuccessMessage'
import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import PaymentContext from '../../../store/paymentStore'


function AddReciepients() {

    const [state] = useContext(PaymentContext)

    console.log(state);
   
    const dummyProperty = [
        {
            id:1,
            code:"H73733",
            address:"Blk 2, fit 3 Zone A",
            category:"Residential",
            name:"-",
            type:"2 Bedroom self con",
            class:"Landlord Developer",
        },
        {
            id:2,
            code:"H73733",
            address:"Blk 2, fit 3 Zone A",
            category:"Residential",
            name:"-",
            type:"2 Bedroom self con",
            class:"Landlord Developer",
        },
        {
            id:3,
            code:"H73733",
            address:"Blk 2, fit 3 Zone A",
            category:"Residential",
            name:"-",
            type:"2 Bedroom self con",
            class:"Landlord Developer",
        }
    ]

    const columnsProperty = [
        { sortable:false,field: 'code', headerName: 'Property Code', width: 120 },
        { sortable:false,field: 'address', headerName: 'Address', width: 180 },
        { sortable:false,field: 'category', headerName: 'Property Category', width: 150 },
        { sortable:false,field: 'name', headerName: 'Property Name', width: 150 },
        { sortable:false,field: 'type', headerName: 'Property Type', width: 180,},
        { sortable:false,field:'class', headerName: 'Residential Class', width:180 }
      ];

    const dummyResident = [
        {
            id:1,
            code:"H73733",
            address:"Blk 2, fit 3 Zone A",
            category:"Residential",
            name:"Chris",
            pName:"-",
            type:"2 Bedroom self con",
            class:"Landlord Developer",
            alpha:true,
        },
        {
            id:2,
            code:"H73733",
            address:"Blk 2, fit 3 Zone A",
            category:"Residential",
            name:"Chris Doe",
            pName:"-",
            type:"2 Bedroom self con",
            class:"Landlord Developer",
            alpha:false,
        },
        {
            id:3,
            code:"H73733",
            address:"Blk 2, fit 3 Zone A",
            category:"Residential",
            name:"John Dee",
            pName:"-",
            type:"3 Bedroom self con",
            class:"Landlord Developer",
            alpha:true,
        }
    ]

    const columnsResident = [
        { sortable:false,field: 'code', headerName: 'Resident Code', width: 120 },
        { sortable:false,field: 'name', headerName: 'Resident Name', width: 120 },
        { sortable:false,field: 'category', headerName: 'Property Category', width: 150 },
        { sortable:false,field: 'pName', headerName: 'Property Name', width: 150 },
        { sortable:false,field: 'type', headerName: 'Property Type', width: 180,},
        { sortable:false,field:'class', headerName: 'Residential Class', width:180 }
      ];

    const [type, setType] = useState("0")
    const [modalShow, setModalShow] = useState(false);

    const handleSuccessMessage = (e)=>{
        e.preventDefault()
        setModalShow(true)
    }

    const [selectedProperty, setSelectedProperty] = useState([])

    const onSelectedProperty = (ids) => {
      const selectedRowsData = ids.map((id) => dummyProperty.find((row) => row.id === id));
      setSelectedProperty(selectedRowsData)
  
    };

    const [selectedResident, setSelectedResident] = useState([])

    const onSelectedResident = (ids) => {
      const selectedRowsData = ids.map((id) => dummyResident.find((row) => row.id === id));
      setSelectedResident(selectedRowsData)
  
    };     

  return (
    <div>
        <Link to='/payments' className='no-underline text-sm'>
            Payment
        </Link> /  <Link to='/payments/add-payment' className='no-underline text-sm'>
            Add Payment
        </Link>  <span className='text-sm'>/ Add Reciepients</span> 

        <div className="bg-white p-4 mt-8 rounded">
        
            <div className="my-8 justify-center flex">
            <svg width="303" height="31" viewBox="0 0 303 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15.5" cy="15.5" r="15.5" fill="#0446B9"/>
                <line x1="37" y1="15" x2="266" y2="15" stroke="#0446B9"/>
                <circle cx="287.5" cy="15.5" r="15.5" fill="#0446B9"/>
            </svg>

            </div>
       
            <Form className="p-3" onSubmit={handleSuccessMessage}>
            <div>
                <h6 className='mb-8'>Filter Selection</h6>
                <header className='row items-center'>
                    <div className="col-md-4 mb-1">
                        <Form.Select value={type} onChange={(e)=>{setType(e.target.value); setSelectedProperty([]); setSelectedResident([])}}>
                            <option value="0">Households</option>
                            <option value="1">Residents</option>
                        </Form.Select>
                    </div>
                    <div className="col-md-2 mb-1">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                            Filter
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute left-1 z-10 mt-2 w-64 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    <div className='px-4 py-2'>
                                    <p>Property Category</p>

                                    <div className='mb-2'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Business</label>
                                    </div>

                                    <div className='mb-4'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Residential</label>
                                    </div>

                                    <p>Property Type</p>

                                    <div className='mb-2'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>2 Bedroom</label>
                                    </div>

                                    <div className='mb-2'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>3 Bedroom</label>
                                    </div>

                                    <div className='mb-4'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Duplex</label>
                                    </div>

                                    <p>Reisdent Class</p>

                                    <div className='mb-2'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Tenant (Resident)</label>
                                    </div>

                                    <div className='mb-2'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Landlord (Resident)</label>
                                    </div>

                                    <div className='mb-2'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Landlord(Non Resident)</label>
                                    </div>

                                    <div className='mb-4'>
                                    <input type="checkbox" name="" id="" />
                                    <label className='ml-3'>Landlord (Developer)</label>
                                    </div>

                                    <p>Reisdent Category</p>

                                        <div className='mb-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label className='ml-3'>Alphas</label>
                                        </div>

                                        <div className='mb-2'>
                                        <input type="checkbox" name="" id="" />
                                        <label className='ml-3'>Resident User</label>
                                        </div>
                                 
                                    </div>
                           
                                </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </div>
                    {
                        type === "1" && <div className="col-md-4 flex items-start">
                         <p>NB: All alphas are denoted with the icon </p><span className='ml-2'><AlphaIcon/></span>
                     </div>
                    }
                   
                    <div className={`${type === "1" ? 'col-md-2':"col-md-6"} mb-1`}>
                        <div className="flex justify-end">
                            {
                                type === "0" && 
                            <button className={`btn btn-primary btn-sm ${selectedProperty.length<=0&& 'disabled'}`}>Create Dues</button>

                            }
                            {
                              
                                type==="1" &&  <button className={`btn btn-primary btn-sm   ${selectedResident.length<=0&& 'disabled'}`}>Create Dues</button>
                            }
                        </div>
                    </div>
                </header>
            </div>
            
            {
                type==="0" && 
                 <Box
                    sx={{
                        width: '100%',
                        '& .MuiDataGrid-columnSeparator--sideRight': {
                        display: 'none !important',
                    },
                    '& .MuiDataGrid-columnHeaderTitle':{
                        fontWeight:600
                    },
                    "& .MuiCheckbox-root":{
                        color:'#D9D9D9'
                    },
                    '& .MuiCheckbox-root.Mui-checked':{
                        color:"#0446B9"
                    }
                    
                    }} 
                    >
                        <div className='bg-white mt-5'>
                        <div style={{ height: 400, width: '100%', }} className="bg-white">
                        <DataGrid
                            rows={dummyProperty}
                            columns={columnsProperty}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            onSelectionModelChange={(ids) => onSelectedProperty(ids)}
                        />
                        </div>
                    
                    </div> 
                </Box>

          
                
            }

            {
                type==="1" && 
                <Box
                    sx={{
                        width: '100%',
                        '& .MuiDataGrid-columnSeparator--sideRight': {
                        display: 'none !important',
                    },
                    '& .MuiDataGrid-columnHeaderTitle':{
                        fontWeight:600
                    },
                    "& .MuiCheckbox-root":{
                        color:'#D9D9D9'
                    },
                    '& .MuiCheckbox-root.Mui-checked':{
                        color:"#0446B9"
                    }
                    }} 
                    >
                        <div className='bg-white mt-5'>
                        <div style={{ height: 400, width: '100%', }} className="bg-white">
                        <DataGrid
                            rows={dummyResident}
                            columns={columnsResident}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            onSelectionModelChange={(ids) => onSelectedResident(ids)}
                        />
                        </div>
                    
                    </div> 
                </Box>
            }
            </Form>

            <SuccessModal
              text='a Payment'
              redirecturl='/payments'
              id='2'
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

           
    </div>
    </div>
  )
}

export default AddReciepients
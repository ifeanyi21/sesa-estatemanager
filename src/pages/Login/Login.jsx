import React, {useState,useContext } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import { ACTION_TYPES } from '../../components/store/Actions/Actions';
import User from '../../components/store/auth';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function LoadingButton() {
  return (
    <>
      <Button onClick={(e)=>e.preventDefault()} variant="primary" size='lg' disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          className='mr-3'
        />
        <span className='my-auto'>Signing in...</span>
        
      </Button>
    </>
  );
}



function Login() {
  const {dispatch} = useContext(User)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [loadingButton, setLoadingButton] = useState(false)

  const handleEmail = (e)=>{
    setEmail(e.target.value)
    setError(false)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setError(false)
  }

  const navigate = useNavigate()

  const handleLogin = async (e) => {
     //navigate('/overview')
    try {
    e.preventDefault()

    setLoadingButton(true)
    setErrorMessage("")
    setError(false)

    if(email.length >0 && password.length>0){

      // const req = await fetch('https://real.sesadigital.com/api/loginManager',{
      //   method:"POST",
      //   headers:{
      //     "Accept":"application/json", 
      //     "Content-Type":"application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   })
      // })

      // const data = await req.json()

      // console.log(data);

      const data = {
"message": "you are logged in", "token":
"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xv Z2luTWFuYWdlciIsImlhdCI6MTY2MjU1MDg0NiwiZXhwIjoxNjYyNTU0NDQ2LCJuYmYiOjE2NjI1NTA4ND YsImp0aSI6ImF1UHZxWWZJSDJvZVZmekciLCJzdWIiOiI5IiwicHJ2IjoiNmU2ODk2MjI1NGQ2ZGY0MDFk MDNiMzBhMzllMTYyMzY0ZTE2NDZjZCJ9.r5uSXvWTGQeuZhG9-hSTOb2pi8q7hKAMbrQylX5kU6s",
"token_type": "bearer", "manager": {
"id": 9,
"f_name": "Christopher",
"l_name": "John",
"email": "me@me.com",
"email_verified_at": null,
"address": "aba",
"status": "notActive",
"photo": null,
"created_at": "2022-09-07T11:40:24.000000Z", "updated_at": "2022-09-07T11:40:24.000000Z"
},
estates:[
  {
    id:1
  }
],
"expires_in": 3600 }


      if(data.manager){

        dispatch({type:ACTION_TYPES.LOGIN,payload:data.manager})
        localStorage.setItem("sesaToken",data.token)
        navigate('/overview')

      }else{
        setError(true)
          setErrorMessage("Incorrect Credentials")
        setLoadingButton(false)
      }
    }
    } catch (error) {
      setError(true)
      setErrorMessage("Oops! There was an error try again")
      setLoadingButton(false)
    }
  

  }

  return (
    <div className='h-screen bg-white mt-40 font-light'>
      <div className='w-full rounded-sm p-3' style={{textAlign:'center',height:'550px'}}>
     
      <>
      <Form className='p-10 m-auto w-96' onSubmit={handleLogin}>
      <h6 className='mb-5 text-center text-xl'>Welcome, <span className='text-blue-600'>Estate Manager</span>!</h6>
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-4 text-left"
      >
        <Form.Control type="email" required placeholder="name@example.com" name="email" onChange={handleEmail}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password" className='mb-4 text-left'>
        <Form.Control type="password" required placeholder="Password" onChange={handlePassword} />
      </FloatingLabel>
            <div className='d-grid gap-2'>
              {
                loadingButton ? 
              <LoadingButton/>
                  :<button className='btn-primary btn btn-lg' type='submit'>Sign In</button>
              }
              
      { error &&
        <div className="alert alert-danger">
         {errorMessage}
        </div>
      }
   
      </div>
      
      </Form>
    </>
    <div>
      </div>
      </div>
    </div>

  )
}

export default Login
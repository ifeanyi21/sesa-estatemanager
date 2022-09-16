export default async function Auth(url){
    const token = localStorage.getItem('sesaToken')
  
    const req = await fetch("http://localhost:4000/auth",{
      headers:{
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await req.json()

    if(data.auth){
      const data = await fetch(url, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-access-token': token
       }
    })
     const userData = await data.json()
     return userData
    
    }else{
      localStorage.removeItem('token')
      window.location.href = '/login'
      return "Invalid"
    }
  }


  export async function FetchResidents(){
    const token = localStorage.getItem('sesaToken')
  
    const req = await fetch("https://real.sesadigital.com/api/residents",{
        headers:{
            "Accept":"application/json", 
            "Content-Type":"application/json",
            'Authorization': `Bearer ${token}`
          },
    })

    const data = await req.json()
    console.log(data);
  }
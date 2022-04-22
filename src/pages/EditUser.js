import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/action';
const EditUser = () => {
    const [state,setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });
    const [error,setError] = useState();
    const {name,email,contact,address} = state;
    let {id} = useParams();
    const {user} =useSelector((state)=> state.data)
    const navigate =useNavigate();
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getSingleUser(id))
    },[])

    useEffect(()=>{
        if(user){
            setState({...user})
        }
    },[user])


    const handleInputChange = (e) =>{
        console.log("sdjhb")
        const {name,value} = e.target;
        setState({...state, [name]:value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(!name || !email || !contact || !address){
            setError("Please enter all input fields")
          
        }
        else{
           
            dispatch(updateUser(state,id));
            navigate("/");
            setError("");
        }
    }
  return (
      <>

            <Button 
                variant="contained" 
                color= "secondary" 
                style={{width:'100px', marginTop:'40px'}}
                onClick={()=>navigate('/')}
            >
               Go Back
            </Button>
            <br/>
            <h1>Edit User</h1>
            {error&& <h3 style={{color:'red'}}>{error}</h3>}
          
            <TextField  
                name="name"
                variant="standard" 
                label="Name" 
                value={name || ""} 
                type="text" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
            <br/>
            <TextField  
               name="email"
                variant="standard" 
                label="Email" 
                value={email || ""} 
                type="email" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
            <br/>
            <TextField
              name="contact"
                variant="standard" 
                label="Contact" 
                value={contact  || ""} 
                type="number" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
            <br/>
            <TextField 
              name="address"
                variant="standard" 
                label="Address" 
                value={address  || ""} 
                type="text" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
          
            <br/>
            <Button 
                variant="contained" 
                color= "primary" 
                style={{width:'100px', marginTop:'40px'}}
                onClick={handleSubmit}
            >
              Update
            </Button>
        
    </>
  )
}

export default EditUser
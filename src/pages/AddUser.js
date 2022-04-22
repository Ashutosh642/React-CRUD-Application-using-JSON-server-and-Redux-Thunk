import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
const AddUser = () => {
    const [state,setState] = useState({
        name: "",
        email: "",
        contact: "",
        address: ""
    });
    const [error,setError] = useState();
    const {name,email,contact,address} = state;
    const navigate =useNavigate();
    let dispatch = useDispatch();

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
           
            dispatch(addUser(state));
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
            <h1>Add User</h1>
            {error&& <h3 style={{color:'red'}}>{error}</h3>}
          
            <TextField  
                name="name"
                variant="standard" 
                label="Name" 
                value={name} 
                type="text" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
            <br/>
            <TextField  
               name="email"
                variant="standard" 
                label="Email" 
                value={email} 
                type="email" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
            <br/>
            <TextField
              name="contact"
                variant="standard" 
                label="Contact" 
                value={contact} 
                type="number" 
                onChange={handleInputChange}
                style={{width:'600px'}}
            />
            <br/>
            <TextField 
              name="address"
                variant="standard" 
                label="Address" 
                value={address} 
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
               Submit
            </Button>
        
    </>
  )
}

export default AddUser
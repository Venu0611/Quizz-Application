import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useState } from "react";
import { addUser } from "./services/Api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
  width: 50%;
  text-align:center;
  margin: 5% 0 0 25%;
  & > div {
    margin-top: 20px;
  }
  
`;

const initialValue = {
  username: '',
  password: '',
  email: '',
  phone: ''
}

const Signin = () => {
  const [user, setUser] = useState(initialValue);
  const navigate=useNavigate();

  const onValueChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
    console.log(user); 
  }

  const addUserdetails = async()=>{
    try {
      await addUser(user);
      console.log("User added successfully");
    } catch (error) {
      console.log("Error adding user", error.message);
    }
    navigate('/all');
    
  }

  return (
    <Container>
      <Typography variant="h4" >Register Form</Typography>
      <FormControl>
        <InputLabel>Enter username</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='name' />
      </FormControl>
      <FormControl>
        <InputLabel>Enter Password</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='password'  />
      </FormControl>
      <FormControl>
        <InputLabel>Enter Email</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='email'  />
      </FormControl>
      <FormControl>
        <InputLabel>Enter Mobilenumer</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name='phonenumber'  />
      </FormControl>
      <FormControl>
        <Button onClick={addUserdetails} variant="contained">Register</Button>
      </FormControl>
      
    </Container>
  )
};

export default Signin;
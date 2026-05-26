import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
  Alert
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./services/Api";

// Changing styled(FormGroup) to styled('form') turns it into a semantic HTML form element
const Container = styled('form')`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 480px;
  text-align: center;
  margin: 4% auto;
  padding: 24px;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  background: #fff;
  & > div {
    margin-top: 20px;
  }
`;

const initialValue = { email: "", password: "" };

const Login = () => {
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onValueChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginDetails = async (e) => {
    e.preventDefault(); // Prevents the browser from reloading the page on form submit
    setError("");

    if (!user.email || !user.password) {
      setError("Please fill all fields");
      return;
    }

    try {
      const data = await loginUser(user); 
      
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/playing"); 
      } else {
        setError("Invalid server response");
      }
    } catch (err) {
      setError(err.response?.data || "Invalid email or password");
    }
  }; // <-- This closing bracket was missing in your snippet!

  return (
    <Container onSubmit={loginDetails}>
      <Typography variant="h4">Login</Typography>
      {error && <Alert severity="error">{error}</Alert>}
      
      <FormControl>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" name="email" type="email" value={user.email} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" name="password" type="password" value={user.password} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        {/* Changed type to "submit" to trigger the form's onSubmit event */}
        <Button type="submit" variant="contained">Login</Button>
      </FormControl>
    </Container>
  );
};

export default Login;
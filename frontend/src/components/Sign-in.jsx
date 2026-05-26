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
import { addUser } from "./services/Api";
import { useNavigate } from "react-router-dom";

const Container = styled(FormGroup)`
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

const initialValue = {
  name: "",
  email: "",
  password: "",
  mobile: ""
};

const Signin = () => {
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const onValueChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value
    });
  };

  const addUserdetails = async () => {
    setError("");
    setSuccess("");

    if (
      !user.name ||
      !user.email ||
      !user.password ||
      !user.mobile
    ) {
      setError("Please fill all fields.");
      return;
    }

    try {
      await addUser(user);

      setSuccess("Registration successful!");

      setUser(initialValue);

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to register user."
      );
    }
  };

  return (
    <Container>

      <Typography variant="h4">
        Register
      </Typography>

      <Typography
        variant="subtitle1"
        color="textSecondary"
      >
        Create your account
      </Typography>

      {error && (
        <Alert severity="error">
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success">
          {success}
        </Alert>
      )}

      {/* Name */}

      <FormControl>
        <InputLabel htmlFor="name">
          Name
        </InputLabel>

        <Input
          id="name"
          name="name"
          value={user.name}
          onChange={onValueChange}
          placeholder="Enter your name"
        />
      </FormControl>

      {/* Email */}

      <FormControl>
        <InputLabel htmlFor="email">
          Email
        </InputLabel>

        <Input
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={onValueChange}
          placeholder="Enter your email"
        />
      </FormControl>

      {/* Password */}

      <FormControl>
        <InputLabel htmlFor="password">
          Password
        </InputLabel>

        <Input
          id="password"
          name="password"
          type="password"
          value={user.password}
          onChange={onValueChange}
          placeholder="Enter password"
        />
      </FormControl>

      {/* Mobile */}

      <FormControl>
        <InputLabel htmlFor="mobile">
          Mobile Number
        </InputLabel>

        <Input
          id="mobile"
          name="mobile"
          type="tel"
          value={user.mobile}
          onChange={onValueChange}
          placeholder="Enter mobile number"
          inputProps={{ maxLength: 10 }}
        />
      </FormControl>

      {/* Button */}

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={addUserdetails}
        >
          Register
        </Button>
      </FormControl>

    </Container>
  );
};

export default Signin;
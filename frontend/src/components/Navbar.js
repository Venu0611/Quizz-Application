import { AppBar,Toolbar,Typography,styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Tabs = styled(NavLink)`
color: #FFFFFF;
margin-right: 20px;
text-decoration: none;
font-size: 20px;
`;
const Navbar=()=>{
    return(
        <AppBar position="static">
          <Toolbar>
            <Tabs to="/">Home</Tabs> 
            <Tabs to="/login">Login</Tabs> 
            <Tabs to="/register">Register</Tabs> 
            <Tabs to="/resulting">Result </Tabs>
            <Tabs to="/all">Alluser</Tabs>
            <Tabs to="/playquiz">Play-Quiz</Tabs>
          </Toolbar>

        </AppBar>
        
    
    );
}
export default Navbar;
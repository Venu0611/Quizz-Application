import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser  } from "./services/Api"; 
import styled from "@emotion/styled";
import data from "../database/data.json"; 

const StyledTableHead = styled(TableHead)`
  background-color: #f5f5f5;
`;

const StyledTableCell = styled(TableCell)`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Alluser = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users", error.message);
        setError("Failed to fetch users.");
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId)); 
    } catch (error) {
      console.log("Error deleting user", error.message);
      setError("Failed to delete user.");
    }
  };

  return (
    <>
      {error && <div style={{color: 'red', margin: '10px'}}>{error}</div>}
      <Table>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Quiz Score</StyledTableCell> 
            <StyledTableCell>Operations</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.mobile}</TableCell>
              
              <TableCell 
                style={{ 
                  fontWeight: 'bold', 
                  color: user.score !== null && user.score !== undefined ? 'green' : 'gray' 
                }}
              >
                {user.score !== null && user.score !== undefined 
                  ? `${user.score} / ${data.length}` 
                  : "No score record"}
              </TableCell>

              <TableCell>
                <Button variant="contained" style={{marginRight: '8px'}}>Edit</Button>
                <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Alluser;
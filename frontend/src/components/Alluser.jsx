import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers, deleteUser  } from "./services/Api"; // Ensure deleteUser  is imported
import styled from "@emotion/styled";

// Styled component for TableHead
const StyledTableHead = styled(TableHead)`
  background-color: #f5f5f5; // Set your desired background color
`;

const StyledTableCell = styled(TableCell)`
  font-weight: bold; // Make text bold
  font-size: 1.2rem; // Set font size (adjust as needed)
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
      await deleteUser (userId); // Call the deleteUser  function with the userId
      setUsers(users.filter(user => user.id !== userId)); // Update the state to remove the deleted user
    } catch (error) {
      console.log("Error deleting user", error.message);
      setError("Failed to delete user.");
    }
  };

  return (
    <>
      {error && <div>{error}</div>}
      <Table>
        <StyledTableHead>
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Operations</StyledTableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phonenumber}</TableCell>
              <TableCell>
                <Button variant="contained">Edit</Button>
                <Button variant="contained" onClick={() => handleDelete(user.id)}>Delete</Button> {/* Fixed typo */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default Alluser;
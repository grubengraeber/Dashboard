import React from 'react'
import { useState, useEffect } from 'react'



export const Users = () => {
    const [users, setUsers] = useState();
  return (
    <>
        <h2>Users List</h2>
        {users 
        ? (
            <ul>
                {users.map((user, index) => <li key={index}>{user.userName}</li>)}
            </ul>
        )
        : <p>No users to display</p>
        
        }
    </>
  )
}

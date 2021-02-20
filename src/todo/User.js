import React from 'react'
import { Link, link } from 'react-router-dom'

function User() {
    return (
        <div>
             <Link to='/CreateAcc'>
            <button>add new user</button>
            </Link>
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th> 
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Password</th>
                            <th>Gender</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead> 
                    <tbody>
                            <td>1</td> 
                            <td>dddd</td>
                            <td>da@da</td>
                            <td>asdd</td>
                            <td>ddsa</td>
                            <td>male</td>
                            <td>
                            <Link to='/updateAcc'>
                                <button>Edit</button>
                            </Link>
                            </td>
                    </tbody>  
                    <tbody>
                            <td>2</td> 
                            <td>ddđaaaaa</td>
                            <td>da@da</td>
                            <td>asdd</td>
                            <td>ddsa</td>
                            <td>male</td>
                            <td>
                            <Link to='/updateAcc'>
                                <button>Edit</button>
                            </Link>
                            </td>
                    </tbody>   
                </table>
            </form>
        </div>
    )
}
export default User
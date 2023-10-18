import React from 'react';
import UserContext from './UserContext';
import { useState } from 'react';


const UserContextProvider = ({children}) =>{//Here children are all other components
const [user,setUser]=useState(null)
return (
<UserContext.Provider value={{user,setUser}}>
    {/* //even here we have to mention what we r passing to other components,it can be value or method */}
{children}
</UserContext.Provider>
)


}

export default UserContextProvider;
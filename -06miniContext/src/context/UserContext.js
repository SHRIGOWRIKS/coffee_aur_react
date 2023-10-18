// Create a context and store in a varibale
//Once It's done as it needs to be used to get the data for all components ,we call it as a provider
//Where we can wrap all other components so that they can access the data form the context

import React from 'react';

const UserContext=React.createContext()


export default UserContext;
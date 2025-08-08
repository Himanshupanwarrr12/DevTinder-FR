import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import userFeed from '../features/feedSlice'
import userConnections from '../features/connectionsSlice'
import userRequests from '../features/requestsSlice'

const store = configureStore({
    reducer :{
       user: userReducer,
       feed: userFeed,
       connections:userConnections,
       requests:userRequests
    }
}) 

export default store
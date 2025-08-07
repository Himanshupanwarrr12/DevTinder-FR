import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import userFeed from '../features/feedSlice'
import userConnections from '../features/connectionsSlice'

const store = configureStore({
    reducer :{
       user: userReducer,
       feed: userFeed,
       connections:userConnections
    }
}) 

export default store
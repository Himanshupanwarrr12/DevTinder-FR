import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import userFeed from '../features/feedSlice'

const store = configureStore({
    reducer :{
       user: userReducer,
       feed: userFeed,
    }
}) 

export default store
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    resourcesState: false,
    servicesState: false,
    supportState: false,
    isOpenFaq: false
}

export const cleanCitySlice = createSlice({
    name: "Clean_City",
    initialState,

    reducers:{
        setResourcesState:(state, action)=> {
            state.resourcesState = action.payload
        },
        setServiceState:(state, action)=> {
            state.servicesState = action.payload
        },
        setSupportState:(state, action)=> {
            state.supportState = action.payload
        },
        setIsOpenFaq:(state, action) => {
            state.isOpenFaq =   action.payload
        }
    }
})
export const {setResourcesState, setServiceState, setSupportState, setIsOpenFaq} = cleanCitySlice.actions
export default cleanCitySlice.reducer
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    resourcesState: false,
    servicesState: false,
    supportState: false,
    isOpenFaq: [false, false, false, false],
    formInput: {
        name: "",
        surname: "",
        email: "",
        password: "",
    }
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
            const {index, isOpen} = action.payload
            state.isOpenFaq[index] =   isOpen
        },
        setFormInput:(state, action) => {
            const {name, value } = action.payload
            state.formInput[name] = value
        }
    }
})
export const {setResourcesState, setServiceState, setSupportState, setIsOpenFaq, setFormInput} = cleanCitySlice.actions
export default cleanCitySlice.reducer
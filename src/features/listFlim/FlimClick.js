import { createSlice } from "@reduxjs/toolkit";


export const FlimClick = createSlice(
    {
        name: 'FlimClick',
        initialState: {},
        reducers: {
            setFlimClick: (state, actions) =>{
                state = actions.payload;
                return state;
            }
        }
    }
);

const {reducer, actions} = FlimClick;
export const {setFlimClick} = actions;
export default reducer;
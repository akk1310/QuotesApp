import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    quotes: JSON.parse(localStorage.getItem('quotes')) ||  [{id:1,text:"quote"}]
}

export const quoteSlice=createSlice({
    name:'quotes',
    initialState,
    reducers:{
        addQuote:(state,action)=>{
            const quote={
                id:nanoid(),
                text:action.payload,
            }
            state.quotes.push(quote)
        },
        removeQuote:(state,action)=>{
            state.quotes=state.quotes.filter((quote)=>quote.id !== action.payload )
        }
    }
})

export const {addQuote,removeQuote}=quoteSlice.actions
export default quoteSlice.reducer
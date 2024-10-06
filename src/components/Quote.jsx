import React, { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import { addQuote } from "../fetures/quotes/quoteSlice"
const Quote = () => {
    const dispatch = useDispatch()
    const quotes = useSelector(state => state.quotes)
    const [quote, setQuote] = useState('')
    const fetchQuote = () => {
        axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
            .then((response) => {
                setQuote(response.data)
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const saveQuote = () => {
        dispatch(addQuote(quote))
    }

    useEffect(() => {
        fetchQuote()
    }, [])
    useEffect(() => {
        localStorage.setItem('quotes', JSON.stringify(quotes))
    }, [quotes])

    return (
        <div>
            <div className="bg-[#C4DAD2] mt-10 mx-auto rounded-lg shadow-[#84ab9c] shadow-lg p-6 w-2/3 md:w-1/2 lg:w-1/3 mb-6">
                <p className="text-xl text-gray-700 text-center font-semibold mb-4">"{quote}"</p>
                <div className="flex justify-between">
                    <button
                        className="bg-[#295F98] text-white px-4 py-2 rounded hover:bg-[#1a436f] transition"
                        onClick={fetchQuote}
                    >
                        New Quote
                    </button>
                    <button
                        className="bg-[#6A9C89] text-white px-4 py-2 rounded hover:bg-[#4c8670] transition"
                        onClick={saveQuote}
                    >
                        Save to List
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Quote

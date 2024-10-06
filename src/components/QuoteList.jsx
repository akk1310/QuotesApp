import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeQuote } from '../fetures/quotes/quoteSlice'

const QuoteList = () => {
  const quotes = useSelector(state => state.quotes)
  const dispatch = useDispatch()
  useEffect(() => {
    localStorage.setItem('quotes', JSON.stringify(quotes))
  }, [quotes])
  return (
    <div className='w-[70%] mt-10 mx-auto pb-10'>
      <div className='text-center text-2xl font-semibold'>Saved Quotes.</div>
      {quotes.map((quote) => (
        <div
          className="bg-[#C4DAD2] flex-col gap-2 xs:flex-row  p-4 my-2 rounded-lg shadow-md text-left text-gray-800 flex justify-between items-center"
          key={quote.id}
        >

          <span className='text-xl'>{quote.text}</span>

          <button
            className="ml-4 px-2 py-1 bg-[#E76F51] text-white rounded hover:bg-[#d5593a]"
            onClick={() => dispatch(removeQuote(quote.id))}
          >
            Remove
          </button>
        </div>
      ))}
      <div className='flex justify-center mt-10'>
      Developed By: <a className='text-gray-700 font-serif ' target="_blank" href="https://github.com/akk1310"> @AdnanKundlik</a>
      </div>
    </div>
  )
}

export default QuoteList

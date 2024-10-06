// . 1. Create a small React app to display random quote from https://ron-swanson-quotes.herokuapp.com/v2/quotes 
// 2. Display the data in cards with good styles
// 3. Add the save to list functionality 
// 4. Write clean code with standard practices
// 5. Push the code on your GitHub public repo with vercel deployment and share the link
import Quote from './components/Quote'
import QuoteList from './components/QuoteList'
function App() {
  


  return (
    <div className='px-8'>
    <div className='flex justify-between  items-center gap-5'>
      <img className='w-40 border border-black/50 p-4 rounded-md' src="/l4.png" alt="logo" />
      <div className='text-4xl mr-28 font-semibold text-[#16423C] '>DailyQuote!</div>
      <div></div>

    </div> 


     
      <Quote />
   
      <QuoteList />

    </div>
  )
}

export default App

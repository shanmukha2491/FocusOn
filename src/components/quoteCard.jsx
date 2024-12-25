import React, { useEffect, useState } from 'react'
import axios from "axios"

const QuoteCard = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const [error, setError] = useState("")
    useEffect(()=>{
        const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        const fetchData = async () => {
            try {
                const response = await axios.get(url).then((res) => {
                    let dataQuotes = res.data.quotes; // Access the quotes array from the JSON response
                    let randomNum = Math.floor(Math.random() * dataQuotes.length);
                    var randomQuote = dataQuotes[randomNum];
                
                    setQuote(randomQuote.quote); // Set the quote
                    setAuthor(randomQuote.author); // Set the author
                });
                
                console.log(response.data);
            } catch (err) {
                setError(err.message)
            }
        }

        fetchData()
    },[])
   
  return (
    <div className='absolute text-white bottom-10 right-4 text-center p-4'>
        <h2 style={{fontFamily:"cursive"}} className='font-bold text-lg max-w-[400px]'>{`"${quote}"`}</h2>
        <h1>{`~ ${author}`}</h1>
    </div>
  )
}

export default QuoteCard
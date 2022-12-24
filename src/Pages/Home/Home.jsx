import React from 'react'
import { Data } from '../../asstets/staticData/Data'
import { useGlobalContext } from '../../Utils/Context/Context'
import { useEffect } from 'react';


const Home = () => {
const {singleNews, setSingleNews,news, setNews} = useGlobalContext()

 useEffect(() => {
  
  setNews(Data.newsList)

  console.log(news);
 }, [news]);
  return (
    <div className='Home'>
        <div className="homeWrapper">
        Home
        </div>
    </div>
    
  )
}

export default Home
import React from 'react'
import { Data } from '../../asstets/staticData/Data'
import { useGlobalContext } from '../../Utils/Context/Context'
import { useEffect } from 'react';
import Postcard from '../../Components/Postcard/Postcard';
import './home.scss'

const Home = () => {
const {singleNews, setSingleNews,news, setNews} = useGlobalContext()

 useEffect(() => {
  
  setNews(Data.newsList)

  console.log(news);
 }, [news]);
  return (
    <div className='Home'>
        <div className="homeWrapper">
        <div className="hero"></div>
        <div className="blogCardList">
          {Data.newsList.articles.map(item=><Postcard key={item._id} item={item}></Postcard>)}
        </div>

        </div>
    </div>
    
  )
}

export default Home
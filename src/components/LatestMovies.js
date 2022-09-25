/* eslint-disable react-hooks/exhaustive-deps */
import React ,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMovies } from '../redux/movies/movies'
import uuid from 'react-uuid'

const LatestMovies = () => {
    const dispatch = useDispatch()
    const  { allMoviesList } = useSelector((state) => state.allMovies)
    useEffect(() => {
      dispatch(fetchAllMovies())
    }, [])

    console.log(allMoviesList)
   
    const series = Object.keys(allMoviesList).map((key) => {
      const seriesOne = allMoviesList[key]
      return {
        id: key,
        ...seriesOne
      }
    })
    
    const moviesList = [];


    series.forEach((item, index) =>{
      for (let key in item) {
        const getPosterPath = (posterPath) => {
           return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}
        moviesList.push(
          <div className="latestSeriesList" key={uuid()}>
            <h3 className="lsName">{item[key].name}</h3>
            <img src={getPosterPath(item[key].poster_path)} alt="Latest Series Poster"/>
            <h4 className="airDate">{item[key].first_air_date}</h4>
            <p className="lsOver">{item[key].overview}</p>
            <h5 className="vote">{item[key].vote_count}</h5>
          </div>
          
        )
      }
    })

  return (
    <div className="latestSeries">
        <h1 className="lsTitle">Latest Movies</h1>
        {moviesList}
    </div>
  )
}


export default LatestMovies;

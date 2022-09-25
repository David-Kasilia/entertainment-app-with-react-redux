/* eslint-disable react-hooks/exhaustive-deps */
import React ,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllSeries } from '../redux/series/series'
import uuid from 'react-uuid'

export const LatestSeries = () => {

    const dispatch = useDispatch()
    const  { allSeriesList } = useSelector((state) => state.allSeries)
    useEffect(() => {
      dispatch(fetchAllSeries())
    }, [])
    console.log(allSeriesList)

    const series = Object.keys(allSeriesList).map((key) => {
      const seriesOne = allSeriesList[key]
      return {
        id: key,
        ...seriesOne
      }
    })
    console.log(series)

    allSeriesList.forEach((index) => {
      console.log(index)
    }
    )

    const seriesList = [];


    series.forEach((item, index) =>{
      for (let key in item) {
        const getPosterPath = (posterPath) => {
           return `https://www.themoviedb.org/t/p/w220_and_h330_face/${posterPath}`}
        seriesList.push(
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
        <h1 className="lsTitle">LatestSeries</h1>
        {seriesList}
    </div>
  )
}

export default LatestSeries;

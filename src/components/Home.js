/* eslint-disable react-hooks/exhaustive-deps */
import React ,{ useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllSeries } from '../redux/series/series'
import uuid from 'react-uuid'
import Series from './Series'

const Home = () => {
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
        seriesList.push(
          <div key={uuid()}>
            <h2>{item[key].name}</h2>
          <h2>{item[key].overview}</h2>
          </div>
          
        )
      }
    })

    // series.forEach((item, index) => {
    //   for(let key in item) {
    //     console.log(item[key].name)
    //   }
    //  })


  return (
    <div>
      {seriesList}
    </div>
  )

}

export default Home

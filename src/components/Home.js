/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import uuid from 'react-uuid'
import { fetchSeries } from '../redux/series/series'
import Series from './Series'

const Home = () => {
  const dispatch = useDispatch()
  const { seriesList } = useSelector((state) => state.series)
  console.log(seriesList)
  useEffect(() => {
    dispatch(fetchSeries())
  }, [])
  
  return (
    <div>
      {seriesList.map((movie) => <Series key={uuid()} id={movie.id} name={movie.name} genre={movie.genres} status={movie.status} summary={movie.summary} />)}
    </div>
  )
}

export default Home

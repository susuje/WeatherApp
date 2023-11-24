import React, { useEffect, useState } from 'react'
import * as S from './DisplayMeteo.style'
import axios from 'axios'
import { SiWindicss } from 'react-icons/si'
import { RiLoaderFill } from 'react-icons/ri'
import sunnyrain from '../assets/icon/sunnyrain.png'
import rain from '../assets/icon/rain.png'
import clear from '../assets/icon/sunny.png'
import cloud from '../assets/icon/cloudy.png'

import hum from '../assets/icon/hum.png'

interface WeatherDataType {
  name: string

  main: {
    temp: number
    humidity: number
  }
  sys: {
    country: string
  }
  weather: {
    main: string
  }[]
  wind: {
    speed: number
  }
}

export default function DisplayMeteo() {
  const mykey = 'cb5a68f5d4c100b4f3139f5f219a241b'
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null)
  const [weatherDetail, setWeatherDetail] = useState(clear) //icon변경할때!!
  const [searchCity, setSearchCity] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const iconChanger = (weather: string) => {
    switch (weather) {
      case 'Rain':
        setWeatherDetail(rain)

        break

      case 'Clear':
        setWeatherDetail(clear)

        break
      case 'Clouds':
        setWeatherDetail(cloud)

        break

      case 'Mist':
        setWeatherDetail(sunnyrain)

        break
      default:
        setWeatherDetail(clear)
    }
  }

  const fetchWeather = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${mykey}&units=metric`
    const response = await axios.get(url)
    return response.data
  }

  const SearchWeatherData = async (city: string) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${mykey}&units=metric`
      const response = await axios.get(url)

      const searchData: WeatherDataType = response.data
      return searchData
    } catch (error) {
      window.alert('데이터가 없어요')
    }
  }

  const handleSearch = async () => {
    if (searchCity === '') {
      return
    }

    try {
      const searchData = await SearchWeatherData(searchCity)
      if (searchData) {
        setWeatherData(searchData)
        iconChanger(searchData.weather[0].main)
      }
    } catch (error) {
      console.error('No Results Found')
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords
      Promise.all([fetchWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          console.log(currentWeather)
          setWeatherData(currentWeather)
          setIsLoading(false)
          iconChanger(currentWeather.weather[0].main)
        }
      )
    })
  }, [])

  return (
    <S.Container>
      <S.SearchDiv>
        <input
          type="text"
          placeholder="도시를 검색하세요!"
          value={searchCity}
          onChange={e => setSearchCity(e.target.value)}
        />
        <button onClick={handleSearch}></button>
      </S.SearchDiv>
      {isLoading ? (
        <S.LoadingDiv>
          <RiLoaderFill className="icon" />
          <p>Loading..</p>
        </S.LoadingDiv>
      ) : weatherData ? (
        <S.WeatherDiv>
          <h1>{weatherData.name}</h1>
          <p className="pays">{weatherData.sys.country}</p>
          <img src={weatherDetail} alt="weathericon" className="icon" />
          <h1>{weatherData.main.temp.toFixed(0)}°C</h1>
          <h2>{weatherData.weather[0].main}</h2>
          <S.BottomInfo>
            <S.FlexDiv>
              <img src={hum} alt="humidityIcon" className="hum" />
              <div>
                <p className="num">{weatherData.main.humidity}%</p>

                <p className="txt">Humidity</p>
              </div>
            </S.FlexDiv>
            <S.FlexDiv>
              <SiWindicss className="wind" />
              <div>
                <p className="num">{weatherData.wind.speed}km/h</p>
                <p className="txt">Wind Speed</p>
              </div>
            </S.FlexDiv>
          </S.BottomInfo>
        </S.WeatherDiv>
      ) : null}
    </S.Container>
  )
}

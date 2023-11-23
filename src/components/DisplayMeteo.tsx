import React from 'react'
import * as S from './DisplayMeteo.style'
import axios from 'axios'
import { SiWindicss } from 'react-icons/si'
import sunnyrain from '../assets/icon/sunnyrain.png'
import hum from '../assets/icon/hum.png'

export default function DisplayMeteo() {
  const mykey = 'cb5a68f5d4c100b4f3139f5f219a241b'

  const fetchWeather = async (lat: number, lon: number) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${mykey}`
    const response = await axios.get(url)
    return response.data
  }

  return (
    <S.Container>
      <S.SearchDiv>
        <input type="text" placeholder="도시를 검색하세요!" />
        <button></button>
      </S.SearchDiv>
      <S.WeatherDiv>
        <h1>NewYork</h1>
        <p className="pays">USA</p>
        <img src={sunnyrain} alt="sunnyrain" className="icon" />
        <h1>13°C</h1>
        <h2>Rainny</h2>
        <S.BottomInfo>
          <S.FlexDiv>
            <img src={hum} alt="humidityIcon" className="hum" />
            <div>
              <p className="num">64%</p>

              <p className="txt">Humidity</p>
            </div>
          </S.FlexDiv>
          <S.FlexDiv>
            <SiWindicss className="wind" />
            <div>
              <p className="num">2.57km/h</p>
              <p className="txt">Wind Speed</p>
            </div>
          </S.FlexDiv>
        </S.BottomInfo>
      </S.WeatherDiv>
    </S.Container>
  )
}

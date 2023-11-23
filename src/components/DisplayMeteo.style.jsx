import styled from 'styled-components'
import searchIcon from '../assets/icon/search.svg'

export const Container = styled.div`
  background-color: #ffffff7d;
  width: 520px;
  margin: 30px auto 0;
  padding: 40px;
  border: 1px solid #767676;
  border-radius: 40px;
  box-shadow: rgba(60, 64, 67, 0.1) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.1) 0px 2px 6px 2px;
`

export const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input {
    width: 380px;
    padding: 10px 15px 10px 20px;
    border: 1px solid #c4c4c4;
    border-radius: 20px;
  }
  button {
    width: 40px;
    height: 40px;
    border: 1px solid #c4c4c4;
    border-radius: 70%;
    background: url(${searchIcon}) center center no-repeat;
  }
`

export const WeatherDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    //도시이름
    font-size: 42px;
    font-weight: 600;
    margin: 40px 0 10px 0;
  }
  h2 {
    // 날씨상황

    font-size: 32px;
    font-weight: 400;
  }

  p.pays {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 30px;
  }

  img.icon {
    width: 250px;
    margin-bottom: 30px;
  }
`

export const BottomInfo = styled.div`
  margin-top: 30px;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(243, 255, 253, 1) 0%,
    rgba(253, 255, 232, 1) 100%
  );

  padding: 20px 40px;
  border-radius: 15px;
  justify-content: space-between;
  width: 100%;
  .hum {
    width: 42px;
    height: 42px;
  }
  .wind {
    width: 42px;
    height: 42px;
  }
  div {
    p.num {
      font-size: 24px;
    }
    p.txt {
      font-size: 18px;
    }
  }
`
export const FlexDiv = styled.div`
  display: flex;
`

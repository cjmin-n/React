import { useEffect, useState } from "react";

export const Weather = () => {
    const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';

    const [position, setPosition] = useState({}); // 현재 위치 저장
    const [cityName, setCityName] = useState(""); // 현재 도시 이름
    const [weather, setWeather] = useState({}); // 날씨 정보 저장
    const [wind, setWind] = useState({}); // 바람 정보 저장

    useEffect(()=>{
        new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition((currentPosition)=>{
                setPosition({
                    longitude : currentPosition.coords.longitude,
                    latitude : currentPosition.coords.latitude
                });
                resolve(currentPosition.coords);
            });
        }).then(coords => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setCityName(data.name);
                setWeather(data.weather[0]);
                setWind(data.wind);
            })
        })

    }, []);

    return (
        <>
          <h3>오늘의 날씨</h3>
          <h4>{`경도 : ${position.longitude} 위도 : ${position.latitude}`}</h4>
          <h4>{`조회 도시 : ${cityName}`}</h4>
          <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
          <h4>{`풍향  : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>
        </>
      );
}
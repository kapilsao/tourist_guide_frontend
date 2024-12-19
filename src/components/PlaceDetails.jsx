import React , { useState , useEffect}from 'react'
import { FaStar } from "react-icons/fa";
import { GoogleGenerativeAI } from "@google/generative-ai"



export const PlaceDetails = ({place}) => {

  const [info , setInfo] = useState('');
  const placeName = place.name;

  const renderStars = () => {
    const stars = [];
    const rating = Math.round(place.rating); // Round the rating to the nearest integer
    for (let i = 0; i < rating && i < 5; i++) { // Ensure no more than 5 stars are displayed
      stars.push(<FaStar key={i} />);
    }
    return stars;
  };

  // const generateOneLineInfo = async  () =>{
  //   const genAI = new GoogleGenerativeAI('AIzaSyAScVcH2iUVL_iBv3dnfz1MKK6XPvYYNmA');
  //   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
  //   const prompt = `Write a one liner info about${placeName} like what are the speciality of this tourist place that tourists can like.`;
    
  //   const result = await model.generateContent(prompt);
  //   console.log(result.response.text());
  //   setInfo(result)
  // }

  

  // useEffect(()=>{
  //   generateOneLineInfo();
  //   }, [placeName])

  return (
<div className="grid gap-2">
    <h3 className="text-lg font-semibold">{place.name}</h3>
    {/* <p className="text-muted-foreground">{info}</p> */}
    <div className="flex items-center gap-2">
      { renderStars()}
      <span className="text-sm font-medium">{place.rating}</span>
    </div>
</div>
  )
}

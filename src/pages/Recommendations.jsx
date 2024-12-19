// import React ,{useContext , useState}from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { SearchContext } from '../context/searchContext';
// import { GoogleGenerativeAI } from "@google/generative-ai"
// import { useEffect } from 'react';
// function Recommendations() {

//   const { searchHistory } = useContext(SearchContext); // Access search history
//   const API_KEY = 'AIzaSyC4Mw53_elDkmbno7TLKHtYo_em-EtdsiM'
//   const [recommendations, setRecommendations] = useState([]);








//   const generateRecommendation  = async () =>{

// const genAI = new GoogleGenerativeAI(API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// const prompt = `Give me the Recommendation of best tourist spots by analysing ${searchHistory} of user,  dont ask more info just see what is the users search history find the pattern and give me the recommendations of tourist places only without any other information   .`;

// const result = await model.generateContent(prompt);
// console.log(result.response.text());
//   }







// const generateRecommendation  = async () =>{
// try {
  
//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" ,
//     systemInstruction: "Your are the Tourist Guide, so based on the the search history give me some recomomended place in Title :Description format  with Lattitude and Longitude for that recommended places",
//   });

//   // Prepare the search history as a string
//   const searchHistoryString = searchHistory.join(", ");

//   // Create the prompt
//   const prompt = `Give me the Recommendation of best tourist spots by analyzing the following search history: ${searchHistoryString}. Only provide tourist place recommendations in overall world . dont repeat any tourist spot in search history.`;

//   // Call the API
//   const result = await model.generateContent(prompt);

//   // Extract recommendations from the result (assuming response contains a text field)
//   const recommendationsText = result.response.text(); // Adjust this based on actual API response structure

//   // Split the result into recommendations (e.g., line by line, comma-separated, etc.)
//   const parsedRecommendations = recommendationsText.split('\n').filter(item => item.trim() !== ''); // Assuming text-based response
  
//   setRecommendations(parsedRecommendations);
//   console.log(parsedRecommendations);
  
// } catch (error) {
  
  
//   console.error("Error fetching recommendations:", error);
// } 

// }
 
//   return (
//     <div className="flex flex-col min-h-[100dvh]">

//       <header className="bg-black text-white py-8 px-4 md:px-6">
//         <div className="container mx-auto space-y-2">
//           <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover the Best Tourist Spots</h1>
//           <p className="max-w-[800px] text-lg md:text-xl">
//             Explore our curated selection of top-rated tourist destinations tailored to your interests.
//           </p>
//         </div>
//       </header>

//       <main className="container mx-auto py-12 px-4 md:px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           <button onClick={generateRecommendation}>Recommend</button>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

//         <Card style={{ width: '18rem' }}>
//           <Card.Img variant="top" src="Building Exterior.png" />
//           <Card.Body>
//           <Card.Title>Card Title</Card.Title>
//           <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//           </Card.Text>
//           <Button variant="primary">Go somewhere</Button>
//           </Card.Body>
//         </Card>

            
        

//         </div>
//       </main>

//     </div>
    
//   )
// }

// export default Recommendations




// import React, { useContext, useState } from 'react';
// import { SearchContext } from '../context/searchContext';
// import { GoogleGenerativeAI } from "@google/generative-ai";

// function Recommendations() {
//   const { searchHistory } = useContext(SearchContext); // Access search history
//   const API_KEY = 'AIzaSyC4Mw53_elDkmbno7TLKHtYo_em-EtdsiM';
//   const [recommendations, setRecommendations] = useState([]);

//   const generateRecommendation = async () => {
//     try {
//       const genAI = new GoogleGenerativeAI(API_KEY);
//       const model = genAI.getGenerativeModel({
//         model: "gemini-1.5-flash",
//         systemInstruction: "You are the Tourist Guide. Based on the search history, provide recommendations in Title: Description format with Latitude and Longitude for each recommended place.",
//       });

//       // Prepare the search history as a string
//       const searchHistoryString = searchHistory.join(", ");

//       // Create the prompt
//       const prompt = `Give me the Recommendation of best tourist spots by analyzing the following search history: ${searchHistoryString}. Only provide tourist place recommendations in overall world. Don't repeat any tourist spot in search history.`;

//       // Call the API
//       const result = await model.generateContent(prompt);

//       // Extract recommendations from the result
//       const recommendationsText = result.response.text(); // Adjust based on actual API response structure

//       // Split the result into recommendations
//       const parsedRecommendations = recommendationsText.split('\n').filter(item => item.trim() !== ''); // Assuming text-based response
//        console.log(parsedRecommendations);
       

//       // Map the recommendations to a structured format
//       // const structuredRecommendations = parsedRecommendations.map((item) => {
//       //   const match = item.match(/(\d+)\.\s(.*?):\s(.*?)\s*Latitude:\s([\d\.-]+)\s*Longitude:\s([\d\.-]+)/);
//       //   if (match) {
//       //     return {
//       //       title: match[2],
//       //       description: match[3],
//       //       latitude: match[4],
//       //       longitude: match[5]
//       //     };
//       //   }
//       //   return null;
//       // }).filter(item => item !== null); // Filter out null values

//       setRecommendations(parsedRecommendations);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-[100dvh]">
//       <header className="bg-black text-white py-8 px-4 md:px-6">
//         <div className="container mx-auto space-y-2">
//           <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover the Best Tourist Spots</h1>
//           <p className="max-w-[800px] text-lg md:text-xl">
//             Explore our curated selection of top-rated tourist destinations tailored to your interests.
//           </p>
//         </div>
//       </header>

//       <main className="container mx-auto py-12 px-4 md:px-6">
//       <button onClick={generateRecommendation} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
//             Get Recommendations
//           </button>
//         <div className="">
         

//           {/* {recommendations.length > 0 ? (
//             recommendations.map((rec, index) => (
//               <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
//                 <h3 className="text-xl font-bold">{rec.title}</h3>
//                 <p className="mt-2 text-gray-700">{rec.description}</p>
//                 <div className="mt-4">
//                   <p><strong>Latitude:</strong> {rec.latitude}</p>
//                   <p><strong>Longitude:</strong> {rec.longitude}</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-500">No recommendations available. Please click "Get Recommendations" to load.</p>
//           )} */}

//           {recommendations}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Recommendations;



import React, { useContext, useState } from "react";
import { SearchContext } from "../context/searchContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Recommendations() {
  const { searchHistory } = useContext(SearchContext); // Access search history
  const API_KEY = "AIzaSyC4Mw53_elDkmbno7TLKHtYo_em-EtdsiM";
  const [recommendations, setRecommendations] = useState([]);

  const generateRecommendation = async () => {
    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction:
          "You are the Tourist Guide. Based on the search history, provide recommendations in Title: Description format with Latitude and Longitude for each recommended place.",
      });

      // Prepare the search history as a string
      const searchHistoryString = searchHistory.join(", ");

      // Create the prompt
      const prompt = `Give me the Recommendation of best tourist spots by analyzing the following search history: ${searchHistoryString}. Only provide tourist place recommendations in overall world. Don't repeat any tourist spot in search history.`;

      // Call the API
      const result = await model.generateContent(prompt);

      // Extract recommendations from the result
      const recommendationsText = result.response.text(); // Adjust based on actual API response structure
      console.log(recommendationsText);

      // Split the result into recommendations
      const parsedRecommendations = recommendationsText
        .split("\n")
        .filter((item) => item.trim() !== ""); // Assuming text-based response

      setRecommendations(parsedRecommendations);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header Section */}
      <header className="bg-black text-white py-8 px-4 sm:px-6">
        <div className="container mx-auto space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Discover the Best Tourist Spots
          </h1>
          <p className="max-w-[800px] text-lg sm:text-xl">
            Explore our curated selection of top-rated tourist destinations
            tailored to your interests.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4 sm:px-6 space-y-6">
        <button
          onClick={generateRecommendation}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Get Recommendations
        </button>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Render Recommendations */}
          {recommendations.length > 0 ? (
            recommendations.map((rec, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700">{rec}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No recommendations available. Please click "Get Recommendations"
              to load.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default Recommendations;

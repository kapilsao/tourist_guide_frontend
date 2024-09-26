

// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { GoogleGenerativeAI } from '@google/generative-ai';

// const Result = () => {
//   // State to store the generated content
//   const [generatedText, setGeneratedText] = useState('Loading generative content...');
  
//   const location = useLocation();
//   const { imageUrl } = location.state || {}; // Get the image URL from state
  
//   useEffect(() => {
//     const fetchGenerativeText = async () => {
//       const genAI = new GoogleGenerativeAI('AIzaSyAScVcH2iUVL_iBv3dnfz1MKK6XPvYYNmA'); // Replace with your actual API key
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
//       const prompt = "Write a story about a magic backpack."; // Prompt for the generative AI model
      
//       try {
//         const result = await model.generateContent(prompt);
//         const generatedContent = result.response.text(); // Extract the generated text
//         setGeneratedText(generatedContent); // Update state with the generated text
//       } catch (error) {
//         console.error("Error generating content:", error);
//         setGeneratedText("Failed to generate content.");
//       }
//     };
    
//     // Call the function to fetch content when component mounts
//     fetchGenerativeText();
//   }, []); // Empty dependency array so the effect runs once on mount

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-semibold text-center mb-6">Captured Image</h1>
//       <div className="flex flex-col md:flex-row justify-between items-start bg-gray-50 p-6 rounded-lg shadow-lg">
//         {imageUrl ? (
//           <img className="w-full md:w-1/2 rounded-lg shadow-md" src={imageUrl} alt="Captured" />
//         ) : (
//           <p className="text-red-500">No image captured</p>
//         )}
//         <div className="mt-6 md:mt-0 md:ml-6 md:w-1/2">
//           <h2 className="text-2xl font-semibold mb-4">Generated Story</h2>
//           <p className="text-gray-600 leading-relaxed">
//             {generatedText} {/* Display the generative AI text */}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Result;


import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleGenerativeAI } from '@google/generative-ai';

const Result = () => {
  const [generatedText, setGeneratedText] = useState('Loading generative content...');
  const location = useLocation();
  const { imageUrl } = location.state || {}; // Get the image URL from state

  // Function to convert an image URL to base64
  const imageToBase64 = async (url) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]); // Get the base64 data only
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  useEffect(() => {
    const fetchGenerativeText = async () => {
      try {
        const genAI = new GoogleGenerativeAI('AIzaSyAScVcH2iUVL_iBv3dnfz1MKK6XPvYYNmA'); // Replace with your actual API key
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // Convert image to base64 format
        const base64Image = await imageToBase64(imageUrl);

        // Create the prompt and image part
        const prompt = "WHat is this Image..";
        const imagePart = {
          inlineData: {
            data: base64Image,
            mimeType: 'image/jpeg', // or 'image/png', depending on the image format
          },
        };

        // Call the generative AI API with the prompt and the image
        const result = await model.generateContent([prompt, imagePart]);
        const generatedContent = result.response.text(); // Extract the generated text

        setGeneratedText(generatedContent); // Update state with the generated text
      } catch (error) {
        console.error("Error generating content:", error);
        setGeneratedText("Failed to generate content.");
      }
    };

    if (imageUrl) {
      // Call the function to fetch content when component mounts
      fetchGenerativeText();
    }
  }, [imageUrl]); // Runs when imageUrl is available

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Captured Image</h1>
      <div className="flex flex-col md:flex-row justify-between items-start bg-gray-50 p-6 rounded-lg shadow-lg">
        {imageUrl ? (
          <img className="w-full md:w-1/2 rounded-lg shadow-md" src={imageUrl} alt="Captured" />
        ) : (
          <p className="text-red-500">No image captured</p>
        )}
        <div className="mt-6 md:mt-0 md:ml-6 md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Generated Description</h2>
          <p className="text-gray-600 leading-relaxed">
            {generatedText} {/* Display the generative AI text */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Result;

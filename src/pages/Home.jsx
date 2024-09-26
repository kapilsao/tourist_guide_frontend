import React , { useRef, useState } from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'







function Home() {


  const [capturedImage, setCapturedImage] = useState(null); // To store the captured image URL
  const videoRef = useRef(null);  // Ref to access the video element
  const canvasRef = useRef(null); 
  const [facingMode, setFacingMode] = useState('user'); // State to toggle between front and back camera
  const [cameraActive, setCameraActive] = useState(false); // State to check if camera is active


  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode }, // Toggle between 'user' (front) and 'environment' (back) camera
      });
      videoRef.current.srcObject = stream;
      setCameraActive(true); // Set camera as active
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };



  const captureImage = () => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    // Draw the current video frame on the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to a data URL (base64 image format)
    const imageUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageUrl); // Store the captured image URL // Store the captured image URL
  };

  const toggleCamera = () => {
    setFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
    startCamera(); // Restart camera with new facing mode
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">

<section className="bg-[#f0f9ff] py-12 md:py-20 relative">
  <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" />
  <div className="container px-4 md:px-6 relative z-10">
    <div className="grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl max-w-[600px] text-[#0c4a6e]">
          Explore the World with Our Travel Guide
        </h1>
        <p className="text-[#475569] mt-4 max-w-[600px]">
          Discover the best destinations, plan your perfect trip...
        </p>
      </div>
      <div>
        <div className="aspect-video rounded-xl overflow-hidden">
          <div className="w-full h-full" />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 md:py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3  px-4 md:px-6">

<div className="max-w-sm p-6 md:p-8 bg-[#0284c7] rounded-lg text-white"> {/* Added responsive padding */}
  <div className="flex items-center justify-start mb-4">
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#0284c7] flex items-center justify-center"> {/* Responsive icon size */}
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8"> {/* Responsive icon size */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6m0 4h.01" />
      </svg>
    </div>
  </div>
  <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight">Destinations</h5> {/* Responsive text size */}
  <p className="mb-4 text-sm md:text-base text-[#e0f2fe]">Explore the best destinations around the world.</p> {/* Responsive text size */}
  <a href="#" className="inline-flex items-center text-white font-medium hover:underline underline-offset-4">
    Discover More
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
</div>

<div className="max-w-sm p-6 md:p-8 bg-[#f0f9ff] rounded-lg text-[#1e3a8a]"> {/* Added responsive padding */}
  <div className="flex items-center justify-start mb-4">
    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-[#0284c7] flex items-center justify-center"> {/* Responsive icon size */}
      {/* Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8"> {/* Responsive icon size */}
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6v6m0 4h.01" />
      </svg>
    </div>
  </div>
  <h5 className="mb-2 text-xl md:text-2xl font-semibold tracking-tight">Recommendations</h5> {/* Responsive text size */}
  <p className="mb-4 text-sm md:text-base text-[#1e3a8a]">Get expert recommendations for your next trip.</p> {/* Responsive text size */}
  <a href="#" className="inline-flex items-center text-[#1e3a8a] font-medium hover:underline underline-offset-4">
    View Recommendations
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
</div>

</section>

<section>

<div className="bg-[#e0f2fe] p-8 md:p-16 rounded-lg">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Top Tourist Spots</h2>
      <p className="text-sm md:text-base mb-8">Discover the most popular and must-visit tourist spots around the world.</p>
      
      {/* Card Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            {/* Placeholder for image */}
            <img src="https://via.placeholder.com/50" alt="Eiffel Tower" className="w-12 h-12" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Eiffel Tower, Paris</h4>
            <p className="text-gray-600">Iconic landmark in the heart of Paris.</p>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            {/* Placeholder for image */}
            <img src="https://via.placeholder.com/50" alt="Machu Picchu" className="w-12 h-12" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Machu Picchu, Peru</h4>
            <p className="text-gray-600">Ancient Inca citadel in the Andes.</p>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mr-4">
            {/* Placeholder for image */}
            <img src="https://via.placeholder.com/50" alt="Great Barrier Reef" className="w-12 h-12" />
          </div>
          <div>
            <h4 className="text-lg font-semibold">Great Barrier Reef, Australia</h4>
            <p className="text-gray-600">Largest coral reef system in the world.</p>
          </div>
        </div>

      </div>
    </div>
    


    

</section>


<section className="bg-[#0284c7] p-8 lg:p-16 flex flex-col lg:flex-row items-center lg:justify-between rounded-lg">
        {/* Left Section - Text */}
        <div className="text-white lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Take a Picture</h2>
          <p className="text-base lg:text-lg mb-6">
            Capture the best moments of your travels and share them with the world.
          </p>
          {/* Button to start the camera */}
          <button onClick={startCamera} className="bg-white text-[#0284c7] py-2 px-4 rounded-lg mb-4">
            Open Camera
          </button>

          {cameraActive && (
              <button onClick={toggleCamera} className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                Switch Camera
              </button>
            )
          }

          {/* Button to capture image */}
          <button onClick={captureImage} className="bg-white text-[#0284c7] py-2 px-4 rounded-lg">
            Capture Image
          </button>

          {/* Hidden canvas for capturing the image */}
          <canvas ref={canvasRef} width="640" height="480" style={{ display: 'none' }} />
        </div>

        {/* Right Section - Video or Captured Image */}
        <div className="bg-blue-300 w-full lg:w-1/2 aspect-square rounded-lg flex items-center justify-center">
          {capturedImage ? (
            <img src={capturedImage} alt="Captured" width="640" height="480" />
          ) : (
            <video ref={videoRef} autoPlay width="640" height="480" className="rounded-lg" />
          )}
        </div>
      </section>







</div>

  )
}

export default Home
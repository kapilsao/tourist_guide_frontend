// import React , {useEffect, useState , useContext} from 'react'
// import { FaStar } from "react-icons/fa";
// import GoogleMapReact from "google-map-react"
// import { Autocomplete ,LoadScript , DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { PlaceDetails } from '../components/PlaceDetails';
// import axios from 'axios'
// import { SearchContext } from '../context/searchContext';
// const libraries = ["places"]; // Add this line

// function Maps() {

//     const isMobile = useMediaQuery('(min-width:600px)')
//     const [coordinates, setCoordinates] = useState({ lat: 40.7128, lng: -74.0060 });
//     const [autocomplete, setAutocomplete] = useState(null);
//     // const [destination, setDestination] = useState(null); // Selected destination
//     const KEY = "AIzaSyC4Mw53_elDkmbno7TLKHtYo_em-EtdsiM"
//     const [places , setPlaces] = useState([]);
//     const { searchHistory, setSearchHistory } = useContext(SearchContext); // Access context values
   
    
    // const places = [
    //  {name : 'Amravati'},
    //  {name : 'Nagpur'},
    //  {name : 'Yavatmal'},
    //  {name : 'Wani'}
    // ]

    // const onLoad = (autocompleteInstance) => {
    //   setAutocomplete(autocompleteInstance);
    // };


    // const onPlaceChanged = () => {
    //   if (autocomplete !== null) {
    //     const place = autocomplete.getPlace();
    //     const newSearch = place.name
    //     const newCoordinates = {
    //       lat: place.geometry.location.lat(),
    //       lng: place.geometry.location.lng(),
    //     };
    //     setSearchHistory(prevSearches => [...prevSearches, newSearch]);
    //     setCoordinates(newCoordinates);  // Update the map with the selected location
    //   } else {
    //     console.log('Autocomplete is not loaded yet!');
    //   }
    // };

    // const getCurrentLocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       (position) => {
    //         setCoordinates({
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude,
    //         });
    //         map?.panTo({
    //           lat: position.coords.latitude,
    //           lng: position.coords.longitude,
    //         });
    //       },
    //       () => alert('Unable to retrieve your location')
    //     );
    //   }
    // };

     

//     const fetchTouristAttractions = async () => {
//       try {
        
  
        
  
//         // Step 2: Use Places API to fetch only tourist attractions around the location
//         const response = await axios.get(`http://localhost:5000/api/places?location=${coordinates.lat},${coordinates.lng}`);
          
//         //const limitedPlaces = response.data.results.slice(0, 4);

//         console.log(response.data.results);
        

//         // Step 3: Update the state with the fetched tourist places
//         setPlaces(response.data.results);
//       } catch (error) {
//         console.error("Error fetching tourist places:", error);
//       }
//     };

//     useEffect(()=>{
//       fetchTouristAttractions();
//     } , [coordinates])


//   return (
//     <>
//      <div className="flex w-full h-[100dvh]">
//         <div className="bg-background border-r w-80 p-6 overflow-auto">
//           <h2 className="text-2xl font-bold mb-4">Nearby Attractions</h2>
//           <div className="grid gap-4">
//             {places?.map((place, index) => (
//               <div className="grid gap-2" key={index}>
//                   <PlaceDetails  place={place} />

//               </div>
//             ))}
            
//           </div>
//         </div>
//         <div className="relative flex-1 h-full">
//           {/* Autocomplete input positioned at the top of the map */}
//           <LoadScript
//               googleMapsApiKey={KEY}
//               libraries={libraries}
//           >
//           <div className="absolute top-4 left-4 z-10">
            
//               <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
//                 <input
//                   type="text"
//                   placeholder="Search for a place"
//                   className="w-72 h-12 px-4 py-2 border rounded-lg shadow-lg text-lg"
//                 />
//               </Autocomplete>
            
//           </div>

//           {/* Google Map */}
//           <GoogleMapReact
//             bootstrapURLKeys={KEY}
//             center={coordinates}
//             defaultCenter={coordinates}
//             zoom={14}
//             options={''}
//             margin={[50, 50, 50, 50]}
//             className="h-full w-full"
//           >
            
//           </GoogleMapReact>

//           </LoadScript>
//         </div>
        
//       </div>
        
//     </>
//   )
// }

// export default Maps








// import React, { useEffect, useState, useContext } from 'react';
// import { LoadScript, Autocomplete } from '@react-google-maps/api';
// import GoogleMapReact from 'google-map-react';
// import axios from 'axios';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { PlaceDetails } from '../components/PlaceDetails';
// import { SearchContext } from '../context/searchContext';

// function Maps() {
//   const isMobile = useMediaQuery('(min-width:600px)');
//   const [coordinates, setCoordinates] = useState({ lat: 40.7128, lng: -74.0060 });
//   const [autocomplete, setAutocomplete] = useState(null);
//   const [places, setPlaces] = useState([]);
//   const { searchHistory, setSearchHistory } = useContext(SearchContext);

//   const KEY = "AIzaSyBpkCikOTWylLkxXbRYxeQj6hRCjJsrvjs";

//   // Load Autocomplete
//   const onLoad = (autocompleteInstance) => {
//     setAutocomplete(autocompleteInstance);
//   };

//   const onPlaceChanged = () => {
//     if (autocomplete !== null) {
//       const place = autocomplete.getPlace();

//       if (place.geometry) {
//         const newSearch = place.name;
//         const newCoordinates = {
//           lat: place.geometry.location.lat(),
//           lng: place.geometry.location.lng(),
//         };

//         setSearchHistory((prev) => [...prev, newSearch]);
//         setCoordinates(newCoordinates);
//       } else {
//         console.error('No geometry available for the selected place.');
//       }
//     } else {
//       console.error('Autocomplete is not loaded yet!');
//     }
//   };

//   // Fetch nearby places
//   const fetchTouristAttractions = async () => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/api/places?location=${coordinates.lat},${coordinates.lng}`
//       );
//       setPlaces(response.data.results || []);
//     } catch (error) {
//       console.error('Error fetching tourist places:', error.response || error.message);
//     }
//   };

//   useEffect(() => {
//     fetchTouristAttractions();
//   }, [coordinates]);

//   return (
//     <LoadScript googleMapsApiKey={KEY} libraries={['places']}>
//       <div className="flex w-full h-[100dvh]">
//         {/* Sidebar for tourist places */}
//         <div className="bg-background border-r w-80 p-6 overflow-auto">
//           <h2 className="text-2xl font-bold mb-4">Nearby Attractions</h2>
//           <div className="grid gap-4">
//             {places?.map((place, index) => (
//               <div className="grid gap-2" key={index}>
//                 <PlaceDetails place={place} />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Google Map */}
//         <div className="relative flex-1 h-full">
//           <div className="absolute top-4 left-4 z-10">
//             <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
//               <input
//                 type="text"
//                 placeholder="Search for a place"
//                 className="w-72 h-12 px-4 py-2 border rounded-lg shadow-lg text-lg"
//               />
//             </Autocomplete>
//           </div>

//           <GoogleMapReact
//             bootstrapURLKeys={{ key: KEY }}
//             center={coordinates}
//             defaultCenter={coordinates}
//             zoom={14}
//             options={{ disableDefaultUI: true }}
//             className="h-full w-full"
//           />
//         </div>
//       </div>
//     </LoadScript>
//   );
// }

// export default Maps;



import React, { useEffect, useState, useContext } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PlaceDetails } from '../components/PlaceDetails';
import { SearchContext } from '../context/searchContext';

function Maps() {
  const isMobile = useMediaQuery('(max-width:600px)'); // For mobile screen sizes
  const [coordinates, setCoordinates] = useState({ lat: 40.7128, lng: -74.0060 });
  const [autocomplete, setAutocomplete] = useState(null);
  const [places, setPlaces] = useState([]);
  const { searchHistory, setSearchHistory } = useContext(SearchContext);

  const KEY = "AIzaSyBpkCikOTWylLkxXbRYxeQj6hRCjJsrvjs";

  // Load Autocomplete
  const onLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();

      if (place.geometry) {
        const newSearch = place.name;
        const newCoordinates = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };

        setSearchHistory((prev) => [...prev, newSearch]);
        setCoordinates(newCoordinates);
      } else {
        console.error('No geometry available for the selected place.');
      }
    } else {
      console.error('Autocomplete is not loaded yet!');
    }
  };

  // Fetch nearby places
  const fetchTouristAttractions = async () => {
    try {
      const response = await axios.get(
        `https://radiant-entremet-464166.netlify.app/api/places?location=${coordinates.lat},${coordinates.lng}`
      );
      setPlaces(response.data.results || []);
    } catch (error) {
      console.error('Error fetching tourist places:', error.response || error.message);
    }
  };

  useEffect(() => {
    fetchTouristAttractions();
  }, [coordinates]);

  return (
    <LoadScript googleMapsApiKey={KEY} libraries={['places']}>
      <div className="flex flex-col md:flex-row w-full h-[100dvh]">
        {/* Sidebar for tourist places */}
        <div className="bg-background border-b md:border-r w-full md:w-80 p-6 overflow-auto md:h-full">
          <h2 className="text-2xl font-bold mb-4">Nearby Attractions</h2>
          <div className="grid gap-4">
            {places?.map((place, index) => (
              <div className="grid gap-2" key={index}>
                <PlaceDetails place={place} />
              </div>
            ))}
          </div>
        </div>

        {/* Google Map */}
        <div className={`relative flex-1 ${isMobile ? "w-full h-[100dvh] aspect-w-1 aspect-h-1" : "h-full"}`}>
          <div className="absolute top-4 left-4 z-10">
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
              <input
                type="text"
                placeholder="Search for a place"
                className="w-72 h-12 px-4 py-2 border rounded-lg shadow-lg text-lg"
              />
            </Autocomplete>
          </div>

          <GoogleMapReact
            bootstrapURLKeys={{ key: KEY }}
            center={coordinates}
            defaultCenter={coordinates}
            zoom={14}
            options={{ disableDefaultUI: true }}
            className="h-full w-full"
          />
        </div>
      </div>
    </LoadScript>
  );
}

export default Maps;




// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/kapilsao/tourist_guide_frontend.git
// git remote add origin https://github.com/kapilsao/tourist_guide_frontend.git
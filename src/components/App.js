// create your App component here
import React, {useState, useEffect} from "react";

function App() {
const [isDoggoLoaded, setIsDoggoLoaded] = useState({})
//isDoggoLoaded = object(from API) set as empty object in useState

useEffect(()=> {
fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(doggo => setIsDoggoLoaded(doggo))
  //sets dog to random dog upon load
},[isDoggoLoaded])
//empty array is dependency array, if empty array, triggers once prevents infinite loop
if (isDoggoLoaded.status === "success") {
    return <img src={isDoggoLoaded.message} alt = "A Random Dog"/>
} else {
    return <p>Loading...</p>
}

}

export default App
import axios from 'axios'

import './App.css'

function App() {
  
  axios.get(`/api/v1/books`).then((response) => {
    console.log("Response:"+response.data);
  }).catch((error) => {
    console.error(error);
  });

  return (
    <>
      <div>
        My First App
      </div>      
    </>
  )
}

export default App

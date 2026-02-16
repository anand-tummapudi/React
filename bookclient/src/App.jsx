import axios from 'axios'

import './App.css'
import Layout from './components/layout/layout';

function App() {
  
  axios.get(`/api/v1/books`).then((response) => {
    console.log("Response:"+response.data);
  }).catch((error) => {
    console.error(error);
  });

  return (
    <Layout>
      <div>
        <h1>Welcome to Nihi Book Store </h1>
      </div>
    </Layout>
  )
}

export default App

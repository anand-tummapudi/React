import axios from 'axios'

import './App.css'
import Layout from './components/layout/layout';
import BookContainer from './components/book/BookContainer';

function App() {
  
  axios.get(`/api/v1/books`).then((response) => {
    console.log("Response:"+response.data);
  }).catch((error) => {
    console.error(error);
  });

  return (
    <Layout>
       <BookContainer/>
    </Layout>
  )
}

export default App

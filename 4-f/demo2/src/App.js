import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

const url= "https://api.coindesk.com/v1/bpi/currentprice,json"

function App() {
  return (
    <div className = "App">
      
    </div>
  );
}

export default function App(){
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        setIsLoading
        setData(result);
      })
  }, []);

  console.log(data)

  return(
    <div className = "App">

      <h4> Loading Data...</h4>
      <progress value={null}/>
      <p>{data("bpi")("USD").rate}</p>
    </div>
  );
}
import { useState } from "react";
import './App.css';
import config from "./config.json";


function App() {

  let [result, setResult] = useState({});

  const fetchData = async () => {
    let items = await fetch(`${config.BASE_URL}/items`).then(r => r.json());
    setResult(items);
  }

  return (
    <div className="App">
      <h1>Fetch data from MongoDB</h1>
      <p>
        <button onClick={fetchData}>Fetch Data</button>
        <code>
          <pre style={{textAlign: "left", marginLeft: "5em", marginRight: "5em"}}>
            {JSON.stringify(result, null, 2)}
          </pre>
        </code>
      </p>
    </div>
  );
}

export default App;

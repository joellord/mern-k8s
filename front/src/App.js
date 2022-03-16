import { useState, useEffect } from "react";
import './App.css';
import GuestBookEntry from "./components/GuestBookEntry";
import config from "./config.json";


function App() {

  let [entries, setEntries] = useState([]);
  let [name, setName] = useState("");
  let [message, setMessage] = useState("");

  const fetchGuestBookEntries = async () => {
    let guestBookEntries = await fetch(`${config.BASE_URL}/entries`).then(resp => resp.json());
    setEntries(guestBookEntries);
  };

  useEffect(() => {
    fetchGuestBookEntries();
  }, []);

  const handleSubmitBtn = async () => {
    let result = await fetch(`${config.BASE_URL}/entry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, message })
    }).then(resp => resp.json());
    fetchGuestBookEntries();
    handleClearBtn();
    console.log(result);
  }

  const handleClearBtn = () => {
    setName("");
    setMessage("");
  }

  return (
    <div className="App">
      <h1>Welcome To My</h1>
      <h2>Guestbook</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div>
          <button id="submitBtn" onClick={handleSubmitBtn} type="button">Submit</button>
          <button id="clearBtn" onClick={handleClearBtn} type="button">Clear</button>
        </div>
      </form>
      <div className="entries">
        {entries.map(entry => <GuestBookEntry {...entry} />)}
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://18.208.169.188:5000/").then((res) => setMessage(res.data));
  }, []);

  return (
    <div>
      <h1>Frontend React App</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;

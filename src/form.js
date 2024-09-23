import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
    const [name, setName] = useState("");
    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState("");

  return (
    <form>
      <label>Username:
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Fullname:
        <input
          type="text" 
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </label>
      <label>Age:
        <input
          type="number" 
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
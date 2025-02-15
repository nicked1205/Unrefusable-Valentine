import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/background";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {    
    navigate("/choice", { state: { value: inputValue } });
  };

  return (
    <Background>
      <div className="font-bold text-4xl text-red-700 mb-6">
        Customize it for your future Valentine 💖
      </div>
      <input
        id="customizedMessage"
        type="text"
        value={inputValue}
        className="border border-red-700 px-4 py-2 rounded-xl mb-4 w-1/4"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }}}
        placeholder="What's your message when they say 'Yes'?"
      />
      <button className="text-red-700 underline px-4 py-2 rounded" onClick={handleSubmit}>Start</button>
    </Background>
  );
}

export default Home;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/background";
import success from "../resources/sounds/success.mp3";
import error from "../resources/sounds/error.mp3";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const successSound = new Audio(success);
  const errorSound = new Audio(error);

  function containsEmoji(str) {
    const emojiRegex = /[\p{Emoji}]/u;
    return emojiRegex.test(str);
  }

  function containsHTML(str) {
    return /<\/?[^>]+(>|$)/.test(str);
  }

  function isEmpty(str) {
    return !inputValue.trim()
  }

  const handleSubmit = () => {
    if (!containsEmoji(inputValue) && !containsHTML(inputValue) && !isEmpty(inputValue)) {	   
      successSound.play();
      navigate(`/success?value=${btoa(inputValue)}`);
    } else {
      errorSound.play();
    }
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
        className="border border-red-700 px-4 py-2 rounded-xl mb-2 w-1/4"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }}}
        placeholder="What's your message when they say 'Yes'?"
      />
      {containsEmoji(inputValue) && (
        <div className="text-red-700 text-sm">
          Sorry but emojis are not allowed 😢
        </div>
      )}
      {containsHTML(inputValue) && (
        <div className="text-red-700 text-sm">
          It seems your input contains HTML tags, you're not exploiting this page right? 😅
        </div>
      )}
      {isEmpty(inputValue) && (
        <div className="text-red-700 text-sm">
          You can't leave this empty! 😢
        </div>
      )}
      <button className="text-red-700 underline px-4 py-2 rounded" onClick={handleSubmit}>Start</button>
    </Background>
  );
}

export default Home;
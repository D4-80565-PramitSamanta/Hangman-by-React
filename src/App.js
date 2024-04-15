import { useState } from "react";
import words from "./wordlist.json"
import Hangmandrawing from "./comp/hangmandrawing";

function App() {
  const [wordtoGuess, setWordtoGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  });

  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(wordtoGuess);
  return (
    <div style={{
      maxWidth:"800px",
      display:"flex",
      flexDirection:"column",
      gap:"2rem",
      margin:"0 auto",
      alignItems : "center"
    }}>
     <div style={{fontSize:"2rem",textAlign:"center"}}>Lose Win</div>
      <Hangmandrawing></Hangmandrawing>
    </div>
  );
}

export default App;

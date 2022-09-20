import { useState, useEffect } from "react";
import "./App.css";
import Body from "./components/Body";
import CarouselSlider from "./components/CarouselSlider";
import Title from "./components/Title";

function App() {
  const [shit, setShit] = useState(
    () =>
      JSON.parse(localStorage.getItem("shitDiary")) || [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ]
  );

  const today = new Date().getDay();

  useEffect(() => {
    localStorage.setItem("shitDiary", JSON.stringify(shit));
  }, [shit]);

  function handleChange(i) {
    setShit((prev) => {
      let newShit = [...prev];
      newShit[i] = !prev[i];
      return newShit;
    });
  }

  return (
    <div className="App">
      <Title />

      <CarouselSlider shit={shit} handleChange={handleChange} />

      <Body hasShit={shit[today]} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Pages from "./assets/Pages";
import Header from "./assets/components/Header";

function App() {
  const [theme, setTheme] = useState(true);
  const handleThemeChange = () => {
    setTheme(!theme)
  }

  return (
    <div className={`flex flex-col items-center  bg-no-repeat bg-cover duration-200 ${theme ? "bg-[url('/src/assets/WeatherIcons/liquid-cheesedark.png')] text-white":"bg-[url('/src/assets/WeatherIcons/liquid-cheese.png')] text-black"} `}>
      <Header themeChanger={handleThemeChange} theme={theme}/>
      <Pages theme={theme}/>
    </div>
  );
}

export default App;

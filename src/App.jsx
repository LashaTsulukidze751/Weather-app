import { useState } from "react";
import Pages from "./assets/Pages";
import Header from "./assets/components/Header";

function App() {
  const [theme, setTheme] = useState(true);
  const handleThemeChange = () => {
    setTheme(!theme)
  }

  return (
    <div className={`flex flex-col items-center ${theme?'bg-slate-600':'bg-red-700'}`}>
      <Header themeChanger={handleThemeChange} theme={theme}/>
      <Pages theme={theme}/>
    </div>
  );
}

export default App;

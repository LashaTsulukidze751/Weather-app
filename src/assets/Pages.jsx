//components
import Search from "./Search";
import Current from "./Current";
import ChooseFrom from "./components/ChooseFrom";
import Daily from "./Daily";

import { useState } from "react";

function Pages({ theme }) {
  const [value, setValue] = useState({
    place_id: "Kobuleti",
    country: "Georgia",
  });

  const handleValueChange = (DifValue) => {
    setValue(DifValue);
  };

  return (
    <div className={` flex flex-col items-center bg-inherit w-11/12`}>
      <div className=" flex justify-around p-5 w-full relative">
        <ChooseFrom onChoose={handleValueChange} theme={theme} />
        <Search onSearchChange={handleValueChange} theme={theme} />
      </div>
      {/* current weather */}
      <Current Dataa={value} theme={theme} />
      <Daily Dataa={value} theme={theme}/>
    </div>
  );
}

export default Pages;

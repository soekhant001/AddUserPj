import React, { useState } from "react";
import FormBox from "./FormBox";
import List from "./List";

const Main = () => {
  const [infos, setInfos] = useState([]);

  const getUserInfo = (userInfoObject) => {
    setInfos([...infos, userInfoObject]);
  };
  return (
    <section className="w-[60%] mx-auto py-5">
      <FormBox getUserInfo={getUserInfo} />
      <List infos={infos} />;
    </section>
  );
};

export default Main;

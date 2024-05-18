import React, { useState } from "react";
import Card from "./Card";

const FormBox = ({ getUserInfo }) => {
  const [name, setName] = useState("");
  const [live, setLive] = useState("");
  const [mail, setMail] = useState("");

  const addUser = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      live.trim().length === 0 ||
      mail.trim().length === 0
    ) {
      alert("Please fill your info.");
    } else {
      const userData = {
        id: Date.now(),
        name,
        live,
        mail,
      };
      getUserInfo(userData);
    }
    setName("");
    setLive("");
    setMail("");
  };
  // const handleName = (e) => {
  //   setName(e.target.value)
  // }
  return (
    <Card>
      <form action="" onSubmit={addUser}>
        <div className="flex flex-col space-y-4 mb-4">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="name" className="text-xl font-sans">
              Name
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              className="border-2 border-slate-400 rounded-md  text-xl py-3 px-4 "
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="live" className="text-xl font-sans">
              Live
            </label>
            <input
              type="text"
              id="live"
              onChange={(e) => {
                setLive(e.target.value);
              }}
              value={live}
              className="border-2 border-slate-400 rounded-md  text-xl py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email" className="text-xl font-sans">
              Email
            </label>
            <input
              type="email"
              id="name"
              onChange={(e) => {
                setMail(e.target.value);
              }}
              value={mail}
              className="border-2 border-slate-400 rounded-md  text-xl py-3 px-4"
            />
          </div>
        </div>
        <button
          type="submit"
          className="border rounded-lg border-slate-400 px-4 py-2 font-bold text-lg hover:bg-gray-300 duration-200 active:scale-90"
        >
          Add User
        </button>
      </form>
    </Card>
  );
};

export default FormBox;

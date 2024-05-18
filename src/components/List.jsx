import React from "react";
import Card from "./Card";

const List = ({ infos }) => {
  return (
    <>
      {infos.length < 1 ? (
        <Card css={`mt-5 bg-slate-200 px-5 py-4 text-center text-xl`}>
          <p>There is no data !!!</p>
        </Card>
      ) : (
        infos.map(({ id, name, live, mail }) => (
          <Card css={`mt-5 bg-slate-200 px-5 py-4`} key={id}>
            <div className="space-y-3">
              <p className="text-xl">Name : {name}</p>
              <p className="text-xl">From : {live}</p>
              <p className="text-xl">Email : {mail}</p>
            </div>
          </Card>
        ))
      )}
    </>
  );
};

export default List;

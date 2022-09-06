import React from "react";
import "./Main.scss";
import { data } from "../../helpers/data";
import Card from "./Card";

const Main = () => {
  return (
    <div className="card-container">
      {data.map((item) => (        
        <Card {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Main;

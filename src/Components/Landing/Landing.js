import React, { useState } from "react";
import CartBox from "../CartBox/CartBox";
import { topData } from "../../Data";

export default function Landing() {
  
  const [topMovies , setTopMovies] = useState(topData)

  return (
    <>
      <div className="row w-100 px-3 m-0">
        {topMovies.map((item) => (
          <CartBox {...item} />
        ))}
      </div>
    </>
  );
}

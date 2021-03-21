import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  
  const getData = () => {
    const token = localStorage.getItem("authToken");
    axiosWithAuth().get("http://localhost:5000/api/colors")
    .then(res => {
      this.setColorList({
        ...this.state,
        colorList: res.data
      })
    })
  }

  
  
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.

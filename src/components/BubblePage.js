import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  // const getData = () => {
  //   const token = localStorage.getItem("authToken");
  //   axiosWithAuth().get("http://localhost:5000/api/colors")
  //   .then(res => {
  //     this.setColorList({
  //       ...this.state,
  //       colorList: res.data
  //     })
  //   })
  // }

  useEffect(() => {
    const fetchData = () => {
       axios.get("http://localhost:5000/api/colors")
      .then(res => {
        setColorList({
          ...this.state,
          colorList: res.data
        })
      });
      ;
    };

    fetchData();
  }, []);

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

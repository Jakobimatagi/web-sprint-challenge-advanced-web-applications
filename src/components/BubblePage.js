import React, { useEffect, useState } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import { useParams } from 'react-router-dom'
const BubblePage = () => {

  const [colorList, setColorList] = useState([]);
  const params = useParams()
  
  const getData = () => {
    axiosWithAuth()
    .get('/colors')
    .then(res => {
      console.log('get')
      console.log(res.data)
      setColorList(res.data)
    })
    .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getData(params.id)
  }, [params.id])
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

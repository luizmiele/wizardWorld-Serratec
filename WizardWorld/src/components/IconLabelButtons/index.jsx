import React from "react";
import axios from "axios";

export default function IconLabelButtons({ 
  onClick
}) {
  return (
    <button onClick={onClick}>Enviar</button>
  );
}
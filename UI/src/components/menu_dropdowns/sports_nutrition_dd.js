import React from "react";
import appsettings from "../../appsettings.json"
import GenericDD from "./generic_dd";

export default function SportsNutritionDD() {

  const jsonFile = appsettings.categories["SPORTS NUTRITION"];

  const myInstance = new GenericDD(jsonFile)
  
  return(
    myInstance
  );
}
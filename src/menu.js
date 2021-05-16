import { useContext, useEffect } from "react";
import { MealNumber } from "./context";

export default () => {
  const [getMealNumber, setMealNumber] = useContext(MealNumber);
  useEffect(() => {
    console.log(`menu ${getMealNumber.target}`);
    console.log(`menu 1  ${getMealNumber.current}`);
  }, [getMealNumber]);
  return <div> Menu</div>;
};

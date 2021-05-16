import { createContext, useState } from "react";

export const MealNumber = createContext();
export const MealNumberProvider = (props) => {
  const [getMealNumber, setMealNumber] = useState({
    target: 0,
    current: 0
  });
  return (
    <MealNumber.Provider value={[getMealNumber, setMealNumber]}>
      {props.children}
    </MealNumber.Provider>
  );
};

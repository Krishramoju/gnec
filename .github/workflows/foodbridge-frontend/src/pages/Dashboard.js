import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

const Dashboard = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/foods")
      .then(response => response.json())
      .then(data => setFoods(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Available Food Donations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {foods.map(food => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;

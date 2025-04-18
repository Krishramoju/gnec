const FoodCard = ({ food }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-bold">{food.name}</h3>
      <p>Quantity: {food.quantity}</p>
      <p>Donor: {food.donor}</p>
      {food.ngoAssigned && <p>Assigned to NGO: {food.ngoAssigned.name}</p>}
    </div>
  );
};

export default FoodCard;


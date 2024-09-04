import Meals from "@/components/Meals/Meals";

const MealsPage = () => {
    
  return (
    <div className="p-12">
      <h3 className="mb-4 text-2xl font-bold text-red-500">
        Choose Your Meals
      </h3>
      <p className="mb-4">Choose your meal by searching...</p>

      <Meals />
    </div>
  );
};
export default MealsPage;

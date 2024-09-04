"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState('')
  const [meals, setMeals] = useState([]);
  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      );

      const data = await res.json();
      
      setMeals(data.meals);
      setError('')
    } catch (error) {
      setError('No data Found')
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

    useEffect(() => {
      loadData();
    }, [search]);
  return (
    <div>
      <div className="flex">
        <input
          onChange={handler}
          type="text"
          placeholder="Search for a meal..."
          className="w-full p-3 border border-gray-200 rounded-l-lg shadow-sm focus:outline-none"
        />
        <button
          
          className="px-6 py-3 font-bold text-white bg-red-500 rounded-r-lg shadow-sm hover:bg-red-600 focus:outline-none "
        >
          Search
        </button>
        
      </div>
          <div className="p-8">
              {meals.length > 0 && !error && (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
                      {meals.map((meal) => (
                          <div key={meal.idMeal} className="p-6 transition-shadow duration-300 bg-white border-2 border-gray-200 rounded-lg shadow-md hover:shadow-xl">
                              <div className="w-full h-64 overflow-hidden rounded-t-lg">
                                  <Image
                                      src={meal.strMealThumb}
                                      alt={meal.strMeal}
                                      width={500}
                                      height={500}
                                      className="object-cover w-full h-full"
                                  />
                              </div>
                              <div className="mt-4">
                                  <h4 className="text-lg font-bold text-gray-800">{meal.strMeal}</h4>
                                  <p className="mt-2 text-sm text-gray-500">{meal.strCategory}</p>
                                  <p className="text-sm text-gray-600">{meal.strArea}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              )}
              {error && (
                  <h2 className="mt-8 text-2xl font-bold text-center text-red-500">
                      No data found
                  </h2>
              )}
          </div>
    </div>
  );
};
export default Meals;

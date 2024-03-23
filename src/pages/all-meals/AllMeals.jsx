import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "../../firebase/firebaseServices";

import MealsCard from "../../ui/mealsCard/MealsCard";
import Spinner from "../../ui/spinner/Spinner";
import "./all-meals.scss";

export default function AllMeals() {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="meals__container">
      {products?.map((meal) => (
        <MealsCard meal={meal} key={meal.id} />
      ))}
    </div>
  );
}

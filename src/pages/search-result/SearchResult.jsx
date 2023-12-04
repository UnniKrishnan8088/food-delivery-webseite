// import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { fireDB } from "../../firebase/firebaseConfig";
import MealsCard from "../../ui/mealsCard/MealsCard";

import { fetchData } from "../../firebase/firebaseServices";
import { useQuery } from "@tanstack/react-query";

import toast from "react-hot-toast";
import Spinner from "../../ui/spinner/Spinner";
import "./searchResult.scss";

export default function SearchResult() {
  const { query: searchQuery } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  let productsArray = [];

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchData,
  });

  const hasMatchingCategory = data?.some((obj) => obj.category === searchQuery);
  const uniqueCategoriesSet = new Set(data?.map((obj) => obj.category));
  const uniqueCategoriesArray = [...uniqueCategoriesSet];

  useEffect(() => {
    const getSearchedItems = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(fireDB, "products"),
          where("category", "==", searchQuery)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setResults(productsArray);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    getSearchedItems();
  }, [searchQuery]);

  if (loading) return <Spinner />;

  return (
    <div className="results__container">
      {!hasMatchingCategory && (
        <div className="message">
          <h4>Please search the following categories</h4>
          {uniqueCategoriesArray?.map((category) => (
            <p key={category}>{category}</p>
          ))}
        </div>
      )}
      {results &&
        results?.map((item, index) => <MealsCard key={index} meal={item} />)}
    </div>
  );
}

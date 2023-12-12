import Applayout from "./ui/applayout/Applayout";
import Home from "./pages/home/Home";
import AllMeals from "./pages/all-meals/AllMeals";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import SignUp from "./pages/signUp/SignUp";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import ProductsTab from "./ui/tabs/ProductsTab";
import UsersTab from "./ui/tabs/UsersTab";
import OrdersTab from "./ui/tabs/OrdersTab";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MealsInfo from "./pages/meals-info/MealsInfo";
import SearchResult from "./pages/search-result/SearchResult";
import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<Applayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/all-meals" element={<AllMeals />} />
            <Route path="meal/:id" element={<MealsInfo />} />
            <Route path="/search-result/:query" element={<SearchResult />} />
            <Route
              path="/order"
              element={
                <ProtectedRoute>
                  <Order />
                </ProtectedRoute>
              }
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRouteForAdmin>
                  <Dashboard />
                </ProtectedRouteForAdmin>
              }
            >
              <Route
                index
                element={<Navigate replace to="/dashboard/products" />}
              />
              <Route path="/dashboard/products" element={<ProductsTab />} />
              <Route path="/dashboard/orders" element={<OrdersTab />} />
              <Route path="/dashboard/users" element={<UsersTab />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;

//user
export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");
  if (user) return children;
  else return <Navigate to={"/login"} />;
};

//admin
export const ProtectedRouteForAdmin = ({ children }) => {
  const {
    user: { email },
  } = JSON.parse(localStorage.getItem("user"));

  if (email === "prasannaunni2001@gmail.com") return children;
  else return <Navigate to={"/login"} />;
};

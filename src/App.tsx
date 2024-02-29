// arguments and vars with prefix "_" are used to avoid error from ESLint, more details in 'eslintrc.cjs' file
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { useCallback } from 'react';

import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import { useEffect } from "react";
import { getCategories } from "./features/Categories/categoriesSlice";
import { getProducts } from "./features/Products/productsSlice";
import UserForm from "./components/User/UserForm";

function App() {


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<Dispatch<any>>();

  const fetchData = useCallback(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="app">
      <Header />
      <UserForm />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;

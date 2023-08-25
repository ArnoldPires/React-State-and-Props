import React from "react";
import './App.css';
import HomePage from "./components/homePage/HomePage";
import EmployeePage from './components/employeePage/EmployeePage';

export default function App() {
  return (
    <>
      <h1>State and Props</h1>
      <section className="containerApp">
        <section className="homePage">
          <HomePage />
        </section>
        <EmployeePage />
      </section>
    </>
  )
}
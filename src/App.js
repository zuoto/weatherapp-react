import React from "react";
import "./styles.css";
import FirstRow from "./firstrow";
import NextDays from "./nextDays";
import Form from "./form";
import Footer from "./footer";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <FirstRow />
          <NextDays />
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}

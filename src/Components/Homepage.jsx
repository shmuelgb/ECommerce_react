import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Homepage() {
  return (
    <div className="homepage">
      <Link to="/products">Go to store</Link>
    </div>
  );
}

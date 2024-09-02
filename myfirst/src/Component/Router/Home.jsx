import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      });
  }, []);
  return (
    <>
      <h1>Home</h1>

      <div className="d-flex flex-wrap">
        {product.map((value, index) => (
          <div className="card" style={{ width: "18rem" }}>
            <Link to={`/single/${value.id} `}>
              <img src={value.images} className="card-img-top" alt="..." />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{value.title}</h5>
              <p className="card-text">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

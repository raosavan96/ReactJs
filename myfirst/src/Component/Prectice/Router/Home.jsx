import { Link } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [Cards, setCards] = useState([]);
  fetch("https://dummyjson.com/products")
    .then((ref) => {
      return ref.json();
    })
    .then((data) => {
      console.log(data);
      setCards(data.products);
    });
  return (
    <>
      <h1>Home</h1>

      <div className="d-flex flex-wrap">
        {Cards.map((value, index) => (
          <div className="card" style={{ width: "18rem" }}>
            <img src={value.images} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{value.title}</h5>
              <p className="card-text">{value.description}</p>
              <Link to={`/single/${value.id}`} className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;

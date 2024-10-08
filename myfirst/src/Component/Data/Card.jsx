import React from "react";

function Card(props) {
  let { title, images, description, price, category, rating } = props.datas;
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={images} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price :- ${price}</li>
          <li className="list-group-item">Category :- {category}</li>
          <li className="list-group-item">Rating :- {rating}</li>
        </ul>
        <div className="card-body">
          <a href="/" className="card-link btn btn-info">
            Buy Now
          </a>
          <a href="/" className="card-link btn btn-danger">
            Add Card
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;

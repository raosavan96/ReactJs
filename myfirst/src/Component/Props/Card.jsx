import "../Css/css/Card.css";

function Card(props) {
  let { firstName, lastName, prof, img } = props.userData;

  return (
    <>
      <div className="card_sec">
        <img src={img} alt="" />
        <h4 style={{ color: "#fff", textAlign: "center" }}>
          {firstName}
          {lastName}
        </h4>
        <p>{prof}</p>
        <button>More Info</button>
      </div>
    </>
  );
}

export default Card;

import CardImage from "./Media/Images/user.jpg";
import "./css/Card.css";
import TextCss from "./css/text.module.css";

function Card() {
  const JavaScss = {
    color: "blue",
    textAlign: "center",
  };
  return (
    <>
      <h1 className={TextCss.cssmodule}>CSS module</h1>

      <h1 style={{ color: "red" }}>Inline css</h1>

      <h2 style={JavaScss}>JavaScript css </h2>

      <div className="card_sec">
        <img src={CardImage} alt="" />
        <h4 style={{ color: "#fff", textAlign: "center" }}>
          Sawan Kamar Yadav
        </h4>
        <p>Web Developer</p>
        <button>More Info</button>
      </div>
    </>
  );
}

export default Card;

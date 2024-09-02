import { useParams } from "react-router-dom";

function Single() {
  const id = useParams();
  const { abc } = id;
  return (
    <>
      <h1>Single</h1>
      <h2>{abc}</h2>
    </>
  );
}

export default Single;

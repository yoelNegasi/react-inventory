import "./Pants.css";

function Pants(props) {
  let startCount = props.startCount;
  let IdealCount = props.IdealCount;
  let difference = props.IdealCount - props.startCount;
  return (
    <div>
      <h1>Pants</h1>
      <div className="pants">
        <div>
          <h2>StartCount: {startCount}</h2>
        </div>
        <div>
          <h2>IdealCount : {IdealCount}</h2>
        </div>
        <div>
          <h2> difference : {difference}</h2>
        </div>
      </div>
    </div>
  );
}

export default Pants;

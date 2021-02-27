import "./Jacket.css";

function Jacket(props) {
  let startCount = props.startCount;
  let IdealCount = props.IdealCount;
  let difference = props.IdealCount - props.startCount;
  return (
    <div>
      <h1>Jackets</h1>
      <div className="jacket">
        <div>
          <h2>CurrentCount : {startCount}</h2>
        </div>
        <div>
          <h2>IdealCount : {IdealCount}</h2>
        </div>
        <div>
          <h2> Differnce : {difference}</h2>
        </div>
      </div>
    </div>
  );
}

export default Jacket;

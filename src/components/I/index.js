import "./icon.css";
export default function I(props) {
  return (
    <button className="i">
      <img src={props.icon} alt="" />
    </button>
  );
}

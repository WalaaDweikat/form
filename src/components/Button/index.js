import "./button.css";
export default function Button(props) {
  return (
    <button className={`button ${props.color}`} onClick={props.onClick}>
      {props.icon} {props.name}
    </button>
  );
}

import "./input.css";
export default function Input(props) {
  return (
    <div className={`input ${props.className}`}>
      <label htmlFor={props.id}>{props.name}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

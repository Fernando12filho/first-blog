import "./input.css";

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  title: string;
}

function Input({type, name, placeholder,title}: InputProps) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{title}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

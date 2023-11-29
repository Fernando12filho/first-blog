import "./input.css";

interface InputProps {
	type: string;
	name: string;
	placeholder: string;
	label: string;
	onChange: (e: any) => any;
	value: any;
}

function Input({
	type,
	name,
	placeholder,
	label,
	onChange,
	value,
}: InputProps) {
	console.log("atualizou...");
	return (
		<div className="input-container">
			<label htmlFor={name}>{label}</label>
			<input
				type={type}
				name={name}
				placeholder={placeholder}
				onChange={(evt: any) => onChange(evt.target.value)}
				value={value}
			/>
		</div>
	);
}

export default Input;

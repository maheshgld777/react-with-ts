type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Input = (props: InputProps) => {
  return (
    <input
      type="text"
      value={props.value}
      onChange={(event) => props.handleChange(event)}
    ></input>
  );
};

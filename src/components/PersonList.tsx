type PersonListProps = {
  names: {
    id: number;
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.id}>
            {name.first} {name.last}
          </h2>
        );
      })}
    </div>
  );
};

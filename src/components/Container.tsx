type ContainerProps = {
  style: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
  return (
    <div>
      <button style={props.style}>click</button>
    </div>
  );
};

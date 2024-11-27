type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") message = "Loading Data....";
  else if (props.status === "success") message = "Data fetched Successfully";
  else if (props.status === "error") message = "Error while fetching data";

  return (
    <div>
      <h2>Stutus - {message}</h2>
    </div>
  );
};

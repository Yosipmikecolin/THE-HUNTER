import "./StateConservation.css";

interface Props {
  state: string;
}

const StateConservation = ({ state }: Props) => {
  const status = ["EX", "EW", "CR", "EN", "VU", "NT", "LC"];

  return (
    <section className="container-status">
      {status.map((i, index) => (
        <div
          className={i === state ? "circle-status-active" : "circle-status"}
          key={index}
        >
          {i}
        </div>
      ))}
    </section>
  );
};

export default StateConservation;

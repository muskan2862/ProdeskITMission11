export default function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
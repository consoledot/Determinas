export default function Industries() {
  const focuses = [
    "TELECOMMUNICATIONS",
    "MANUFACTURING",
    "AGRICULTURE",
    "ENERGY",
    "E-COMMERCE",
    "TRANSPORT AND LOGISTICS",
    "BANKING AND FINANCE",
    "HEALTHCARE",
    "EDUCATION",
  ];
  return (
    <div className="focus">
      {focuses.map((focus, i) => (
        <div key={i}>
          <p>{focus}</p>
        </div>
      ))}
    </div>
  );
}

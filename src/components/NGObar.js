export default function NGOCard({ name, need }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Needs: {need}</p>
      <button>Donate</button>
    </div>
  );
}

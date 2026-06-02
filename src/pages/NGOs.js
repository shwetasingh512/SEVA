import NGOCard from "../components/NGOCard";

export default function NGOs() {
  return (
    <div className="container">
      <h2>Verified NGOs</h2>
      <div className="grid">
        <NGOCard name="Hope Orphanage" need="Books, Clothes" />
        <NGOCard name="Smile Old Age Home" need="Medicines" />
      </div>
    </div>
  );
}

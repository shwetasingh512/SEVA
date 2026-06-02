export default function Donate() {
  return (
    <div className="container">
      <h2>Donate Items</h2>

      <form className="form">
        <input type="text" placeholder="Item Name" required />
        <input type="number" placeholder="Quantity" required />
        <select>
          <option>Select NGO</option>
          <option>Hope Orphanage</option>
          <option>Smile Old Age Home</option>
        </select>
        <input type="file" />
        <button>Submit Donation</button>
      </form>
    </div>
  );
}

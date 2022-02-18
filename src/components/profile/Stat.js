export default function Stat({ label, quantity }) {
  return (
    <li className="stats-item">
      <span className="label">{label}</span>
      <span className="quantity">{quantity}</span>
    </li>
  );
}

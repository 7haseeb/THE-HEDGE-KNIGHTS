import "./MemberCard.css";

export default function MemberCard({ name, role, image, onClick }) {
  return (
    <div className="member-card" onClick={onClick}>
      <img src={image} alt={name} className="member-card__avatar" />
      <h3 className="member-card__title">{name}</h3>
      <p className="member-card__role">{role}</p>
    </div>
  );
}

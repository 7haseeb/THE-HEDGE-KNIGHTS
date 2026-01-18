import "./ProjectCard.css";

export default function ProjectCard({ title, tech, url, image }) {
  const handleClick = () => {
    if (url && url.trim() !== '') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: url && url.trim() !== '' ? 'pointer' : 'default' }}>
      <div className="project-card__image" style={{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__tech">{tech}</p>
    </div>
  );
}

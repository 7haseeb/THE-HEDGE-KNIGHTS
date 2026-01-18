import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./MemberModal.css";

export default function MemberModal({ member, onClose }) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [member]);

  if (!member) return null;

  const { name, role, image, experience, skills, projects } = member;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-overlay__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-overlay__close-btn" onClick={onClose}>✖</button>

        <div className="modal-overlay__header">
          <img src={image} alt={name} className="modal-overlay__avatar" />
          <h2>{name}</h2>
          <p>{role}</p>
        </div>

        <div className="modal-overlay__section">
          <h3>Experience</h3>
          <p>{experience}</p>
        </div>

        <div className="modal-overlay__section">
          <h3>Skills</h3>
          {Array.isArray(skills) && skills.length > 0 && typeof skills[0] === 'object' ? (
            <div className="modal-overlay__skills-sections">
              {skills.map((skillGroup, i) => (
                <div key={i} className="modal-overlay__skill-group">
                  <h4 className="modal-overlay__skill-group-title">{skillGroup.section}</h4>
                  <ul className="modal-overlay__skills">
                    {skillGroup.items.map((skill, j) => <li key={j} className="modal-overlay__skill-item">{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="modal-overlay__skills">
              {skills.map((skill, i) => <li key={i} className="modal-overlay__skill-item">{skill}</li>)}
            </ul>
          )}
        </div>

        <div className="modal-overlay__section">
          <h3>Projects</h3>
          <div className="projects__grid">
            {projects.map((proj, i) => (
              <ProjectCard key={i} title={proj.title} tech={proj.tech} url={proj.url} image={proj.image} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

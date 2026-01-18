import ProjectCard from "./ProjectCard";
import sufi6 from "../assets/projects/sufi-zohib/S_6.jpg";
import shoaib3 from "../assets/projects/shoaib-ahmed/shoaib_3.jpg";
import ghaffar2 from "../assets/projects/abdul-ghaffar/g_2.avif";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects">
      <h2 className="projects__title">Alliance Projects</h2>

      <div className="projects__grid">
        <ProjectCard title="Dataset Cleaner" tech="React • Flask" url="" image={sufi6} />
        <ProjectCard title="Movie Site" tech="React • Vite" url="https://movie-ring.vercel.app/" image={shoaib3} />
        <ProjectCard title="CRE Underwriter AI" tech="React • Vite" url="https://ai-cre-under-writer-t5rn.vercel.app/" image={ghaffar2} />
      </div>
    </section>
  );
}

import React, { useState } from "react";
import MemberCard from "./MemberCard";
import MemberModal from "./MemberModal";
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";
import member4 from "../assets/member4.png";
import sufi1 from "../assets/projects/sufi-zohib/S_1.png";
import sufi2 from "../assets/projects/sufi-zohib/S_2.png";
import sufi3 from "../assets/projects/sufi-zohib/H_3.jpg";
import sufi4 from "../assets/projects/sufi-zohib/S_4.jpg";
import sufi5 from "../assets/projects/sufi-zohib/S_5.png";
import sufi6 from "../assets/projects/sufi-zohib/S_6.jpg";
import sufi7 from "../assets/projects/sufi-zohib/S_7.jpg";
import shoaib1 from "../assets/projects/shoaib-ahmed/shoaib1.avif";
import shoaib2 from "../assets/projects/shoaib-ahmed/shoaib_2.jpg";
import shoaib3 from "../assets/projects/shoaib-ahmed/shoaib_3.jpg";
import ghaffar1 from "../assets/projects/abdul-ghaffar/G1.png";
import ghaffar2 from "../assets/projects/abdul-ghaffar/g_2.avif";
import haseeb1 from "../assets/projects/muhammad-haseeb/H_1.avif";
import haseeb2 from "../assets/projects/muhammad-haseeb/H_2.jpg";
import haseeb3 from "../assets/projects/muhammad-haseeb/H_3.png";
import haseeb4 from "../assets/projects/muhammad-haseeb/H_4.avif";
import haseeb5 from "../assets/projects/muhammad-haseeb/H_5.webp";
import haseeb6 from "../assets/projects/muhammad-haseeb/H_6.jpg";
import haseeb7 from "../assets/projects/muhammad-haseeb/H_7.jpg";
import haseeb8 from "../assets/projects/muhammad-haseeb/H_8.jpg";
import "./Team.css";

export default function Team() {
  const members = [
    {
      name: "Sufi Ali Qutib",
      role: "Mern Stack Developer",
      image: member1,
      experience: "3 years building modern UIs with React.",
      skills: [
        {
          section: "Language - Advance to Intermediate",
          items: ["JavaScript", "Java", "Python", "HTML", "CSS"]
        },
        {
          section: "Language - Basic",
          items: ["C++", "SQL"]
        },
        {
          section: "Libraries and Framework",
          items: ["React", "Express.js", "Mongoose", "Flask", "Numpy", "Pandas", "Matplotlib", "Swing"]
        },
        {
          section: "Database",
          items: ["MySQL", "MongoDB"]
        }
      ],
      projects: [
        { title: "Cashbook", tech: "Java • Swing", url: "https://github.com/aliqutib/Cashbook", image: sufi1 },
        { title: "Binary Search Animation", tech: "Java • Swing", url: "https://github.com/aliqutib/BinarySearchAnimation", image: sufi2 },
        { title: "Weather App", tech: "HTML • CSS • JS • Serverless", url: "https://htmlcss-js-projects.vercel.app", image: sufi3 },
        { title: "Blog Site", tech: "React", url: "", image: sufi4 },
        { title: "Products Catalogue", tech: "React", url: "", image: sufi5 },
        { title: "Dataset Cleaner", tech: "React • Flask", url: "", image: sufi6 },
        { title: "Spam Detector", tech: "Python • Pandas", url: "", image: sufi7 },
      ],
    },
    {
      name: "Shoaib Ahmed",
      role: "Flutter Developer",
      image: member2,
      experience: "2+ years Mobile Application Development(Flutter , Kotlin).",
      skills: [
        {
          section: "Language - Advance to Intermediate",
          items: ["JavaScript", "Java", "Python", "Dart", "Kotlin", "HTML", "CSS"]
        },
        {
          section: "Language - Basic",
          items: ["C++", "SQL"]
        },
        {
          section: "Libraries and Framework",
          items: ["React", "Flask", "Numpy", "Pandas", "Matplotlib", "Swing", "Scikit-Learn"]
        },
        {
          section: "Database",
          items: ["MySQL", "Firebase"]
        }
      ],
      projects: [
        { title: "Notes App", tech: "Flutter", url: "https://github.com/shoaibahmedcs/notes_app_flutter", image: shoaib1 },
        { title: "Expense Tracker", tech: "Flutter", url: "https://github.com/shoaibahmedcs/expense_tracker_flutter", image: shoaib2 },
        { title: "Movie site", tech: "React • Vite", url: "https://movie-ring.vercel.app/", image: shoaib3 },
      ],
    },
    {
      name: "Abdul Ghaffar",
      role: "AI / ML Engineer",
      image: member3,
      experience: "2+ years of hands-on experience building and tackling advanced machine learning challenges.",
      skills: [
        {
          section: "Language - Advance to Intermediate",
          items: ["JavaScript", "Java", "Python", "Dart", "Kotlin", "HTML", "CSS", "JavaScript"]
        },
        {
          section: "Language - Basic",
          items: ["C++", "SQL"]
        },
        {
          section: "Libraries and Framework",
          items: ["React", "Flask", "Numpy", "Pandas", "Matplotlib", "Swing", "Scikit-Learn", "Scipy"]
        },
        {
          section: "Database",
          items: ["MySQL", "Firebase"]
        }
      ],
      projects: [
        { title: "Connect chat", tech: "React • Vite", image: ghaffar1, url: "https://chat-app-07.vercel.app/" },
        { title: "CRE Underwriter AI", tech: "React • Vite", image: ghaffar2, url: "https://ai-cre-under-writer-t5rn.vercel.app/" },
      ],
    },
    {
      name: "Muhammad Haseeb",
      role: "Computer Vision Engineer",
      image: member4,
      experience: "2+ years of experience as a Computer Vision Engineer developing and solving advanced vision-based problems.",
      skills: [
        {
          section: "Language - Advance to Intermediate",
          items: ["JavaScript", "Java", "Python", "HTML", "CSS"]
        },
        {
          section: "Language - Basic",
          items: ["C++", "SQL"]
        },
        {
          section: "Libraries and Framework",
          items: ["React", "OpenCV", "Mediapipe", "Pycaw", "Numpy", "Pandas", "Matplotlib", "Swing", "Scikit-Learn", "Scipy"]
        },
        {
          section: "Database",
          items: ["MySQL", "Firebase"]
        }
      ],
      projects: [
        { title: "Weather App", tech: "Python • PyQt5", image: haseeb1, url: "https://github.com/7haseeb/weather_app_py" },
        { title: "Digital Clock", tech: "Python", image: haseeb2, url: "https://github.com/7haseeb/py_clock" },
        { title: "To-do List", tech: "Java • Swing", image: haseeb3, url: "https://github.com/7haseeb/TO_DO_LIST" },
        { title: "Gesture Volume Control", tech: "OpenCV • Pycaw", image: haseeb4, url: "https://github.com/7haseeb/computer_vision/tree/main/GestureVolume%20Control" },
        { title: "Virtual Drag and Drop", tech: "OpenCV • Mediapipe", image: haseeb5, url: "https://github.com/7haseeb/computer_vision/tree/main/Virtual_Drag_and_drop" },
        { title: "Virtual Keyboard", tech: "OpenCV • Cvzone", image: haseeb6, url: "https://github.com/7haseeb/computer_vision" },
        { title: "Text Detector", tech: "OpenCV • Mediapipe", image: haseeb7, url: "https://github.com/7haseeb/computer_vision/tree/main/Text_dect" },
        { title: "Movie Site", tech: "React • Vite", image: haseeb8, url: "https://movie-ring.vercel.app/" },
      ],
    },
  ];

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="team">
      <h2 className="team__title">Our Alliance</h2>
      <p className="team__description">Meet the talented developers and innovators behind Alliance. Each member brings unique expertise and passion to create exceptional digital solutions.</p>

      <div className="team__members">
        {members.map((member, i) => (
          <MemberCard
            key={i}
            name={member.name}
            role={member.role}
            image={member.image}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
}

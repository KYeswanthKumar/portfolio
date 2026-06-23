import React from "react";

function App() {
  const skills = [
    "Java",
    "C",
    "Data Structures and Algorithms",
    "OOPs",
    "Collections Framework",
    "Exception Handling",
    "SQL",
    "Generative AI",
    "Prompt Engineering",
    "Machine Learning",
    "LLM Applications",
    "Git",
    "GitHub",
    "MySQL",
    "VS Code",
    "PyTorch",
    "PyCharm",
    "Google Colab",
    "Kaggle",
  ];

  const projects = [
    {
      title: "InfoFlow AI – Internal Information Access System",
      tech: "Python, Streamlit, FLAN-T5, FAISS, Generative AI",
      desc: "Developed a Generative AI-based system to retrieve and answer queries from internal documents. Implemented text chunking, embeddings, and FAISS vector database. Built backend APIs in Python and integrated FLAN-T5. Designed UI using Streamlit.",
    },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-cyan-400">
            Kakarla Yeswanth Kumar
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#about" className="hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
            <a href="#internship" className="hover:text-cyan-400">
              Internship
            </a>
            <a href="#certifications" className="hover:text-cyan-400">
              Certifications
            </a>
            <a href="#education" className="hover:text-cyan-400">
              Education
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
<section className="text-center py-20 px-6">
  <img
    src="/profile.jpg"
    alt="Kakarla Yeswanth Kumar"
    className="w-48 h-48 rounded-full mx-auto border-4 border-cyan-400 shadow-2xl hover:scale-105 transition duration-300 object-cover"
  />

  <h1 className="text-5xl md:text-7xl font-bold mt-6">
    Hi, I'm{" "}
    <span className="text-cyan-400">
      Kakarla Yeswanth Kumar
    </span>
  </h1>

  <p className="mt-6 text-xl text-gray-300">
    B.Tech – Computer Science Engineering
  </p>

  <p className="mt-4 text-lg text-gray-400">
    Aspiring Software Engineer • Generative AI Enthusiast
  </p>

  <p className="mt-4 max-w-3xl mx-auto text-gray-400">
    Aspiring Software Engineer with strong foundations in Java,
    Data Structures, OOPs, and Generative AI. Passionate about
    building intelligent, scalable applications and seeking an
    opportunity to contribute to AI-driven SaaS products while
    enhancing problem-solving and software development skills.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href="#projects"
      className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
    >
      View Projects
    </a>

    <a
      href="#contact"
      className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black"
    >
      Contact Me
    </a>
  </div>
</section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          Aspiring Software Engineer with strong foundations in Java,
          Data Structures, OOPs, and Generative AI. Passionate about
          building intelligent, scalable applications and seeking an
          opportunity to contribute to AI-driven SaaS products while
          enhancing problem-solving and software development skills.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Education
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              B.Tech – Computer Science Engineering
            </h3>
            <p>KL University</p>
            <p>CGPA: 8.83</p>
            <p>2023 – 2027</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Intermediate (Class 11 & 12)
            </h3>
            <p>Resonance Jr. College</p>
            <p>CGPA: 8.59</p>
            <p>2021 – 2023</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold">
              Higher Class (Class 10)
            </h3>
            <p>New Vision School</p>
            <p>CGPA: 10.00</p>
            <p>2020 – 2021</p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Skills
        </h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-800 px-5 py-3 rounded-full hover:bg-cyan-500 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Projects
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-cyan-300 mb-3">
                {project.tech}
              </p>

              <p className="text-gray-300">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Internship */}
      <section
        id="internship"
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Internship Experience
        </h2>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold">
            AI-ML Virtual Internship
          </h3>

          <p className="text-cyan-300 mt-2">
            AICTE, EduSkills
          </p>

          <p className="text-gray-400 mt-2">
            Jul 2025 – Sep 2025
          </p>

          <ul className="mt-4 list-disc list-inside text-gray-300 space-y-2">
            <li>
              Completed 10-week internship on AI and Machine Learning.
            </li>
            <li>
              Worked on real-world ML problem-solving.
            </li>
            <li>
              Gained hands-on exposure to tools and workflows.
            </li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section
        id="certifications"
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Certifications
        </h2>

        <div className="space-y-4">
          <div className="bg-slate-800 p-5 rounded-xl">
            Oracle Certified Foundations Associate – Oracle
          </div>

          <div className="bg-slate-800 p-5 rounded-xl">
            Salesforce Certified AI Associate – Salesforce
          </div>
        </div>
      </section>

      {/* Extra Curricular Activities */}
      <section
        id="activities"
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Extra-Curricular Activities
        </h2>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Practiced coding to strengthen DSA skills.
            </li>
            <li>
              Participated in workshops and coding events.
            </li>
            <li>
              Gained experience with C, Java, Python.
            </li>
          </ul>
        </div>
      </section>

      {/* Hobbies */}
      <section
        id="hobbies"
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Hobbies
        </h2>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>
              Playing cricket in free time (enthusiastic learner,
              enjoy team play)
            </li>
            <li>
              Going for walks after work to stay active and refreshed
            </li>
            <li>
              Food enthusiast – enjoy homemade dishes, especially my
              mother’s recipes
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-8">
          Contact
        </h2>

        <div className="space-y-4 text-lg">
          <p>📧 Email: 2300031427cse@gmail.com</p>

          <p>
            🔗 LinkedIn:
            linkedin.com/in/kakarla-yeswanth-kumar-70749b372
          </p>

          <p>
            💻 GitHub:
            github.com/KYeswanthKumar
          </p>

          <p>
            📍 Andhra Pradesh, Vijayawada, Vaddeswaram
          </p>

          <p>
            📞 +91 8317664889
          </p>
        </div>
      </section>

      <footer className="bg-slate-950 text-center py-6">
        © 2026 Kakarla Yeswanth Kumar | Portfolio Website
      </footer>
    </div>
  );
}

export default App;

export default function Projects() {
    const projects = ["Portfolio Website", "E-commerce Platform", "Blog Application", "Weather Dashboard"]
  
    return (
      <section id="projects">
        <h2>My Projects</h2>
        <p>Here are some of the projects I have worked on:</p>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ul>
      </section>
    )
  }
  
  
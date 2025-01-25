export default function Skills() {
    const skills = ["HTML & CSS", "JavaScript", "C & C++", "Node.js", "Python", "UI/UX Design"]
  
    return (
      <section id="skills">
        <h2>My Skills</h2>
        <div className="skills">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    )
  }
  
  
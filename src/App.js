import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <div className="try">
            <h2>CONTACT</h2>
            <p>kmgmarron.student@ua.edu.ph</p>
            <p>+63 9216936454</p>
            <p>San Fernando Pampanga, Philippines</p>
            <a href="https://www.facebook.com/karl.marron.5">Facebook</a><br></br>
            <a href="#">Linkedin</a>

            <h2>EDUCATION</h2>
            <p>Bachelor of Science</p>
            <p>Information Technology</p>
            <p>University of the</p>
            <p>Assumption</p>
            <p>2022 = 2026</p>

            <h2>SKILSS</h2>
            <p>HTML / CSS</p>
            <p>Javascript</p>
            <p>Bootstrap</p>
            <p>React JS</p>
            <p>FIgma</p>
            </div>

          </div>
          <div className="Experience">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Karl Moses Marron</h1><hr></hr>
      <h2>UI/UX | Front End Developer | Scrum Master</h2>
    </div>
  );
}

function Experience() {
  return (
    <div className="exp">
      <h2>WORK EXPERIENCE</h2>
      <h3>IT Support Specialist</h3>
<p>Tech Solutions Inc., San Francisco, CA<br></br>
<em>June 2031 – Present</em></p>
<ul>
    <li>Provided technical support to over 300 employees, resolving hardware and software issues in a timely manner.</li>
    <li>Implemented a ticketing system that improved response time by 30%, enhancing overall customer satisfaction.</li>
    <li>Conducted training sessions for staff on new software applications, increasing user proficiency by 25%.</li>
</ul>


<h3>Software Developer Intern</h3>
<p>Innovative Apps LLC, Remote<br></br>
<em>January 2031 – May 2031</em></p>
<ul>
    <li>Collaborated with a team of developers to design and implement features for a mobile application, resulting in a 15% increase in user engagement.</li>
    <li>Assisted in debugging and optimizing code, leading to a 20% improvement in application performance.</li>
    <li>Participated in agile development practices, contributing to daily stand-ups and sprint planning sessions.</li>
</ul>


<h3>Network Administrator</h3>
<p>Global Tech Solutions, New York, NY<br></br>
<em>August 2029 – December 2030</em></p>
<ul>
    <li>Managed and maintained company networks, ensuring 99.9% uptime and security compliance.</li>
    <li>Configured and deployed network devices, improving data transfer rates by 40%.</li>
    <li>Developed and documented network policies and procedures, streamlining onboarding processes for new IT staff.</li>
</ul>
    </div>
  )
}
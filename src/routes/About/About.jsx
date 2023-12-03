import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      className="About MainItem"
    >
      <div className="container" style={{ padding: "20px" }}>
        <h2 className="title" style={{ textAlign: "center" }}>Welcome on my Web Page!!</h2>
        <br/>
        <div>
          First of all, I want to say <b>thank you</b> for stopping by!!!
          My name is David, and this platform is my way of sharing a glimpse into who I am and the projects I've undertaken.
        </div>
        <h2 style={{ textDecoration: "underline" }}><Link to="/projects">Projects Page</Link></h2>
        <div>
          I am David, a seasoned Frontend Developer with a strong proficiency in ReactJS. 
          Apart from crafting code, I am an avid board gamer, a CrossFit enthusiast, 
          and a perpetual learner always on the lookout for new information.

          Feel free to explore my projects and, if you have any suggestions, 
          questions, or just want to chat, don't hesitate to reach out via email at
          <b><a style={{ textDecoration: "underline" }} href="mailto:correodemimobil@gmail.com">correodemimobil@gmail.com</a></b>. 
          Alternatively, you can connect with me through the social networks listed below.
        </div>
        <br/>
        <div>
          Oh, by the way, I'm multilingual, fluent in four languages:
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>Russian</li>
            <li>Ukrainian</li>
          </ul>
          <p>Choose any language from the list that suits you best.</p>
          <p>Looking forward to connecting with you, fellow internet traveler! 😏</p>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default About

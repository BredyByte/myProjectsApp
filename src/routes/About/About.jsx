import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      className="About MainItem"
    >
      <div className="container" style={{ padding: "20px" }}>
        <h2 className="title" style={{ textAlign: "center" }}>Hi there!</h2>
        <br/>
        <div>
          First of all, I want to say <b>thank you</b> for visiting this application.
          I made it  for a single purpose - to introduce you my person and projects that i've made.
        </div>
        <h2 style={{ textDecoration: "underline" }}><Link to="/projects">My Projects</Link></h2>
        <div>
          I'm David, Frontend Developer with good experience in  ReactJS.
          I play board games, do crossfit, hunt for new information, and i just adore programming!
          So, if you have any suggestions to me, questions, well,
          or just want to chat - write me an
          email <b><a style={{ textDecoration: "underline" }} href="mailto:correodemimobil@gmail.com">correodemimobil@gmail.com</a></b> or
          you'll be able to use any social net attached below.
        </div>
        <br/>
        <div>
          Oh, btw, i speak 4 languages:
          <ul>
            <li>English</li>
            <li>Spanish</li>
            <li>Russian</li>
            <li>Ukrainian</li>
          </ul>
          <p>So you can choose any one from this list.</p>
          <p>See you later, internet traveler😏.</p>
        </div>
        <br/>
      </div>
    </div>
  )
}

export default About

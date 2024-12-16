import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/job_hunt.svg";
import Logo from "../components/Logo";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            App<span>licant</span> app
          </h1>
          <p>
            Blackbird spyplane tumblr gochujang, health goth put a bird on it
            big mood kombucha occupy. lyft gatekeep paleo. Aesthetic try-hard
            actually viral vice hell of fam cray lyft cloud bread. Palo santo
            tattooed fashion axe, blue bottle neutra offal activated charcoal
            heirloom pour-over hexagon. Try-hard Brooklyn hexagon knausgaard
            stumptown kinfolk authentic hella tumblr hell of man bun typewriter.
          </p>
          <Link to="register" className="btn register-link">
            Register
          </Link>
          <Link to="login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;

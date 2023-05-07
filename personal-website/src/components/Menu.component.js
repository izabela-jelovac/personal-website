import Contact from "../Contact";
import Education from "../Education";
import MyProjects from "../MyProjects";
import About from "../About";

function Menu() {
  return (
    <div className="menu">
      <p>MENU</p>
      <Education />
      <MyProjects />
      <About />
      <Contact />
    </div>
  );
}
export default Menu;

import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  state = {
    navBackground: "transparent",
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 100 ? "transparent" : "black";

      this.setState({ navBackground: backgroundcolor });
    });
  }

  render() {
    return (
      <div
        className="nav"
        style={{ backgroundColor: `${this.state.navBackground}` }}
      >
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"
          alt="Netflix logo"
        />
        <img
          className="nav_avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Avatar"
        />
      </div>
    );
  }
}
export default Navbar;

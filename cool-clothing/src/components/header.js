import logo from "../images/logo2.png";
function Header(props) {
  //this prop checks if the user is logged in or not
  const logged = props.logged;
  return (
    //if the use is logged in then this page is output to them
    logged === true ? (
      <>
        <div
          style={{
            textAlign: "center",
            position: "relative",
            right: "0",
            left: "0",
            marginBottom: "10px",
            marginTop: "150px",
          }}
        >
          <img
            src={logo}
            style={{ width: "30%", borderRadius: "25%" }}
            alt="logo"
          ></img>
          <h1>Welcome to Chill Wears</h1>
        </div>
      </> //else this page is output and they will need to log in
    ) : (
      <div
        style={{
          textAlign: "center",
          position: "relative",
          right: "0",
          left: "0",
          marginBottom: "10px",
          marginTop: "150px",
        }}
      >
        <img
          src={logo}
          style={{ width: "30%", borderRadius: "25%" }}
          alt="logo"
        ></img>
        <h1>Please Log in</h1>
        <button>Log In</button>
      </div>
    )
  );
}

export default Header;

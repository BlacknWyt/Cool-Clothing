function Logout() {
  //this function logs the user out when clicked
  let log = () => {
    alert("Logging out");
  };
  //log out button
  return <button onClick={log}>Logout</button>;
}

export default Logout;

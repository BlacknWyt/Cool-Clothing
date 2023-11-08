import "../img.css";
import Header from "./Header";
import Logout from "./Logout";

function Profile() {
  //object containg user details
  let user = {
    name: "Anna",
    surname: "Smith",
    date_of_birth: "1998-09-26",
    address: "123 Main Str",
    country: "South Africa",
    email: "AnnaS@example.com",
    telphone: "1233455669",
    company: "google",
    profile_picture: "https://picsum.photos/id/64/367/267",
    shopping_cart: ["Cheese,", " Apples,", " Coffee"],
  };
  //user details are displayed on the user profile page
  return (
    <>
      <Header logged={true} />
      <div id="head">
        <div>
          <h2>{user.name + " " + user.surname}</h2>
          <img src={user.profile_picture} id="img" alt="Anna Smith"></img>
        </div>
        <div id="body">
          <h3>Date of Birth - {user.date_of_birth}</h3>
          <h3>Address - {user.address}</h3>
          <h3>Country - {user.country}</h3>
          <h3>Email - {user.email}</h3>
          <h3>Telephone - {user.telphone}</h3>
          <h3>Company - {user.company}</h3>
          <h3>shopping cart - {user.shopping_cart}</h3>
        </div>
        <div style={{ textAlign: "center" }}>
          <Logout />
        </div>
      </div>
    </>
  );
}
export default Profile;

import Header from "./Header";
import img from "../images/blank.png";

function Shopping(prop) {
  //Clothing currently available in store
  let cloths = [
    {
      clothingImg: "",
      price: "R1200",
      tags: "#Turtle-neck, #Expensive, #Gucii Vitton",
    },
    { clothingImg: "", price: "R600", tags: "#Jeans, #SpacedX, #Andromeda" },
    { clothingImg: "", price: "R500", tags: "#T-shirt, #Pink" },
    { clothingImg: "", price: "R1500", tags: "#Hoodie, #moon, #black" },
  ];

  let forProd = prop.forProd;
  //if the prop exists the cloths are spliced
  if (forProd) {
    cloths = cloths.splice(forProd[0], forProd[1]);
  }
  return (
    //if prop exists then this is displayed
    forProd ? (
      <div
        style={{
          marginTop: "50px",
          marginBottom: "50px",
          marginLeft: "50px",
          marginRight: "50px",
          textAlign: "center",
          backgroundColor: "black",
          color: "yellow",
          padding: "20px",
        }}
      >
        <h1 style={{ textAlign: "center" }}>Our Latest Lrops!!</h1>
        {/* the clothing maps display the different clothing available in the store  */}
        {cloths.map((a) => (
          <>
            <div
              style={{
                display: "inline-block",
                textAlign: "center",
                padding: "10px",
                paddingLeft: "30px",
                paddingRight: "30px",
              }}
            >
              <img src={img} alt="no img"></img>
              <h3>{a.tags}</h3>
              <h3>{a.price}</h3>
            </div>
          </>
        ))}
      </div>
    ) : (
      //else this display is displayed
      <>
        <Header logged={true} />
        <div style={{ backgroundColor: "black" }}>
          <div
            style={{
              marginTop: "100px",
              marginLeft: "20px",
              marginRight: "20px",
              textAlign: "center",
            }}
          >
            <h1
              style={{ textAlign: "center", fontSize: "50px", color: "yellow" }}
            >
              Cool Wears
            </h1>
            {/* the clothing maps display the different clothing available in the store  */}
            {cloths.map((a) => (
              <>
                <div
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    padding: "40px",
                    backgroundColor: "white",
                    marginTop: "20px",
                    marginBottom: "20px",
                    paddingLeft: "80px",
                    paddingRight: "80px",
                  }}
                >
                  <img src={img} alt="no img"></img>
                  <h3>{a.tags}</h3>
                  <h3>{a.price}</h3>
                </div>
              </>
            ))}
            {/* the clothing maps display the different clothing available in the store  */}
            {cloths.map((a) => (
              <>
                <div
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    padding: "40px",
                    backgroundColor: "white",
                    marginTop: "20px",
                    marginBottom: "20px",
                    paddingLeft: "80px",
                    paddingRight: "80px",
                  }}
                >
                  <img src={img} alt="no img"></img>
                  <h3>{a.tags}</h3>
                  <h3>{a.price}</h3>
                </div>
              </>
            ))}
            {/* the clothing maps display the different clothing available in the store  */}
            {cloths.map((a) => (
              <>
                <div
                  style={{
                    display: "inline-block",
                    textAlign: "center",
                    padding: "40px",
                    backgroundColor: "white",
                    marginTop: "20px",
                    marginBottom: "20px",
                    paddingLeft: "80px",
                    paddingRight: "80px",
                  }}
                >
                  <img src={img} alt="no img"></img>
                  <h3>{a.tags}</h3>
                  <h3>{a.price}</h3>
                </div>
              </>
            ))}
          </div>
        </div>
      </>
    )
  );
}

export default Shopping;

import "../css.css";

function Cost() {
  //this function calculates the monthly payments the user must pay
  let totalCost = () => {
    //total cost
    let totalCost = document.getElementById("totalCost").value;
    //months
    let months = document.getElementById("months").value;
    let output = Math.round((totalCost * (1 + 0.2)) / months);
    //the amount/output will displayed on the webpage for the user to see
    document.getElementById("output").textContent = output;
  };

  return (
    <div id="cost" style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Cost Calculater</h1>
      <div>
        <h3 id="totaltxt">
          What is your shopping total: <input id="totalCost" />
        </h3>
        <h3 id="monthstxt">
          Over how may months would you like to pay it off:{" "}
          <input id="months" />
        </h3>
        <button onClick={totalCost}>Enter</button>
        <h3>
          You will have to pay :{" "}
          <p id="output" style={{ display: "inline" }}></p> monthly
        </h3>
      </div>
    </div>
  );
}

export default Cost;

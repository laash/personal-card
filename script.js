function addCard() {
     let fullName = document.getElementById("fullName").value;
     let age = document.getElementById("age").value;
     let address = document.getElementById("address").value;
     let gender = document.getElementById("gender").value;

     let card = document.createElement("div");
     card.className = "card";

     let content = document.createElement("p");
     content.innerHTML =
          "<strong>Name:</strong> " +
          fullName +
          "<br><strong>Age:</strong> " +
          age +
          "<br><strong>Address:</strong> " +
          address +
          "<br><strong>Gender:</strong> " +
          gender;

     card.appendChild(content);

     let cardContainer = document.getElementById("cardContainer");
     cardContainer.appendChild(card);

     document.getElementById("fullName").value = "";
     document.getElementById("age").value = "";
     document.getElementById("address").value = "";
}

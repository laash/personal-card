function addCard() {
     // Get user inputs
     let fullName = document.getElementById("fullName").value;
     let age = document.getElementById("age").value;
     let address = document.getElementById("address").value;
     let gender = document.getElementById("gender").value;

     // Create card element
     let card = document.createElement("div");
     card.className = "card";

     // Create card content
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

     // Add content to card
     card.appendChild(content);

     // Add card to card container
     let cardContainer = document.getElementById("cardContainer");
     cardContainer.appendChild(card);

     // Clear input fields
     document.getElementById("fullName").value = "";
     document.getElementById("age").value = "";
     document.getElementById("address").value = "";
}

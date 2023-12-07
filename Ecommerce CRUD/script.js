function getAllProduct(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            var data = JSON.parse(this.responseText);
            var eproductElement = document.getElementById("eproduct");
            eproductElement.innerHTML="";
            data.forEach(function(product) {
                var li = document.createElement("li");
                li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
              
                var div = document.createElement("div");
                div.classList.add("ms-2", "me-auto");
              
                var nameElement = document.createElement("div");
                nameElement.classList.add("fw-bold");
                nameElement.textContent = "ID: " + product.id + " - " + product.name;
              
                var descriptionElement = document.createElement("div");
                descriptionElement.textContent = product.description;
              
                div.appendChild(nameElement);
                div.appendChild(descriptionElement);
              
                var priceElement = document.createElement("span");
                priceElement.classList.add("badge", "bg-primary", "rounded-pill");
                priceElement.textContent = product.price;
              
                li.appendChild(div);
                li.appendChild(priceElement);
              
                eproductElement.appendChild(li);
              });
        }
    };
    xhttp.open("GET", "https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products", true);
    xhttp.send();
}
// put product
document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var id = document.getElementById("idInput").value;
    var name = document.getElementById("nameInput").value;
    var description = document.getElementById("descriptionInput").value;
    var price = document.getElementById("priceInput").value;
    var data = {
      "description": description,
      "id": id,
      "price": price,
      "name": name
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("putsucess").innerHTML="ID: "+id+" added sucessfully"
      }
    };
    
    xhttp.open("PUT", "https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(data));
});
//delete product
document.getElementById("deleteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var id = document.getElementById("pidInput").value;
    var url = "https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products/" + id;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(function(response) {
        if (response.ok) {
            document.getElementById("deletemsg").innerHTML="Delete Request send sucessfully"
        } else {
            document.getElementById("deletemsg").innerHTML="Delete Request unsucessfully"
        }
    })
    .catch(function(error) {
        console.log("Network error:", error);
    });
});
//getby id product
document.getElementById("getidForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var id = document.getElementById("gidInput").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var product = JSON.parse(this.responseText);
            var gidproductElement = document.getElementById("gidproduct");

            // Clear the previous content
            gidproductElement.innerHTML = '';

            var li = document.createElement("li");
            li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-start");
          
            var div = document.createElement("div");
            div.classList.add("ms-2", "me-auto");
          
            var nameElement = document.createElement("div");
            nameElement.classList.add("fw-bold");
            nameElement.textContent = "ID: " + product.id + " - " + product.name;
          
            var descriptionElement = document.createElement("div");
            descriptionElement.textContent = product.description;
          
            div.appendChild(nameElement);
            div.appendChild(descriptionElement);
          
            var priceElement = document.createElement("span");
            priceElement.classList.add("badge", "bg-primary", "rounded-pill");
            priceElement.textContent = product.price;
            li.appendChild(div);
            li.appendChild(priceElement);
            gidproductElement.appendChild(li);
        }
    };
    xhttp.open("GET", "https://bxgitcwsb0.execute-api.us-west-2.amazonaws.com/products/"+id, true);
    xhttp.send();
});
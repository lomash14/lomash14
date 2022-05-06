console.log('promise');

fetch("https://reqres.in/api/users?page=2")
.then((response) => {
  if (response) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE NOT OK");
  }
})
.then(function (data) {   
  console.log(data); 
})
.catch((error) => {
  console.error("FETCH ERROR:", error);
})
  .then((response) => {
    if (response) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {   
    console.log(data); 
    // displayCocktail(data);
  })
  .catch((error) => {
    console.error("FETCH ERROR:", error);
  });
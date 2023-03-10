const movielist = document.getElementById("movie-list");

movielist.style["background-color"] = "red";
movielist.style.display = "block";

let cv = {
  "first Name ": "mostafa",
  lname: "shawky",
  age: 21,
  address: {
    city: "El Senbellawein",
    country: "egypt",
  },
  skills: ["html", "css", "js", "react", "nodejs"],
  // greet: function () {
  //   alert("hello world");
  // },
};
// cv.greet();
cv.isJunior = true;
delete cv.address;
console.log(cv["first Name "]);

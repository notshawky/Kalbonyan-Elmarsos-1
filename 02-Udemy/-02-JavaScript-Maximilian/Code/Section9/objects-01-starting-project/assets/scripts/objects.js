let cv = {
  fname: "mostafa",
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
console.log(cv.address);

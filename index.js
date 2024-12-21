// let islogin = false;
// let user = "admin";
//  islogin ? user == "customer" ? console.log("welcome to customer") : console.log("welcome to admin") : console.log("please login");


//  let isvegtarian = true;
//  let isnonveg = false;

//  isvegtarian ? console.log("please check gobi or paneer"): console.log("")

let islogin = true;
let isvegtarian= false;
let item= "gobi";

islogin 
? isvegtarian
   ? item == "gobi"
      ? console.log("gobi")
      : console.log("paneer")
    : item == "chicken"
       ? console.log("chicken")
       : console.log("mutton")

:console.log("please login");




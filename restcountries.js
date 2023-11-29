
//1.Get all the countries from Asia continent /region using Filter function
// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all");

// request.send();

// request.onload = function(){
//     var result = JSON.parse(request.response);

//     var asia  = result.filter((asia)=> asia.region == 'Asia');
    
//     console.log(asia)
    
// }

//2.Get all the countries with a population of less than 2 lakhs using Filter function
// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all");

// request.send();

// request.onload = function(){
//     var result = JSON.parse(request.response);
//     var population  = result.filter((asia)=> asia.population < 200000 )

//     console.log(population)
// }

//3.Print the following details name, capital, flag, using forEach function

//var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all");

// request.send();

// request.onload = function(){
//     var result = JSON.parse(request.response);
//      result.forEach((ele)=>{
//         var names = ele.name
//         console.log(`Name: ${names.common}`);
//         console.log(`captial ${ele.capital}`)
//         console.log(`flag : ${ele.flag}`)
//     } )
    

//      };

//4. Print the total population of countries using reduce function


// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all");

// request.send();

// request.onload = function(){

//     var result = JSON.parse(request.response);
//       var final = result.map((pop)=>pop.population)
//       var totel = final.reduce((acc,ele)=>acc+ele);
//     console.log(totel);

// }

//5.Print the country that uses US dollars as currency.

// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all");

// request.send();

// request.onload = function(){

//     var result = JSON.parse(request.response);
//     var getcur = result.filter((dol)=>dol.currencies);
//     var cur = getcur.map((doller)=>doller.currencies);
//     var doller = cur.filter((dol)=>dol.USD)

//     console.log(doller);
// }
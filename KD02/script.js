
let vards = "Jānis";
let vecums = 20;
let irPilsonis = true;

console.log("Vārds:", vards);
console.log("Vecums:", vecums);

if (vecums >= 18 && irPilsonis) {
    console.log("Drīkst balsot.");
} else if (vecums >= 18 && !irPilsonis) {
    console.log("Personai ir 18 gadi, bet viņa nav pilsonis.");
} else if (vecums < 18 && irPilsonis) {
    console.log("Personai ir mazāk par 18 gadiem, bet viņa ir pilsonis.");
} else {
    console.log("Personai ir mazāk par 18 gadiem un viņa nav pilsonis.");
}

function myFunction()
{
    let h1_obj = document.getElementById("myh1");
    //console.log(h1_obj);
    let user_name = document.getElementById("input_name");
    h1_obj.innerText = "Hello" + user_name.value + "!"
    let user_age = document.getElementById("input_age");
    console.log(user_age);


    if(!user_name.value.match (/[A-z]/) || user_name.value == ""){
    
    
    alert ("Error: name is not correct!");
    }

if(user_age.velue <=0|| !user_age.velue.match(/[0-18]/))
{
    alert("Error: age is not correct!");
    return;
}




 let table = document.getElementById("myTable");
 let row = table.insertRow();
 let cell1 = row.insertCell();
 let cell2 = row.insertCell();
 let cell3 = row.insertCell();
cell1.innerHTML = user_name.value;
cell1.innerHTML = user_age.value;
}

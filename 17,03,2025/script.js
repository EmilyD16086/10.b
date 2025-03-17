/*
var turpinat = true;
while ( turpinat )
{
    let user = prompt("turpinat ? Y/N");
    if (user.toLowerCase() == "n")
    {
        turpinat = false;
    }
}
console.log("end while");
*/

let  turpinat = true;
let masivs = [];
while(turpinat)
{
let user = parseFloat(prompt("Enter number"));
 if(user == NaN)
 {
    turpinat = false;
 }
else
{
    masivs.push(user);
}
}
console.log(masivs);
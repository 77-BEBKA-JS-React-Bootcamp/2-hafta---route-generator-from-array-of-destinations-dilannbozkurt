const arr = [["JPN","PHL"] , ["BRA","UAE"] ,
 ["USA" ,"BRA"] , ["UAE" , "JPN"]]

const location = arr.map((i) => i[0]) ; 
const destination = arr.map((j) => j[1]) ;

const start = location.filter((startRoue) =>
 !destination.includes(startRoue))[0];

let route = [start];
let now = start ;

while(route.length < arr.length+1){
    arr.map(ctc => {
        if(ctc[0] == now ){
            now = ctc[1] ;
            route.push(now)
        }
    });
}

document.getElementById("route").innerHTML =
 " Güzergah :  " + route.map(item => `${item} => `)
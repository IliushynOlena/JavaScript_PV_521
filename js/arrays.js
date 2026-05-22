
//------------1 ---------------
let obj = new Object();

//-------------- 2 ---------------
var array = new Array();
array[0] = 100;
array[1] = 200;
array[2] = 300;


//--------------------- 3 --------------
var array = new Array(3.6,5,4,7,8,-9);

for (let i = 0; i < array.length; i++) {
   console.log(`[${i}] - ${array[i]}`) ;    
}
//------------------- 4 ---------------
var array = [];//empty array
console.log(`Lenght : ${array.length}`);

var array = [5,-88,-4,7,36,5,14,85,96,37,378,387];
console.log(`Lenght : ${array.length}`);
for (let i = 0; i < array.length; i++) {
   console.log(`[${i}] - ${array[i]}`) ;    
}
console.log("-------------------------------------");

console.log(`[${0}] - ${array[0]}`) ; 
//array[44] = 44; // not allow danger
console.log(`[${0}] - ${array[0]}`) ; 
for (let i = 0; i < array.length; i++) {
   console.log(`[${i}] - ${array[i]}`) ;    
}
console.log(`Lenght : ${array.length}`);


//--------forEach----------
array.forEach((elem, index)=>{
    console.log(`Element [${index}] : ${elem}`)
})
console.log("Forin - get all indexes with elements");
for (const key in array) {
    console.log(key);      
}

console.log("Forof - get all  elements");
for (const element of array) {
    console.log(element);
}

//----------------Methods--------------------------
console.log("Original array : " + array);

//add to the end
array.push(777);
console.log("Original array : " + array);

//delete from the end
array.pop();
console.log("Original array : " + array);

//delete element in start
array.shift();
console.log("Original array : " + array);

//add element to the start
array.unshift(55);
console.log("Original array : " + array);

console.log("Index elementa -88 : ", array.indexOf(-88));
console.log("Index elementa 85 : ", array.lastIndexOf(85));


console.log("Find : ", array.find((elem)=>elem > 0));

console.log("Original array : " + array);
array.sort();
console.log("Original array : " + array);

array.sort((a,b)=> a-b);
console.log("Original array : " + array);

array.sort((a,b)=> b-a);
console.log("Original array : " + array);

array.splice(2,3);
console.log("Original array : " + array);

const copy = array.slice(1,array.length-2);
console.log("Copy array : " + copy);

const filtered = array.filter((el)=>el%2!=0);
console.log("Filtered array : " + filtered);

const colors = ['red','green','yellow','pink'];

const str = colors.join(" - ");
console.log(str);

console.log(str.split(' - '));



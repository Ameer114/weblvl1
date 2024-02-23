let a=10; //integer
console.log(a);

let b=10.5; //float
console.log(b);

let cname= "ameer";//string
console.log(cname);

let boolt= true, boolf= false; //boolean values
console.log(boolt);

let age= null;//null keyword
console.log(age);

let array=[10,"string inside array",30]; //array
for(let i in array){
    console.log(array[i]); //accessing values of array by for in loop
}

let obj={name:"jhon", class:10 }; //object
console.log(obj);
console.log(obj.name);//accessing particular value.

let arofobj=[{name:"mark", class:10},
            {name:"rohan", class:8},
            {name:"robin", class:7}]; //object inside array
console.log(arofobj);
console.log(arofobj[1].name);//accessing particular value from array of object.

let objofar={stdid:[10,20,30,40],
            stdname:["shoaib","mazhar"]} //array inside object
console.log(objofar);
console.log(objofar.stdname[0]); //accessing particular value from object that contain array.
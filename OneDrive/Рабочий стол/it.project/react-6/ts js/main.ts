// let text:string = "Hello World";
// text = "hellp"
// console.log(text); 


// let age:number;

// age = 16;

// age = 21;

// console.log(age);

// let isTrue:boolean = true;


// console.log(isTrue);


// type UserType = {
//     name?:string;
//     age?:number;
//     student?:boolean;
//     city?:string;
//     address?:string;
//     id?:number;
// }

// let user:UserType;


// user = {
//     name:"John",
//     age:21,
//     student:true,
//     city:"New York",
//     address:"123 Main St",
//     id:1
// }
// console.log(user);

// let user1:UserType;

// user1 = {
//     name:"Kustarbekt",
//     age:16,
//     student:true,
//     city:"Bishkek",
//     address:"123 Main St",
//     id:2
// }
// console.log(user1);

// let array:string[]

// array = ["Мирбек", "даниел", "Айбек"];
  
// array.push("heelo")

// console.log(array);



// let number: ReadonlyArray<number> = [1, 2, 3, 4, 5];

// console.log(number);



// function setNumber(a:number) {
//     return a + 10;
    
// }

// let result = setNumber(79);

// console.log(result);



// interface Person  {
//     name: string;   
// }

// interface Admin extends Person {
//     role: string;
//     age: number;
// }

// let person : Person;

// person = {
//     name: "Мирбек"
// }

// let admin : Admin;

// admin = {
//     name: "Мирбек",
//     role: "Admin",
//     age: 21
// }

// console.log(person);
// console.log(admin);



type Info = {
    id:number;
    title:string;
    image:string;
    description:string;
    discount:boolean;
    discountedPrice:number | null;
    price:number;
    viewCount:number;
    rating:number;
    images:string[];
}

interface ProductList {
    products: Info[];
    total: number;
    size: number;
}

let List : ProductList;

List = {

  products : [
    {
    id: 1,
    title: "Product 1",
    image: "https://picsum.photos/640/640?r=9418",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    discount: true,
    discountedPrice: 49.99,
    price: 69.99,
    viewCount: 320,
    rating: 4.5,
    images: [
      "https://picsum.photos/640/640?r=4971",
      "https://picsum.photos/640/640?r=9418",
      "https://picsum.photos/640/640?r=3038",
    ],
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://picsum.photos/640/640?r=4971",
    description: "Aenean volutpat vestibulum est.",
    discount: false,
    discountedPrice: null,
    price: 29.99,
    viewCount: 120,
    rating: 3.2,
    images: [
      "https://picsum.photos/640/640?r=4971",
      "https://picsum.photos/640/640?r=9418",
      "https://picsum.photos/640/640?r=3038",
    ],
  },
  {
    id: 3,
    title: "Product 3",
    image: "https://picsum.photos/640/640?r=4971",
    description: "Sed quis malesuada eros.",
    discount: true,
    discountedPrice: 79.99,
    price: 99.99,
    viewCount: 180,
    rating: 4.0,
    images: [
      "https://picsum.photos/640/640?r=4971",
      "https://picsum.photos/640/640?r=9418",
      "https://picsum.photos/640/640?r=3038",
    ],
  },],
    total: 3,
    size: 56,
}
console.log(List);








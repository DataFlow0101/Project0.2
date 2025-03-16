// let text:string = "Hello World";
// text = "hellp"
// console.log(text); 
var List;
List = {
    products: [
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
        },
    ],
    total: 3,
    size: 3
};
console.log(List);

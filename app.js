

 let products=[
    {product_Id: 1, Product_Name: "Product 1", Product_Price: 10},
    {product_Id: 2, Product_Name: "Product 2", Product_Price: 20},
    {product_Id: 3, Product_Name: "Product 3", Product_Price: 30},
    {product_Id: 4, Product_Name: "Product 4", Product_Price: 40}
];

for(i=0;i<products.length;i++){
    let product=products[i];
    console.log("product_Id:" + " " + product.product_Id+ "\n" + "Product_Name:" + " " + product.Product_Name +"\n"+ "Product_Price:" + " " + product.Product_Price);
    console.log("-------------------");
}


const addTenProducts = async () => {
    for(let i = 0; i < 10; i++) {
        const product = new product({
            name: `Product ${i}`,
            slug: `Product-${i}`,
            category: `60d6c47e0b5f5c6d88d53b1a`,
            price: 100,
            gallery: [
                `http://example.com/product${i}-1.jpg`,
                `http://example.com/product${i}-2.jpg`,
            ],
            description: `Sản phẩm ${i}`,
            discount: 10,
            countInStock: 10,
            featured:false,
            tags: ["tag1", "tag2"],
        });
        await product.save();
    }
}

addTenProducts()
    .then(() => console.log("Thêm thành công 10 sản phẩm"))
    .catch(() => console.log(err))
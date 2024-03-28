import { useProductQuery } from "@/hooks/useProductQuery";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const DetailProduct = () => {
    const { id } = useParams();
    const { data: product, isLoading } = useProductQuery(id!);
    
    const {data: relatedProduct} = useQuery({
        queryKey: ['RELATED_PRODUCT', id],
        queryFn: async() => {
                const { data } = await axios.get(`http://localhost:8080/api/v1/products/${product.category}/related`)
                return data
        }
    })
    if (isLoading) return <p>Loading...</p>;
    return <div>
        {product && <div>{product.name}</div>}
        <hr />
        <h3>Related Products</h3>
        {relatedProduct && relatedProduct.map((item) => (
            <div>{item.name}</div>
        ))}
    </div>;
};

export default DetailProduct;

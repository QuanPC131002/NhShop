import { useProductQuery } from "@/hooks/useProductQuery";
import { IProduct } from "@/interfaces/product";
import { Link } from "react-router-dom";

type ProductListProps = {
    featured?: boolean;
};

const ProductList = ({ featured }: ProductListProps) => {
    const { data: products, isLoading, isError } = useProductQuery();
    
    const filteredProducts = products && Array.isArray(products.product) ? 
        (featured
            ? products.product.filter((product: IProduct) => product.featured === featured)
            : products.product
        ) : [];

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error</p>;
    return (
        <section className="news">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-heading__title">New</h2>
                </div>
                <div className="section-body">
                    <div className="product-list">
                        {filteredProducts.map((product: IProduct, index: number) => {
                            return (
                                <div key={index} className="product-item">
                                    <div className="product-image">
                                        <img
                                            src={product?.image}
                                            alt="#"
                                            className="product__thumbnail"
                                        />
                                        <span className="product-sale">{product?.discount}%</span>
                                    </div>
                                    <div className="product-info">
                                        <h3 className="product__name">
                                            <Link
                                                to={`/products/${product._id}`}
                                                className="product__link"
                                            >
                                                {product?.name}
                                            </Link>
                                        </h3>
                                        <a href="#" className="product__category">
                                            category
                                        </a>
                                        <div className="product-price">
                                            <span className="product-price__new">
                                                {product?.price -
                                                    product?.price * (product?.discount / 100)}
                                            </span>
                                            <span className="product-price__old">
                                                {product?.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="product-actions">
                                        <Link
                                            to={`/products/${product._id}`}
                                            className="btn product-action__quickview"
                                        >
                                            Quick View
                                        </Link>
                                        <button className="btn product-action__addtocart">
                                            Add To Cart
                                        </button>
                                        <div className="product-actions-more">
                                            <span className="product-action__share">Share</span>
                                            <span className="product-action__compare">Compare</span>
                                            <span className="product-action__like">Like</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;

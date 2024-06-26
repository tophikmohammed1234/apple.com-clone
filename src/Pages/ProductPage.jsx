import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

function ProductPage() {
	const [product, setProduct] = useState([]);

	const { ProductId } = useParams();
	useEffect(() => {
		fetch("/SingleProductData.json")
			.then((res) => res.json())
			.then((data) => {
				const productList = data.products;
				const singleProduct = productList.filter(
					(product) => product.product_url === ProductId
				);
				setProduct(singleProduct);
			})
			.catch(() => console.log("Error: unable to fetch!"));
	}, [ProductId]);

	if (product.length) {
		return (
			<div>
				<section className="internal-page-wrapper">
					<div className="container">
						{product?.map((oneproduct) => {
							let productDiv = (
								<div key={oneproduct.product_id}>
									<div className="row justify-content-center text-center">
										<div className="col-12 mt-5">
											<div className="title-wraper font-weight-bold mt-5">
												{oneproduct.product_name}
											</div>
											<div className="brief-description">
												{oneproduct.product_brief_description}
											</div>
										</div>
									</div>

									<div className="row justify-content-center text-center product-holder h-100">
										<div className={`col-sm-12 col-md-6 inner-title`}>
											<div className="product-title">
												{oneproduct.product_name}
											</div>
											<div className="product-brief">
												{oneproduct.product_brief_description}
											</div>
											<div className="starting-price">
												{`Starting at ${oneproduct.starting_price}`}
											</div>
											<div className="monthly-price">
												{oneproduct.price_range}
											</div>
										</div>

										<div className={`col-sm-12 col-md-6`}>
											<div className="img">
												<img src={oneproduct.product_img} alt="" />
											</div>
										</div>
									</div>
								</div>
							);
							return productDiv;
						})}
					</div>
				</section>
			</div>
		);
	} else {
		return <ErrorPage />;
	}
}

export default ProductPage;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function iphone() {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		fetch("/SingleProductData.json")
			.then((res) => res.json())
			.then((data) => {
				setProduct(data.products);
			})
			.catch(() => console.log("Error: unable to fetch!"));
	}, []);
	return (
		<>
			<section className="internal-page-warpper bd">
				<div className="Container iphone-page">
					<div className="row h-100 align-items-center justify-content-center text-center blacked">
						<div className="col-12 mt-5 pt-5">
							<h1 className="font-weight-bold">iPhone</h1>
							<div className=" brief-description font-weight-lighter">
								Our most powerfull cameras yet. <br />
								Ultrafast chips and USB-C
							</div>
						</div>
						<div className="bottom img-wrapper">
							<img
								src="https://www.apple.com/v/home/bo/images/heroes/iphone-family/hero_iphone_family_a__c7v3mvx3jv42_largetall_2x.jpg"
								alt=""
							/>
						</div>
					</div>
				</div>
				{products?.map((product, i) => {
					let productDiv = (
						<div
							key={product.product_url}
							className="row justify-content-center text-center product-holder h-100 "
						>
							<div
								className={`col-sm-12 col-md-6 txt order-${
									i % 2 === 0 ? "1" : "2"
								}`}
							>
								<div className="product-title title">
									{product.product_name}
								</div>
								<div className="product-brief">
									{product.product_brief_description}
								</div>
								<div className="starting-price">{`Starting at ${product.starting_price}`}</div>
								<div className="monthly-price">{product.price_range}</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to={`/iphone/${product.product_url}`}>
												Learn more
											</Link>
										</li>
									</ul>
								</div>
							</div>

							<div
								className={`col-sm-12 col-md-6 order-${
									i % 2 === 0 ? "2" : "1"
								}`}
							>
								<div className="img">
									<img src={product.product_img} alt="" />
								</div>
							</div>
						</div>
					);
					return productDiv;
				})}
			</section>
		</>
	);
}

export default iphone;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Mac() {
	const [products, setProduct] = useState([]);

	useEffect(() => {
		fetch("/MacData.json")
			.then((res) => res.json())
			.then((data) => {
				setProduct(data.products);
			})
			.catch(() => console.log("Error: unable to fetch!"));
	}, []);
	return (
		<>
			<section className="internal-page-warpper bd">
				<div className="Container">
					<div className="row h-100 align-items-center justify-content-center text-center title-mac">
						<div className="col-12 mt-5 pt-5">
							<h1 className="fw-lighter">MacBook And iMac</h1>
							<div className=" brief-description  fw-bold">
								Mind-blowing. <br />
								Head-turning.
							</div>
						</div>
					</div>
				</div>

				<div className="row h-100 align-items-center justify-content-center text-center bottom-div my-5">
					<div className="col-12 my-5 pt-2">
						<h1 className="fw-bold">Hardware-accelerated ray tracing.</h1>
						<h5 className="mx-5 my-5">
							For the first time, MacBook Pro features hardware-accelerated ray
							tracing. <br /> Combined with the new graphics architecture,{" "}
							<br /> it enables pro apps to deliver up to two and a half times
							faster rendering performance and allows <br /> games to provide
							more realistic shadows and reflections.g.
						</h5>
					</div>
					<div className="bottom -img-wrapper">
						<img
							src="https://www.apple.com/v/macbook-pro/ak/images/overview/themes/performance/mbp_16_screen_graphics_startframe__edizjxqf0tg2_large.jpg"
							alt=""
						/>
					</div>
				</div>

				{products?.map((product, i) => {
					let productDiv = (
						<div
							key={product.product_url}
							className="row justify-content-center text-center product-holder h-100 "
						>
							<div
								className={`col-sm-12 col-md-6 text-mac order-${
									i % 2 === 0 ? "1" : "2"
								}`}
							>
								<div className="product-title ">{product.product_name}</div>
								<div className="product-brief">
									{product.product_brief_description}
								</div>
								<div className="product-desc">
									{product.product_description}
								</div>
								<div className="starting-price">{`Starting at ${product.starting_price}`}</div>
								<div className="monthly-price">{product.price_range}</div>
								<div className="links-wrapper">
									<ul>
										<li>
											<Link to={`/mac/${product.product_url}`}>Learn more</Link>
										</li>
									</ul>
								</div>
							</div>

							<div
								className={`col-sm-12 col-md-6 order-${
									i % 2 === 0 ? "2" : "1"
								}`}
							>
								<div className="img-mac">
									<img src={product.product_img} alt="" />
								</div>
							</div>
						</div>
					);
					return productDiv;
				})}
				<div className="row h-100 align-items-center justify-content-center text-center bottom-div my-5">
					<div className="col-12 my-5 pt-2">
						<h1 className="fw-bold">
							See the big picture. And all the details.
						</h1>
						<h5 className="mx-5 my-5">
							With its expansive 24‑inch Retina display, iMac offers a brilliant
							canvas for multitasking, immersive movies <br /> and games, and so
							much more. The display’s 4.5K resolution delivers ultraclear
							detail and shines with 500 nits of brightness. <br />
							That’s five times the resolution of and <br /> nearly 70 percent
							brighter than the best-selling 24‑inch all‑in‑one PC. And P3 wide
							color <br />
							brings whatever you’re watching to life in over a billion colors.
							No matter what you do, it will look incredible on iMac
						</h5>
					</div>
					<div className="bottom -img-wrapper">
						<img
							src="https://www.apple.com/v/imac/p/images/overview/colors_lifestyle_fallback__fat816a51hua_large.jpg"
							alt=""
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Mac;

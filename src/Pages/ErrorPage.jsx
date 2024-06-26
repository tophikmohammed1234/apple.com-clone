import React from "react";

function ErrorPage() {
	return (
		<>
			<section className="internal-page-warpper">
				<div className="Container">
					<div className="row h-100 align-items-center justify-content-center text-center">
						<div className="col-12 mt-5 pt-5">
							<h1 className="font-weight-bold">
								404 <br />
								The page you're looking for can't be found.
							</h1>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ErrorPage;

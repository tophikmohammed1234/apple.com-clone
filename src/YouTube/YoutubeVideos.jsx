import React, { useEffect, useState } from "react";

function YoutubeVideos() {
	const [YouTubeVideos, setVideos] = useState([]);

	useEffect(() => {
		fetch("/Data.json")
			.then((response) => response.json())
			.then((data) => {
				const youTubeVideosData = data.items;
				setVideos(youTubeVideosData);
			});
	}, []);

	return (
		<div className="allVideoWrapper">
			<div className="container">
				<div className="row justify-content text-center">
					<div className="col-12">
						<div className="title-wrapper">Latest Videos</div>
						<br />
					</div>
					{YouTubeVideos.map((singleVideo, i) => {
						let vidId = singleVideo.id.videoId;
						let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
						let videoWrapper = (
							<div key={i} className=" col-sm-12 col-md-6 col-lg-4">
								<div className="singleVideoWrapper ">
									<div className="videoThumbnail">
										<a href={vidLink} target="_blank">
											<img
												src={singleVideo.snippet.thumbnails.high.url}
												alt=""
											/>
										</a>
									</div>
									<div className="videoInforWapper">
										<div className="videoTitle">
											<a href={vidLink} target="_balnk">
												{singleVideo.snippet.title}
											</a>
										</div>
									</div>
									<div className="videoDesc">
										{singleVideo.snippet.description}
									</div>
									<div className="videoDesc">
										{DateFormatter(singleVideo.snippet.publishedAt)}
									</div>
								</div>
							</div>
						);
						return videoWrapper;
					})}
				</div>
			</div>
		</div>
	);
}

export default YoutubeVideos;

function DateFormatter(dateTimeString) {
	let date = new Date(dateTimeString);
	let Year = date.getFullYear();
	let Month = date.getMonth();
	let Day = date.getDate();
	let formattedDate =
		Year +
		"-" +
		(Month + 1).toString().padStart(2, "0") +
		"-" +
		Day.toString().padStart(2, "0");
	return formattedDate;
}

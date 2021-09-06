import Link from "next/link";
import Lightbox from "react-image-lightbox";
import firebase from "../../lib/firebaseConfig";
import React, { useState, useEffect } from "react";
import Masonry from "react-masonry-component";
import InfiniteScroll from "react-infinite-scroll-component";

const GalleryContent = () => {
	const [photoIndex, setPhotoIndex] = useState<number>(0);
	const [isOpenImage, setIsOpenImage] = useState(false);
	const [images, setImages] = useState<Array<any>>([]);

	const masonryOptions = {
		fitWidth: false,
		columnWidth: 300,
		gutter: 30,
		itemSelector: ".photo-item",
	};

	const imagesList = async () => {
		let result = await firebase
			.storage()
			.ref()
			.child("gallery")
			.listAll();
		let urlPromises = result?.items?.map((imageRef) => {
			return imageRef.getDownloadURL();
		});

		Promise.allSettled(urlPromises).then(
			(values: PromiseSettledResult<{ value: string }>[]) => {
				return setImages(values);
			}
		);
	};

	const refresh = () => {
		console.log("refresh.....");
	};

	useEffect(() => {
		imagesList();
	}, []);
	return (
		<section className="gallery-area ptb-100">
			<div className="container">
				<div className="section-title">
					<h2>Gallery</h2>
					<div className="bar"></div>
					<p>
						Here are some great shots on our fully-equipped motorcycle workshop
						in Al Quoz Industrial-3. We are specialists in delivery motorcycle
						repairs, especially on Bajaj Pulsar, Honda Unicorn, Yamaha YBR 125,
						Benelli TNT 150, with the most affordable pricing in Dubai!{" "}
					</p>
				</div>
				<div
					// className="d-flex flex-wrap px-1"
					style={{
						borderRadius: "10px",
						backgroundColor: "#434343",
					}}
				>
					<InfiniteScroll
						dataLength={images?.length}
						// next={fetchData}
						hasMore={false}
						loader={<h4>Loading...</h4>}
						endMessage={
							<p style={{ textAlign: "center" }}>
								<b>🏍️ Gulf Motorcycles for Delivery Motorcycle 🏍️</b>
							</p>
						}
						refreshFunction={refresh}
						pullDownToRefresh
						pullDownToRefreshThreshold={50}
						pullDownToRefreshContent={
							<h3 style={{ textAlign: "center" }}>
								&#8595; Pull down to refresh
							</h3>
						}
						releaseToRefreshContent={
							<h3 style={{ textAlign: "center" }}>
								&#8593; Release to refresh
							</h3>
						}
					>
						<Masonry
							className={"photo-list"} // default ''
							elementType={"ul"} // default 'div'
							options={masonryOptions} // default {}
							disableImagesLoaded={false} // default false
							updateOnEachImageLoad={true} // default false and works only if disableImagesLoaded is false
						>
							{images?.length > 0 &&
								images?.map((imgUrl, i) => {
									return (
										// <div
										// 	key={i + "gallery"}
										// 	className="d-flex justify-content-center align-items-center col-lg-3 col-md-6 p-lg-1 p-md-3 my-lg-1 my-md-3"
										// 	style={{
										// 		height: "min-content",
										// 	}}
										// >
										<li className={`photo-item`} key={i + "gallery"}>
											<img
												className="filter-juno"
												onClick={(e) => {
													e.preventDefault();
													setIsOpenImage(true);
													setPhotoIndex(i);
												}}
												src={imgUrl?.value}
												alt="motorcycle repairs dubai"
												style={{
													height: "200px",
													width: "auto",
													borderRadius: "10px",
												}}
												loading="lazy"
											/>
										</li>
										// </div>
									);
								})}
						</Masonry>
					</InfiniteScroll>

					{isOpenImage && (
						<Lightbox
							mainSrc={images[photoIndex]?.value}
							nextSrc={images[(photoIndex + 1) % images.length]}
							prevSrc={images[(photoIndex + images.length - 1) % images.length]}
							onCloseRequest={() => setIsOpenImage(false)}
							onMovePrevRequest={() =>
								setPhotoIndex((photoIndex + images.length - 1) % images.length)
							}
							onMoveNextRequest={() =>
								setPhotoIndex((photoIndex + 1) % images.length)
							}
						/>
					)}
				</div>
			</div>
		</section>
	);
};

export default GalleryContent;

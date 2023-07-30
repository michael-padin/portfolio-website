import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./Testimonials.scss";

const Testimonials = () => {
	const [testimonials, setTestimonials] = useState([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleClick = (index) => {
		setCurrentIndex(index);
	};

	useEffect(() => {
		const testimonialsQuery = '*[_type == "testimonials"]';

		client.fetch(testimonialsQuery).then((data) => {
			setTestimonials(data);
		});
    console.log(urlFor(test?.imgurl));
	}, []);

	const test = testimonials[currentIndex];


	return (
		<>
			{testimonials.length && (
				<>
					<h2 className="head-text">
						What <span>Clients</span> think of me
					</h2>
					<div className="app__testimonial-item app__flex">
						{urlFor(test.imgurl)?.options?.source ? (
							<img
								src={urlFor(test.imgurl)}
								alt="testimonial"
								loading="lazy"
								height={90}
								width={90}
							/>
						) : (
							<div className="app__testimonial_img-alternative">
								<span>{test?.name?.at(0)}</span>
							</div>
						)}

						<div className="app__testimonial-content">
							<p className="p-text">{test.feedback}</p>
							<div>
								<h4 className="bold-text">{test.name}</h4>
								<h5 className="p-text">{test.company}</h5>
							</div>
						</div>
					</div>
					<div className="app__testimonial-btns app__flex">
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === 0
										? testimonials.length - 1
										: currentIndex - 1
								)
							}
						>
							<HiChevronLeft />
						</div>
						<div
							className="app__flex"
							onClick={() =>
								handleClick(
									currentIndex === testimonials.length - 1
										? 0
										: currentIndex + 1
								)
							}
						>
							<HiChevronRight />
						</div>
					</div>
				</>
			)}
		</>
	);
};
export default AppWrap(
	MotionWrap(Testimonials, "app__testimonial"),
	"testimonial",
	"app__primarybg"
);

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";

const Skills = () => {
	// tooltip not auto hide so I made a state to hide and show
	const [tooltip, setTooltip] = useState(true);

	const [experiences, setExperiences] = useState([]);
	const [skills, setSkills] = useState([]);

	useEffect(() => {
		const query = '*[_type == "experiences"] | order(year desc)';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(query).then((data) => {
			setExperiences(data);
		});

		client.fetch(skillsQuery).then((data) => {
			setSkills(data);
		});
	}, []);

	return (
		<>
			<h2 className="head-text">
				{" "}
				<span>Skills</span> & Experiences
			</h2>

			<div className="app__skills-container">
				<motion.div className="app__skills-list">
					{skills.map((skill) => (
						<motion.div
							whileInView={{ opacity: [0, 1] }}
							transition={{ duration: 0.5 }}
							className="app__skills-item app__flex"
							key={skill.name}
						>
							<div
								className="app__flex"
								style={{ backgroundColor: skill.bgColor }}
							>
								<img
									src={urlFor(skill.icon)}
									alt={skill.name}
									loading="lazy"
									height={90}
									width={90}
								/>
							</div>
							<p className="p-text">{skill.name}</p>
						</motion.div>
					))}
				</motion.div>
				<div className="app__skills-exp">
					{experiences.map((experience) => (
						<motion.div className="app__skills-exp-item" key={experience.year}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{experience.year}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								{experience.works.map((work) => (
									<div key={work.name}>
										<motion.div
											whileInView={{ opacity: [0, 1] }}
											transition={{ duration: 0.5 }}
											className="app__skills-exp-work"
											data-tip
											data-for={work.name}
											onMouseEnter={() => setTooltip(true)}
											onMouseLeave={() => {
												setTooltip(false);
												setTimeout(() => setTooltip(true), 50);
											}}
										>
											<h4 className="bold-text">{work.name}</h4>
											<p className="p-text">{work.company}</p>
										</motion.div>
										{tooltip && (
											<ReactTooltip
												id={work.name}
												effect="solid"
												arrowColor="#fff"
												className="skills-tooltip"
											>
												{work.desc}
											</ReactTooltip>
										)}
									</div>
								))}
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</>
	);
};

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"skills",
	"app__whitebg"
);

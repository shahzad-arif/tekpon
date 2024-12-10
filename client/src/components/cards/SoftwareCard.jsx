import React, { useState, useEffect } from "react";

const SoftwareCard = ({ icon, title, tekponScore, activeIndex, index }) => {
	const [progress, setProgress] = useState((tekponScore / 10) * 100); // Set initial progress based on score

	useEffect(() => {
		if (activeIndex !== null) {
			let progressValue = 0;
			const targetValue = (tekponScore / 10) * 100;

			// Animate all progress bars from 0 to target value
			const interval = setInterval(() => {
				if (progressValue < targetValue) {
					progressValue += 1; // Increment progress by 1 every 5ms
					setProgress(progressValue);
				} else {
					clearInterval(interval); // Stop when the progress reaches the target value
				}
			}, 5); // Adjust the speed of animation with interval

			// Cleanup the interval on component unmount or when activeIndex changes
			return () => clearInterval(interval);
		}
	}, [activeIndex, tekponScore]);

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden mt-2 px-4 py-6 max-w-sm mx-4">
			<div className="flex items-center space-x-8 -my-4">
				{/* Icon */}
				<div>
					<img src={icon} alt={title} className="h-22 w-22" />
				</div>

				{/* Title and Tekpon Score */}
				<div>
					<h3 className="text-custom-gradient text-xl font-bold mb-1 truncate">
						{title}
					</h3>
					<div className="flex flex-row space-x-10">
						<p className="text-gray-900 mb-2">Tekpon Score</p>
						<p>{tekponScore}/10</p>
					</div>

					{/* Progress Bar with Dot */}
					<div className="relative w-full h-0.5 bg-gray-200 rounded-full">
						{/* Colored Line Up to Dot */}
						<div
							className="absolute top-0 left-0 h-0.5 bg-[#ff0800] rounded-full"
							style={{ width: `${progress}%` }} // Animate the width of the bar
						></div>

						{/* Dot */}
						<div
							className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#ff0800] rounded-full shadow-md"
							style={{ left: `${progress}%` }} // Position the dot based on progress
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SoftwareCard;

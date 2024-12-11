import React, { useState, useEffect } from "react";

const SoftwareCard = ({ icon, title, tekponScore, activeIndex, index }) => {
	const [progress, setProgress] = useState((tekponScore / 10) * 100);

	useEffect(() => {
		if (activeIndex !== null) {
			let progressValue = 0;
			const targetValue = (tekponScore / 10) * 100;

			const interval = setInterval(() => {
				if (progressValue < targetValue) {
					progressValue += 1;
					setProgress(progressValue);
				} else {
					clearInterval(interval);
				}
			}, 5);

			return () => clearInterval(interval);
		}
	}, [activeIndex, tekponScore]);

	return (
		<div className="bg-white shadow-lg rounded-lg overflow-hidden mt-2 py-6 max-w-sm mx-4">
			<div className="flex items-start space-x-6 px-4">
				{/* Icon */}
				<div className="flex-shrink-0">
					<img src={icon} alt={title} className="h-16 w-16 object-contain" />
				</div>

				{/* Content Container */}
				<div className="flex-grow min-w-0">
					{/* Title */}
					<h3 className="text-custom-gradient text-lg font-bold mb-2 break-words">
						{title}
					</h3>

					{/* Score Container */}
					<div className="flex items-center justify-between mb-3">
						<span className="text-gray-900 text-sm">Tekpon Score</span>
						<span className="text-gray-900 text-sm font-medium">
							{tekponScore}/10
						</span>
					</div>

					{/* Progress Bar Container */}
					<div className="relative w-full h-0.5 bg-gray-200 rounded-full">
						{/* Colored Line */}
						<div
							className="absolute top-0 left-0 h-0.5 bg-[#ff0800] rounded-full"
							style={{ width: `${progress}%` }}
						></div>

						{/* Dot */}
						<div
							className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#ff0800] rounded-full shadow-md"
							style={{ left: `${progress}%` }}
						></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SoftwareCard;

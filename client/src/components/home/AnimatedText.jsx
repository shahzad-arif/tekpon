import React, { useState, useEffect } from "react";
const AnimatedText = () => {
	const words = ["deals", "tools", "insights", "news", "podcasts"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const typingSpeed = 50; // Speed for typing
		const deletingSpeed = 50; // Speed for deleting
		const pauseTime = 1000; // Time to pause after word is complete

		const getCurrentWord = () => words[currentWordIndex];

		const timeoutId = setTimeout(
			() => {
				if (!isDeleting) {
					// Typing
					if (currentText.length < getCurrentWord().length) {
						setCurrentText(getCurrentWord().slice(0, currentText.length + 1));
					} else {
						// Word is complete, pause before deleting
						setTimeout(() => setIsDeleting(true), pauseTime);
					}
				} else {
					// Deleting
					if (currentText.length > 0) {
						setCurrentText(getCurrentWord().slice(0, currentText.length - 1));
					} else {
						setIsDeleting(false);
						setCurrentWordIndex((prev) => (prev + 1) % words.length);
					}
				}
			},
			isDeleting ? deletingSpeed : typingSpeed
		);

		return () => clearTimeout(timeoutId);
	}, [currentText, isDeleting, currentWordIndex]);

	return (
		<span className="relative inline-block min-w-[120px] sm:min-w-[150px]">
			<span className="text-custom-gradient whitespace-nowrap">
				{currentText}
				<span className="animate-pulse">|</span>
			</span>
		</span>
	);
};
export default AnimatedText;

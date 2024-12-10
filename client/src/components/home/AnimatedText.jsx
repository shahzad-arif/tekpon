import React, { useState, useEffect } from "react";

const AnimatedText = () => {
	const words = ["deals", "tools", "insights", "software"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const typingSpeed = 60; // Faster typing speed
		const deletingSpeed = 60; // Faster deleting speed
		const pauseTime = 4000; // Shorter pause after completing a word

		const getCurrentWord = () => words[currentWordIndex];

		const timeoutId = setTimeout(
			() => {
				if (!isDeleting) {
					// Typing effect
					if (currentText.length < getCurrentWord().length) {
						setCurrentText(getCurrentWord().slice(0, currentText.length + 1));
					} else {
						// Pause before starting to delete
						setTimeout(() => setIsDeleting(true), pauseTime);
					}
				} else {
					// Deleting effect
					if (currentText.length > 0) {
						setCurrentText(getCurrentWord().slice(0, currentText.length - 1));
					} else {
						// Move to the next word and start typing
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
		<span className="relative  md:min-w-[6.5ch] justify-start inline-flex left-[30%] md:left-0 ">
			<span className="text-custom-gradient whitespace-nowrap">
				{currentText}
				<span className="animate-pulse">|</span>
			</span>
		</span>
	);
};

export default AnimatedText;

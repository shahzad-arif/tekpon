import React, { useState, useEffect } from "react";

const AnimatedText = () => {
	const words = ["deals", "tools", "insights"];
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [currentText, setCurrentText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {
		const typingSpeed = 60;
		const deletingSpeed = 60;
		const pauseTime = 4000;

		const getCurrentWord = () => words[currentWordIndex];

		const timeoutId = setTimeout(
			() => {
				if (!isDeleting) {
					if (currentText.length < getCurrentWord().length) {
						setCurrentText(getCurrentWord().slice(0, currentText.length + 1));
					} else {
						setTimeout(() => setIsDeleting(true), pauseTime);
					}
				} else {
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
		<div className="inline-block w-full sm:w-auto">
			<span className="relative inline-flex min-w-[80px] sm:min-w-[6.5ch] justify-start">
				<span className="text-custom-gradient whitespace-nowrap">
					{currentText}
					<span className="animate-pulse">|</span>
				</span>
			</span>
		</div>
	);
};

export default AnimatedText;

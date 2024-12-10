import { useState } from "react";
const FAQItem = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className="border-b border-gray-300 py-4 cursor-pointer"
			onClick={() => setIsOpen(!isOpen)}
		>
			{/* Question */}
			<div className="flex justify-between items-center">
				<h4 className="text-lg font-semibold text-gray-800">{question}</h4>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={`h-5 w-5 transform transition-transform ${
						isOpen ? "rotate-90" : ""
					}`}
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
				</svg>
			</div>

			{/* Answer */}
			{isOpen && (
				<p className="mt-2 text-gray-600 text-sm md:text-base">{answer}</p>
			)}
		</div>
	);
};
export default FAQItem;

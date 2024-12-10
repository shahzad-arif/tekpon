import FAQItem from "../common/FAQItem";
const FAQ = () => {
	const faqs = [
		{
			question: "What is Tekpon?",
			answer:
				"Tekpon is a platform designed to help businesses find the best software solutions by summarizing reviews from real users.",
		},
		{
			question: "How to find the best software for your business?",
			answer:
				"You can explore categories, read expert reviews, and compare software features to make an informed decision.",
		},
		{
			question: "How can Tekpon help you grow your SaaS?",
			answer:
				"Tekpon offers insights, user reviews, and tools that help SaaS businesses improve visibility and target the right audience.",
		},
	];

	return (
		<section className="grid grid-col-1 md:grid-cols-4  py-8 px-4 md:px-12 lg:px-20">
			<h2 className="text-2xl col-span-1  md:text-3xl font-bold text-gray-800 mb-6">
				Frequently Asked Questions
			</h2>
			<div className="space-y-4 col-span-3">
				{faqs.map((faq, index) => (
					<FAQItem key={index} question={faq.question} answer={faq.answer} />
				))}
			</div>
		</section>
	);
};

export default FAQ;

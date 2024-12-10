import FAQItem from "../common/FAQItem";
import { faqs } from "../../text/homePageText/homeText";
const FAQ = () => {
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

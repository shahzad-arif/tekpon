import freshdeskIcon from "/Freshdesk-favicon.webp";
const categories = [
	{ title: "ERP", items: ["SAP", "Oracle", "Microsoft Dynamics"] },
	{ title: "Security", items: ["Antivirus", "Firewalls", "Encryption"] },
	{ title: "Analytics", items: ["Tableau", "Power BI", "Looker"] },
	{ title: "Collaboration & Productivity", items: ["Slack", "Teams", "Asana"] },
	{ title: "Marketing", items: ["HubSpot", "Mailchimp", "Google Ads"] },
	{ title: "Design", items: ["Figma", "Sketch", "Adobe XD"] },
	{ title: "Content Management", items: ["WordPress", "Joomla", "Drupal"] },
	{ title: "Human Resources", items: ["BambooHR", "Gusto", "Zoho"] },
];

const faqs = [
	{
		question: "What is Software Coverage?",
		answer:
			"Software Coverage is a platform designed to help businesses find the best software solutions by summarizing reviews from real users.",
	},
	{
		question: "How to find the best software for your business?",
		answer:
			"You can explore categories, read expert reviews, and compare software features to make an informed decision.",
	},
	{
		question: "How can Software Coverage help you grow your SaaS?",
		answer:
			"Software Coverage offers insights, user reviews, and tools that help SaaS businesses improve visibility and target the right audience.",
	},
];
const popularCategories = [
	{
		icon: freshdeskIcon,
		title: "Freshdesk",
		tekponScore: 9.2,
	},
	{
		icon: freshdeskIcon,
		title: "Freshdesk",
		tekponScore: 9.1,
	},
	{
		icon: freshdeskIcon,
		title: "Freshdesk",
		tekponScore: 9.0,
	},
	{
		icon: freshdeskIcon,
		title: "Freshdesk",
		tekponScore: 6,
	},
	{
		icon: freshdeskIcon,
		title: "Freshdesk",
		tekponScore: 9.2,
	},
	{
		icon: freshdeskIcon,
		title: "Freshdesk",
		tekponScore: 9.1,
	},
];

const categorySidebarItems = [
	"CRM",
	"Field Service Management",
	"Help Desk",
	"Inventory Management",
	"Landing Page",
	"Payroll",
	"Project Management",
	"Subscription Management",
];

const compantTestomonialdata = [
	{
		image: "https://via.placeholder.com/150",
		name: "Stefan Smulders",
		title: "Chief Strategy Officer & Co-Founder @ EXPAND.IO",
		quote:
			"Thanks to Software Coverage, our software has been spotlighted. It's about more than recognition — it's the qualitative feedback and the targeted audience that have made a difference. It feels as though our growth is in sync, a true win-win situation.",
	},
	{
		image: "https://via.placeholder.com/150",
		name: "Michael Kamleitner",
		title: "CEO & Founder @ WALLS.IO",
		quote:
			"78% of B2B software purchases are decided based on recommendations from existing customers! Software Coverage unlocks the buying process with authentic, up-to-date customer reviews and brings Walls.io in front of qualified leads.",
	},
	// Add more objects as needed
];
export {
	categories,
	faqs,
	popularCategories,
	categorySidebarItems,
	compantTestomonialdata,
};

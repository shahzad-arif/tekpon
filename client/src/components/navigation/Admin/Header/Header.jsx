import React from "react";
import { User } from "lucide-react";

const Header = () => {
	return (
		<nav className="bg-white shadow-md h-16 fixed right-0 top-0 lg:left-64 left-0 z-30">
			<div className="h-full px-4 flex justify-between items-center">
				<h2 className="text-xl font-semibold text-gray-800"></h2>
				<div className="flex items-center gap-2">
					<span className="text-gray-600">Admin User</span>
					<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
						<User size={20} />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

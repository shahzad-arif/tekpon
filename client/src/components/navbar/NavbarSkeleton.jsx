import React from "react";

const NavbarSkeleton = () => {
	return (
		<nav className="w-full sticky top-0 backdrop-blur-md bg-white/50 px-2 lg:px-2 2xl:px-6 z-[100]">
			<div className="max-w-7xl mx-auto">
				<div className="flex justify-between items-center h-16">
					<div className="flex-shrink-0">
						<div className="w-52 h-12 bg-gray-200 animate-pulse rounded-lg" />
					</div>
					<div className="hidden xl:flex space-x-4">
						<div className="w-32 h-8 bg-gray-200 animate-pulse rounded-lg" />
						<div className="w-32 h-8 bg-gray-200 animate-pulse rounded-lg" />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavbarSkeleton;

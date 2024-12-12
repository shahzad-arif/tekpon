import { memo } from "react";
import NavLink from "./NavLink";
import { ChevronRight } from "lucide-react";
const DropdownItem = memo(
	({ category, expandedCategory, onHover, subcategories }) => {
		return (
			<div
				className="relative group/item"
				onMouseEnter={() => onHover(category._id)}
				onMouseLeave={() => onHover(null)}
			>
				<NavLink
					href={`/category/${category.slug}`}
					className="flex items-center justify-between px-4 py-2 text-xl text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
				>
					<span>{category.name}</span>
					{subcategories?.length > 0 && (
						<ChevronRight className="h-4 w-4 text-gray-400" />
					)}
				</NavLink>

				{subcategories?.length > 0 && expandedCategory === category._id && (
					<div className="absolute left-full top-0 w-64 bg-white border border-gray-200 rounded-lg shadow-lg text-md">
						<div className="py-2">
							{subcategories.map((subCategory) => (
								<NavLink
									key={subCategory._id}
									href={`/category/${category.slug}/${subCategory.slug}`}
									className="block text-xl px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
								>
									{subCategory.name}
								</NavLink>
							))}
						</div>
					</div>
				)}
			</div>
		);
	}
);
export default DropdownItem;

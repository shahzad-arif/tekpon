import { memo } from "react";
const NavLink = memo(({ href, className, children }) => (
	<a href={href} className={className}>
		{children}
	</a>
));
export default NavLink;

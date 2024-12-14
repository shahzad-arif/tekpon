import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../../layout/user/UserLayout";
import Home from "../../pages/home/Home";
import AdminLayout from "../../layout/admin/AdminLayout";
import CategoryTable from "../tables/categorytable/CategoryTable";
import SubcategoryTable from "../tables/subcategorytable/SubcategoryTable";
import SoftwareTable from "../tables/softwaretable/SoftwareTable";

const router = createBrowserRouter([
	{
		path: "/",
		element: <UserLayout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
		],
	},
	{
		path: "admin",
		children: [
			{
				path: "",
				element: <AdminLayout />,
				children: [
					{
						path: "categories",
						element: <CategoryTable />,
					},
					{
						path: "sub-categories",
						element: <SubcategoryTable />,
					},
					{
						path: "software",
						element: <SoftwareTable />,
					},
				],
			},
		],
	},
]);

export default router;

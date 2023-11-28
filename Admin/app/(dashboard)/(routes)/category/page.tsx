import { format } from "date-fns";

import { CategoryColumn } from "./components/columns";
import { CategoriesClient } from "./components/client";
import publicAxiosClient from "@/configs/publicAxiosClient";
const getCategories = async () => {
  const res = await publicAxiosClient.get("/Category");
  var categories: CategoryColumn[] = res.data;

  categories = categories.map((item) => ({
    id: item.id,
    name: item.name,
    createdAt: format(new Date(item.createdAt), "MMMM do, yyyy"),
  }));

  return categories;
};

const CategoriesPage = async () => {
  const formattedCategories = await getCategories();
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoriesClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;

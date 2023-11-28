import publicAxiosClient from "@/configs/publicAxiosClient";
import { CategoryForm } from "./components/category-form";
import { CategoryColumn } from "../components/columns";
import { format } from "path";
import { Category } from "@/types/app.type";

const getCategory = async (id: string) => {
  const res = await publicAxiosClient.get(`/Category/${id}`);
  var category: Category = res.data;

  return category;
};

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await getCategory(params.categoryId);

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;

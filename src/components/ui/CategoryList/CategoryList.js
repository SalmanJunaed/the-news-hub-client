import { getAllCategories } from "@/utils/getAllCategories";

const CategoryList = async () => {
    const {data: allCategories} = await getAllCategories();
    console.log(allCategories);
    return (
        <div> <h1 className="text-4xl text-center">Category list</h1> </div>
    );
};

export default CategoryList;
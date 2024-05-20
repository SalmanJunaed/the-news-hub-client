const DynamicNewsPage = ({params}) => {
    return (
        <div>
            <h1 className="text-4xl">Dynamic News Page.{params.categoryId}</h1>
        </div>
    );
};

export default DynamicNewsPage;
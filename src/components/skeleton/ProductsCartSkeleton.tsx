const ProductsCartSkeleton = () => {
  return (
    <div className="animate-pulse  flex flex-col space-y-4 p-4 border rounded-lg shadow-lg">
      <div className="bg-gray-300 h-40 w-full"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ProductsCartSkeleton;

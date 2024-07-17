import CommonMarginTopContainer from "@/components/container/CommonMarginTopContainer";
import AddNewProduct from "@/components/dashboard/addNewProduct/AddNewProduct";
import AllProductsDuplicate from "@/components/dashboard/allProducts/AllProductsDuplicate";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  return (
    <CommonMarginTopContainer>
      <Tabs defaultValue="allProducts" className="">
        {/* Dashboard TAB Header */}
        <TabsList className="mx-auto w-full bg-transparent">
          <div className=" rounded-md px-4 py-3 border-b-2 shadow-sm">
            <TabsTrigger
              value="allProducts"
              defaultChecked={true}
              className="data-[state=active]:bg-common-700 data-[state=active]:border-2 data-[state=active]:border-common-700 data-[state=active]:rounded-r-none data-[state=active]:text-white w-40 data-[state=inactive]:border-2 border-gray-300 data-[state=inactive]:border-r-0 data-[state=inactive]:rounded-r-none"
            >
              All Products
            </TabsTrigger>
            <TabsTrigger
              value="addNewProduct"
              className="w-40 data-[state=active]:bg-common-700 data-[state=active]:border-2 data-[state=active]:border-common-700 data-[state=active]:rounded-l-none data-[state=active]:text-white data-[state=inactive]:border-2 border-gray-300 data-[state=inactive]:border-l-0 data-[state=inactive]:rounded-l-none"
            >
              Add New Product
            </TabsTrigger>
          </div>
        </TabsList>
        {/* Dashboard TAB Body */}
        <TabsContent value="allProducts" defaultChecked={true}>
          <AllProductsDuplicate />
          {/* <AllProducts /> */}
        </TabsContent>
        <TabsContent value="addNewProduct">
          <AddNewProduct />
        </TabsContent>
      </Tabs>
    </CommonMarginTopContainer>
  );
};

export default Dashboard;

import ProductList from "@/components/ProductList";
import Sidebar from "@/components/Sidebar";

export default function Home() {
    return (
        <div className="bg-whitesmoke py-16">
            <div className="container px-10 ">
                <div className="row">
                    <div className="col col-1-4">
                        <Sidebar />
                    </div>
                    <div className="col col-3-4">
                        <ProductList />
                    </div>
                </div>
            </div>
        </div>
    );
}

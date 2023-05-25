import Layout from "@/components/Layout";
import store from "@/store/store";
import "@/styles/globals.css";
import "@/styles/style.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
                <ToastContainer />
            </Layout>
        </Provider>
    );
}

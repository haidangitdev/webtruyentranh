import Header from "~/components/Layout/components/Header";
import Silebar from "./Silebar";


function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Silebar />
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;
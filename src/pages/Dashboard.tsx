
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { AdminLayout } from "../layouts/AdminLayout";

export default function Dashboard() {
    return (
        <div className="h-screen">
            <Navbar />
            <AdminLayout />
            <Footer />
        </div>

    );
} 
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatusCard from "../components/StatusCard";

export default function Dashboard() {
    return (
        <>
            <Navbar />

            <div style={{ display: "flex", minHeight: "100vh", background: "#0f172a" }}>
                <Sidebar />

                <main style={{ padding: "30px", flex: 1 }}>
                    <h1 style={{ color: "white" }}>Mission Control</h1>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            marginTop: "30px",
                            flexWrap: "wrap",
                        }}
                    >
                        <StatusCard title="Landing Safety" value="96%" />
                        <StatusCard title="Terrain Score" value="91%" />
                        <StatusCard title="Ice Probability" value="82%" />
                        <StatusCard title="Communication" value="Excellent" />
                    </div>
                </main>
            </div>
        </>
    );
}
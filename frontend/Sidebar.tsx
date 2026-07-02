export default function Sidebar() {
    const items = [
        "Dashboard",
        "Landing Analysis",
        "Rover Planner",
        "Terrain",
        "Ice Detection",
        "Communication",
        "Settings",
    ];

    return (
        <aside
            style={{
                width: "250px",
                background: "#1f2937",
                color: "white",
                padding: "20px",
            }}
        >
            {items.map((item) => (
                <div
                    key={item}
                    style={{
                        marginBottom: "18px",
                        cursor: "pointer",
                    }}
                >
                    {item}
                </div>
            ))}
        </aside>
    );
}
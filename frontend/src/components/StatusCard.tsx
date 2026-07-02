type Props = {
    title: string;
    value: string;
};

export default function StatusCard({ title, value }: Props) {
    return (
        <div
            style={{
                background: "#1e293b",
                color: "white",
                padding: "20px",
                borderRadius: "12px",
                width: "220px",
            }}
        >
            <h3>{title}</h3>
            <h1>{value}</h1>
        </div>
    );
}
export default function Navbar() {
    const data = Array(10).fill('test');

    return (
        <nav className="flex flex-col items-center justify-between bg-teal-500">
            {data.map((data, index) => (
                <div key={index} className="hover:bg-teal-700 p-6">
                    <p>{data}</p>
                </div>
            ))}
        </nav>
    );
}

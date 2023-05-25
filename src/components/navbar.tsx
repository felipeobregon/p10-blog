export default function Navbar() {
    const data = Array(10).fill('test');

    return (
        <nav className="flex flex-col items-center justify-between bg-teal-500 p-6">
            {data.map(data => {
                return (
                    <p className="hover:bg-teal-700">{data}</p>
                )
            })}
        </nav>
    )
}
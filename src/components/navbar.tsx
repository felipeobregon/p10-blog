import Link from 'next/link'

export default function Navbar() {
    const pages = ['', 'posts', 'about'];

    return (
        <nav className="flex flex-col items-center justify-between bg-teal-500">
            {pages.map((page, index) => (
                <div key={index} className="hover:bg-teal-700 p-6">
                    <Link href={'/' + page}>{page}</Link>
                </div>
            ))}
        </nav>
    );
}

import Link from 'next/link'

export default function Navbar() {
    const pages = [
        { name: 'home', url: '/' },
        { name: 'posts', url: '/posts' },
        { name: 'about', url: '/about' }
    ];

    return (
        <nav className="flex bg-teal-500">
            {pages.map((page, index) => (
                <div key={index} className="hover:bg-teal-700 px-5">
                    <Link href={page.url}>{page.name}</Link>
                </div>
            ))}
        </nav>
    );
}


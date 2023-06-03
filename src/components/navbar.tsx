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
                <Link key={index} className="hover:bg-teal-700" href={page.url}>{page.name}</Link>
            ))}
        </nav>
    );
}


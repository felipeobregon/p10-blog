import Link from 'next/link'

export default function Navbar() {
    const pages = [
        { name: 'Blog', url: '/posts' },
        { name: 'Projects', url: '/posts' },
        { name: 'About', url: '/about' }
    ];

    return (
        <nav className="flex bg-teal-500">
            {pages.map((page, index) => (
                <Link key={index} className="hover:bg-teal-700 px-5" href={page.url}>{page.name}</Link>
            ))}
        </nav>
    );
}


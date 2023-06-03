import Link from 'next/link'

export default function Navbar() {
    const pages = [
        { name: 'home', url: '/' },
        { name: 'posts', url: '/posts' },
        { name: 'about', url: '/about' }
    ];

    return (
        <nav className="flex py-0 bg-teal-500">
            {pages.map((page, index) => (
                <div key={index} >
                    <Link className="hover:bg-teal-700 px-5" href={page.url}>{page.name}</Link>
                </div>
            ))}
        </nav>
    );
}


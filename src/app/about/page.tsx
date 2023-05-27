import Image from 'next/image'

export default function About() {
    return (
        <>
            <h1>about</h1>
            <Image className="rounded-full"alt="me" src="/me.jpg" width="300" height="300"></Image>
        </>
    )
}
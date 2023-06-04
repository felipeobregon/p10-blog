import Image from 'next/image'

export default function ProfileCard() {
    return (
        <>
            <Image className="rounded-full"alt="me" src="/me.jpg" width="300" height="300"></Image>
            <h1 className="text-lg">Felipe Obregon</h1>
        </>
    )
}
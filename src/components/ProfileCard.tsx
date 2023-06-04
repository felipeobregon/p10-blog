import Image from 'next/image'

export default function ProfileCard() {
    return (
        <div className="flex flex-col items-center">
            <Image className="rounded-full"alt="me" src="/me.jpg" width="300" height="300"></Image>
            <h1 className="text-2xl">Felipe Obregon</h1>
        </div>
    )
}
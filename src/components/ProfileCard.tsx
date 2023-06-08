import Image from 'next/image'
import SocialIcon from './SocialIcon'

export default function ProfileCard() {
    return (
        <div className="flex flex-col items-center">
            <Image className="rounded-full" alt="me" src="/me.jpg" width="300" height="300"></Image>
            <h1 className="text-2xl font-bold">Felipe Obregon</h1>
            <p >Software Engineer</p>
            <div className="flex grow w-1/4 justify-between">
                <SocialIcon type="Twitter" />
                <SocialIcon type="LinkedIn" />
                <SocialIcon type="GitHub" />
            </div>

        </div>
    )
}
import TwitterIcon from './twitter.svg'
import LinkedIn from './linkedin.svg'
import GitHub from './github.svg'

type Props = {
    type: string
    link: string
    size: number
}

const socials = {
    "Twitter": TwitterIcon,
    "LinkedIn": LinkedIn,
    "GitHub": GitHub
}

export default function SocialIcon({ type, link, size = 30 } : Props) {

    const SocialImage = socials[type as keyof typeof socials]

    return (
        <a href={link}>
            <SocialImage width={size} height={size} className="fill-gray-500 hover:fill-blue-500"/>
        </a>
    )
}
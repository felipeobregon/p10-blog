import TwitterIcon from './twitter.svg'
import LinkedIn from './linkedin.svg'
import GitHub from './github.svg'

type Props = {
    type: string
    link: string
}

const socials = {
    "Twitter": TwitterIcon,
    "LinkedIn": LinkedIn,
    "GitHub": GitHub
}

export default function SocialIcon({ type, link } : Props) {

    const SocialImage = socials[type as keyof typeof socials]

    const size = 30

    return (
        <a href={link}>
            <SocialImage width={size} height={size} className="fill-gray-500 hover:fill-blue-500"/>
        </a>
    )
}
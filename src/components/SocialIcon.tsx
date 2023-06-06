import TwitterIcon from './twitter.svg'
import LinkedIn from './linkedin.svg'
import GitHub from './github.svg'

type Props = {
    type: string
}

const socials = {
    "Twitter": TwitterIcon,
    "LinkedIn": LinkedIn,
    "GitHub": GitHub
}

export default function SocialIcon({ type } : Props) {

    const SocialImage = TwitterIcon
    const link = "https://twitter.com"

    const size = 30

    return (
        <a href={link}>
            <SocialImage width={size} height={size} className="fill-gray-500 hover:fill-blue-500"/>
        </a>
    )
}
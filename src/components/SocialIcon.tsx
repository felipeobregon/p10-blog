import TwitterIcon from './twitter.svg'

export default function SocialIcon() {

    const SocialImage = TwitterIcon
    const link = "https://twitter.com"

    const size = 30

    return (
        <a href={link}>
            <SocialImage width={size} height={size} className="fill-gray-500 hover:fill-blue-500"/>
        </a>
    )
}
import Link from 'next/link';

const SocialItem = ({ Icon, url }) => {
    return (
        <li className="p-2 text-white transition-all bg-black rounded-full hover:bg-gray-900">
            <Link href={url}>
                <a>
                    <Icon size={20} />
                </a>
            </Link>
        </li>
    )
}

export default SocialItem

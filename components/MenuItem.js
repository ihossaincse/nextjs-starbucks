import Link from 'next/link';

const MenuItem = ({name, url, className}) => {
    return (
        <li className={`transition-all hover:text-green-700 ${className}`}>
            <Link href={`${url ? url : "/"}`}>
                <a>{name}</a>
            </Link>
        </li>
    )
}

export default MenuItem

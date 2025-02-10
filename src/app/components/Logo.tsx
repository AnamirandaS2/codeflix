import CartoonLogo from '../../assets/CartoonLogo.svg'
import Image from 'next/image'

export const Logo = () => (
    <Image
        src={CartoonLogo}
        alt="Cartoon Network Logo"
        width={90}
        height={90}
        className="cursor-pointer"
    />
)

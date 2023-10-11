import Link from "next/link"
import { usePathname } from "next/navigation";

const Navlink = ({name, path, className}) => {

    const pathname = usePathname();

    const isActive = pathname === path;

    return (
        <Link href={path} className={`${isActive && "underline underline-offset-[9px]"} ${className}`}>{name}</Link>
    )
}

export default Navlink;
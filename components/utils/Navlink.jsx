import Link from "next/link"
import { usePathname } from "next/navigation";

const Navlink = ({name, path, className, setNavOpen}) => {

    const pathname = usePathname();

    const isActive = pathname === path;

    return (
        <Link href={path} onClick={() => setNavOpen(false)} className={`${isActive && "underline underline-offset-[9px]"} ${className}`}>{name}</Link>
    )
}

export default Navlink;

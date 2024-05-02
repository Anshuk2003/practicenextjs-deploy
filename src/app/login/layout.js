"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
    const pathName = usePathname();
    return (
        <div>
            {
                pathName !== "/login/loginteacher" ?
                    <ul className="flex gap-[20%] border border-black bg-red-600  mb-3 text-white text-3xl p-4">
                        <li>
                            <Link href="/login/loginstudent">go to student login</Link>
                        </li>
                        <li>
                            <Link href="/login/loginteacher">go to teacher login</Link>
                        </li>
                        <li>
                            <Link href="/login">go to login</Link>
                        </li>
                    </ul>
                    : <Link href="/login" className="flex gap-[20%] border border-black bg-red-600  mb-3 text-white text-3xl p-4">go to main login page</Link>
            }
            {children}
        </div>
    )
}
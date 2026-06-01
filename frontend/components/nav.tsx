import "@/app/globals.css";
import Link from "next/link";

export default function Nav() {
    return (
        <nav className="bg-white text-black fixed font-bold p-4 flex items-center z-50 w-full">
            <Link href="/">FluxoPay</Link>
            <div className="ml-auto space-x-4">
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/support">Support</Link>
                <Link href="/login">Login</Link>
            </div>
        </nav>
    )
}
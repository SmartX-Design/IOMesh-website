import Link from 'next/link'
import { Topnav } from '../components/topnav';
import { Footer } from '../components/footer';

export default function Layout({ children }) {
    return (
        <div className="w-full bg-gray-50 overflow-hidden">
            <div className="text-gray-900">
                < Topnav />
                {children}
                < Footer />
            </div>
        </div>
    )
}
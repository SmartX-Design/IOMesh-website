import Link from 'next/link'
import { Topnav } from '../components/topnav';
import { Footer } from '../components/footer';

export default function Layout({ children }) {
    return (
        <div className="w-full bg-gray-50 overflow-hidden min-h-screen">
            <div className="text-gray-900n">
                < Topnav />
                <div className="contentWrapper">
                {children}
                </div>
                < Footer />
            </div>
        </div>
    )
}
import Link from 'next/link'
import { Topnav } from '../components/topnav';
import { Footer } from '../components/footer';

export default function Layout({ children }) {
    return (
        <div className="w-full min-h-screen bg-purple-100">
            <div className="container mx-auto p-8 max-w-screen-xl text-gray-900">
                < Topnav />
                {children}
                < Footer />
            </div>
        </div>
    )
}
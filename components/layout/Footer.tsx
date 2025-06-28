'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="py-12 bg-black/90 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Logo & Socials */}
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-purple to-neon-blue">
              Web3Grow
            </h2>
            <p className="text-gray-400 mb-4">
              Strategic marketing and community building for blockchain projects, DAOs, NFTs, and decentralized applications.
            </p>
            <div className="flex gap-4">
              {[
                { href: '#', icon: 'M23 3a10.9 10.9…' /* twitter */ },
                { href: '#', icon: 'M16 8a6 6…' /* fb */ },
                { href: '#', icon: 'M2 2h20…' /* insta */ },
                { href: '#', icon: 'M18 2h-3…' /* linkedin */ },
              ].map(({ href, icon }, i) => (
                <Link
                  key={i}
                  href={href}
                  className="text-gray-400 hover:text-neon-purple transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={icon} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {['Community Growth','Influencer Marketing','Token Design','Social Strategy','DAO Governance'].map((s) => (
                <li key={s}>
                  <Link href="#" className="text-gray-400 hover:text-neon-blue transition-all">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {['About Us','Case Studies','Blog','Careers','Contact'].map((c) => (
                <li key={c}>
                  <Link href="#" className="text-gray-400 hover:text-neon-blue transition-all">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe for the latest Web3 marketing trends.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-lg border border-white/10 bg-white/5 px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-neon-purple"
              />
              <motion.button
                type="submit"
                className="rounded-r-lg bg-neon-purple px-4 py-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-gray-500">© 2025 Web3Grow. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy','Terms of Service','Cookie Policy'].map((t) => (
              <Link
                key={t}
                href="#"
                className="text-gray-500 hover:text-gray-300 transition-all"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client";

import { motion } from "framer-motion"
import Link from "next/link"

export default function NavItem({ href, label }: {href: string; label: string}) {
  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.05, y: -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="px-3 py-2 rounded-lg cursor-pointer hover:bg-neutral-800"
      >
        <motion.span
          whileHover={{ x: 6 }}
          className="text-white"
        >
          {label}
        </motion.span>
      </motion.div>
    </Link>
  );
}
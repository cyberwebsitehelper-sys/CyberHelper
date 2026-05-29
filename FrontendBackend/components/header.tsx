"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Shield, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About Us", href: "#about" },
  { name: "Why Choose Us", href: "#why-choose" },
  { 
    name: "Practice Areas", 
    href: "#practice",
    dropdown: [
      "Cyber Crime Defense",
      "Data Privacy",
      "Digital Fraud",
      "Online Harassment",
      "IP Protection"
    ]
  },
  { name: "Our Branches", href: "#branches" },
  { name: "Contact Us", href: "#contact" },
]

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20, stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-40"
    >
      {/* Top Bar - Dark Charcoal like reference */}
      <div className="bg-header-bg py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-end gap-6 text-xs text-header-foreground/80">
          <Link href="#resources" className="hover:text-primary/80 transition-colors">
            Resources & Articles
          </Link>
          <Link href="#media" className="hover:text-primary/80 transition-colors">
            Media & Events
          </Link>
        </div>
      </div>

      {/* Main Header - Cream background */}
      <div className="bg-background/98 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg flex items-center justify-center"
            >
              <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-primary-foreground" />
            </motion.div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight">
                CYBER<span className="text-primary">CASE</span>
              </h1>
              <p className="text-[10px] lg:text-xs text-muted-foreground tracking-widest uppercase">
                Cyber Law Associates
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-48 bg-card border border-border rounded-lg shadow-xl py-2 mt-1"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary/50 transition-colors"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={onMenuClick}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Raise Query
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Menu className="w-4 h-4 mr-2" />
                Menu
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 space-y-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsOpen(false)
                    onMenuClick()
                  }}
                  className="w-full border-primary text-primary"
                >
                  Raise Query
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

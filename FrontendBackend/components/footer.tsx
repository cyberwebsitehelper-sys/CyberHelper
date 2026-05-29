"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Shield, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer({ onQueryClick }: { onQueryClick: () => void }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Ready to Protect Your <span className="text-primary">Digital Rights</span>?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Get expert legal guidance for your cyber case. Our team is ready to help you navigate 
            the digital legal landscape with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={onQueryClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Raise a Query
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us Now
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    CYBER<span className="text-primary">CASE</span>
                  </h3>
                </div>
              </Link>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Expert cyber law services protecting your digital rights with dedication 
                and professionalism.
              </p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "Facebook"].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  >
                    <span className="text-xs font-medium">{social[0]}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About Us", "Practice Areas", "Our Team", "Why Choose Us", "Contact"].map((link) => (
                  <li key={link}>
                    <Link 
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Practice Areas
              </h4>
              <ul className="space-y-2">
                {["Cyber Crime Defense", "Data Privacy", "Digital Fraud", "Online Harassment", "IP Protection"].map((area) => (
                  <li key={area}>
                    <Link 
                      href="#practice"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    Tower A, Cyber City, Gurugram - 122002
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="tel:+911234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 12345 67890
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a href="mailto:info@cybercase.in" className="text-muted-foreground hover:text-primary transition-colors">
                    info@cybercase.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} CyberCase Law Associates. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

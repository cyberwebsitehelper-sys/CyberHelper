"use client"

import { motion } from "framer-motion"
import { Shield, Scale, FileCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection({ onQueryClick }: { onQueryClick: () => void }) {
  return (
    <section className="relative min-h-screen pt-32 lg:pt-40 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium tracking-wide">
                CYBERCASE LAW ASSOCIATES
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-foreground leading-tight"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              <span className="text-balance">
                Protecting You In The{" "}
                <span className="text-primary">Digital</span> World
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              At CyberCase, we specialize in cyber law services, providing expert 
              legal guidance to protect your digital rights and navigate complex 
              cyber legal challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-border"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "2500+", label: "Cases Resolved" },
                { value: "98%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <p className="text-2xl sm:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Circular Image Composition */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              {/* Main Circle */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Outer Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-2 border-dashed border-border"
                />
                
                {/* Large Circle Image */}
                <div className="absolute top-8 right-0 w-3/4 aspect-square rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                    <Shield className="w-24 h-24 text-primary/20" />
                  </div>
                </div>

                {/* Small Circle Image */}
                <div className="absolute bottom-12 left-0 w-1/2 aspect-square rounded-full overflow-hidden border-4 border-background shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                    <Scale className="w-16 h-16 text-primary/30" />
                  </div>
                </div>

                {/* Floating Icons */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 right-16 w-14 h-14 bg-card border border-border rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Shield className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-24 left-8 w-14 h-14 bg-card border border-border rounded-xl shadow-lg flex items-center justify-center"
                >
                  <Scale className="w-7 h-7 text-primary" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 15, -5] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-4 right-24 w-14 h-14 bg-card border border-border rounded-xl shadow-lg flex items-center justify-center"
                >
                  <FileCheck className="w-7 h-7 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

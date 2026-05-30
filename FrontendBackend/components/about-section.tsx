"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const leaders = [
  {
    name: "ADV. RAJESH KUMAR",
    role: "FOUNDING PARTNER",
    image: "/images/lawyer-founder.png",
    linkedin: "#",
    email: "rajesh@cybercase.in"
  },
  {
    name: "ADV. PRIYA SHARMA",
    role: "MANAGING PARTNER",
    image: "/images/lawyer-partner1.png",
    linkedin: "#",
    email: "priya@cybercase.in"
  },
  {
    name: "ADV. VIKRAM SINGH",
    role: "SENIOR ASSOCIATE",
    image: "/images/lawyer-partner2.png",
    linkedin: "#",
    email: "vikram@cybercase.in"
  },
]

const founderQuote = {
  name: "Adv. Rajesh Kumar",
  role: "Founding Partner",
  quote: "Our diverse legal team brings together seasoned veterans and young talents, letting us examine legal issues from multiple angles and find the best solutions for our clients.",
  image: "/images/lawyer-founder.png"
}

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden">
      {/* Leaders Speak Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Quote Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Large decorative quote mark */}
            <div className="absolute -top-8 -left-4 text-[180px] leading-none text-primary/10 font-serif select-none pointer-events-none">
              &ldquo;
            </div>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 relative z-10"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic' }}
            >
              Leaders Speak
            </h2>
            
            <p className="text-foreground/80 text-lg leading-relaxed relative z-10">
              &ldquo;{founderQuote.quote}&rdquo;
            </p>
            
            <div className="mt-8 relative z-10">
              <p className="font-semibold text-foreground">{founderQuote.name}</p>
              <p className="text-sm text-muted-foreground">{founderQuote.role}</p>
            </div>
          </motion.div>

          {/* Circular Image with Animated Arc */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
              {/* Animated Arc */}
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 450 450"
              >
                <motion.circle
                  cx="225"
                  cy="225"
                  r="220"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-foreground/20"
                  strokeDasharray="1380"
                  strokeDashoffset="0"
                  initial={{ strokeDashoffset: 1380 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeOut" }}
                />
                <motion.circle
                  cx="225"
                  cy="225"
                  r="210"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-foreground/10"
                  strokeDasharray="1320"
                  initial={{ strokeDashoffset: 1320 }}
                  whileInView={{ strokeDashoffset: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
                />
              </svg>
              
              {/* Circular Image */}
              <motion.div 
                className="absolute inset-8 rounded-full overflow-hidden border-4 border-background shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Image
                  src={founderQuote.image}
                  alt={founderQuote.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Leaders Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-foreground"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic' }}
          >
            Our Leaders
          </h2>
          <p className="mt-4 text-muted-foreground">
            Leading with Purpose
          </p>
        </motion.div>

        {/* Staggered Cards Layout */}
        <div className="flex flex-col lg:flex-row justify-center items-end gap-6 lg:gap-8">
          {leaders.map((leader, index) => {
            // Staggered heights: left lower, center higher, right lower
            const heightClass = index === 1 
              ? "lg:-mt-16" // Center card is higher
              : index === 0 
                ? "lg:mt-16" // Left card is lower
                : "lg:mt-8" // Right card is slightly lower
            
            return (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative group w-full sm:w-[280px] lg:w-[300px] ${heightClass}`}
              >
                {/* Card */}
                <div className="relative bg-[#2D3142] rounded-lg overflow-hidden shadow-xl">
                  {/* Image */}
                  <div className="relative h-[350px] lg:h-[400px]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                    {/* Gradient overlay at bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2D3142] via-[#2D3142]/80 to-transparent" />
                  </div>
                  
                  {/* Name and Role */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                    <h3 className="text-white font-semibold tracking-wider text-sm">
                      {leader.name}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 tracking-wide">
                      {leader.role}
                    </p>
                  </div>
                </div>

                {/* Social Icons - Outside card on the right */}
                <div className="absolute -right-12 top-4 flex flex-col gap-3 opacity-0 lg:opacity-100">
                  <motion.a
                    href={leader.linkedin}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-md bg-[#2D3142] flex items-center justify-center text-white hover:bg-primary transition-colors shadow-lg"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={`mailto:${leader.email}`}
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-md bg-[#2D3142] flex items-center justify-center text-white hover:bg-primary transition-colors shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Client Count */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-card border border-border rounded-2xl">
            <div className="flex -space-x-3">
              {["SK", "AP", "RM", "NT"].map((initials) => (
                <div
                  key={initials}
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-medium text-foreground/80"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div className="text-left">
              <p className="text-sm text-foreground font-medium">2,500+ Happy Clients</p>
              <p className="text-xs text-muted-foreground">Trusted by individuals & businesses</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

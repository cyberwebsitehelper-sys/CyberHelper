"use client"

import { motion } from "framer-motion"
import { 
  Shield, 
  Lock, 
  FileSearch, 
  AlertTriangle, 
  Scale, 
  Fingerprint,
  ArrowRight
} from "lucide-react"

const practices = [
  {
    icon: Shield,
    title: "Cyber Crime Defense",
    description: "Expert defense against cyber fraud, hacking, identity theft, and online criminal charges.",
    features: ["Online Fraud Defense", "Hacking Cases", "Identity Theft"]
  },
  {
    icon: Lock,
    title: "Data Privacy Law",
    description: "Comprehensive data protection compliance, GDPR, and privacy regulation advisory.",
    features: ["GDPR Compliance", "Data Breach Response", "Privacy Policies"]
  },
  {
    icon: FileSearch,
    title: "Digital Fraud Investigation",
    description: "Thorough investigation of UPI scams, banking frauds, and financial cyber crimes.",
    features: ["UPI/Banking Fraud", "Investment Scams", "Crypto Fraud"]
  },
  {
    icon: AlertTriangle,
    title: "Online Harassment",
    description: "Legal action against cyberbullying, defamation, stalking, and online abuse.",
    features: ["Cyberbullying", "Online Defamation", "Cyber Stalking"]
  },
  {
    icon: Scale,
    title: "E-Commerce Disputes",
    description: "Resolution of online marketplace disputes, consumer complaints, and digital contracts.",
    features: ["Consumer Rights", "Platform Disputes", "Digital Contracts"]
  },
  {
    icon: Fingerprint,
    title: "IP & Digital Rights",
    description: "Protection of intellectual property, copyright, trademarks in the digital space.",
    features: ["Copyright Protection", "Trademark Issues", "Digital Content"]
  },
]

export function PracticeAreasSection() {
  return (
    <section id="practice" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Our Expertise
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Practice <span className="text-primary">Areas</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive cyber law services covering all aspects of 
            digital legal challenges and cyber security compliance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
              >
                <practice.icon className="w-7 h-7 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {practice.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {practice.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {practice.features.map((feature) => (
                  <span 
                    key={feature}
                    className="text-xs px-2 py-1 bg-secondary rounded-full text-foreground/70"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              
              <motion.a
                href="#"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

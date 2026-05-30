"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const branches = [
  {
    city: "Mumbai",
    address: "Tower A, 15th Floor, Bandra Kurla Complex, Mumbai - 400051",
    phone: "+91 22 2654 3210",
    email: "mumbai@cybercase.in",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM"
  },
  {
    city: "Delhi NCR",
    address: "DLF Cyber City, Building 8, Sector 25, Gurugram - 122002",
    phone: "+91 124 456 7890",
    email: "delhi@cybercase.in",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM"
  },
  {
    city: "Bangalore",
    address: "Embassy Tech Village, Block A, Outer Ring Road, Bangalore - 560103",
    phone: "+91 80 4567 8901",
    email: "bangalore@cybercase.in",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM"
  },
  {
    city: "Kolkata",
    address: "Salt Lake City, Sector V, IT Hub, Kolkata - 700091",
    phone: "+91 33 2345 6789",
    email: "kolkata@cybercase.in",
    hours: "Mon-Sat: 10:00 AM - 7:00 PM"
  },
]

export function BranchesSection() {
  return (
    <section id="branches" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Find Us
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Our <span className="text-primary">Branches</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            With offices across major cities, we&apos;re always within reach to 
            provide you with expert cyber law assistance.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.city}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0"
                >
                  <MapPin className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {branch.city}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">{branch.address}</p>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Phone className="w-4 h-4 text-primary" />
                      <a href={`tel:${branch.phone}`} className="hover:text-primary transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-foreground/80">
                      <Mail className="w-4 h-4 text-primary" />
                      <a href={`mailto:${branch.email}`} className="hover:text-primary transition-colors">
                        {branch.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

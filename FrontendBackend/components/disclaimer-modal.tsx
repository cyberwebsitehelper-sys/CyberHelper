"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DisclaimerModalProps {
  onAccept: () => void
  onDecline: () => void
}

export function DisclaimerModal({ onAccept, onDecline }: DisclaimerModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-secondary/50 px-6 py-4 border-b border-border">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, repeatDelay: 3 }}
                >
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </motion.div>
                <h2 className="text-xl font-semibold text-foreground">
                  Disclaimer & Confirmation
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-6 max-h-[60vh] overflow-y-auto">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As per the rules of the Bar Council of India, we are not permitted to solicit 
                work and advertise. By clicking on the &quot;I AGREE&quot; button below, you acknowledge 
                the following:
              </p>

              <ul className="space-y-4 text-sm text-foreground/80">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex gap-3"
                >
                  <span className="text-primary font-bold">•</span>
                  <span>
                    There has been no advertisement, personal communication, solicitation, 
                    invitation or inducement of any sort whatsoever from us or any of our 
                    members to solicit any work through this website.
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-3"
                >
                  <span className="text-primary font-bold">•</span>
                  <span>
                    You wish to gain more information about us for your own information and use.
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-3"
                >
                  <span className="text-primary font-bold">•</span>
                  <span>
                    The information about us is provided to you on your specific request and 
                    any information obtained or materials downloaded from this website is 
                    completely at your own volition and any transmission, receipt or use of 
                    this site does not create any lawyer-client relationship.
                  </span>
                </motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-3"
                >
                  <span className="text-primary font-bold">•</span>
                  <span>
                    We are not liable for any consequence of any action taken by you relying 
                    on the material / information provided on this website.
                  </span>
                </motion.li>
              </ul>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-sm text-primary font-medium"
              >
                If you have any legal issues, you, in all cases, must seek independent legal advice.
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-xs text-muted-foreground"
              >
                We use cookies to enhance your experience. By continuing to visit this website 
                you agree to our use of cookies.
              </motion.p>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-secondary/30 border-t border-border flex flex-col sm:flex-row gap-3 sm:justify-end">
              <Button
                variant="outline"
                onClick={onDecline}
                className="sm:order-1 border-border hover:bg-destructive/10 hover:text-destructive hover:border-destructive"
              >
                <X className="w-4 h-4 mr-2" />
                I Disagree
              </Button>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="sm:order-2"
              >
                <Button
                  onClick={onAccept}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  I Agree
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

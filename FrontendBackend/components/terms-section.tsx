"use client"

import { motion } from "framer-motion"
import { FileText, Clock, CheckCircle, AlertCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

const terms = [
  {
    title: "Response Timeline",
    content: "You will receive your feedback within 24-72 hours working time after submitting your query. Our team works Monday through Saturday, 10:00 AM to 7:00 PM IST.",
    icon: Clock
  },
  {
    title: "Information Accuracy",
    content: "Please ensure all information provided is accurate and complete. Incorrect information may delay the case verification process and affect our ability to assist you effectively.",
    icon: FileText
  },
  {
    title: "Data Security",
    content: "All personal and financial information submitted through our platform is encrypted and stored securely. We adhere to strict data protection protocols and will never share your information without consent.",
    icon: CheckCircle
  },
  {
    title: "Case Eligibility",
    content: "Not all cases may be eligible for our services. Our initial response will include an assessment of whether we can take on your case and what the next steps would be.",
    icon: AlertCircle
  },
]

const faqs = [
  {
    question: "How long does case verification take?",
    answer: "Initial verification typically takes 24-72 working hours. Complex cases may require additional time for thorough review."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. We maintain strict attorney-client privilege and use enterprise-grade security to protect all submitted information."
  },
  {
    question: "What if I need urgent assistance?",
    answer: "For urgent matters, please call our emergency helpline. We prioritize urgent cases and can expedite the initial consultation."
  },
  {
    question: "What documents should I prepare?",
    answer: "Relevant bank statements, screenshots of communications, FIR copy (if filed), and any other evidence related to your case."
  }
]

export function TermsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section id="terms" className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Important Information
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Terms & <span className="text-primary">Conditions</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Please review our terms and frequently asked questions before 
            submitting your query.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terms Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground mb-6">Key Terms</h3>
            {terms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <term.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{term.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{term.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
                  >
                    <span className="font-medium text-foreground pr-4">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openFaq === index ? "auto" : 0,
                      opacity: openFaq === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-primary/10 border border-primary/20 rounded-2xl p-6 lg:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-1">
                Response Timeline Guarantee
              </h4>
              <p className="text-muted-foreground">
                We guarantee an initial response within <span className="text-primary font-medium">24-72 hours</span> during 
                working days. For urgent matters requiring immediate attention, please contact our emergency helpline.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

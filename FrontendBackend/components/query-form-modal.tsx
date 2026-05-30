"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface QueryFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const accountTypes = [
  "Personal",
  "Proprietorship",
  "Private Limited",
  "OPC (One Person Company)",
  "Partnership",
  "LLP"
]

export function QueryFormModal({ isOpen, onClose }: QueryFormModalProps) {
  const [formData, setFormData] = useState({
    clientName: "",
    mobileNo: "",
    bankName: "",
    accountNo: "",
    ifscCode: "",
    accountType: "",
    entityName: "",
    remarks: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.clientName.trim()) newErrors.clientName = "Client name is required"
    if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile number is required"
    if (formData.mobileNo && !/^\d{10}$/.test(formData.mobileNo)) newErrors.mobileNo = "Enter valid 10-digit mobile"
    if (!formData.bankName.trim()) newErrors.bankName = "Bank name is required"
    if (!formData.accountNo.trim()) newErrors.accountNo = "Account number is required"
    if (!formData.ifscCode.trim()) newErrors.ifscCode = "IFSC code is required"
    if (!formData.accountType) newErrors.accountType = "Select account type"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const resetForm = () => {
    setFormData({
      clientName: "",
      mobileNo: "",
      bankName: "",
      accountNo: "",
      ifscCode: "",
      accountType: "",
      entityName: "",
      remarks: ""
    })
    setIsSubmitted(false)
    setErrors({})
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md overflow-y-auto"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl my-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h2 className="text-xl font-semibold text-foreground">Raise a Query</h2>
                <p className="text-sm text-muted-foreground">Fill in the details for case verification</p>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Query Submitted Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    You will receive feedback within 24-72 hours working time.
                  </p>
                  <Button onClick={handleClose}>
                    Close
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Client Name */}
                    <div className="space-y-2">
                      <Label htmlFor="clientName" className="text-foreground">
                        Client Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="clientName"
                        name="clientName"
                        value={formData.clientName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={errors.clientName ? "border-destructive" : ""}
                      />
                      {errors.clientName && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.clientName}
                        </p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2">
                      <Label htmlFor="mobileNo" className="text-foreground">
                        Mobile Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="mobileNo"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        maxLength={10}
                        className={errors.mobileNo ? "border-destructive" : ""}
                      />
                      {errors.mobileNo && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.mobileNo}
                        </p>
                      )}
                    </div>

                    {/* Bank Name */}
                    <div className="space-y-2">
                      <Label htmlFor="bankName" className="text-foreground">
                        Bank Name <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="bankName"
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleChange}
                        placeholder="Enter bank name"
                        className={errors.bankName ? "border-destructive" : ""}
                      />
                      {errors.bankName && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.bankName}
                        </p>
                      )}
                    </div>

                    {/* Account Number */}
                    <div className="space-y-2">
                      <Label htmlFor="accountNo" className="text-foreground">
                        Account Number <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="accountNo"
                        name="accountNo"
                        value={formData.accountNo}
                        onChange={handleChange}
                        placeholder="Enter account number"
                        className={errors.accountNo ? "border-destructive" : ""}
                      />
                      {errors.accountNo && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.accountNo}
                        </p>
                      )}
                    </div>

                    {/* IFSC Code */}
                    <div className="space-y-2">
                      <Label htmlFor="ifscCode" className="text-foreground">
                        IFSC Code <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="ifscCode"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleChange}
                        placeholder="e.g., SBIN0001234"
                        className={errors.ifscCode ? "border-destructive" : ""}
                      />
                      {errors.ifscCode && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.ifscCode}
                        </p>
                      )}
                    </div>

                    {/* Account Type */}
                    <div className="space-y-2">
                      <Label htmlFor="accountType" className="text-foreground">
                        Account Type <span className="text-destructive">*</span>
                      </Label>
                      <select
                        id="accountType"
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        className={`w-full h-10 px-3 rounded-md border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                          errors.accountType ? "border-destructive" : "border-input"
                        }`}
                      >
                        <option value="">Select account type</option>
                        {accountTypes.map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {errors.accountType && (
                        <p className="text-xs text-destructive flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.accountType}
                        </p>
                      )}
                    </div>

                    {/* Entity Name */}
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="entityName" className="text-foreground">
                        Entity Name <span className="text-muted-foreground text-xs">(if applicable)</span>
                      </Label>
                      <Input
                        id="entityName"
                        name="entityName"
                        value={formData.entityName}
                        onChange={handleChange}
                        placeholder="Company/Business name"
                      />
                    </div>

                    {/* Remarks */}
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="remarks" className="text-foreground">
                        Remarks / Case Details
                      </Label>
                      <textarea
                        id="remarks"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleChange}
                        placeholder="Describe your case or query in detail..."
                        rows={4}
                        className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      />
                    </div>
                  </div>

                  {/* Info Box */}
                  <div className="bg-secondary/50 border border-border rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <span className="text-primary font-medium">Note:</span> Your information is 
                      secure and will only be used for case verification. You will receive feedback 
                      within <span className="text-foreground font-medium">24-72 hours</span> working time.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Query
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

"use client"

import { useState, useEffect } from "react"
import { DisclaimerModal } from "@/components/disclaimer-modal"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SuccessRateSection } from "@/components/success-rate-section"
import { AboutSection } from "@/components/about-section"
import { PracticeAreasSection } from "@/components/practice-areas-section"
import { BranchesSection } from "@/components/branches-section"
import { TermsSection } from "@/components/terms-section"
import { Footer } from "@/components/footer"
import { QueryFormModal } from "@/components/query-form-modal"

export default function Home() {
  const [showDisclaimer, setShowDisclaimer] = useState(false)
  const [hasAcceptedDisclaimer, setHasAcceptedDisclaimer] = useState(false)
  const [showQueryForm, setShowQueryForm] = useState(false)

  useEffect(() => {
    // Check if user has already accepted disclaimer in this session
    const accepted = sessionStorage.getItem("cybercase_disclaimer_accepted")
    if (!accepted) {
      setShowDisclaimer(true)
    } else {
      setHasAcceptedDisclaimer(true)
    }
  }, [])

  const handleAcceptDisclaimer = () => {
    sessionStorage.setItem("cybercase_disclaimer_accepted", "true")
    setHasAcceptedDisclaimer(true)
    setShowDisclaimer(false)
  }

  const handleDeclineDisclaimer = () => {
    // Redirect to Google or show a message
    window.location.href = "https://www.google.com"
  }

  const handleOpenQueryForm = () => {
    setShowQueryForm(true)
  }

  const handleCloseQueryForm = () => {
    setShowQueryForm(false)
  }

  return (
    <>
      {/* Disclaimer Modal - Shows first */}
      {showDisclaimer && (
        <DisclaimerModal
          onAccept={handleAcceptDisclaimer}
          onDecline={handleDeclineDisclaimer}
        />
      )}

      {/* Main Content - Only shown after accepting disclaimer */}
      {hasAcceptedDisclaimer && (
        <main className="min-h-screen bg-background">
          <Header onMenuClick={handleOpenQueryForm} />
          <HeroSection onQueryClick={handleOpenQueryForm} />
          <SuccessRateSection />
          <PracticeAreasSection />
          <AboutSection />
          <BranchesSection />
          <TermsSection />
          <Footer onQueryClick={handleOpenQueryForm} />
          
          {/* Query Form Modal */}
          <QueryFormModal
            isOpen={showQueryForm}
            onClose={handleCloseQueryForm}
          />
        </main>
      )}

      {/* Loading state while checking disclaimer */}
      {!showDisclaimer && !hasAcceptedDisclaimer && (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="animate-pulse text-primary">Loading...</div>
        </div>
      )}
    </>
  )
}

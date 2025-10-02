"use client"

import { useState } from "react"

type ProfileData = {
  serviceType?: string
  businessType?: string
  companySize?: string
  budget?: string
  timeline?: string
  name?: string
  email?: string
  phone?: string
}

export function useProfileDropdown() {
  const [isVisible, setIsVisible] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({})

  const showDropdown = () => setIsVisible(true)
  const hideDropdown = () => setIsVisible(false)

  // Backwards compatible alias
  const showProfile = showDropdown

  const updateProfile = (data: Partial<ProfileData>) => {
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }))

    if (!isVisible) {
      showDropdown()
    }
  }

  return {
    isVisible,
    profileData,
    showDropdown,
    showProfile,
    hideDropdown,
    updateProfile,
  }
}

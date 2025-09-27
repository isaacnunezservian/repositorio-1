// Example: How to import and use the improved Timeline (Bonus) component

import Timeline from './bonus'

export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold py-8 text-center">Beneficios Adicionales</h1>
        <Timeline />
      </div>
    </div>
  )
}

// Alternative: Import directly in any page
// import Timeline from '../mycomponents/bonus'
// 
// Features:
// - Bright checkmark icons with glow effect
// - Improved card styling with better spacing
// - Enhanced hover effects
// - Better visual alignment
// - Badge-style year labels
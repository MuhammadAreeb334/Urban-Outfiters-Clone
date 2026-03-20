import React from 'react'

const SizeAndFitContent = () => {
  return (
<div className="space-y-4 py-2">
          <section>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Fit Details
            </h4>
            <p className="text-sm text-gray-600">
              - This style is designed to be oversized, and runs large
            </p>
          </section>

          <section>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Dimensions
            </h4>
            <p className="text-sm text-gray-600">
              - Measurements taken from size Small
            </p>
            <p className="text-sm text-gray-600">- Length: 26"</p>
          </section>

          <section>
            <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Model Notes
            </h4>
            <p className="text-sm text-gray-600">
              - Model in Red is 5'10" and wearing size Small
            </p>
          </section>
        </div>
  )
}

export default SizeAndFitContent

import React from 'react'

const HowItWorks = () => {
  return (
    <section className='bg-[#FBF9FE] '>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-lg sm:text-center">
        <h2 className="text-xl font-bold text-primary sm:text-4xl">
          How It Works
        </h2>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        <div className="block rounded-xl p-2">
          <h2 className="mt-4 flex h-8 w-8 items-center justify-center bg-green-400 p-2 text-xl font-bold text-white">
            1
          </h2>

          <p className="mt-1 text-sm font-semibold">
            Create project
          </p>
        </div>

        <div className="block rounded-xl p-2">
          <h2 className="mt-4 flex h-8 w-8 items-center justify-center bg-green-400 p-2 text-xl font-bold text-white">
            2
          </h2>

          <p className="mt-1 text-sm font-semibold">
           Break projects down into manageable tasks
          </p>
        </div>

        <div className="block rounded-xl p-2">
          <h2 className="mt-4 flex h-8 w-8 items-center justify-center bg-green-400 p-2 text-xl font-bold text-white">
            3
          </h2>

          <p className="mt-1 text-sm font-semibold">Invite members.</p>
        </div>

        <div className="block rounded-xl p-2">
          <h2 className="mt-4 flex h-8 w-8 items-center justify-center bg-green-400 p-2 text-xl font-bold text-white">
            4
          </h2>

          <p className="mt-1 text-sm font-semibold">
            Track project progress
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HowItWorks
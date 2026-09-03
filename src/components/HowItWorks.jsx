import { FadeUp } from './animations/FadeUp'

/*
  The Prysm Difference - comparison ledger (no cards).
  One panel, three rows. Each row: system → its limitation → which of the
  five loop steps it covers (Identify · Engage · Qualify · Hand off · Report).
  The Prysm row closes the panel in ink with the full spectrum lit.
*/

const LOOP_STEPS = ['Identify', 'Engage', 'Qualify', 'Hand off', 'Report']
const SPECTRUM = ['#0e9a8f', '#2f7ab8', '#4f56c9', '#8a4ab0', '#c23d8f']

function LoopMeter({ covered, dark = false }) {
  return (
    <div className="flex items-start gap-1.5 sm:gap-2" aria-hidden="true">
      {LOOP_STEPS.map((step, i) => {
        const on = covered[i]
        return (
          <div key={step} className="flex flex-col items-center gap-1.5 w-[52px] sm:w-[64px]">
            <div
              className="h-[5px] w-full rounded-full"
              style={{
                background: on
                  ? dark ? SPECTRUM[i] : '#94a3b8'
                  : dark ? 'rgba(255,255,255,0.14)' : '#e8eaf0',
              }}
            />
            <span
              className={`text-[9px] sm:text-[10px] font-medium leading-none whitespace-nowrap ${
                on ? (dark ? 'text-white/90' : 'text-slate-500') : dark ? 'text-white/30' : 'text-slate-300'
              }`}
            >
              {step}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export const HowItWorks = () => {
  return (
    <section id="the-difference" className="py-24 sm:py-32 lg:py-40 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <FadeUp delay={0.1} className="flex items-center justify-center gap-3 mb-5">
            <span className="hairline"></span>
            <span className="eyebrow text-accent">The Prysm Difference</span>
            <span className="hairline"></span>
          </FadeUp>
          <FadeUp delay={0.2} as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-6 tracking-tight">
            Bridging the gap between data and relationships.
          </FadeUp>
          <FadeUp delay={0.3} className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Grateful patient fundraising is a five-step loop. Most systems cover a step or two. Prysm runs the whole loop.
          </FadeUp>
        </div>

        {/* Comparison Ledger */}
        <FadeUp delay={0.4} className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[0_8px_32px_-16px_rgba(24,22,51,0.12)]">

            {/* Row: AI Point Solutions */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 px-7 sm:px-10 py-8 border-b border-slate-100">
              <div className="lg:w-[44%]">
                <h4 className="text-lg font-bold text-ink mb-1.5">AI Point Solutions</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Surface prospects effectively - but can't manage the clinician partnership or track what happens after the hand-off.
                </p>
              </div>
              <div className="lg:flex-1 lg:flex lg:justify-end">
                <div>
                  <LoopMeter covered={[true, false, false, false, false]} />
                  <div className="mt-2.5 text-[11px] font-semibold text-slate-400">Covers 1 of 5 steps</div>
                </div>
              </div>
            </div>

            {/* Row: Traditional CRMs */}
            <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 px-7 sm:px-10 py-8">
              <div className="lg:w-[44%]">
                <h4 className="text-lg font-bold text-ink mb-1.5">Traditional CRMs</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Hold donor data securely and manage relationships - but never report engagement impact back to the medical staff.
                </p>
              </div>
              <div className="lg:flex-1 lg:flex lg:justify-end">
                <div>
                  <LoopMeter covered={[false, false, true, true, false]} />
                  <div className="mt-2.5 text-[11px] font-semibold text-slate-400">Covers 2 of 5 steps</div>
                </div>
              </div>
            </div>

            {/* Row: Prysm - the close */}
            <div className="relative bg-ink">
              {/* spectrum hairline separating the finale row */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#0e9a8f] via-[#4f56c9] to-[#c23d8f]"
                aria-hidden="true"
              />
              <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8 px-7 sm:px-10 py-9">
                <div className="lg:w-[44%]">
                  <h4 className="text-lg font-bold text-white mb-1.5">The Prysm Platform</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Surfaces high-capacity clinical prospects, manages the clinician partnership, and reports impact back - the loop that earns the next referral.
                  </p>
                </div>
                <div className="lg:flex-1 lg:flex lg:justify-end">
                  <div>
                    <LoopMeter covered={[true, true, true, true, true]} dark />
                    <div className="mt-2.5 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-[#3fd0c2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[11px] font-semibold text-white">Runs all five - only Prysm closes the loop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </FadeUp>
      </div>
    </section>
  )
}
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Do I need a technical background to join?',
    a: 'Not for most programs. Our Data Analytics and Digital Marketing tracks are designed for complete beginners. For ML, GenAI, and Data Science programs, basic Python knowledge is helpful — we provide pre-course prep material to get you ready.',
  },
  {
    q: 'Are classes live or recorded?',
    a: 'We use a hybrid model: live weekend sessions with industry mentors (recorded for later review), plus self-paced assignments and project work during the week. You get the accountability of live learning with the flexibility of async content.',
  },
  {
    q: 'What if I don\'t get a job after completing the program?',
    a: 'We offer a placement guarantee on select programs — if you meet the program criteria and don\'t receive a job offer within 6 months, we refund your fees. Our 94% placement rate speaks for itself.',
  },
  {
    q: 'How long are the programs?',
    a: 'Programs range from 8 weeks (Business AI Strategy) to 24 weeks (Data Science & ML). Most working professionals commit 10–15 hours per week alongside their jobs.',
  },
  {
    q: 'Can I pay in installments?',
    a: 'Yes. We offer 0% EMI options through our banking partners, income share agreements (ISA) for select programs, and early-bird discounts of up to 30%. Talk to our admissions team for the right plan.',
  },
  {
    q: 'Who are the mentors?',
    a: 'Our mentors are senior practitioners at companies like Google, Amazon, Microsoft, Razorpay, and Flipkart — not career trainers. They bring live industry problems into the classroom and often become referrers for our top students.',
  },
  {
    q: 'Is there a community after graduation?',
    a: 'Absolutely. You get lifetime access to our alumni Slack community of 2,700+ professionals, exclusive job boards, monthly alumni events, and continued mentorship office hours.',
  },
  {
    q: 'Can I switch programs after enrolling?',
    a: 'Yes, within the first two weeks with no penalty. After that, program switches are handled on a case-by-case basis by our admissions team.',
  },
]

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <span className="font-semibold text-gray-900 pr-4">{item.q}</span>
        <span className="flex-shrink-0 w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center">
          {open
            ? <Minus className="w-3.5 h-3.5 text-blue-600" />
            : <Plus className="w-3.5 h-3.5 text-blue-600" />}
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed">{item.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-4">
            Got <span className="gradient-text">Questions?</span>
          </h2>
          <p className="text-gray-600">Everything you need to know before you enroll.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              open={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </div>

        <div className="mt-10 text-center bg-blue-50 rounded-2xl p-8">
          <p className="text-gray-700 font-medium mb-3">Still have questions? Talk to us directly.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Chat With Admissions
          </button>
        </div>
      </div>
    </section>
  )
}

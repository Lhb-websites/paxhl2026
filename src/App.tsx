import { CheckCircle2, Target, TrendingUp, Users, Zap } from 'lucide-react';

function App() {
  const ctaUrl = 'https://tidycal.com/hanslacida/discovery-call';

  const CTAButton = ({ className = '' }: { className?: string }) => (
    <div className={className}>
      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Book a Free Discovery Call
      </a>
      <p className="text-sm text-gray-500 mt-3">30 minutes · No pitch · No obligation</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">

        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Hire a Google Ads PPC Manager<br />in the Philippines
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Affordable Google Ads experts delivering real ROI for U.S. businesses
          </p>
          <p className="text-lg text-gray-600 mb-10">
            Senior-level Google Ads execution · No seat-based charges
          </p>
          <CTAButton />
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Top-tier Google Ads management plans</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Custom-built for U.S. entrepreneurs and agencies</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Pricing is per Google Ads account</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Unlimited client team members</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">No seat-based fees</span>
            </li>
          </ul>
          <div className="text-center">
            <CTAButton />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Trusted by U.S. Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 transition-colors">
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                "Cost per lead dropped <strong>48%</strong> in the first 60 days."
              </p>
              <p className="text-sm text-gray-600 font-medium">Marketing Director</p>
              <p className="text-sm text-gray-500">U.S. SaaS Company</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 transition-colors">
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                "<strong>600%+</strong> return on ad spend."
              </p>
              <p className="text-sm text-gray-600 font-medium">Owner</p>
              <p className="text-sm text-gray-500">U.S. Lifestyle Ecommerce Brand</p>
            </div>
            <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-600 transition-colors">
              <p className="text-gray-800 mb-6 text-lg leading-relaxed">
                "Transparent. Strategic. Fast execution."
              </p>
              <p className="text-sm text-gray-600 font-medium">Founder</p>
              <p className="text-sm text-gray-500">California Local Home Services Business</p>
            </div>
          </div>
          <div className="text-center">
            <CTAButton />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why Work With Me
          </h2>
          <div className="text-center mb-10">
            <p className="text-2xl font-semibold text-gray-900">Hanzel Lacida</p>
            <p className="text-lg text-gray-600">Founder, PAXHL Solutions</p>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
            Over a decade of Google Ads and PPC experience focused on performance and ROI.
            Backed by real experience inside Google and years of hands-on campaign management for U.S. businesses.
          </p>
        </section>

        <section className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
          <div className="space-y-8">
            <div>
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Former Senior Account Strategist at Google</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Worked at Google from 2020 to 2023</li>
                    <li>• Worked under the Google Partners program</li>
                    <li>• Advised U.S. ecommerce, SaaS, B2B, and local service businesses</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Managed High-Budget Google Ads Accounts</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personally handled $250K to $300K+ USD monthly ad spend</li>
                    <li>• Improved conversion rates</li>
                    <li>• Reduced CPA by up to 50%</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">U.S. Market Specialist</h3>
                  <p className="text-gray-700">Deep understanding of American buyers and funnels</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">10+ Years Google Ads Management</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Keyword research</li>
                    <li>• Campaign setup</li>
                    <li>• A/B testing</li>
                    <li>• Scaling winning campaigns</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent and Results-Focused</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Full visibility into spend and performance</li>
                    <li>• No fluff. Only execution.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <CTAButton />
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center">
            What You Get
          </h2>
          <ul className="space-y-4 mb-12">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Smart budget strategy that works</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Precision targeting that converts</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Industry-specific campaign structures</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Ongoing optimization and testing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Collaborative partnership with direct access to the strategist</span>
            </li>
          </ul>
          <div className="text-center">
            <CTAButton />
          </div>
        </section>

        <section className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What Happens on the Call
          </h2>
          <ul className="space-y-4 mb-10 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Review your Google Ads account or business idea</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Identify wasted spend</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Highlight fast wins</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-lg text-gray-800">Decide if it's a fit to move forward</span>
            </li>
          </ul>
          <div className="text-center">
            <CTAButton />
          </div>
        </section>

        <section className="text-center mb-20">
          <div className="bg-gray-100 border-l-4 border-blue-600 p-6 rounded-lg inline-block mb-12">
            <p className="text-lg font-medium text-gray-800">
              Best fit for accounts spending <strong>$3K+ per month</strong>
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 md:p-16 text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Book Your Free Discovery Call
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Let's talk strategy. No fluff. Just performance.
          </p>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-blue-600 font-semibold px-10 py-5 rounded-lg text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Book a Discovery Call
          </a>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 font-medium mb-2">
            paxhl.com © 2025
          </p>
          <p className="text-sm text-gray-600 mb-3">
            A ZELDIGITAL company
          </p>
          <p className="text-xs text-gray-500">
            Terms and Conditions · Privacy Policy · Cookie Use
          </p>
        </div>
      </footer>

      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-lg text-center transition-colors"
        >
          Book a Free Discovery Call
        </a>
      </div>
    </div>
  );
}

export default App;

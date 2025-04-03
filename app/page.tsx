import { Github, Mail, Phone } from "lucide-react"

export default function Resume() {
  return (
    <div className="bg-white min-h-screen flex justify-center">
      <div className="max-w-5xl w-full bg-white relative">
        {/* Centered Name Box - Moved to top of component for better stacking */}
        <div className="relative md:absolute w-full md:w-2/3 border-4 border-black p-4 md:p-6 bg-white text-center z-10 mx-auto md:left-1/2 md:transform md:-translate-x-1/2 md:top-4 mb-8 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-2">LE MINH TAM</h1>
          <p className="text-gray-600">FP&A SPECIALIST</p>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Left Column - Sidebar */}
          <div className="w-full md:w-1/3 bg-gray-100 min-h-screen p-6">
            <div className="mb-8 md:mt-32">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">DETAILS</h2>
              <div className="mb-4">
                <p className="font-semibold">ADDRESS</p>
                <p className="text-gray-700">District 4, HCMC, Vietnam</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">PHONE</p>
                <div className="flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  <p className="text-gray-700">0963639979</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="font-semibold">EMAIL</p>
                <div className="flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  <p className="text-gray-700">tamle.fpa@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">LINKS</h2>
              <div className="flex items-center gap-1">
                <Github className="h-4 w-4" />
                <p className="text-gray-700">GitHub Profile</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">SKILLS</h2>
              <div className="mb-3">
                <p className="font-semibold">Excel</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i <= 5 ? "bg-black" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="font-semibold">Financial Analysis</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i <= 5 ? "bg-black" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="font-semibold">Programming Automation</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i <= 3 ? "bg-black" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="font-semibold">Financial Accounting</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i <= 3 ? "bg-black" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">LANGUAGES</h2>
              <div className="mb-3">
                <p className="font-semibold">Vietnamese</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i <= 5 ? "bg-black" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <p className="font-semibold">English</p>
                <div className="flex gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${i <= 4 ? "bg-black" : "bg-gray-300"}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="w-full md:w-2/3 p-6 md:pl-12">
            <div className="mb-8 md:mt-32">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">PROFILE</h2>
              <p className="text-gray-700 mb-4">
                Results-driven FP&A specialist delivering actionable financial insights that guide strategic
                decision-making and drive business growth. Skilled in budgeting, forecasting, and financial modeling,
                transforms complex data into clear, impactful reports. Proficient in Excel with foundational Python and
                VBA skills for process automation, and a strong communicator in English who effectively conveys critical
                information to management and leadership.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Develop and maintain financial models to support forecasting and budgeting</li>
                <li>Analyze financial performance, identify trends, and provide actionable insights</li>
                <li>Prepare monthly, quarterly, and annual financial reports for leadership</li>
                <li>Conduct variance analysis to compare actual results vs. forecasts</li>
                <li>Assist in scenario planning and long-term financial strategy</li>
                <li>Partner with business units to optimize financial performance and efficiency</li>
                <li>Identify areas for cost reduction and process improvement</li>
                <li>Support ad-hoc financial analysis and special projects</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">EMPLOYMENT HISTORY</h2>

              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">Finance Specialist, Phuong Nam General Hospital</h3>
                  <span className="text-gray-600">Aug 2023 — Sep 2024</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Develop financial models to support strategic management and decision-making</li>
                  <li>Build and maintain reporting dashboards to monitor key metrics</li>
                  <li>Track financial KPIs and provide forecasts for future performance</li>
                  <li>Perform Budget Variance Analysis to identify areas for improvement</li>
                  <li>Collaborate with departments to collect financial and business data</li>
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">Stockbroker, Mirae Asset Securities</h3>
                  <span className="text-gray-600">2018 — 2021</span>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>Assessed clients' investment needs and risk tolerance</li>
                  <li>Assisted clients in identifying investment opportunities</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">EDUCATION</h2>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">Bachelor of Science in Management, University of South Florida</h3>
                  <span className="text-gray-600">2012 — 2015</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">International Baccalaureate Diploma, EF Academy</h3>
                  <span className="text-gray-600">2009 — 2011</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">CERTIFICATIONS</h2>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <h3 className="font-semibold">FPAC Candidate, AFP (Association for Financial Professionals)</h3>
                  <span className="text-gray-600">Expected: 2025</span>
                </div>
                <p className="text-gray-700">
                  Comprehensive certification covering financial planning, analysis, and strategic business partnering
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">ACHIEVEMENTS</h2>

              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Automated reporting processes, saving 50 hours/month</li>
                <li>Redesigned financial data structure, improving collaboration and saving 15 hours/month</li>
                <li>Developed KPI dashboards contributing to 30% month-over-month revenue growth</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-lg font-bold uppercase border-b-2 border-black pb-1 mb-4">PROJECTS</h2>

              <div className="mb-4">
                <h3 className="font-semibold">Hospital Information System (HIS) Implementation</h3>
                <p className="text-gray-700">Role: PMO</p>
                <p className="text-gray-700">
                  Assisted in User Acceptance Testing (UAT) for HIS financial reporting module
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Name box moved to top of component */}
      </div>
    </div>
  )
}


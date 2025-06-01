export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-4 bg-neutral-100 text-neutral-800 shadow-sm fixed w-full top-0 z-50">
        {/* Left nav links */}
        <ul className="flex gap-8 font-semibold text-sm">
          <li className="hover:underline underline-offset-8">Home</li>
          <li className="relative group">
            <span className="hover:underline underline-offset-8">Work With Us</span>
            <div className="absolute left-0 top-full mt-4 hidden group-hover:flex bg-red-500 text-white px-8 py-6 w-screen max-w-4xl justify-between">
              <div>
                <h4 className="font-bold mb-2">Training</h4>
                <ul className="space-y-1 text-sm">
                  <li>Physique Training App</li>
                  <li>1:1 Coaching</li>
                  <li>Program Downloads</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Nutrition</h4>
                <ul className="space-y-1 text-sm">
                  <li>1:1 Coaching</li>
                  <li>Macro Consultation</li>
                  <li>Strategy Consultation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Challenges/Cohorts</h4>
              </div>
            </div>
          </li>
          <li className="hover:underline underline-offset-8">Team</li>
          <li className="hover:underline underline-offset-8">Contact</li>
        </ul>
  
        {/* Center logo */}
        <div className="text-xl font-light tracking-widest absolute left-1/2 transform -translate-x-1/2">
          SUSIEKAT TRAINING
        </div>
  
        {/* Right icons */}
        <div className="flex gap-6 text-xl">
          <span>👤</span>
          <span>🔍</span>
          <span>🛒</span>
        </div>
      </nav>
    );
  }
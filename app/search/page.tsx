import React from 'react';
import { 
  Search, Grid, List, Bell, User, Coins, ChevronDown, 
  LayoutDashboard, PieChart, Users, CreditCard, UserX, CheckCircle2 
} from 'lucide-react';

export default function SearchLayout() {
  const filters = [
    "Followers", "Engagement", "Location", "Gender", "Age", "Language", 
    "Topics", "Brands", "Views", "Hashtags", "Mentions", "Collaborations", "More Filters"
  ];

  const creators = [
    {
      name: "Windah Basudara",
      handle: "@windahbasudara",
      location: "Bekasi • Gamer",
      followers: "4JT",
      engagement: "5.1%",
      views: "2.5JT",
      images: ["/placeholder1.jpg", "/placeholder2.jpg", "/placeholder3.jpg", "/placeholder4.jpg"] // Ganti dengan path asli
    },
    {
      name: "MiawAug",
      handle: "@miawaug",
      location: "Jakarta Barat • Gamer",
      followers: "4.2JT",
      engagement: "2.15%",
      views: "1.2JT",
      images: ["/placeholder5.jpg", "/placeholder6.jpg", "/placeholder7.jpg", "/placeholder8.jpg"]
    }
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-800 overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#1b2b3f] text-slate-300 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-blue-500 rounded-md"></div>
          <span className="text-white font-bold text-xl tracking-wide">Fluensy</span>
        </div>

        <nav className="flex-1 mt-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:text-white hover:bg-white/5">
            <LayoutDashboard size={20} />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-white bg-white/10 border-l-4 border-blue-500">
            <Search size={20} />
            <span className="text-sm font-medium">Search</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:text-white hover:bg-white/5">
            <PieChart size={20} />
            <span className="text-sm font-medium">Budget Optimization</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:text-white hover:bg-white/5">
            <Users size={20} />
            <span className="text-sm font-medium">Manage Campaign</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:text-white hover:bg-white/5">
            <CreditCard size={20} />
            <span className="text-sm font-medium">Payment</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 hover:text-white hover:bg-white/5">
            <UserX size={20} />
            <span className="text-sm font-medium">Fake Followers</span>
          </a>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* TOP NAVBAR */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-8 shrink-0">
          <div className="flex gap-8 h-full">
            <button className="h-full border-b-2 border-slate-800 text-slate-800 font-semibold text-sm">
              Search
            </button>
            <button className="h-full text-slate-500 hover:text-slate-800 font-medium text-sm">
              Smart Matching
            </button>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full text-sm font-semibold text-slate-700">
              <Coins size={16} className="text-blue-500" />
              1,250 Coins
            </div>
            <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-100 rounded-full relative">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="flex items-center gap-2 text-sm font-medium">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center">
                <User size={16} className="text-slate-500"/>
              </div>
              User <ChevronDown size={14} />
            </button>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          
          <h1 className="text-2xl font-bold text-slate-800 mb-6">Temukan Influencer</h1>

          {/* PLATFORM TOGGLE */}
          <div className="flex justify-center mb-6">
            <div className="flex bg-slate-100 rounded-full p-1 border">
              <button className="px-6 py-1.5 bg-[#1b2b3f] text-white text-sm font-medium rounded-full shadow-sm">
                Instagram
              </button>
              <button className="px-6 py-1.5 text-slate-500 hover:text-slate-700 text-sm font-medium rounded-full">
                TikTok
              </button>
              <button className="px-6 py-1.5 text-slate-500 hover:text-slate-700 text-sm font-medium rounded-full">
                Youtube
              </button>
            </div>
          </div>

          {/* SEARCH BAR */}
          <div className="bg-white border border-slate-200 rounded-xl p-2 flex items-center gap-3 shadow-sm mb-4">
            <Search size={20} className="text-slate-400 ml-2" />
            <input 
              type="text" 
              placeholder="Cari berdasarkan nama, nama pengguna, atau kata kunci"
              className="flex-1 outline-none text-sm text-slate-700 bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
              Search
            </button>
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
              <button key={filter} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 shadow-sm">
                {filter}
                <ChevronDown size={14} className="text-slate-400" />
              </button>
            ))}
          </div>

          {/* RESULTS HEADER */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4 text-sm">
              <span className="font-semibold text-slate-700">1,245 creators found</span>
              <button className="flex items-center gap-1 text-slate-500 font-medium">
                Sort by <ChevronDown size={14} />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex bg-white border rounded-lg overflow-hidden shadow-sm">
                <button className="p-2 bg-slate-50 text-slate-700 border-r"><List size={16} /></button>
                <button className="p-2 text-slate-400 hover:text-slate-700"><Grid size={16} /></button>
              </div>
              <button className="px-4 py-2 bg-white border rounded-lg text-sm font-medium text-slate-700 shadow-sm">
                Compare (0)
              </button>
            </div>
          </div>

          {/* CREATOR CARDS */}
          <div className="space-y-6">
            {creators.map((creator, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                
                {/* Card Header Info */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden shrink-0">
                      {/* Avatar Placeholder */}
                      <div className="w-full h-full bg-slate-300"></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        <h3 className="text-lg font-bold text-slate-800">{creator.name}</h3>
                        <CheckCircle2 size={16} className="text-blue-500 fill-blue-50" />
                      </div>
                      <p className="text-sm text-slate-500 mb-1">{creator.handle}</p>
                      <p className="text-xs text-slate-400 flex items-center gap-2">
                        {creator.location}
                        <span className="flex -space-x-1">
                          {/* Mini platform icons stub */}
                          <div className="w-4 h-4 bg-orange-500 rounded-full border border-white"></div>
                          <div className="w-4 h-4 bg-green-500 rounded-full border border-white"></div>
                          <div className="w-4 h-4 bg-purple-500 rounded-full border border-white"></div>
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex gap-8 text-center px-8 border-r border-slate-200">
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Followers</p>
                      <p className="text-lg font-bold text-slate-800">{creator.followers}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Engagement</p>
                      <p className="text-lg font-bold text-slate-800">{creator.engagement}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1">Avg Views</p>
                      <p className="text-lg font-bold text-slate-800">{creator.views}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors">
                      Lihat Rate Card
                    </button>
                    <button className="px-5 py-2 bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 text-sm font-semibold rounded-lg transition-colors">
                      Simpan
                    </button>
                    <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-blue-600" />
                  </div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-4 gap-4 h-64">
                  {creator.images.map((_, i) => (
                    <div key={i} className="bg-slate-100 rounded-xl overflow-hidden relative border border-slate-200">
                      {/* Image Placeholder */}
                      <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        Gambar {i + 1}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </main>
    </div>
  );
}
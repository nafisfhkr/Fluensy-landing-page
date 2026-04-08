"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { CheckCircle2, ChevronRight, CreditCard, ShieldCheck, Wallet, ArrowLeft, Building } from 'lucide-react';
import Link from 'next/link';

// Mock Data Paket (Sesuaikan dengan data di halaman pricing kamu)
const planDetails: Record<string, { name: string; price: number; desc: string }> = {
  free: { name: 'Free', price: 0, desc: 'Great for individuals and small brands exploring influencer campaigns at no cost.' },
  tier1: { name: 'Tier 1', price: 89000, desc: 'Perfect for small brands starting with influencer campaigns.' },
  tier2: { name: 'Tier 2', price: 119000, desc: 'Ideal for growing brands managing multiple creators and campaigns.' },
  tier3: { name: 'Tier 3', price: 249000, desc: 'For large teams needing full control and deep campaign insights.' },
  basic: { name: 'Paket Basic', price: 99000, desc: 'Akses fitur dasar untuk pemula' },
  pro: { name: 'Paket Pro', price: 199000, desc: 'Fitur lengkap untuk profesional' },
  premium: { name: 'Paket Premium', price: 399000, desc: 'Akses tanpa batas dan prioritas' },
};

// Daftar Tambahan (Add-ons) yang bisa dipilih di Level 1
const availableAddons = [
  { id: 'storage', name: 'Ekstra Penyimpanan 100GB', price: 50000, desc: 'Tambah kapasitas cloud storage Anda.' },
  { id: 'support', name: 'Prioritas Support 24/7', price: 75000, desc: 'Jalur khusus untuk bantuan teknis instan.' },
  { id: 'setup', name: 'Layanan Setup Awal', price: 150000, desc: 'Tim kami akan men-setup sistem Anda sampai siap pakai.' },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Ambil parameter plan dari URL (contoh: /checkout?plan=pro)
  const planQuery = searchParams.get('plan') || 'basic';
  const selectedPlan = planDetails[planQuery] || planDetails.basic;

  // State Management
  const [level, setLevel] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('transfer');

  // Kalkulasi Total
  const addonsTotal = selectedAddons.reduce((total, addonId) => {
    const addon = availableAddons.find(a => a.id === addonId);
    return total + (addon?.price || 0);
  }, 0);
  const grandTotal = selectedPlan.price + addonsTotal;

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Progress Tracker */}
        <div className="mb-8 flex items-center justify-center space-x-4">
          <div className={`flex items-center ${level >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${level >= 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>1</span>
            <span className="ml-2 font-medium">Review & Tambahan</span>
          </div>
          <ChevronRight className="text-gray-300" />
          <div className={`flex items-center ${level === 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-bold ${level === 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-300'}`}>2</span>
            <span className="ml-2 font-medium">Pembayaran</span>
          </div>
        </div>

        {/* ==================== LEVEL 1 ==================== */}
        {level === 1 && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Kiri: Paket Terpilih */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Paket Pilihan Anda</h2>
                <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 mb-6">
                  <h3 className="font-bold text-blue-900 text-lg">{selectedPlan.name}</h3>
                  <p className="text-blue-700 text-sm mt-1">{selectedPlan.desc}</p>
                  <div className="mt-4 text-2xl font-bold text-gray-900">
                    {formatRupiah(selectedPlan.price)} <span className="text-sm font-normal text-gray-500">/bulan</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex justify-between font-bold text-lg text-gray-900">
                    <span>Subtotal</span>
                    <span>{formatRupiah(selectedPlan.price)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setLevel(2)}
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition-colors"
                >
                  Lanjut ke Pembayaran
                </button>
                <button onClick={() => router.back()} className="w-full mt-3 text-gray-500 hover:text-gray-800 text-sm font-medium">
                  Kembali ke Pricing
                </button>
              </div>
            </div>

            {/* Kanan: Pilihan Add-ons */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Maksimalkan Sistem Anda</h2>
                <p className="text-gray-500 mb-6">Pilih layanan tambahan untuk mendukung kebutuhan bisnis Anda (Opsional).</p>

                <div className="space-y-4">
                  {availableAddons.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <div 
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-5 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                          isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white'
                          }`}>
                            {isSelected && <CheckCircle2 size={16} className="text-white" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{addon.name}</h4>
                            <p className="text-sm text-gray-500">{addon.desc}</p>
                          </div>
                        </div>
                        <div className="font-bold text-gray-900">
                          +{formatRupiah(addon.price)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== LEVEL 2 ==================== */}
        {level === 2 && (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Kiri: Detail Pengguna & Metode Pembayaran */}
            <div className="lg:w-2/3 space-y-6">
              <button 
                onClick={() => setLevel(1)}
                className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-4"
              >
                <ArrowLeft size={16} className="mr-2" /> Kembali ke Add-ons
              </button>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Informasi Akun</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="Masukkan nama" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="contoh@email.com" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Metode Pembayaran</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div 
                    onClick={() => setPaymentMethod('transfer')}
                    className={`p-4 border rounded-xl cursor-pointer flex flex-col items-center text-center gap-2 ${paymentMethod === 'transfer' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <Building size={24} className={paymentMethod === 'transfer' ? 'text-blue-600' : 'text-gray-500'} />
                    <span className="font-medium text-sm">Transfer Bank</span>
                  </div>
                  <div 
                    onClick={() => setPaymentMethod('ewallet')}
                    className={`p-4 border rounded-xl cursor-pointer flex flex-col items-center text-center gap-2 ${paymentMethod === 'ewallet' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <Wallet size={24} className={paymentMethod === 'ewallet' ? 'text-blue-600' : 'text-gray-500'} />
                    <span className="font-medium text-sm">E-Wallet (QRIS)</span>
                  </div>
                  <div 
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border rounded-xl cursor-pointer flex flex-col items-center text-center gap-2 ${paymentMethod === 'card' ? 'border-blue-600 bg-blue-50 ring-1 ring-blue-600' : 'border-gray-200 hover:border-blue-300'}`}
                  >
                    <CreditCard size={24} className={paymentMethod === 'card' ? 'text-blue-600' : 'text-gray-500'} />
                    <span className="font-medium text-sm">Kartu Kredit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kanan: Ringkasan Akhir (Checkout) */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 sticky top-28">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">{selectedPlan.name}</span>
                    <span>{formatRupiah(selectedPlan.price)}</span>
                  </div>
                  
                  {selectedAddons.length > 0 && (
                    <div className="pt-2 border-t border-gray-100">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">Add-ons:</span>
                      {selectedAddons.map(id => {
                        const addon = availableAddons.find(a => a.id === id);
                        return (
                          <div key={id} className="flex justify-between text-gray-600 text-sm mb-1">
                            <span>+ {addon?.name}</span>
                            <span>{formatRupiah(addon?.price || 0)}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between font-bold text-xl text-gray-900">
                    <span>Total Tagihan</span>
                    <span className="text-blue-600">{formatRupiah(grandTotal)}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 mb-6 bg-green-50 text-green-800 p-3 rounded-lg text-sm">
                  <ShieldCheck size={20} className="flex-shrink-0 text-green-600" />
                  <p>Pembayaran Anda aman dan dienkripsi (SSL Secure).</p>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md hover:shadow-lg flex justify-center items-center gap-2">
                  Bayar Sekarang <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// Suspense Boundary dibutuhkan karena kita menggunakan useSearchParams()
export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading checkout...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}
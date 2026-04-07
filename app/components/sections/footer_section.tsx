"use client";
import { FaEnvelope, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

import Image from "next/image";

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#10324F] text-white pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-5 gap-10 mb-12">
          
          {/* KOLOM 1 (LEBIH LEBAR) */}
          <div className="col-span-2">
            <Image
              src="/img/logo-fluensy-white.png"
              alt="Fluensy Logo"
              width={140}
              height={40}
              className="mb-6"
            />
            <p className="text-[#83AAC6] max-w-md">
              Platform analitik influencer berbasis AI untuk kampanye yang lebih
              terukur dan strategis.
            </p>
          </div>

          {/* KOLOM 2 */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-[#83AAC6]">
              <li>Fitur</li>
              <li>Cara Kerja</li>
              <li>Model Akses</li>
              <li>Explore Features</li>
            </ul>
          </div>


          {/* KOLOM 3 */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-[#83AAC6]">
              <li>Tentang Kami</li>
              <li>FAQ</li>
              <li>Blog</li>
              <li>Dokumentasi</li>
            </ul>
          </div>

          {/* KOLOM 4 */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-[#83AAC6]">
                <li className="flex items-center">
                    <span className="mr-2 text-white"><FaEnvelope /></span>
                    Email
                </li>
                <li className="flex items-center">
                    <span className="mr-2 text-white"><FaYoutube /></span>
                    YouTube
                </li>
                <li className="flex items-center">
                    <span className="mr-2 text-white"><FaInstagram /></span>
                    Instagram
                </li>
                <li className="flex items-center">
                    <span className="mr-2 text-white"><FaTiktok /></span>
                    TikTok
                </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex justify-between items-center border-t border-[#1e4b6f] pt-6">
          
          {/* LEFT */}
          <p className="text-sm text-white">
            © 2026 Nama Platform. All rights reserved.
          </p>

          {/* RIGHT */}
          <div className="flex gap-6 text-sm text-white">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
"use client"

import { ORACLE_CLOUD } from "../utils/data";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OracleCloud() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-6 overflow-y-auto">
      <header className="text-black py-6 text-center">
        <h1 className="text-5xl font-bold">Oracle Cloud Certifications</h1>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORACLE_CLOUD.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-lg shadow-lg"
            >
              <div className="relative w-full h-90">
                <Image
                  src={cert.image}
                  alt={cert.name}
                  fill
                  className="object-contain rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{cert.name}</h2>
                <p className="text-gray-600">ID: {cert.id}</p>
                <p className="text-gray-600">
                  Obtained Date: {cert.obtainedDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-2 sm:px-8 sm:py-3 bg-[#7e61e7] text-white font-bold rounded-lg my-12 outline outline-1.5 outline-transparent transition-all duration-300 ease-in-out hover:bg-black hover:text-[#a993fe] hover:outline-[#a993fe] hover:scale-105 cursor-pointer text-base sm:text-lg"
          >
            Back to Home
          </button>
        </div>
    </div>
  );
}
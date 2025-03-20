import { ORACLE_CLOUD } from "../utils/data";

export default function OracleCloud() {
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
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full object-cover"
              />
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
    </div>
  );
}
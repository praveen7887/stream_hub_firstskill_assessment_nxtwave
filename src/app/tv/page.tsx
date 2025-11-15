import Header from '@/components/Header';

export default function TVPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            TV Shows
          </h1>
          
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl text-gray-300 mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-400 text-lg">
                TV shows section is currently under development. Check back soon for the latest TV series and shows!
              </p>
              <div className="mt-8">
                <a 
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  ← Back to Movies
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
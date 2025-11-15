import Header from '@/components/Header';

export default function MyListPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">
            My List
          </h1>
          
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              
              <h2 className="text-2xl text-gray-300 mb-4">
                Your list is empty
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Add movies and shows to your list to keep track of what you want to watch.
              </p>
              
              <div className="space-x-4">
                <a 
                  href="/movies"
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Browse Movies
                </a>
                <a 
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
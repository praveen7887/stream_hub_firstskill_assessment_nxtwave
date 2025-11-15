# Streaming Dashboard Clone

A modern streaming service dashboard clone (Netflix/Hulu style) built with Next.js 15, TypeScript, and Tailwind CSS. Features movie browsing, detailed views, and responsive design.

## 🎬 Features

- **Homepage** with hero banner and horizontal movie rows
- **Movie Detail Pages** with comprehensive information
- **Responsive Design** optimized for all devices
- **Server-Side Rendering** for optimal performance
- **Image Optimization** with Next.js Image component
- **Mock Data Fallback** for development without API key

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **API**: TMDB (The Movie Database)
- **Icons**: Lucide React

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd streaming-dashboard-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your TMDB API key to `.env.local`:
   ```
   TMDB_API_KEY=your_tmdb_api_key_here
   ```
   
   *Note: The app includes mock data fallback, so it works without an API key.*

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── movie/
│       └── [id]/
│           └── page.tsx     # Movie detail page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroBanner.tsx       # Hero banner component
│   ├── MovieCard.tsx        # Individual movie card
│   └── MovieRow.tsx         # Horizontal movie row
├── lib/
│   ├── tmdb.ts              # TMDB API helper functions
│   └── utils.ts             # Utility functions
└── types/
    └── movie.ts             # TypeScript interfaces
```

## 🎯 Key Features

### Homepage
- **Hero Banner**: Displays featured movie with backdrop image
- **Movie Rows**: Horizontal scrolling categories (Now Playing, Popular, Top Rated)
- **Responsive Navigation**: Fixed header with blur backdrop effect

### Movie Detail Page
- **Comprehensive Information**: Title, overview, genres, runtime, ratings
- **Interactive Elements**: Play button, add to list, back navigation
- **Metadata Display**: Budget, revenue, IMDB link, release status

### Technical Highlights
- **Server Components**: Data fetching on the server for optimal performance
- **Image Optimization**: Next.js Image component with priority loading
- **Error Handling**: Graceful fallbacks and error boundaries
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: Semantic HTML and ARIA support

## 🔧 Configuration

### Environment Variables
- `TMDB_API_KEY`: Your TMDB API key (optional - app works with mock data)

### Next.js Configuration
- Image domains configured for TMDB images
- Production-ready build settings

## 📱 Responsive Design

- **Mobile**: Optimized touch targets and simplified navigation
- **Tablet**: Balanced layout with enhanced interactions
- **Desktop**: Full-featured experience with hover effects

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Environment Variables for Production
- `TMDB_API_KEY`: Add your TMDB API key in Vercel's environment settings

## 🤖 AI Development

This project was built with assistance from AI tools. See [AI_Report.md](./AI_Report.md) for detailed information about AI-generated components and development process.

## 📄 API Integration

### TMDB API Endpoints Used
- `/movie/popular` - Popular movies
- `/movie/now_playing` - Currently playing movies  
- `/movie/top_rated` - Top rated movies
- `/movie/{id}` - Individual movie details

### Mock Data System
The application includes a comprehensive mock data system that:
- Provides fallback when API is unavailable
- Enables development without API key
- Maintains full functionality with sample data

## 🎨 UI Components

Built with shadcn/ui components:
- **Navigation**: Responsive header with blur effects
- **Cards**: Movie cards with hover interactions
- **Buttons**: Styled call-to-action elements
- **Badges**: Genre tags and status indicators
- **Layouts**: Responsive grid and flexbox systems

## 🔍 Future Enhancements

- Search functionality
- User authentication
- Watchlist feature
- Movie trailers
- Dark/light theme toggle
- Filtering and sorting options

## 📝 License

This project is for educational purposes. Movie data and images are provided by TMDB API.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built with ❤️ using Next.js 15 and AI assistance
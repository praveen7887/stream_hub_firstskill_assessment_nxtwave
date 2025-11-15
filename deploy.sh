#!/bin/bash

echo "🚀 Streaming Dashboard Deployment Script"
echo "====================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the project root directory"
    exit 1
fi

echo "✅ Found project files"
echo ""

# Show git status
echo "📋 Git Status:"
git status --short
echo ""

# Commit if there are changes
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Committing changes..."
    git add .
    git commit -m "feat: complete streaming dashboard clone with TMDB integration

- Add TMDB API integration with Bearer token authentication  
- Implement responsive homepage with hero banner and movie rows
- Create movie detail pages with comprehensive information
- Add navigation pages (Movies, TV Shows, My List)
- Configure Next.js 15 with image optimization
- Include TypeScript interfaces for type safety
- Add mock data fallback system
- Implement responsive design with Tailwind CSS
- Add AI development report and documentation"
    echo "✅ Changes committed"
else
    echo "✅ No changes to commit"
fi

echo ""
echo "🌐 Ready to push to GitHub!"
echo ""
echo "Choose your deployment method:"
echo ""
echo "1️⃣  GitHub CLI (if installed):"
echo "   gh repo set-default praveen7887/stream_hub_firstskill_assessment_nxtwave"
echo "   git push -u origin master"
echo ""
echo "2️⃣  Personal Access Token:"
echo "   git remote remove origin"
echo "   git remote add origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/praveen7887/stream_hub_firstskill_assessment_nxtwave.git"
echo "   git push -u origin master"
echo ""
echo "3️⃣  Manual Upload:"
echo "   Visit: https://github.com/praveen7887/stream_hub_firstskill_assessment_nxtwave"
echo "   Click 'Upload files' and drag project files"
echo ""
echo "📋 After pushing to GitHub:"
echo "   1. Go to vercel.com"
echo "   2. Import your repository"
echo "   3. Add TMDB_API_KEY environment variable"
echo "   4. Deploy! 🚀"
echo ""
echo "🔑 TMDB API Key for Vercel:"
echo "   eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmN2ZiMDVlMWJlOWFjOGIxOGIxZGVjY2MzZTM2YmI4NCIsIm5iZiI6MTc2MzEyOTYxMy4xMiwic3ViIjoiNjkxNzM5MGQ3MDA0OGQ4MmVjOWFkYjY2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.dGiPLFcbS0NZyjp59Z9Jdlr9gL3txR2kkFcnD_DQZvE"
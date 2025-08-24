#!/bin/bash

echo "🚀 Building portfolio website for production..."

# Build the project
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Build files are ready in the 'build' directory"
    echo ""
    echo "🌐 To deploy to Vercel:"
    echo "   1. Push your code to GitHub"
    echo "   2. Go to vercel.com and sign in"
    echo "   3. Click 'New Project' and import your repository"
    echo "   4. Vercel will automatically detect it's a Create React App"
    echo "   5. Click 'Deploy'"
    echo ""
    echo "🔧 Manual deployment options:"
    echo "   - Use 'npx serve -s build' to test locally"
    echo "   - Upload 'build' folder to any static hosting service"
    echo ""
    echo "📱 Your portfolio is ready for deployment!"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi

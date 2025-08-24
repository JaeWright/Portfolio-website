# Jaelen Wright - Portfolio Website

A modern, responsive portfolio website built with React and TypeScript, showcasing professional experience, technical skills, and projects.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with smooth animations
- **Component-Based**: Reusable components for easy maintenance
- **TypeScript**: Full type safety and better development experience
- **Routing**: Client-side routing with React Router
- **Performance**: Optimized for fast loading and smooth interactions

## Sections

- **Home**: Hero section with contact information and call-to-action
- **Experience**: Work history and education details
- **Skills**: Technical skills organized by category
- **Projects**: Live and personal projects with detailed descriptions

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Create React App
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment to Vercel

This project is optimized for deployment on Vercel. Follow these steps:

1. **Push to GitHub**: Ensure your code is pushed to a GitHub repository.

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your portfolio repository

3. **Configure Build Settings**:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **Environment Variables**: No environment variables are required for this project.

5. **Deploy**: Click "Deploy" and Vercel will automatically build and deploy your site.

6. **Custom Domain** (Optional): Add a custom domain in the Vercel dashboard.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navigation.tsx  # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── ProjectCard.tsx # Project display card
│   ├── ExperienceCard.tsx # Experience display card
│   └── SkillCard.tsx   # Skills display card
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Experience.tsx  # Experience page
│   ├── Skills.tsx      # Skills page
│   └── Projects.tsx    # Projects page
├── types/              # TypeScript interfaces
│   └── index.ts        # Type definitions
├── data/               # Static data
│   └── portfolioData.ts # Resume/project data
└── App.tsx             # Main app component
```

## Customization

### Adding New Projects

Edit `src/data/portfolioData.ts` to add new projects:

```typescript
export const liveProjects: Project[] = [
  // ... existing projects
  {
    id: 'new-project',
    title: 'New Project',
    description: 'Project description here',
    stack: ['React', 'Node.js'],
    link: 'https://project-url.com',
    type: 'live'
  }
];
```

### Updating Skills

Modify the skills array in the same file:

```typescript
export const skills: Skill[] = [
  {
    category: 'New Category',
    items: ['Skill 1', 'Skill 2', 'Skill 3']
  }
];
```

### Styling

The project uses Tailwind CSS. Custom styles can be added in:
- `src/index.css` for global styles
- Component files for component-specific styles
- `tailwind.config.js` for theme customization

## Performance Features

- **Lazy Loading**: Components are loaded as needed
- **Optimized Images**: SVG icons for scalability
- **Minimal Dependencies**: Only essential packages included
- **CSS Optimization**: Tailwind CSS purging for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: jaelen.n.wright@gmail.com
- **LinkedIn**: [linkedin.com/in/jaelenwright](https://linkedin.com/in/jaelenwright)
- **GitHub**: [github.com/JaeWright](https://github.com/JaeWright)

---

Built with ❤️ using React and TypeScript

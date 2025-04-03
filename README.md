# Next-Resume

A modern, responsive resume template built with Next.js, TypeScript, and Tailwind CSS. This template provides a clean, professional layout for showcasing your skills, experience, and achievements.

![Next-Resume Template](https://via.placeholder.com/800x400?text=Next-Resume+Template)

## Features

- 📱 Fully responsive design
- 🎨 Clean, professional layout
- 🌙 Light/dark mode support (via next-themes)
- 🧩 Component-based architecture
- 🔧 Easily customizable
- 📊 Skill level visualization
- 📝 Detailed sections for experience, education, skills, and more
- 🚀 GitHub Pages deployment ready

## Demo

View the live demo: [https://gahoccode.github.io/Next-Resume](https://gahoccode.github.io/Next-Resume)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gahoccode/Next-Resume.git
   cd Next-Resume
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Edit the `app/page.tsx` file to update your personal information, including:
- Name and job title
- Contact details
- Skills and proficiency levels
- Work experience
- Education
- Certifications
- Achievements
- Projects

### Styling

The template uses Tailwind CSS for styling. You can customize the appearance by:

1. Modifying the `tailwind.config.js` file to change colors, fonts, etc.
2. Editing the component styles in their respective files
3. Updating global styles in `app/globals.css`

## Deployment

This template is configured for GitHub Pages deployment:

1. Update the `homepage` field in `package.json` to match your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

Alternatively, you can set up the GitHub Actions workflow for automatic deployment on push to the main branch. The workflow configuration is already included in `.github/workflows/deploy.yml`.

## Project Structure

```
Next-Resume/
├── .github/            # GitHub Actions workflows
├── app/                # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout component
│   └── page.tsx        # Main resume page
├── components/         # Reusable UI components
│   ├── theme-provider.tsx  # Theme provider for light/dark mode
│   └── ui/             # UI components from shadcn/ui
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI component collection
- [Lucide React](https://lucide.dev/) - Icon library
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## License

This project is open source and available under the [MIT License](LICENSE)

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Lucide React](https://lucide.dev/) for the icon set

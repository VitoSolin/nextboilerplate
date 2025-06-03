# Next.js Starter Template

A modern, production-ready starter template built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- ⚡ **Next.js 15** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for styling
- 📱 **Responsive Design** with modern UI components
- 🧰 **Reusable Components** with proper TypeScript interfaces
- 🎯 **Custom Hooks** for common functionality
- 📦 **Utility Functions** for common operations
- 🔧 **ESLint & Prettier** for code quality
- 🚀 **Ready for deployment** on Vercel, Netlify, etc.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd your-project-name
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   │   ├── Button.tsx    # Button component
│   │   └── index.ts      # UI exports
│   ├── Features.tsx      # Features section
│   ├── Footer.tsx        # Footer component
│   └── Hero.tsx          # Hero section
├── constants/            # App constants
│   └── index.ts          # Site config & data
├── hooks/                # Custom React hooks
│   └── useLocalStorage.ts
├── lib/                  # Utility functions
│   └── utils.ts          # Helper functions
└── types/                # TypeScript type definitions
    └── index.ts          # Common types
```

## 🎨 Customization

### Theme & Styling

1. **Colors**: Modify the color palette in `tailwind.config.ts`
2. **Fonts**: Update font configuration in `src/app/layout.tsx`
3. **Components**: Customize UI components in `src/components/ui/`

### Site Configuration

Update your site metadata in `src/constants/index.ts`:

```typescript
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your site description',
  url: 'https://yoursite.com',
  // ... other config
};
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Fonts**: [Geist](https://vercel.com/font)
- **Linting**: [ESLint](https://eslint.org/)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

This template works with any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Docker

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Happy coding!** 🎉

# ViralShorts AI

## Project Overview

ViralShorts AI is an innovative platform designed to revolutionize content creation by transforming long-form videos into engaging, viral-ready short-form content optimized for various social media platforms like TikTok, Instagram Reels, and YouTube Shorts. Leveraging advanced AI, it automates the tedious process of identifying key moments, editing, and optimizing videos, allowing creators to maximize their reach and engagement effortlessly.

This project was built using the React (Vite) framework, styled with Tailwind CSS, and incorporates a modern dark neon UI theme for an electric cybernetic feel.

## Features

*   **AI-Powered Viral Content Generation**: Automatically identifies and extracts the most engaging segments from your long videos.
*   **Lightning-Fast Editing**: Quickly transforms hours of footage into captivating shorts.
*   **Multi-Platform Export**: Optimized export presets for TikTok, Instagram Reels, YouTube Shorts, and more.
*   **Trend Forecasting**: AI-driven insights to keep your content relevant and trending.
*   **Customizable Output**: Intuitive tools for refining AI suggestions and adding personal touches.
*   **Idea Generation**: AI-powered suggestions to overcome creator's block.
*   **User Authentication**: Secure login and signup pages with social login options.
*   **Creator Dashboard**: A personalized hub to manage generations, view analytics, and access AI tools.
*   **Dedicated AI Tools**:
    *   Video Upload for AI Processing
    *   AI Subtitle Generator
    *   AI YouTube Title Generator
    *   AI Instagram Caption Generator
    *   AI Hashtag Generator
    *   AI Telegram Caption Generator
*   **Pricing Plans**: Flexible tiers from free to enterprise, with clear feature breakdowns.
*   **Testimonials & FAQ**: Sections to build trust and address common user queries.
*   **Responsive Design**: A seamless experience across desktop, tablet, and mobile devices.
*   **Interactive UI**: Subtle animations, glowing effects, and smooth transitions for an engaging user experience.

## Tech Stack

*   **Framework**: React 18+
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS
*   **Routing**: React Router DOM
*   **Icons**: Lucide React

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (v14 or higher recommended)
*   npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/viralshorts-ai.git
    cd viralshorts-ai
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

This will typically open the application in your browser at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
# or
yarn build
```

The optimized static files will be generated in the `dist` directory.

## Project Structure

```
viralshorts-ai/
├── public/                       # Static assets (e.g., logo.svg)
├── src/
│   ├── assets/                   # Future asset storage (images, videos)
│   ├── components/               # Reusable UI components (Button, Card, Navbar, Footer, Sidebar, AnimatedSection)
│   ├── context/                  # React Contexts (e.g., ThemeContext)
│   ├── lib/                      # Utility functions and mock API interactions (utils.js)
│   ├── pages/                    # Main application pages (LandingPage, AuthPage, DashboardPage, PricingPage, and AI tool pages)
│   ├── App.jsx                   # Main application component, handles routing
│   ├── index.css                 # Tailwind CSS imports and custom global styles
│   └── main.jsx                  # Entry point for React app
├── .eslintrc.cjs                 # ESLint configuration
├── .gitignore                    # Git ignore rules
├── index.html                    # Main HTML file
├── package.json                  # Project dependencies and scripts
├── postcss.config.js             # PostCSS configuration
├── README.md                     # Project documentation
├── tailwind.config.js            # Tailwind CSS configuration
└── vite.config.js                # Vite build tool configuration
```

## Styling and Design System

The project adheres to a "Electric Cybernetic Dark Neon" design system:

*   **Colors**: Deep dark backgrounds (`--bg`, `--surface`, `--surface-2`), vibrant primary (`--primary`) and accent (`--accent`) colors, subtle glows (`--primary-glow`).
*   **Typography**: `Clash Display` for headings, `Figtree` for body text.
*   **UI Elements**: Pill-shaped buttons, semi-transparent cards with glow effects on hover, sticky navigation.
*   **Animations**: Smooth 0.6s ease-out transitions, staggered fade-up animations on scroll, and subtle glowing/floating effects for key elements.

All custom CSS variables are defined in `src/index.css` and mapped in `tailwind.config.js` for consistent styling.

## Mock Authentication and Data

This project includes a mock authentication system (`src/lib/utils.js`) using `localStorage` for session persistence and simulated API calls. It also provides mock data for the dashboard analytics and recent generations to demonstrate the UI without requiring a live backend.

*   **Login Credentials (Mock)**:
    *   **Email**: `test@example.com`
    *   **Password**: `password123`

Feel free to sign up with any email/password to test the signup flow. Social login buttons are also simulated.

## Contribution

Contributions are welcome! Please feel free to open issues or submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).
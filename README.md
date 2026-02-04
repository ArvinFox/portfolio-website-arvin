# Portfolio Website - Arvin Premathilake

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Setup Instructions

### 1. Environment Configuration

Copy the `.env.example` file to `.env.local`:

```bash
cp .env.example .env.local
```

Then update `.env.local` with your personal information:

- `NEXT_PUBLIC_NAME` - Your full name
- `NEXT_PUBLIC_TITLE` - Your professional title
- `NEXT_PUBLIC_EMAIL` - Your email address
- `NEXT_PUBLIC_UNIVERSITY` - Your university name
- `NEXT_PUBLIC_DEGREE` - Your degree program
- `NEXT_PUBLIC_AFFILIATION` - University affiliation
- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL
- `NEXT_PUBLIC_TWITTER_URL` - Your Twitter/X profile URL

### 2. Add Your Assets

Place the following files in the `public/assets/` folder:

- **profile-photo.jpg** - Your profile picture (recommended: 400x400px)
- **resume.pdf** - Your resume/CV

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── portfolio/         # Portfolio-specific components
│   └── ui/                # Reusable UI components
├── public/
│   └── assets/            # Your personal assets (images, resume)
├── .env.local             # Your environment variables (not committed)
└── .env.example           # Example environment variables

```

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## License

Personal portfolio website.

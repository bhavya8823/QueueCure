# QueueCure - Clinic Queue Management System

A modern SaaS-style receptionist dashboard and clinic management platform built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## 🎯 Overview

QueueCure provides three integrated screens for efficient clinic management:

1. **Receptionist Dashboard** - Patient registration, queue management, and real-time monitoring
2. **Doctor Workspace** - Current patient details, consultation notes, and upcoming queue
3. **Waiting Room Display** - TV-optimized monitor display for waiting patients

## 📱 Three Screens

### Screen 1: Receptionist Dashboard (`/`)
- **Enhanced Header** with real-time clock, notifications, and staff profile
- **Premium Stats Cards** with icons, trends, and smooth animations showing:
  - Waiting Patients (blue)
  - Called Patients (amber)
  - Completed Patients (green)
- **Patient Registration Form** with full name, phone, age, and consultation type
- **Advanced Queue Table** with:
  - Real-time search by name, phone, or token
  - Status filtering (All, Waiting, Called, Completed)
  - Interactive action buttons (Call, Complete)
  - Color-coded status badges
- **Call Next Patient** button for bulk operations

### Screen 2: Doctor Workspace (`/doctor`)
- **Current Patient Card** - 70/30 split layout with:
  - Large animated token display (72px+)
  - Patient name, age, and consultation type
  - Action buttons (Call, Message, Complete)
  - Pulsing animation on token
- **Consultation Notes** - Rich textarea for medical notes with auto-save
- **Next Queue Display** - Shows upcoming 6 patients in priority order
- **Performance Analytics** with:
  - Average consultation time
  - Patient satisfaction rating (4.8/5.0)
  - Patients seen today counter
  - Efficiency score with animated progress bars

### Screen 3: Waiting Room Display (`/waiting-room`)
- **TV/Monitor Optimized** for large screens with:
  - Large NOW SERVING card (96px token display)
  - Room number and status indicator
  - Animated glow effects
- **Waiting Stats** showing:
  - Number waiting
  - Average wait time
  - Total served today
- **Upcoming Queue** in right sidebar with animated patient cards
- **Scrolling Announcement Ticker** for clinic messages

## 🎨 Design System

### Color Palette
- **Background:** Off-white (#F8FAFC)
- **Primary:** Soft Blue (#2563EB)
- **Foreground:** Dark Slate (#0F172A)
- **Secondary:** Light Gray (#F1F5F9)
- **Accents:** Green (success), Amber (warning), Blue (info)

### Typography
- **Headings:** Geist Sans (bold weights)
- **Body:** Geist Sans (regular/medium)
- **Icons:** Lucide React (20px, 24px sizes)

### Spacing & Layout
- **Max Width:** 1440px container
- **Grid Gaps:** 24px (desktop), responsive scaling
- **Border Radius:** 8-16px for cards, 12-20px for sections
- **Shadows:** Soft, minimal shadows (sm, md, lg)

## ✨ Key Features

### Interactivity
- ✅ Real-time search filtering
- ✅ Status-based filtering
- ✅ Patient registration with validation
- ✅ One-click "Call Next" functionality
- ✅ Individual patient actions (call/complete)
- ✅ Live clock display

### Animations
- Smooth entrance animations (Framer Motion)
- Pulsing token display in doctor workspace
- Animated progress bars in analytics
- Blinking status indicators
- Scrolling announcements
- Scale/opacity transitions on data changes

### Responsiveness
- Mobile-first design
- Tablet-optimized layouts
- Desktop (1440px) optimized
- Flexbox and Grid layouts
- Touch-friendly button sizes

## 🏗️ Project Structure

```
/vercel/share/v0-project/
├── app/
│   ├── page.tsx                 # Receptionist Dashboard
│   ├── doctor/
│   │   ├── layout.tsx
│   │   └── page.tsx            # Doctor Workspace
│   ├── waiting-room/
│   │   ├── layout.tsx
│   │   └── page.tsx            # Waiting Room Display
│   ├── layout.tsx              # Root layout with metadata
│   └── globals.css             # Theme variables & styles
├── components/
│   ├── header.tsx              # Enhanced header with clock
│   ├── navigation.tsx          # Navigation between screens
│   ├── stats-cards.tsx         # Animated stat cards
│   ├── registration-form.tsx   # Patient registration
│   ├── queue-table.tsx         # Searchable queue table
│   ├── call-next-button.tsx    # Bulk call action
│   ├── doctor/
│   │   ├── current-patient-card.tsx    # Large patient display
│   │   ├── consultation-notes.tsx      # Notes textarea
│   │   ├── next-queue.tsx              # Upcoming patients
│   │   └── performance-analytics.tsx   # Doctor metrics
│   ├── waiting-room/
│   │   ├── now-serving-card.tsx        # Large TV display
│   │   ├── upcoming-queue.tsx          # Queue in sidebar
│   │   ├── waiting-room-stats.tsx      # Queue metrics
│   │   └── announcement-ticker.tsx     # Scrolling messages
│   └── ui/
│       └── button.tsx          # shadcn button component
```

## 🚀 Getting Started

### Installation
```bash
npm install
# or
pnpm install
# or
yarn install
```

### Development
```bash
npm run dev
```

Navigate to:
- `http://localhost:3000` - Receptionist Dashboard
- `http://localhost:3000/doctor` - Doctor Workspace
- `http://localhost:3000/waiting-room` - Waiting Room Display

### Build
```bash
npm run build
npm run start
```

## 📦 Dependencies

### Core
- **next** - 16.2.6 (with Turbopack)
- **react** - 19.2.4
- **react-dom** - 19.2.4

### Styling & UI
- **tailwindcss** - v4
- **lucide-react** - Icons
- **framer-motion** - Animations

### Dev Tools
- **TypeScript** - Type safety
- **ESLint** - Code quality
- **Prettier** - Code formatting

## 🎬 Features by Screen

### Receptionist Dashboard
- Patient registration with validation
- Real-time queue display
- Search & filter patients
- Status tracking
- Quick actions (Call, Complete)
- Live statistics

### Doctor Workspace
- Current patient focus
- Consultation notes
- Queue preview
- Performance metrics
- Action buttons
- Time tracking

### Waiting Room Display
- Large, easy-to-read token display
- Upcoming queue sidebar
- Clinic statistics
- Announcement scrolling
- Waiting time display
- Room assignments

## 🔄 Data Flow

All screens share the same patient data structure:
```typescript
interface Patient {
  id: string
  token: string
  name: string
  phone: string
  age: number
  consultationType: string
  status: 'waiting' | 'called' | 'completed'
}
```

## 🎯 Improvements Made

✅ Enhanced header with live clock and notifications
✅ Premium stat cards with icons and trends
✅ Searchable queue table with advanced filtering
✅ Animated transitions and micro-interactions
✅ Doctor workspace with 70/30 split layout
✅ Performance analytics with real-time metrics
✅ TV-optimized waiting room display
✅ Framer Motion animations throughout
✅ Responsive design for all screen sizes
✅ Accessible color contrast and semantic HTML

## 📝 Notes

- All data is managed in component state (ready for backend integration)
- Animations use Framer Motion for smooth performance
- Color system uses CSS variables for easy theming
- Responsive design uses Tailwind breakpoints
- Search functionality filters in real-time
- All screens are fully interactive

Enjoy managing clinic queues with QueueCure! 🏥

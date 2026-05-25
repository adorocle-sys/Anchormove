# AnchorMove - Professional Home Services Booking App

A modern, mobile-first web application for booking professional home services in Abuja, Nigeria. Built with React, TypeScript, and Tailwind CSS.

## Features

✨ **Service Booking**
- Moving services
- Professional cleaning
- Fumigation & pest control
- Real-time quote calculation

📱 **User Features**
- User authentication (Firebase)
- Booking management
- Payment processing (Paystack)
- Live tracking of service teams
- Referral program
- 24/7 customer support

🛠️ **Admin Features**
- Dashboard analytics
- Booking management
- Driver management
- Revenue tracking

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Payment**: Paystack
- **Build Tool**: Vite
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/adorocle-sys/anchormove.git
cd anchormove
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your Firebase and Paystack credentials
```

4. Start development server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Page components
├── stores/             # Zustand state management
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Required environment variables in `.env.local`:

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_PAYSTACK_PUBLIC_KEY=your_paystack_key
```

## API Integration

The app is configured to integrate with:

- **Firebase** for authentication and data storage
- **Paystack** for payment processing
- **Google Maps API** (future: live tracking)

## Support

For support, contact:
- **Phone**: +234 707 871 7780
- **WhatsApp**: https://wa.me/2347078717780
- **Email**: support@anchormove.com

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Author

Created with ❤️ by AnchorMove Team

# TechPro Services - Full-Stack Service Business Application

A modern, full-stack web application for a service business offering computer repair, CCTV installation, and automatic gate systems. Built with React, Node.js, and PostgreSQL.

## Features

### Frontend
- 🎨 Modern, responsive design with Tailwind CSS
- 🌈 Colorful gradient themes and animations
- 📱 Mobile-first responsive design
- 🔐 User authentication (register/login)
- 📋 Service booking system
- 📊 User dashboard with booking management
- 📈 Progress tracking with percentage bars
- 💬 WhatsApp integration for bookings

### Backend
- 🚀 Express.js REST API
- 🔒 JWT authentication
- 🗄️ PostgreSQL database
- 🛡️ Password hashing with bcrypt
- 📱 WhatsApp booking integration
- 🔄 CORS enabled for cross-origin requests

### Services Offered
- 💻 Computer Services (repair, maintenance, upgrades)
- 📹 CCTV Installation (security cameras, monitoring)
- 🚪 Automatic Gate Systems (smart gates, remote control)

## Technology Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Framer Motion for animations
- React Hook Form for form handling
- React Hot Toast for notifications
- Axios for API calls
- Lucide React for icons

### Backend
- Node.js with Express
- PostgreSQL database
- JWT for authentication
- bcrypt for password hashing
- CORS for cross-origin requests
- dotenv for environment variables

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techpro-services
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` file with your database credentials and other settings.

4. **Set up PostgreSQL database**
   ```bash
   # Create database
   createdb techpro_services
   
   # The application will automatically create tables on first run
   ```

5. **Start the development servers**
   
   In one terminal (Backend):
   ```bash
   npm run dev:server
   ```
   
   In another terminal (Frontend):
   ```bash
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## Project Structure

```
├── src/                    # Frontend source code
│   ├── components/         # Reusable React components
│   ├── contexts/          # React context providers
│   ├── pages/             # Page components
│   └── main.tsx           # Application entry point
├── server/                # Backend source code
│   └── index.js           # Express server
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get user bookings

### Health Check
- `GET /api/health` - API health status

## Database Schema

### Users Table
- `id` (Primary Key)
- `name` (VARCHAR)
- `email` (VARCHAR, Unique)
- `phone` (VARCHAR)
- `password` (VARCHAR, Hashed)
- `created_at` (TIMESTAMP)

### Bookings Table
- `id` (Primary Key)
- `user_id` (Foreign Key)
- `service_type` (VARCHAR)
- `booking_date` (DATE)
- `booking_time` (TIME)
- `address` (TEXT)
- `message` (TEXT)
- `urgency` (VARCHAR)
- `status` (VARCHAR)
- `progress` (INTEGER)
- `created_at` (TIMESTAMP)

## Features in Detail

### User Authentication
- Secure registration and login system
- JWT token-based authentication
- Password hashing with bcrypt
- Protected routes for authenticated users

### Service Booking System
- Three main services: Computer, CCTV, Automatic Gates
- Date and time selection
- Address input for service location
- Urgency level selection
- Additional notes field
- WhatsApp integration for booking confirmation

### User Dashboard
- Booking history and status tracking
- Progress bars for service completion
- User profile information
- Booking statistics

### WhatsApp Integration
- Automatic WhatsApp message generation
- Formatted booking details
- Direct link to business WhatsApp
- Professional message templates

## Customization

### Colors and Theming
The application uses a modern color palette:
- Primary: Blue (#3B82F6)
- Secondary: Purple (#8B5CF6)
- Accent: Orange (#F97316)
- Success: Green (#10B981)

### WhatsApp Configuration
Update the WhatsApp number in the booking form component:
```javascript
const whatsappNumber = '1234567890'; // Replace with your business number
```

### Services Configuration
Add or modify services in the `Services.tsx` component by updating the services array.

## Deployment

### Frontend (Netlify/Vercel)
1. Build the application: `npm run build`
2. Deploy the `dist` folder to your hosting provider

### Backend (Heroku/Railway)
1. Set up environment variables
2. Deploy the backend code
3. Update the frontend API base URL

### Database
- Use managed PostgreSQL services like:
  - Heroku Postgres
  - Railway PostgreSQL
  - Supabase
  - AWS RDS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For support or questions:
- Email: info@techproservices.com
- Phone: +1 (234) 567-890
- WhatsApp: Business number configured in the app

## License

This project is licensed under the MIT License.
# Password Reset Website Setup Guide

## Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### Example:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## How to Get Supabase Credentials

1. Go to your Supabase project dashboard
2. Navigate to Settings > API
3. Copy the "Project URL" and "anon public" key
4. Paste them in your `.env.local` file

## Running the Website

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Open http://localhost:3000 in your browser

## Testing the Password Reset Flow

1. Enter an email address on the main page
2. Check your email for the reset link
3. Click the link to go to the password reset page
4. Enter and confirm your new password
5. Verify the success message

## Integration with Expo App

To integrate this with your FoodieX Expo app:

```typescript
// In your Expo app's forgot password screen
import { Linking } from "react-native";

const handleForgotPassword = () => {
  // Redirect to the password reset website
  Linking.openURL("https://your-password-reset-website.com");
};
```

Make sure your Expo app uses the same Supabase project for authentication.

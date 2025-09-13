# Champs Sports Lovers - Password Reset Website

A dedicated password reset website for the Champs Sports Lovers Expo app, built with Next.js and Supabase.

## Features

- **Email-based Password Reset**: Users can request a password reset by entering their email
- **Secure Password Update**: Users can set a new password with confirmation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Validation**: Instant feedback on form inputs and errors
- **Security Features**: Automatic session management and secure token handling
- **OAuth Callback Support**: Handles various authentication callback scenarios

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

**Example:**

```bash
NEXT_PUBLIC_SUPABASE_URL=https://yourproject.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 2. Supabase Configuration

**Critical:** You must configure your Supabase project properly for the password reset to work:

1. **Go to Authentication > URL Configuration:**

   ```
   Site URL: https://your-domain.com (or http://localhost:3000 for development)
   Redirect URLs:
   - https://your-domain.com/reset-password
   - http://localhost:3000/reset-password (for development)
   ```

2. **Update Email Template:**
   - Go to Authentication > Email Templates
   - Edit the "Reset Password" template
   - Set Action URL to: `{{ .SiteURL }}/reset-password`

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:3000`

### 5. Build for Production

```bash
npm run build
npm start
```

## How It Works

### Password Reset Flow

1. **Email Request**: User enters their email address on the main page
2. **Reset Email**: Supabase sends a password reset email with a secure link
3. **Password Update**: User clicks the email link and is taken to the reset page
4. **New Password**: User enters and confirms their new password
5. **Success**: Password is updated and user is redirected back to the main page

### Security Features

- Secure token handling through Supabase Auth
- Automatic session management
- Password strength validation (minimum 6 characters)
- Secure password confirmation
- Automatic logout after password change
- OAuth callback handling for various authentication flows

## File Structure

```
app/
├── page.tsx              # Main password reset request page
├── reset-password/
│   └── page.tsx         # Password update page (accessed via email link)
├── layout.tsx            # Root layout with metadata
└── globals.css           # Global styles
lib/
└── supabase.ts           # Supabase client configuration
```

## Integration with Expo App

To integrate this with your Expo app:

1. **Configure Supabase**: Ensure your Expo app uses the same Supabase project
2. **Update Reset Flow**: Modify your app's forgot password flow to redirect to this website
3. **Handle Return**: After successful password reset, users return to the app to log in

### Example Expo Integration

```typescript
// In your Expo app's forgot password screen
import { Linking } from "react-native";

const handleForgotPassword = () => {
  // Redirect to the password reset website
  Linking.openURL("https://your-password-reset-website.com");
};
```

## Customization

### Styling

- The website uses Tailwind CSS for styling
- Colors and branding can be customized in the component files
- Icons are custom SVG components and can be easily changed

### Branding

- Update the title, description, and contact information
- Modify the color scheme to match your brand
- Add your logo and branding elements

## Troubleshooting

If you encounter issues:

1. **OAuth Errors**: Check the [Troubleshooting Guide](./TROUBLESHOOTING.md)
2. **Environment Variables**: Ensure `.env.local` is created and server restarted
3. **Supabase Configuration**: Verify URL configuration and email templates
4. **Build Errors**: Check Node.js version and clear Next.js cache

### Common Issues

- **"OAuth state parameter missing"**: Check Supabase redirect URL configuration
- **"Missing environment variables"**: Create `.env.local` file and restart server
- **Password reset emails not received**: Check Supabase email settings and spam folder
- **Reset links not working**: Verify email template action URL configuration

## Support

For technical support or questions about this password reset website, contact:

- **Email**: support@champssports.com
- **Documentation**: Check the inline code comments for detailed explanations
- **Troubleshooting**: See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues

## Security Notes

- This website handles sensitive authentication operations
- Ensure your Supabase project has proper security policies
- Regularly update dependencies for security patches
- Monitor authentication logs for suspicious activity
- Consider implementing rate limiting for production use
- Always use HTTPS in production environments

# Copilot Instructions for Kwitter (Fritter)

## Project Overview
Kwitter (also known as Fritter) is a real-time web-based chat application that allows users to create and join chat rooms. The application uses Firebase Realtime Database for storing and synchronizing messages across users.

## Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES5)
- **Backend**: Firebase Realtime Database
- **UI Framework**: Bootstrap 3.4.0
- **Fonts**: Google Fonts (Yeon Sung)
- **Dependencies**: jQuery 3.4.1

## Project Structure
```
├── index.html          # Login/welcome page
├── kwitter.js          # Login functionality
├── kwitter_room.html   # Room selection/creation page
├── kwitter_room.js     # Room management logic
├── kwitter_page.html   # Chat interface
├── kwitter_page.js     # Chat messaging logic
├── style.css           # Application styling
└── assets/             # Images (logo.png, m2.png, tick.png, etc.)
```

## Application Flow
1. **Login** (`index.html`) - User enters username
2. **Room Selection** (`kwitter_room.html`) - User creates or selects a chat room
3. **Chat** (`kwitter_page.html`) - User sends and receives messages in real-time

## Code Conventions

### JavaScript
- Use function declarations over arrow functions (ES5 compatibility)
- Store user data in localStorage for persistence
- Global variables are acceptable for this simple application
- Firebase operations should handle real-time updates using `.on('value')`
- Use `document.getElementById()` for DOM manipulation

### HTML
- Use semantic HTML5 elements where appropriate
- Bootstrap classes for responsive design
- Inline event handlers (onclick) are used throughout the codebase
- External CDN resources for libraries

### CSS
- Custom CSS in `style.css` overrides Bootstrap styles
- Use gradient backgrounds (`linear-gradient(to right top, #FE4A49, #A882DD, #1882c1, #61e786, #172a3a)`) for modern appearance
- Responsive design with Bootstrap grid system
- CSS animations and transitions for interactive elements
- Semi-transparent overlays (`rgba(255,255,255,0.8)`) for content boxes

## Firebase Configuration
- **Database**: Firebase Realtime Database
- **Structure**: 
  - Root level: chat rooms
  - Room level: messages with name, message, and like properties
  - Special "purpose" field to identify rooms

## Key Features to Maintain
1. **Real-time messaging** - Messages appear instantly across all users
2. **Room-based chat** - Users can create and join different chat rooms
3. **Persistent login** - Username stored in localStorage
4. **Responsive design** - Works on mobile and desktop
5. **Visual branding** - Food/samosa theme with vibrant gradient background
6. **Simple UX** - Three-step flow: login → room selection → chat

## Development Guidelines

### When Adding New Features
- Maintain the existing ES5 JavaScript style
- Keep the simple, single-page application architecture
- Ensure Firebase real-time updates work properly
- Test on mobile devices due to responsive design
- Follow the existing Bootstrap 3 grid system

### Security Considerations
- Firebase configuration is publicly exposed (typical for client-side apps)
- No user authentication beyond username storage
- Input validation should be added for production use
- Consider XSS protection for user-generated content

### Performance Considerations
- Minimize Firebase database reads/writes
- Use efficient DOM manipulation
- Optimize image assets
- Consider caching for frequently accessed data

### Bug Fixes
- Check browser console for JavaScript errors
- Verify Firebase database rules and connectivity
- Test cross-browser compatibility
- Validate responsive design on different screen sizes

## Common Issues
1. **Firebase connection errors** - Check network and Firebase configuration
2. **LocalStorage issues** - Verify browser storage permissions
3. **Responsive layout problems** - Review Bootstrap grid implementation
4. **Real-time updates not working** - Check Firebase listeners and database structure

## Known Bugs
- `kwitter_room.js:34` - `localStorage("room_name", name)` should be `localStorage.setItem("room_name", name)`

## Testing Approach
- Manual testing across different browsers
- Mobile device testing for responsive design
- Firebase database monitoring for real-time updates
- LocalStorage persistence testing across sessions

## Deployment
This appears to be a static web application suitable for:
- GitHub Pages
- Firebase Hosting
- Any static file hosting service

No build process or server-side components required.
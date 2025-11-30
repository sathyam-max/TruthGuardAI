@echo off
echo Starting TruthGuardAI...

:: Start Backend in a new window
start cmd /k "cd server && node server.js"

:: Start Frontend in the current window
echo Starting Frontend...
npm run dev

# How to Push Your Code to GitHub

## Prerequisites

### 1. Install Git
Since Git is not currently installed on your system, you need to install it first:

1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings
3. Restart your terminal/command prompt after installation
4. Verify installation by running: `git --version`

### 2. Create a GitHub Account
If you don't have one already:
- Go to https://github.com/signup
- Create a free account

## Steps to Push Your Code

### Step 1: Initialize Git Repository (First Time Only)

Open your terminal in the project directory (`d:\TruthGuardAI`) and run:

```bash
git init
```

### Step 2: Configure Git (First Time Only)

Set your name and email:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Add Files to Git

Add all your project files:

```bash
git add .
```

### Step 4: Create Your First Commit

```bash
git commit -m "Initial commit: TruthGuardAI project"
```

### Step 5: Create a New Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `TruthGuardAI`
3. Description: "AI-powered fake news detector"
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click **Create repository**

### Step 6: Connect Your Local Repository to GitHub

GitHub will show you commands. Use these (replace `YOUR-USERNAME` with your actual GitHub username):

```bash
git remote add origin https://github.com/YOUR-USERNAME/TruthGuardAI.git
git branch -M main
git push -u origin main
```

### Step 7: Enter GitHub Credentials

When prompted:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)

#### How to Create a Personal Access Token:
1. Go to https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Give it a name: "TruthGuardAI Deploy"
4. Select scopes: Check **repo** (full control of private repositories)
5. Click **Generate token**
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

## Future Updates

After the initial setup, to push new changes:

```bash
git add .
git commit -m "Description of your changes"
git push
```

## Important: Protect Your API Key

Your `.env` file is already in `.gitignore`, so your `GOOGLE_API_KEY` will NOT be pushed to GitHub. This is correct and keeps your API key secure.

When deploying to Render, you'll add the API key directly in Render's environment variables (as described in `DEPLOY.md`).

## Troubleshooting

### "Git is not recognized"
- Make sure Git is installed
- Restart your terminal after installation
- Try running from Git Bash instead of PowerShell

### "Permission denied"
- Make sure you're using a Personal Access Token, not your password
- Check that the token has the correct permissions

### "Repository not found"
- Double-check the repository URL
- Make sure the repository exists on GitHub
- Verify you have access to the repository

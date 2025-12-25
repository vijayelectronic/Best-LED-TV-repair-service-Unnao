# How to Deploy on GitHub (GitHub Par Kaise Daalein)

I have prepared the code so it works AUTOMATICALLY on GitHub. (Maine code ko aisa banaya hai ki wo khud-ba-khud GitHub par chal jayega).

### Step 1: Create a Repository (Naya Repo Banayein)
1.  Go to [github.com/new](https://github.com/new)
2.  Name it anything (e.g., `led-tv-repair`).
3.  Make it **Public**.
4.  Click **Create repository**.

### Step 2: Upload Files (File Upload Karein)
1.  Open your new repository page.
2.  Click on **"uploading an existing file"** link.
3.  Upload ALL the files from the ZIP folder I gave you (Unzip it first if needed, or just drag all files/folders).
    *   **IMPORTANT**: Make sure you include the hidden `.github` folder if possible, or at least the `src`, `public`, `package.json`, `vite.config.js`, etc.
4.  Click **Commit changes**.

### Step 3: Activate Website (Website Chalu Karein)
1.  Go to **Settings** (text tab at the top of your repo).
2.  On the left menu, click **Pages**.
3.  Under **Build and deployment** > **Source**, verify it says "GitHub Actions" or select it if available.
    *   *If "GitHub Actions" is not an option*: Select **"Deploy from a branch"**.
    *   BUT... since I added a special file (`.github/workflows/deploy.yml`), GitHub should detect it automatically.
4.  Wait for 2-3 minutes.
5.  Refresh the page. You will see your website link!

**Note**: Since you want "No Dhoka Dhadi" (No cheating), this ZIP contains the **Full Source Code**. You own everything.

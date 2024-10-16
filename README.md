# WebDevFunProject

Project for the Web Development Fundamentals course at Jönköping University [TGWK12 T4216]. This is a web-based platform called **TrackTalk** where users can review songs, and admins can manage user privileges.

## How to run?

To run the project, ensure you have **Node.js** (tested with `Node v22.7.0`) installed. Follow these steps:

1. Make sure that you are now in the project directory.

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run **Tailwind CSS** to compile CSS:
   ```bash
   npx tailwindcss -i ./public/css/input.css -o ./public/css/output.css --watch
   ```

4. Start the server:
   ```bash
   node index.js
   ```

The project should now be running at `http://localhost:8080`.

---

## Admin User

There is an admin user who has special privileges to manage other users.

- **Admin Username**: `admin`
- **Admin Password**: `admin`

Admins can:
- View all users.
- Update the admin status of any user.
- Delete users from the platform.
- Edit or delete any song.

---

## What TrackTalk is Made Of?

- **Node.js & Express**: Keep everything fast and responsive.
- **Handlebars**: Ensures the pages are dynamic and easy to navigate.
- **SQLite**: Securely stores all the songs, reviews, and ratings.
- **Tailwind CSS**: Makes sure TrackTalk looks great on any device.
  


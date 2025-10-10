# Portfolio Website - Edit Guide

This guide contains all the sections you need to customize with your personal information.

## 📋 Table of Contents
1. [Metadata (SEO)](#metadata-seo)
2. [Navigation](#navigation)
3. [Hero Section](#hero-section)
4. [About Section](#about-section)
5. [Experience Section](#experience-section)
6. [Projects Section](#projects-section)
7. [Contact Section](#contact-section)
8. [Footer](#footer)

---

## Metadata (SEO)

**File:** `app/layout.tsx` (Lines 15-18)

```tsx
export const metadata: Metadata = {
  title: "Your Name - Portfolio",  // EDIT: Replace with your name
  description: "Software Engineer | Full Stack Developer - Building exceptional digital experiences",  // EDIT: Your professional tagline
};
```

**What to add:**
- Your full name for the title
- A compelling professional description (50-160 characters for SEO)

---

## Navigation

**File:** `app/page.tsx`

### Logo/Name (Lines 41-42)
```tsx
<span className="text-foreground">Your Name</span>
```
**What to add:** Your name or personal brand

### Social Media Links (Lines 58-67)
```tsx
<a href="#" ...>  // GitHub
<a href="#" ...>  // LinkedIn
<a href="#" ...>  // Email
```
**What to add:**
- GitHub URL: `https://github.com/yourusername`
- LinkedIn URL: `https://linkedin.com/in/yourusername`
- Email: `mailto:your.email@example.com`

---

## Hero Section

**File:** `app/page.tsx` (Lines 74-101)

### Greeting (Line 79)
```tsx
Hi, my name is
```
**What to add:** Customize your greeting (e.g., "Hello! I'm", "Hey there, I'm")

### Full Name (Line 84)
```tsx
<span className="text-foreground">Your Full Name</span>
```
**What to add:** Your full name in large, bold text

### Title/Role (Line 88)
```tsx
I build things for the web.
```
**What to add:** Your professional title or what you do (e.g., "I create beautiful web experiences", "Full Stack Developer", "Frontend Engineer")

### Brief Introduction (Lines 92-93)
```tsx
I'm a software engineer specializing in building exceptional digital experiences. 
Currently, I'm focused on building accessible, human-centered products.
```
**What to add:** 
- A 2-3 sentence introduction about yourself
- What you specialize in
- What you're currently working on or interested in

---

## About Section

**File:** `app/page.tsx` (Lines 105-151)

### Biography (Lines 115-123)
```tsx
<p>
  Hello! I'm [Your Name], and I enjoy creating things that live on the internet. 
  My interest in web development started back in [Year] when I decided to try 
  building my first website.
</p>
<p>
  Fast-forward to today, and I've had the privilege of working at a variety of 
  companies and building numerous projects that have helped me grow as a developer.
</p>
```
**What to add:**
- Replace `[Your Name]` with your name
- Replace `[Year]` with the year you started
- Write your personal story (how you got into development, your journey, interests)
- 2-3 paragraphs about your background

### Skills/Technologies (Line 129)
```tsx
{['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'Python', 'PostgreSQL'].map((skill) => ...
```
**What to add:**
- Replace with your actual skills/technologies
- List 6-10 technologies you're proficient in
- Update as you learn new skills

### Profile Photo (Lines 140-142)
```tsx
<div className="w-full h-full bg-foreground/5 flex items-center justify-center text-foreground/40">
  Your Photo Here
</div>
```
**What to add:**
- Replace this placeholder with an actual image component:
```tsx
<img 
  src="/your-photo.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```
- Place your photo in the `public/` folder

---

## Experience Section

**File:** `app/page.tsx` (Lines 154-202)

### Work Experiences (Lines 163-183)
```tsx
{
  company: 'Company Name 1',
  position: 'Position Title',
  period: 'Month Year - Present',
  responsibilities: [
    'Write modern, performant, maintainable code...',
    'Work with a variety of different languages...',
    'Communicate with multi-disciplinary teams...'
  ]
},
```
**What to add:**
- Replace with your actual work history
- For each job, include:
  - `company`: Company name
  - `position`: Your job title
  - `period`: Start date - End date (or "Present")
  - `responsibilities`: 3-5 bullet points of your key achievements/responsibilities

**How to add more jobs:**
- Copy the object structure and add it to the array
- Most recent job should be first

---

## Projects Section

**File:** `app/page.tsx` (Lines 205-274)

### Projects (Lines 214-238)
```tsx
{
  title: 'Project Name 1',
  description: 'A web application that does something amazing...',
  tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  github: '#',
  live: '#',
  featured: true
},
```
**What to add:**
- Replace with your actual projects
- For each project, include:
  - `title`: Project name
  - `description`: Brief description (2-3 sentences about what it does and why it's impressive)
  - `tech`: Array of technologies used
  - `github`: GitHub repository URL
  - `live`: Live demo URL (or '#' if not available)
  - `featured`: true for your best projects, false for others

### Project Images (Lines 243-245)
```tsx
<div className="aspect-video bg-foreground/5 flex items-center justify-center text-foreground/40">
  Project Screenshot
</div>
```
**What to add:**
- Replace with actual project screenshots:
```tsx
<img 
  src="/projects/project-name.jpg" 
  alt="Project Name" 
  className="w-full h-full object-cover"
/>
```
- Place project images in `public/projects/` folder

**How to add more projects:**
- Copy the object structure and add it to the array
- Best projects should be listed first

---

## Contact Section

**File:** `app/page.tsx` (Lines 277-296)

### Contact Message (Lines 285-286)
```tsx
I'm currently looking for new opportunities and my inbox is always open. Whether you have 
a question or just want to say hi, I'll try my best to get back to you!
```
**What to add:**
- Customize your contact message
- Mention if you're looking for opportunities, freelance work, or just open to connecting

### Email Link (Line 289)
```tsx
href="mailto:your.email@example.com"
```
**What to add:**
- Replace `your.email@example.com` with your actual email address

---

## Footer

**File:** `app/page.tsx` (Lines 299-304)

### Footer Text (Line 302)
```tsx
Built by Your Name © 2025
```
**What to add:**
- Replace "Your Name" with your name
- Update the year if needed

---

## 🎨 Adding Your Images

### Profile Photo
1. Add your photo to the `public/` folder (e.g., `public/profile.jpg`)
2. Update line 140-144 in `app/page.tsx`:
```tsx
<img 
  src="/profile.jpg" 
  alt="Your Name" 
  className="w-full h-full object-cover"
/>
```

### Project Screenshots
1. Create a `public/projects/` folder
2. Add project images (e.g., `public/projects/project1.jpg`)
3. Update lines 243-247 for each project:
```tsx
<img 
  src="/projects/project1.jpg" 
  alt="Project Name" 
  className="w-full h-full object-cover"
/>
```

---

## 📝 Quick Checklist

- [ ] Update metadata (title and description) in `app/layout.tsx`
- [ ] Update name/logo in navigation
- [ ] Add social media links (GitHub, LinkedIn, Email)
- [ ] Update hero section (name, title, introduction)
- [ ] Write your bio in the about section
- [ ] Add your skills/technologies
- [ ] Add your profile photo
- [ ] Add your work experiences (at least 2)
- [ ] Add your projects (at least 3)
- [ ] Add project screenshots
- [ ] Update contact message and email
- [ ] Update footer with your name

---

## 🚀 After Editing

Once you've made your edits:

1. **Test locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to preview

2. **Check responsiveness:**
   - Test on mobile view
   - Test on tablet view
   - Test on desktop view

3. **Verify all links:**
   - Social media links work
   - Project links work
   - Email link works
   - Internal navigation scrolls smoothly

4. **Optimize images:**
   - Compress images for web
   - Use appropriate formats (WebP for better performance)
   - Recommended sizes:
     - Profile photo: 600x600px
     - Project screenshots: 1200x675px (16:9 ratio)

---

## 🎨 Customization Tips

### Want to change colors?
Edit `app/globals.css` (lines 3-19):
```css
:root {
  --background: #ffffff;  /* Light mode background */
  --foreground: #171717;  /* Light mode text */
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;  /* Dark mode background */
    --foreground: #ededed;  /* Dark mode text */
  }
}
```

### Want to add more sections?
Follow the pattern of existing sections in `app/page.tsx`:
```tsx
<section id="new-section" className="min-h-screen flex items-center px-6 py-20">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4">
      <span className="text-foreground/40 font-mono text-2xl">05.</span>
      New Section Title
      <div className="flex-1 h-px bg-foreground/10"></div>
    </h2>
    {/* Your content here */}
  </div>
</section>
```

Remember to add the new section to the navigation array!

---

## 💡 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Ensure all your edits use proper syntax
3. Make sure all quotes and brackets are properly closed
4. Verify image paths are correct (starting with `/`)

Good luck with your portfolio! 🎉


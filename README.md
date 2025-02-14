# portfolio-migration-2.0

This project is a **Vue.js** migration of the original [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio), which was previously built using **HTML, CSS, and JavaScript**. The new version provides a more structured and reusable component-based architecture, improving maintainability and scalability.

## 🚀 Live Demo

🔗 **[View Portfolio](https://portfolio-migration-2-0.vercel.app/)**

## 🛠 Features

- Fully responsive and modern portfolio UI
- Component-based architecture for better code reusability
- Optimized performance with Vue's reactivity system
- Easily customizable and extendable

## Data Configuration

The portfolio data is managed in `src/data/profiledata.js`. You can modify the file to personalize your portfolio.

Example `profiledata.js` structure:

```javascript
export default {
  personalInfo: {
    name: "Somnath Kar",
    avatar: "[Your Avatar URL]",
    title: "Software Engineer",
    email: "somnathkar2023@gmail.com",
    phone: "+918509592835",
    location: "Kolkata, West Bengal, India",
    googleMapLocation: "[Google Maps Embed Link]",
  },
  services: {
    show: true,
    data: [
      {
        title: "Web design",
        details: "Professional web design.",
        image: "/assets/icon-design.svg",
      },
      {
        title: "Web development",
        details: "High-quality development.",
        image: "/assets/icon-dev.svg",
      },
      {
        title: "Mobile apps",
        details: "iOS and Android development.",
        image: "/assets/icon-app.svg",
      },
    ],
  },
  socialLinks: [
    {
      name: "Github",
      link: "https://github.com/SomnathKar000",
      icon: "logo-github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/somnath-kar-aa73aa1a3/",
      icon: "logo-linkedin",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Somnathkar000",
      icon: "logo-twitter",
    },
  ],
};
```

## 🏗️ Installation & Setup

To run this project locally, follow these steps:

1. **Clone the repository**

   ```sh
   git clone https://github.com/SomnathKar000/portfolio-migration-2.0.git
   cd portfolio-migration-2.0
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run the development server**

   ```sh
   npm run dev
   ```

4. **Build for production**
   ```sh
   npm run build
   ```

## 📝 Credits

- Original design by [CodeWithSadee](https://github.com/codewithsadee)
- Vue.js migration and enhancements by **[Somnath Kar](https://github.com/SomnathKar000)**

🚀 **Enjoy building with Vue!** 🎨

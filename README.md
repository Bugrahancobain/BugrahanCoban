# Buğrahan Çoban – Personal Portfolio Website

Let's dive into the **BugrahanCoban** project and provide a thorough, detailed explanation of the code, components, libraries, and functionality used. We'll break everything down so that it's clear and easy to understand, and we’ll also include specific code examples to ensure clarity.

### Overview

This project appears to be a **personal portfolio website** showcasing the skills and projects of **Bugrahan Coban**. It features sections such as an introduction, portfolio projects, and a resume. The website is developed using **React**, a popular JavaScript library for building user interfaces. Additional tools and libraries are used to enhance the website’s performance, responsiveness, and user experience.

### Step 1: Project Setup

#### To run this project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Bugrahancobain/BugrahanCoban.git
   ```

2. **Install dependencies**:
   Run the following command to install all the required libraries:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   This command will start the local development server, and the website will be viewable at `http://localhost:3000`.

---

### Step 2: Technologies and Libraries Used

1. **React**: A JavaScript library for building reusable UI components, React is the backbone of this project. It allows the website to dynamically render content, making the user interface fast and interactive.

2. **React Router**: React Router is used for managing navigation between different pages of the portfolio, such as Home, About, Portfolio, and Contact. It enables smooth and fast routing within the single-page application (SPA) without page reloads.

3. **CSS Modules**: This project uses CSS Modules for styling components. CSS Modules ensure that each component's styles are scoped locally, preventing style conflicts and ensuring that styles only apply to their respective components.

4. **Framer Motion**: This is a library for adding animations and transitions to React components. In this project, it's used to create smooth animations when transitioning between sections, adding a dynamic feel to the portfolio.

5. **Font Awesome**: This library provides a wide range of icons used throughout the portfolio to represent different social media links, tools, and technologies.

6. **Firebase**: Firebase is used to handle the contact form submissions. When a visitor submits a message through the contact form, the data is stored in Firebase's backend, and the portfolio owner can access these messages.

---

### Step 3: Project Structure and Detailed Code Explanation

#### **1. `App.js`**

The `App.js` file controls the structure of the entire website, setting up routes and rendering the different pages (Home, Portfolio, Contact, etc.).

```jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
```

**Explanation**:
- **Router**: The `Router` component from React Router is used to manage different pages of the portfolio. It allows navigation without page reloads.
- **Switch and Route**: `Switch` renders the first child `Route` that matches the URL path. The `Route` component tells React which component to render based on the URL.
    - `/` renders the `Home` component.
    - `/portfolio` renders the `Portfolio` component.
    - `/contact` renders the `Contact` component.

#### **2. `Home.js`**

This file is responsible for the homepage of the portfolio, where the personal introduction and hero section are located. It includes a personal description, links to social media, and a navigation bar.

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Bugrahan Coban</h1>
        <p>Full Stack Developer</p>
      </header>
      <nav>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Home;
```

**Explanation**:
- **Header**: Displays the portfolio owner's name and profession.
- **Links**: Navigation links (`<Link>`) direct users to the Portfolio and Contact pages without reloading the entire page.

---

#### **3. `Portfolio.js`**

This component displays a gallery or list of projects. Each project includes a name, description, and a link to the live demo or GitHub repository.

```jsx
import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    name: 'Project A',
    description: 'A cool project that does X, Y, and Z',
    url: 'https://github.com/Bugrahancobain/project-a',
  },
  {
    id: 2,
    name: 'Project B',
    description: 'A web app to manage tasks and events.',
    url: 'https://github.com/Bugrahancobain/project-b',
  },
  // Add more projects as needed
];

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
```

**Explanation**:
- **Project Data**: The `projects` array stores details about each project, including its name, description, and link to the repository.
  
- **Rendering Projects**: The `map()` function iterates over the `projects` array and renders each project as a card, displaying its name, description, and a link to the project.
  
- **Link to GitHub**: Each project card contains an `<a>` element that links to the corresponding GitHub repository, allowing users to view the code or live demo.

---

#### **4. `Contact.js`**

This page contains a contact form where visitors can submit messages to the portfolio owner. The data is sent and stored using **Firebase**.

```jsx
import React, { useState } from 'react';
import { db } from '../firebase';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await db.collection('contacts').add({
      name: name,
      email: email,
      message: message,
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
```

**Explanation**:
- **State Management**: The `useState()` hook is used to manage form input fields (`name`, `email`, and `message`). It keeps track of the current values entered by the user.
  
- **Firebase Integration**: When the form is submitted, the `handleSubmit()` function is triggered. It prevents the default form behavior (`e.preventDefault()`) and stores the form data in the Firebase `contacts` collection using the `db.collection('contacts').add()` method.
  
- **Form Reset**: After successfully submitting the data, the form fields are reset to empty using the `setName()`, `setEmail()`, and `setMessage()` functions.

---

#### **5. Firebase Configuration (`firebase.js`)**

This file initializes Firebase for the project and provides access to Firestore, which is used to store the data submitted via the contact form.

```javascript
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };
```

**Explanation**:
- **Firebase Initialization**: The `firebase.initializeApp()` function initializes Firebase using the provided

 configuration object (`firebaseConfig`), which contains the project's API key, authentication domain, project ID, and other details.
  
- **Firestore Access**: The `db` object is exported, allowing other files to interact with the Firestore database. In this project, it's used in the `Contact.js` file to store user messages.

---

### Conclusion

This portfolio website project leverages modern front-end technologies like **React**, **React Router**, **CSS Modules**, and **Firebase** to create an interactive, fast-loading portfolio. It features a clean user interface with animated transitions, making it visually appealing. Firebase adds functionality for storing contact form submissions, allowing the portfolio owner to manage messages from visitors effectively.

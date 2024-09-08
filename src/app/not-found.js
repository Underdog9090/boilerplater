// export default function NotFound() {
//     //Fetch the 404 page from storyblok (this component works as server component aswell)
//     //update this component to render a 404 page
//     return <h1>404 notfound</h1>
// }

// pages/404.js

"use client";   
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    async function fetch404Content() {
      try {
        // Fetch your 404 content if available
        const response = await fetch('/api/storyblok-404'); // Adjust this to your fetch logic
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Error fetching 404 content:', error);
      }
    }

    fetch404Content();
  }, []);

  return (
    <div className="not-found-container" style={styles.container}>
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      ) : (
        <>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you are looking for does not exist.</p>

          {/* Updated Link Components */}
          <div style={styles.nav}>
            <Link href="/" style={styles.link}>Go back to Home</Link>
            <Link href="/contact" style={styles.link}>Contact Us</Link>
          </div>

          <img
            src="/images/404-illustration.png"
            alt="Page not found"
            style={styles.image}
          />

          <div style={styles.search}>
            <input
              type="text"
              placeholder="Search for something else..."
              style={styles.searchInput}
            />
            <button style={styles.searchButton}>Search</button>
          </div>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    color: '#333',
  },
  nav: {
    margin: '20px 0',
  },
  link: {
    margin: '0 10px',
    color: '#0070f3',
    textDecoration: 'underline',
  },
  image: {
    maxWidth: '300px',
    margin: '20px auto',
    display: 'block',
  },
  search: {
    marginTop: '20px',
  },
  searchInput: {
    padding: '10px',
    width: '60%',
    maxWidth: '300px',
  },
  searchButton: {
    padding: '10px 20px',
    marginLeft: '10px',
  },
};

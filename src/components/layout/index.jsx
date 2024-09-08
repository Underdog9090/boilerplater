import { text } from "express";

//Uses config set global components for the layout
export default function Layout({ config, children }) {
  console.log("Layout config", config);
  //Create at least a header and footer component
  //Use console.log to determine blok object structure if unsure...
  //

  return (
    <>
      <header>
        <img src={config?.content?.logotype?.filename} alt="logo" />
        <nav>
          {config?.content?.nav?.map((item) => {
            return (
              <a href={item} key={item}>
                {item.title}
              </a>
            );
          })}
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        {config?.content?.foot?.map((item) => {
          return (
            <div key={item._uid}>
              {/* Display Text */}
              <p>{item.text}</p>

              {/* Display Title */}
              {item.Title?.content?.map((titleItem, index) => (
                <div key={index}>
                  {titleItem.content.map((paragraph, i) => (
                    <p key={i}>{paragraph.text}</p>
                  ))}
                </div>
              ))}

              {/* Display Image */}
              {item.image && (
                <img
                  src={item.image.filename}
                  alt={item.image.alt || "Image"}
                  style={{ maxWidth: "200px", height: "auto" }} // Add styles as needed
                />
              )}
            </div>
          );
        })}
      </footer>
    </>
  );
}

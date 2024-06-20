# React Revision

- Project Setup and First Program Guide

- Set up all the tools in your laptop

  - VS Code
  - Chrome
  - Extensions of Chrome

- Build your first Hello World program
  - Using just HTML
  - Using JS to manipulate the DOM
  - Using React
    - Use CDN Links
    - Create an Element
    - Create nested React Elements
    - Use root.render

# Theory

- What is Emmet?

  - `Emmet` is a plug in for many popular text editors which greatly improves HTML & CSS workflow:”
  - And Emmet does fulfill what they promise, you can use short expressions to generate HTML markup, CSS.
  - Just type ‘!` in the VS Code, it will show a pop up with the content that will be generated, press enter and there you have your HTML skeleton .

- Difference between a Library and Framework?

  - https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/
  - Both `frameworks` and `libraries` are code written by someone else that is used to help solve common problems.
  - Suppose, you have a house and you need some furnitures. Instead of building them from sractch, you went to Ikea and bought them. Ikea here is similar to a library. But in the case of framework, you want to build a house. The cotractor and the designer have the bluprint. You just need to follow the bluprint to build the house.
  - A library allows developers to call functions as needed, giving them control over the application flow. In contrast, a framework dictates the structure and flow of the application, calling the developer's code at specific points. This inversion of control is the main difference: `libraries` offer flexibility, while `frameworks` provide a predefined structure.

- What is CDN? Why do we use it?

  - https://aws.amazon.com/what-is/cdn/

  - A `content delivery network (CDN)` is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.
  - A `content delivery network (CDN)` optimizes website performance by caching content on geographically distributed servers closer to end-users. This reduces latency and improves loading speeds, enhancing overall user experience. CDNs are crucial for high-speed content delivery, enabling companies like Reuters to distribute news rapidly worldwide using services such as Amazon CloudFront and Amazon S3. They also facilitate real-time streaming by efficiently delivering rich media files, as seen with Hulu's use of CDNs to stream large volumes of data to their global audience. Moreover, CDNs support scalability by handling concurrent user demands effectively, as demonstrated by King's use in delivering gaming content across platforms to millions of players. Overall, CDNs play a vital role in ensuring reliable, fast, and scalable content delivery for diverse online applications.

- Why is React known as React?

  - React is known as `"React"` because it emphasizes the concept of building user interfaces that dynamically and efficiently react to changes in data.

- What is crossorigin in script tag?

  - The crossorigin attribute in the `<script>` tag is used to handle the way browsers deal with cross-origin requests for script resources. It is particularly relevant when you are loading scripts from a different origin (domain, protocol, or port) than the one your page is being served from.
  - crossorigin=`"anonymous"`: The script is fetched without sending credentials, which is suitable for public scripts that don't require authentication.
  - crossorigin=`"use-credentials"` : The script is fetched with credentials, cookies, and a certificate, which is appropriate when the script requires authentication or the server needs to identify the user making the request.

- What is diference between React and ReactDOM?

  - React is a JavaScript library for building user interfaces, focusing on the view layer and allowing developers to create reusable components, manage state, and handle rendering logic. ReactDOM is a separate package that provides methods for rendering React components to the DOM and managing DOM updates.

- What is difference between react.development.js and react.production.js files via CDN?

  - The `react.development.js` file is larger and slower due to additional debugging information, warnings, and error messages, making it ideal for development. In contrast, `react.production.js` is smaller, faster, optimized for performance, and strips out debugging aids, making it suitable for production.

- What is async and defer?
  - In HTML, async and defer are boolean attributes that control how JavaScript script files are loaded and executed. Both attributes allow the browser to continue parsing HTML while the script downloads in the background. The main difference between the two is when the script executes:
    - `Async`: Executes the script as soon as it's available, regardless of whether HTML parsing is complete. Scripts with async may execute out of order, but this can be useful when you want to maximize parallel downloading and rendering speed.
    - `Defer`: Executes the script after HTML parsing is complete, ensuring that scripts run in order and after the document has been parsed. Defer is a safer option for scripts that need to manipulate the DOM.

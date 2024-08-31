import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Youtube Clone Video Search App",
    description:
      "Developed a video search app resembling YouTube using React and Redux. Integrated YouTube Data API for fetching video data and implemented infinite scrolling for seamless user experience. The app includes features like video playback, search functionality, and dynamic video suggestions.",
    tools: ["React", "Redux", "YouTube Data API", "CSS", "Axios"],
    role: "Frontend Developer",
    code: "",
    demo: "https://pksatyam777.github.io/React-Youtube-App/",
    image: ayla,
  },
  {
    id: 2,
    name: "Image Searching App Powered by Unsplash API",
    description:
      "Built an image search application utilizing the Unsplash API to fetch high-quality images. The app includes features like searching, filtering, and displaying images in a grid format. It was developed using React and Styled Components for a responsive design.",
    tools: ["React", "Unsplash API", "Styled Components", "Axios", "CSS"],
    role: "Frontend Developer",
    code: "",
    demo: "https://pksatyam777.github.io/React-Image-Search/",
    image: travel,
  },
  {
    id: 3,
    name: "Movie Searching IMDB Clone Using Next.js",
    description:
      "Created a movie searching web application similar to IMDb using Next.js. Implemented server-side rendering for better SEO and performance. Integrated with the TMDb API to fetch movie details, ratings, and trailers. The application supports advanced search functionality and dynamic routing for different movie pages.",
    tools: ["Next.js", "TMDb API", "CSS Modules", "React", "Tailwind CSS"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://imdb-movie-app.vercel.app/",
    image: realEstate,
  },
  {
    id: 4,
    name: "Portfolio Website Using Next.js",
    description:
      "Designed and developed a personal portfolio website using Next.js to showcase my projects and skills. The website includes interactive elements, animations, and a contact form. It was built with a focus on SEO optimization and fast loading times, utilizing server-side rendering and static generation.",
    tools: [
      "Next.js",
      "Framer Motion",
      "Styled Components",
      "Formspree",
      "Tailwind CSS",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://satyam.zenwriteup.com",
    image: crefin,
  },
  {
    id: 5,
    name: "Google Search Engine Clone App",
    description:
      "Developed a search engine clone resembling Google's interface and functionality using React and the Google Custom Search API. Implemented features such as pagination, search suggestions, and the ability to filter search results by images, news, and videos.",
    tools: [
      "React",
      "Google Custom Search API",
      "CSS",
      "Redux",
      "Tailwind css",
    ],
    role: "Frontend Developer",
    code: "",
    demo: "https://google-clone-next-delta.vercel.app/",
    image: ayla,
  },
];

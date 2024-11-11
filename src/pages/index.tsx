import { Link } from "gatsby";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Helmet>
        <title>Nevin Raju | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Nevin Raju, Software Engineer skilled in MERN stack and Shopify app development based in Kochi, Kerala."
        />
        <meta
          name="keywords"
          content="Nevin Raju, MERN stack, Shopify, software engineer, Helixo, Kochi, Kerala"
        />
        <meta name="author" content="Nevin Raju" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
                <script type="text/javascript">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "opscxmemc8");
          `}
        </script type="text/javascript">
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJJ76XHN');
</script>
      </Helmet>

      <div className={darkMode ? "dark" : ""}>
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col justify-between font-sans">
          <header className="flex justify-end items-center p-4">
            <button
              className="bg-white text-black py-2 px-4 rounded border border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition"
              onClick={toggleDarkMode}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </header>

          <div className="flex-grow flex flex-col justify-center items-center">
            <header className="text-center mb-12">
              <h1 className="text-6xl font-bold mb-4">Nevin Raju</h1>
              <p className="text-xl mb-8">
                Software Engineer | MERN Stack & Shopify App Development
              </p>
            </header>

            {/* About Section */}
            <section className="text-left mb-12 max-w-7xl px-6">
              <h2 className="text-4xl font-bold mb-4 border-b border-black dark:border-white pb-2">
                About Me
              </h2>
              <p className="text-lg mb-4">
                Hi, I'm Nevin Raju, a software engineer based in Kochi, Kerala.
                I specialize in the MERN stack (MongoDB, Express, React,
                Node.js) and Shopify app development. My passion lies in
                creating dynamic and responsive web applications that deliver
                exceptional user experiences.
              </p>
              <p className="text-lg mb-4">
                I am a self-taught developer, constantly exploring new
                technologies and frameworks. My journey in tech started in high
                school, where I fell in love with coding and problem-solving.
                Over the years, I’ve honed my skills in various programming
                languages, including TypeScript, Python, and C++, alongside my
                primary focus on JavaScript frameworks.
              </p>
              <p className="text-lg mb-4">
                Currently, I work at Helixo, where I contribute to building
                Shopify apps that enhance merchants' capabilities. My experience
                includes developing features, debugging issues, and
                collaborating with cross-functional teams to deliver
                high-quality products. Before Helixo, I gained valuable
                experience at Ecloto Design, working on several Shopify projects
                and learning the intricacies of the Shopify ecosystem.
              </p>
              <p className="text-lg mb-4">
                Outside of work, I enjoy music, coding competitions, and
                contributing to open-source projects. I'm always eager to learn
                and collaborate with others in the tech community. Let's connect
                and explore how we can innovate together!
              </p>
              <div className="border-b border-gray-300 my-8"></div>
            </section>

            {/* Experience Section */}
            <section className="text-left mb-12 max-w-7xl px-6">
              <h2 className="text-4xl font-bold mb-4 border-b border-black dark:border-white pb-2">
                Experience
              </h2>
              <div className="flex flex-wrap justify-start">
                <div className="w-full md:w-1/2 mb-4 pr-4">
                  <strong>Helixo</strong> – Software Engineer <br />
                  I work on developing Shopify applications that help merchants
                  enhance their online stores. My responsibilities include:
                  <div className="text-left mt-2">
                    <p>
                      • Collaborating with designers and product managers to
                      implement new features.
                    </p>
                    <p>
                      • Writing clean, maintainable code and conducting code
                      reviews.
                    </p>
                    <p>
                      • Troubleshooting and resolving technical issues in a
                      timely manner.
                    </p>
                    <p>
                      • Integrating third-party services and APIs to extend
                      application functionality.
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 mb-4 pl-4">
                  <strong>Ecloto Design</strong> – Junior Developer <br />
                  My role focused on Shopify app development, where I gained
                  experience in:
                  <div className="text-left mt-2">
                    <p>
                      • Building custom Shopify apps to meet client
                      specifications.
                    </p>
                    <p>
                      • Working with APIs and understanding the Shopify platform
                      deeply.
                    </p>
                    <p>
                      • Participating in team meetings to brainstorm ideas and
                      improve processes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-b border-gray-300 my-8"></div>
            </section>

            {/* Contact Section */}
            <section className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contact</h2>
              <div className="flex justify-center space-x-4">
                <Link to="/contact">
                  <button className="bg-white text-black py-2 px-6 rounded border border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition">
                    Contact Me
                  </button>
                </Link>
                <a
                  href="https://github.com/yourgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black py-2 px-6 rounded border border-black dark:border-white hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black transition">
                    GitHub
                  </button>
                </a>
                <a
                  href="https://www.linkedin.com/in/nevinraju/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black py-2 px-6 rounded border border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition">
                    LinkedIn
                  </button>
                </a>
              </div>
            </section>
          </div>

          <footer className="text-center py-4">
            <p>© {new Date().getFullYear()} Nevin Raju</p>
          </footer>
        </div>
      </div>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KJJ76XHN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    </>
  );
};

export default IndexPage;

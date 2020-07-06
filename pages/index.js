import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Alec Jones</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hey, I'm Alec
        </h1>

        <p className="description">
          I'm an 18-year-old developer from Canada 🇨🇦
        </p>

        <div className="grid">
          <a 
          href="https://docs.google.com/document/d/1PS8lz4iI_us1TH5W-p65d556H6uoKCHYvYqwkzciGfY/edit?usp=sharing" 
          className="card"
          target="_blank" 
          rel="noopener noreferrer"
          >
            <h3>My Experience &rarr;</h3>
            <p>See the professional experience I have as a developer</p>
          </a>

          <a 
            href="https://github.com/alecj1240" 
            className="card" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>My Github &rarr;</h3>
            <p>Check out all of the coding projects I do in my own time</p>
          </a>

          <a
            href="https://medium.com/@koolkoder"
            className="card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>My Blog &rarr;</h3>
            <p>Sometimes, I like to write. See what I've written about development</p>
          </a>

          <a
            href="https://twitter.com/AlecOfJones"
            className="card"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h3>My Twitter &rarr;</h3>
            <p>
              My favourite social media; feel free to reach out to me!
            </p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

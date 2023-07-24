import React from 'react';
import IMG1 from '../../assets/bookstore.png';
import IMG2 from '../../assets/todo.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/fake.png';
import IMG5 from '../../assets/news.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Let's Construct",
      img: IMG1,
      description:
        'This allows user to purchase their property according to their budget and different locations',
      technologies: 'HTML| CSS| JAVASCRIPT',
      link: 'https://amishak29.github.io/Let-sConstruct/',
      github: 'https://github.com/Amishak29/Let-sConstruct',
    },
    {
      id: 2,
      title: 'Store',
      img: IMG4,
      description:
        'Store app that provides information about available products and their details',
      technologies: 'React.js | Next.js',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Amishak29/Store',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG2,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | Webpack',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      
      github: 'https://github.com/Amishak29/expenseTracker',  //https://github.com/Meri-MG/To-Do-List
    },
    {
      id: 4,
      title: 'Medicare',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on hospital management',
      technologies: 'JavaScript | CSS',
      link: ' https://leranathon.netlify.app/',
      github: 'https://github.com/Amishak29/Medicare',
    },
    {
      id: 5,
      title: 'Networking Project',
      img: IMG5,
      description:
        'Fully customised project on DNS, mail server, Linux',
      technologies: 'Linux | Webmin',
      link: 'https://docs.google.com/document/d/14hf0iS3C44tBYEvVj7cndfDWOAVrr7MA/edit?usp=sharing&ouid=113240068050511708669&rtpof=true&sd=true',
      
    },
    {
      id: 6,
      title: 'Nirman Hustlers',
      img: IMG6,
      description:
        'Real-world group project which is build to conduct various events in college society',
      technologies: 'JavaScript | Scss',
      link: 'https://amishak29.github.io/Nirman_Hustlers/',
      github: 'https://github.com/Amishak29/Nirman_Hustlers',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

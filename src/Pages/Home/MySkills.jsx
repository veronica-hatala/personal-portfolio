import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="section portfolio-section" id="mySkills">
      <h2 className="section-heading portfolio-heading">Featured Projects</h2>
      <div className="portfolio-subheading">Volunteer Projects</div>
      <div className="portfolio-container">
        {data?.volunteer?.map((item, index) => (
          <div key={index} className="portfolio-card">
          <div className="portfolio-img">
            <img src={item.src} alt="Placeholder" />
          </div>
          <div className="portfolio-card-content">
            <div>
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <a className="portfolio-card-link" href={item.link}>
              {item.displaylink}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        ))}
      </div>
      <div className="portfolio-subheading">Personal Projects</div>
      <div className="portfolio-container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="portfolio-card">
          <div className="portfolio-img">
            <img src={item.src} alt="Placeholder" />
          </div>
          <div className="portfolio-card-content">
            <div>
              <h3 className="portfolio-card-title">{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <a className="portfolio-card-link" href={item.link}>
              {item.displaylink}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        ))}
      </div>
    </section>
  );
}
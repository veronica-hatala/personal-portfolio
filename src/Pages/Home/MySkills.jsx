import data from "../../data/index.json";
import { FaExternalLinkAlt } from "react-icons/fa";

function PortfolioSection({ title, items }) {
  return (
    <>
      <div className="portfolio-subheading">{title}</div>
      <div className="portfolio-container">
        {items?.map((item, index) => (
          <a key={index} className="portfolio-card"  href={item.link}>
            <div className="portfolio-img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio-card-content">
              <div>
                <h3 className="portfolio-card-title">{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="portfolio-card-link">
                {item.displaylink}
                <FaExternalLinkAlt />
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default function MySkills() {
  return (
    <section className="section portfolio-section" id="mySkills">
      <h2 className="section-heading portfolio-heading">Featured Projects</h2>
      <PortfolioSection title="Volunteer Projects" items={data?.volunteer} />
      <PortfolioSection title="Personal Projects" items={data?.projects} />
    </section>
  );
}

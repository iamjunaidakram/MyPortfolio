import "./style.scss";

import AIScribeImg from "../../assets/img/projects/AIScribe.webp";
import AIScribeLogo from "../../assets/img/projects/CureMD-Logo.png";
import GlamhieveImg from "../../assets/img/projects/glamhive.png";
import GlamhieveLogo from "../../assets/img/projects/glamhiveLogo.png";
import MintRouteImg from "../../assets/img/projects/mintRoute.png";
import MintRouteLogo from "../../assets/img/projects/mintroute-logo.png";
import InvochatImg from "../../assets/img/projects/InvoChat.png";
import InvochatLogo from "../../assets/img/projects/InvoChat-Logo.svg";

const projects = [
  {
    name: "AI Scribe",
    text: "AI Medical Scribe saving physicians hours with effortless and accurate documentation using CureMD’s AI Medical Scribe.",
    img: AIScribeImg,
    logo: AIScribeLogo,
    tools: ["Angular", "SCSS", "TypeScript"],
    Link: "https://www.curemd.com/ai-medical-scribe",
  },
  {
    name: "Glamhive",
    text: "Glamhive is the shopify MERN app that works with expert stylists.",
    img: GlamhieveImg,
    logo: GlamhieveLogo,
    tools: ["Shopify", "Liquid", "Node.js"],
    Link: "https://glamhive.com",
  },
  {
    name: "Invochat",
    text: "Open-source internal chat system with integrations.",
    img: InvochatImg,
    logo: InvochatLogo,
    tools: ["React", "Next.js"],
    Link: "#",
  },
  {
    name: "Mint Route",
    text: "Global digital distribution platform for gift cards.",
    img: MintRouteImg,
    logo: MintRouteLogo,
    tools: ["React", "SCSS"],
    Link: "https://mintroute.com",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="featured-projects" id="projects">
      <div className="wrapper">
        <div className="title">
          Featured <br />
          <span className="italic">Web Design Projects</span>
        </div>

        {projects.map((project, i) => (
          <section
            className="luxury-hero sticky-section"
            key={i}
            style={{ top: `${i * 80}px` }} // stacking offset
          >
            <div className="luxury-hero__container">
              <div className="luxury-hero__visual">
                <div className="luxury-hero__glow"></div>

                <a
                  className="luxury-hero__title"
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="luxury-hero__frame">
                    <img src={project.img} alt={project.name} />
                  </div>
                </a>
              </div>

              <div className="luxury-hero__content">
                <a
                  className="luxury-hero__title"
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>

                <div className="luxury-hero__para">{project.text}</div>

                <div className="luxury-hero__logo-wrap">
                  <div className="luxury-hero__logo">
                    <img src={project.logo} alt={project.name} />
                  </div>
                </div>

                <div className="luxury-hero__tags">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="luxury-hero__tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
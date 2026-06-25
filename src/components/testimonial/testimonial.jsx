import "./style.scss";
import Profile1 from "../../assets/profiles/profile1.jfif";
import Profile2 from "../../assets/profiles/profile2.jfif";
import Profile3 from "../../assets/profiles/profile3.jfif";
import Profile4 from "../../assets/profiles/profile4.jfif";
import Profile5 from "../../assets/profiles/profile5.jfif";
import Profile6 from "../../assets/profiles/profile6.jfif";

const testimonials = [
  {
    name: "Amir Naeem",
    role: "Principle Frontend Engineer - CureMD",
    text: "I've had the pleasure of working with Junaid Akram as part of our front-end team, and he's been a reliable and enthusiastic contributor from day one. Junaid is quick to learn, asks the right questions, and consistently delivers clean, thoughtful code. He’s also a team player who’s always willing to help others and take feedback positively. I'm confident he’ll continue to grow and bring value wherever he works.",
    img: Profile4,
  },
  {
    name: "Khadija Mehtab",
    role: "Project Manager - InvoZone",
    text: "My experience working with Junaid Akram has been exceptionally positive. His strong work ethic, attention to detail, and ability to meet deadlines have consistently impressed me. Junaid not only delivers high-quality work but also actively contributes to a positive team dynamic, making our collaboration both enjoyable and productive. I wholeheartedly endorse him for any future endeavors.",
    img: Profile2,
  },
  {
    name: "Saniya Jameel",
    role: "Senior Software Engineer - InvoZone",
    text: "Having worked with Junaid for a year, I must say he is an excellent professional. He is a quick learner and passionate about his job. I am impressed by his work ethic and communication skills. Plus, he easily adjusts to any given situation. But what makes him stand out is his willingness to help others. I am glad to have worked with him and have no hesitation recommending him to potential employers.",
    img: Profile1,
  },
  {
    name: "Muhammad Talha",
    role: "Senior Software Engineer - CureMD",
    text: "Junaid is a very passionate engineer. I worked with him on multiple projects; his frontend skills are out of the box and he always looks passionate to provide solutions. I strongly recommend him as a frontend engineer.",
    img: Profile3,
  },
  {
    name: "Nabila Iqbal",
    role: "Senior SQA Engineer - InvoZone",
    text: "I highly recommend @junaid Akram as a software engineer. Their technical expertise, problem-solving skills, and strong work ethic make them an exceptional asset to any software development team. Junaid Akram consistently delivers high-quality results and demonstrates a passion for continuous learning and improvement. Very hardworking and very dedicated.",
    img: Profile6,
  },
  {
    name: "Ahsan Sohail",
    role: "Frontend Engineer - CureMD",
    text: "Junaid is one of those rare frontend developers who perfectly balances pixel-perfect UI with rock-solid architecture. I’ve seen him tackle complex state management and performance issues that would leave most devs scratching their heads. His recent promotion to Senior Developer is a testament to his ability to not just write code, but to design scalable systems that the whole team can build upon. Any team would be lucky to have his technical oversight.",
    img: Profile5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="wrapper">
        <div className="title" data-bg-watermark="WHAT THEY SAY">
          What Clients Say About{" "}
          <span className="italic">Working</span> With Me
        </div>

        <div className="testimonials-list">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`testimonial-card testimonial-float-${index + 1}`}
            >
              <blockquote className="blockquote">“{t.text}”</blockquote>

              <div className="client-info">
                <div className="client-img">
                  <img src={t.img} alt={t.name} />
                </div>

                <div className="client-details">
                  <span className="client-name">{t.name}</span>
                  <span className="client-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-pattern">
        <div className="pattern-shape pattern-shape-gray"></div>
        <div className="pattern-shape pattern-shape-pink"></div>
        <div className="pattern-shape pattern-shape-blue"></div>
        <div className="pattern-shape pattern-shape-white"></div>
      </div>
    </section>
  );
}
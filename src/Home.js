import styles from "./css/home.module.css";
import HeroSlide from "./Heroslide_typeA";

const heroDataSample = [
  {
    id: 1,
    title: "Dialogue Boost: How Amazon is using AI to enhance TV and movie dialogue",
    desc: "New audio-processing technology is making entertainment more accessible for millions of viewers.",
    image: "/images/slide1.jpg", // 이미지 경로
    link: "/post/1" // 'Read more' 버튼 누르면 갈 주소
  },
  {
    id: 2,
    title: "The overthinking problem in AI",
    desc: "Reasoning models can generate seven to 10 times as many tokens as necessary on simple tasks, creating unsustainable costs at scale. Amazon's vision for metacognitive AI could fundamentally shift how models allocate computational resources.",
    image: "/images/slide2.jpg",
    link: "/post/2"
  },
  {
    id: 3,
    title: "Nova Forge: Build your own frontier AI",
    desc: "AGI SVP Rohit Prasad on how to mix your data with Amazon's training data at every stage — deep customization without catastrophic forgetting.",
    image: "/images/slide3.jpg",
    link: "/post/3"
  },
  {
    id: 4,
    title: "Demystifying AI agents",
    desc: "How agentic systems work under the hood — and how AWS’s new AgentCore framework implements their essential components.",
    image: "/images/slide3.jpg",
    link: "/post/3"
  },
  {
    id: 5,
    title: "How Amazon uses AI agents to anticipate and counter cyber threats",
    desc: "Competitive-agent architecture develops security protections at machine speed, reducing weeks of work to hours.",
    image: "/images/slide3.jpg",
    link: "/post/3"
  },
];

function Home() {
  return (
    <div className={styles.top_container}>
      <div className={styles.header_area}></div>
      <HeroSlide data={heroDataSample}/>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.section1_area}></div>
      <div className={styles.section2_area}></div>
      <div className={styles.footer_area}></div>
    </div>
  );
}

export default Home;
import { BiSolidCustomize } from "react-icons/bi";
import { GrHostMaintenance } from "react-icons/gr";
import { FaWordpress } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMobileButton } from "react-icons/fa6";
import innovate from "/public/assets/services/innovation.jpg";
import scalable from "/public/assets/services/scalable.jpg";
import pricing from "/public/assets/services/pricing.jpg";

interface Service {
  id: number;
  title: string;
  logo: React.ComponentType;
  desc: string;
}

interface WorkType {
  id: number;
  img: any;
  title: string;
  description: string;
}

interface FAQ {
  id: number;
  ques: string;
  ans: string;
}

interface webdevServicesData {
  headline: string;
  paragraph: string;
  Services: Service[];
  workType: WorkType[];
  faq: FAQ[];
}
const webdevServicesData: webdevServicesData = {
  headline: "WEB DEVELOPMENT",
  paragraph:
    "In our services, we're not just another web development company; we're digital innovation pioneers. Our mission is to revolutionize online experiences for businesses. Through cutting-edge technologies and creative design, we craft bespoke, user-centric websites and applications. These solutions empower businesses to command online presence, engage customers, and seize digital opportunities.",

  Services: [
    {
      id: 1,
      title: "Custom Web Development",
      logo: BiSolidCustomize,
      desc: "Tailored software solutions designed to meet your unique business requirements.",
    },
    {
      id: 2,
      title: "Website Maintenance",
      logo: GrHostMaintenance,
      desc: "Streamline operations with personalized enterprise applications for enhanced efficiency.",
    },
    {
      id: 3,
      logo: FaMobileButton,
      title: "Responsive Web Design",
      desc: "Crafting immersive mobile applications to deliver seamless user experiences.",
    },
    {
      id: 4,
      title: "CMS",
      logo: FaWordpress,
      desc: "Dynamic web applications engineered for exceptional user engagement and interaction.",
    },
    {
      id: 5,
      title: "E-commerce Development",
      logo: FaShoppingCart,
      desc: "Creating integrated solutions to seamlessly enhance your digital commerce ecosystem.",
    },
  ],

  workType: [
    {
      id: 1,
      img: innovate,
      title: "Innovative Approach",
      description:
        "Tailored software solutions meticulously crafted to meet and exceed your organization's unique business requirements.",
    },
    {
      id: 2,
      img: scalable,
      title: "Scalability and Flexibility",
      description:
        "Empower your skills, achievements, and portfolio through a customized online platform built for growth and adaptability.",
    },
    {
      id: 3,
      img: pricing,
      title: "Affordable Pricing",
      description:
        "Effortlessly create, promote, and manage events with dedicated online event management solutions tailored to your budget.",
    },
  ],

  faq: [
    {
      id: 1,
      ques: "What technologies do you use for web development?",
      ans: "We employ a diverse range of technologies for web development, including HTML, CSS, JavaScript, and popular frameworks such as React, Angular, and Vue.js. Our technology stack is selected based on your project's requirements to ensure optimal performance and user experience.",
    },
    {
      id: 2,
      ques: "What development approach do you follow for web projects?",
      ans: "Our team adopts an Agile development approach for web projects, emphasizing collaboration, flexibility, and continuous improvement. Through iterative cycles of planning, development, and review, we ensure efficient project management and timely delivery of high-quality web solutions.",
    },
    {
      id: 3,
      ques: "How do you prioritize website security?",
      ans: "Security is a top priority in our web development process. We implement industry-standard security measures such as HTTPS, data encryption, and secure authentication protocols to safeguard your website against cyber threats. Additionally, we conduct regular security audits and vulnerability assessments to identify and address any potential risks proactively.",
    },
    {
      id: 4,
      ques: "What post-launch support services do you provide for websites?",
      ans: "Our commitment to your website's success extends beyond its launch. We offer comprehensive post-launch support services, including regular maintenance, performance monitoring, bug fixes, and content updates. Our goal is to ensure your website remains secure, up-to-date, and optimized for peak performance.",
    },
  ],
};
export default webdevServicesData;

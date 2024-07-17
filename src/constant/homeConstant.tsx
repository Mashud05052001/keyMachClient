import {
  BackwardIcon,
  FireIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Truck } from "lucide-react";
import homeBanner1 from "@/assets/images/homeBanner/img1.jpg";
import homeBanner2 from "@/assets/images/homeBanner/img2.jpg";
import homeBanner3 from "@/assets/images/homeBanner/img3.jpg";
import homeBanner4 from "@/assets/images/homeBanner/img4.jpg";
import aliceJohnson from "@/assets/images/customerPicture/alice-johnson.jpg";
import bobSmith from "@/assets/images/customerPicture/bob-smith.jpg";
import carolLee from "@/assets/images/customerPicture/carol-lee.jpg";
import markDevid from "@/assets/images/customerPicture/mark-dvid.jpg";
import emilyDevis from "@/assets/images/customerPicture/emily-devis.jpg";
import frankMartinex from "@/assets/images/customerPicture/frank-mertinex.jpg";
import { TAccordian } from "@/types/order.types";

export const allHomeBanners = [
  {
    id: 0,
    img: homeBanner1,
    name: "LANGTU GK69",
  },
  {
    id: 1,
    img: homeBanner2,
    name: "Kobo RainBoW KKB",
  },
  {
    id: 2,
    img: homeBanner3,
    name: "Lemokey L3",
  },
  {
    id: 3,
    img: homeBanner4,
    name: "Eulbevoli MK9",
  },
];

export const allHomeServices = [
  {
    id: 1,
    icon: () => <Truck className="size-6" />,
    title: "Fast Delivery",
    subTitle: "Quick and reliable shipping",
  },
  {
    id: 2,
    icon: () => <FireIcon className="size-6" />,
    title: "Exclusive Deals",
    subTitle: "Save more with special offers",
  },
  {
    id: 3,
    icon: () => <BackwardIcon className="size-6" />,
    title: "Easy Returns",
    subTitle: "Hassle-free return policy",
  },
  {
    id: 4,
    icon: () => <SparklesIcon className="size-6" />,
    title: "Premium Quality",
    subTitle: "Durable and reliable products",
  },
];

export const allCustomerReviews = [
  {
    id: 1,
    name: "Alice Johnson",
    profession: "Software Engineer",
    img: aliceJohnson,
    review:
      "KeyMach keyboards are superb. The build quality and typing experience are fantastic. Highly recommend!",
  },
  {
    id: 2,
    name: "Bob Smith",
    profession: "Graphic Designer",
    img: bobSmith,
    review:
      "Great design and responsive keys. KeyMach is a perfect addition to my workspace.",
  },
  {
    id: 3,
    name: "Carol Lee",
    profession: "Writer",
    img: carolLee,
    review:
      "Comfortable typing experience. Satisfying key clicks and ergonomic design. Love my KeyMach keyboard.",
  },
  {
    id: 4,
    name: "Mark David",
    profession: "Gamer",
    img: markDevid,
    review:
      "Perfect for gaming. Incredible response time and endless customization options. Highly impressed.",
  },
  {
    id: 5,
    name: "Emily Davis",
    profession: "Student",
    img: emilyDevis,
    review:
      "Versatile and reliable for both studying and gaming. Improved my productivity and gaming experience.",
  },
  {
    id: 6,
    name: "Frank Martinez",
    profession: "IT Specialist",
    img: frankMartinex,
    review:
      "Top-notch durability and performance. Excellent customer service. Great overall experience with KeyMach.",
  },
];

export const allFaqForChoosingMechanicalKeyboard: TAccordian[] = [
  {
    id: 1,
    question: "Why choose a mechanical keyboard for typing?",
    answer:
      "Mechanical keyboards offer a superior typing experience with tactile feedback and a satisfying click, reducing typing errors and increasing typing speed.",
  },
  {
    id: 2,
    question: "What makes mechanical keyboards more durable?",
    answer:
      "Mechanical keyboards are built to last with switches rated for tens of millions of keystrokes, significantly outlasting typical membrane keyboards.",
  },
  {
    id: 3,
    question: "Can I customize my mechanical keyboard?",
    answer:
      "Yes, mechanical keyboards offer extensive customization options, including different switch types, customizable keycaps, and programmable macros.",
  },
  {
    id: 4,
    question: "How do mechanical keyboards improve gaming performance?",
    answer:
      "Mechanical keyboards provide faster response times, more precise key presses, and anti-ghosting features, giving gamers a competitive edge.",
  },
  {
    id: 5,
    question: "Are mechanical keyboards more comfortable for long sessions?",
    answer:
      "Yes, mechanical keyboards can improve typing comfort with ergonomic designs, customizable switches, and adjustable actuation points to reduce strain.",
  },
];

export const customizableOptions = [
  {
    id: 1,
    title: "Switch Types",
    description:
      "Choose from a variety of switch types, including linear, tactile, and clicky, each offering a unique typing feel and sound.",
  },
  {
    id: 2,
    title: "Keycap Styles",
    description:
      "Customize your keyboard with different keycap styles and materials, such as ABS, PBT, and doubleshot keycaps, available in various colors and profiles.",
  },
  {
    id: 3,
    title: "Backlighting",
    description:
      "Enhance your keyboard with customizable backlighting options, including RGB lighting, single-color LEDs, and various lighting effects and patterns.",
  },
  {
    id: 4,
    title: "Programmable Keys",
    description:
      "Set up macros and programmable keys for personalized shortcuts, enhancing your productivity and gaming performance.",
  },
  {
    id: 5,
    title: "Hot-Swappable Switches",
    description:
      "Opt for hot-swappable switches, allowing you to easily change out switches without soldering, enabling quick customization and experimentation.",
  },
  {
    id: 6,
    title: "Ergonomic Layouts",
    description:
      "Choose from different ergonomic layouts, such as split keyboards and adjustable typing angles, to improve comfort and reduce strain during extended use.",
  },
];

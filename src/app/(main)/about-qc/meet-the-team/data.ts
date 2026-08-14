import type { StaticImageData } from 'next/image';

import AlexAndDavidImage from '@/components/employees/alex-and-david.jpg';
// import ChrisBreedykImage from '@/components/employees/chris-breedyk.jpg';
import AshliScaleImage from '@/components/employees/ashli-scale.jpg';
import DaveWelshImage from '@/components/employees/dave-welsh.jpg';
import EmilySpragueImage from '@/components/employees/emily-sprague.jpg';
import JoannePendonImage from '@/components/employees/joanne-pendon.jpg';
import KaylaCuggyImage from '@/components/employees/kayla-cuggy.jpg';
import LucieDemersImage from '@/components/employees/lucie-demers.jpg';
// import MalcolmAsselinImage from '@/components/employees/malcolm-asselin.jpg';

export interface Employee {
  src: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  name: string;
  heading: string;
  description: string;
}

export const employees: Employee[] = [
  {
    src: JoannePendonImage,
    imagePositionX: 45,
    name: 'Joanne Pendon',
    heading: 'Joanne Pendon, CEO',
    description: 'At QC, my team is committed to delivering innovation and quality at every step of your learning journey. You\'re learning online, but you\'re never alone. We\'ve implemented the latest technology to create a dynamic, interactive experience through our online learning center and virtual community. You\'ll connect with fellow students, industry experts, and tutors, ensuring your learning is not only seamless but also collaborative and engaging. Our goal is to foster connection so you always feel supported throughout your journey. Most importantly, we\'re dedicated to providing top-tier education at an affordable price, empowering you to confidently launch a successful business or career.',
  },
  {
    src: KaylaCuggyImage,
    imagePositionX: 45,
    name: 'Kayla Cuggy',
    heading: 'Kayla Cuggy, COO',
    description: 'I am dedicated to creating an unparalleled online learning environment where each and every student can flourish. My goal is to cultivate innovation and empower our team to provide you with a top-notch educational experience. The QC team is committed to elevating the standard of online education across the industry, spanning from the quality of our course content to the effectiveness of our student support systems. We strive to ensure that each student has the tools, guidance, and resources they need to achieve their goals and succeed in their chosen career paths.',
  },
  {
    src: DaveWelshImage,
    imagePositionX: 45,
    name: 'Dave Welsh',
    heading: 'Dave Welsh, Director of IT and Development',
    description: 'At QC, my team develops the systems that make your learning experience run seamlessly. We have created a custom online learning portal designed specifically to meet your needs as a QC student. When you log in to your course, you\'ll find everything you need right at your fingertips. You\'ll have access to interactive course lessons and videos, assignments, feedback from expert tutors, special discounts, and important account details. My job is to make sure your online experience is straightforward and enjoyable so that you can focus on your studies.',
  },
  {
    src: EmilySpragueImage,
    imagePositionX: 45,
    name: 'Emily Sprague',
    heading: 'Emily Sprague, Director of Student Outreach',
    description: 'My role is to make sure you can easily find the information you need when exploring your career training options. I help connect you with useful, relevant information at every stage of your decision, so you can see why thousands of students have chosen QC to prepare for their careers. From our long history of innovation in online learning to our decades-long A+ rating with the Better Business Bureau, I want to make sure QC’s online presence reflects the quality and credibility we’ve built since 1984.',
  },
  // {
  //   src: ChrisBreedykImage,
  //   imagePositionX: 45,
  //   name: 'Chris Brooks',
  //   heading: 'Chris Brooks, Head of Course Design',
  //   description: 'My #1 goal is to design a learning experience that works for you. Whether you\'re studying on a computer, tablet, or smartphone, I want to ensure your experience is the best that it can be. My team continuously updates course materials to keep up with the latest technologies and trends. We design interactive course lessons complete with instructional videos and activities to create an engaging learning environment, as well as practical assignments aimed at developing your skills. I know I\'ve done my job well when you\'ve completed your course, and had fun doing it!',
  // },
  // {
  //   src: MalcolmAsselinImage,
  //   imagePositionX: 45,
  //   name: 'Malcolm Asselin',
  //   heading: 'Malcolm Asselin, Student Success Manager',
  //   description: 'My top priority at QC is to enrich your learning experience by fostering a strong, supportive community where you can connect with fellow students and graduates, and learn from industry experts. I want to make sure you have every resource you need right at your fingertips. That\'s why you\'ll have access to live webinars, exclusive bonus materials, and active community discussions—all designed to enhance your course and guide you toward success.',
  // },
  {
    src: AshliScaleImage,
    imagePositionX: 40,
    name: 'Ashli Scale',
    heading: 'Ashli Scale, Head of Student Services',
    description: 'My job is to support you throughout your education. My team and I are here to help every step of the way, from choosing the right course and planning for your career to answering questions about your course materials and preparing for graduation. No matter where you are in your journey, you can reach us 7 days a week by phone, email, or live chat. We\'re here to make sure you always have the support you need to succeed.',
  },
  {
    src: LucieDemersImage,
    name: 'Lucie Demers',
    heading: 'Lucie Demers, Student Coordinator',
    description: 'I\'m here to support you from the moment you begin your journey with QC through to graduation. I oversee the enrollment process and personally welcome you to the school to ensure you get off to a great start. If you have any questions along the way, I\'m just a phone call away! When you complete your course, I\'ll proudly send your professional certification to celebrate your achievement.',
  },
  {
    src: AlexAndDavidImage,
    name: 'David Griller and Alex Myers',
    heading: 'David Griller and Alex Myers, Founders',
    description: 'Our shared passion for empowering others through knowledge inspired us to start QC Career School in 1984. As trailblazers in distance education, we embarked on a journey to revolutionize traditional courses and shape the future of learning, one student at a time. Guided by an unwavering commitment to excellence, QC has now transformed the digital learning landscape through expertise in education, technology and business.',
  },
];

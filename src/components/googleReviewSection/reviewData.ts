import type { StaticImageData } from 'next/image';
import type { CSSProperties } from 'react';
import AprilImage from './images/april.png';
import AshleyImage from './images/ashley.png';
import BrianneImage from './images/brianne.png';
import DarleneImage from './images/darlene.png';
import PatriciaImage from './images/patricia.png';

import type { CourseCode } from '@/domain/courseCode';

export enum Priority {
  HIGH = 3,
  NORMAL = 2,
  LOW = 1,
}

export type ReviewData = {
  name: string;
  reviewText: string;
  initial: string;
  imageSrc?: StaticImageData;
  backgroundColor: CSSProperties['backgroundColor'];
  /** font size in rem */
  size?: number;
  rating: 1 | 2 | 3 | 4 | 5;
  courseCodes?: CourseCode[];
  priority?: Priority;
};

export const reviewData: ReviewData[] = [
  {
    name: 'Patricia Deborah',
    initial: 'P',
    backgroundColor: '#bf360c',
    imageSrc: PatriciaImage,
    reviewText: 'My 1st online seminar was really helpful. It got my brain thinking about what exactly it is I want to do as an event planner, and look forward to more of the seminars while continuing to learn and my own pace.',
    rating: 5,
  },
  {
    name: 'Sylvina Mcleod',
    initial: 'S',
    backgroundColor: '#0097a7',
    reviewText: 'It was amazing so much to work with and informative.',
    rating: 5,
  },
  {
    name: 'April Jordan',
    initial: 'A',
    backgroundColor: 'green',
    imageSrc: AprilImage,
    reviewText: 'Very Informative Experience',
    size: 1.25,
    rating: 5,
  },
  {
    name: 'Brooke Fletcher',
    initial: 'B',
    backgroundColor: 'red',
    reviewText: 'I have been a student of QC Events since 2019. I have enjoyed all the online classes/assignments! It was hard to find a college that does certification that focuses only on (Events, Weddings, or Floral Design.) Thanks to QC Events School, I was able to get certified in all three areas that I was looking.',
    rating: 5,
    courseCodes: [ 'fl', 'wp', 'ep' ],
  },
  {
    name: 'Angela Pitton',
    initial: 'A',
    backgroundColor: '#0097a7',
    reviewText: 'Absolutely love the interaction from this school. The interactive webinars are so helpful. Very professional. Would recommend for sure!!',
    rating: 5,
  },
  {
    name: 'Diane Gorewitz',
    initial: 'D',
    backgroundColor: 'green',
    reviewText: 'For years I was interested in wedding and event planning. I did my research and chose QC Event School, which was a great decision. This particular course had me thinking outside the box, thinking of unique ways to stay within a budget, incorporating the clients interests into their theme. I love how thorough the course is and the communication through the school is fantastic! I now have two weddings booked for 2025! Thank you QC Events!!',
    rating: 5,
    courseCodes: [ 'wp', 'ep', 'lw', 'dw' ],
  },
  {
    name: 'Darlene Dungey',
    imageSrc: DarleneImage,
    initial: 'D',
    backgroundColor: 'grey',
    reviewText: 'I have completed the Corporate Event Planning Course. I have found QC to very inciteful, well worth the money and time spent.',
    rating: 5,
    courseCodes: [ 'cp' ],
  },
  {
    name: 'Ashley Walker',
    imageSrc: AshleyImage,
    initial: 'A',
    backgroundColor: 'grey',
    reviewText: 'I have thoroughly enjoyed taking my wedding planning and event planning courses through the QC Event School! The community of other students is so supportive and so are the staff/tutors! The webinars that are offered are so influential as it helps you think creatively when completing homework assignments and planning.',
    rating: 5,
    courseCodes: [ 'ep', 'wp', 'ce' ],
  },
  {
    name: 'M',
    initial: 'M',
    backgroundColor: 'blue',
    reviewText: 'I began with the Event Planning program and loved it. Sure it is easy to just start planning  wedding and events; however, taking this course really teaches you everything you need to know about planning. I decided to follow up my services with taking an event decor and floral designing course. I recommend this online program to anyone thinking of going into this field. Take as much time as you need to complete the courses (within 3 years), the assignments are really in depth and the your assigned tutor is available to answer any questions that one might have.',
    rating: 5,
    courseCodes: [ 'ep', 'ed', 'fd' ],
  },
  {
    name: 'Brianne Curtis',
    imageSrc: BrianneImage,
    initial: 'B',
    backgroundColor: 'green',
    reviewText: 'I have completed my Event and Wedding Planning course and almost finished my Destination Wedding course and I have loved every moment of my learning! From doing local research, personal touches on what you would do in situations for the assignments to the tutor being very personable with me through my whole learning experience. With this being an online learning school there are many options to reach out to your tutor, any staff either through email, calling and even through the social media for any help that you need was amazing. And having that connection with the other students in the social media page is amazing! I am already looking forward to starting this next chapter of my life in doing something that I love and doing more courses through QC to enhance my career as well!',
    rating: 5,
    courseCodes: [ 'ep', 'dw' ],
  },
  {
    name: 'Vivienne Barrett',
    initial: 'V',
    backgroundColor: 'grey',
    reviewText: "QC Career School was the perfect choice for me. My only regret is not enrolling sooner. The online format allowed me to learn at my own pace and balance my full-time job while launching my business. I completed the wedding Event Planning course and I'm now pursuing Event Decor course. Initially, I felt overwhelmed, but the supportive team, especially Pamela, reassured and encourages me. Their availability for calls, not just emails, was invaluable. QC Career School's team provided the support I needed to succeed.",
    rating: 5,
    courseCodes: [ 'ed' ],
  },
];

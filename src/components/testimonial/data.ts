import type { StaticImageData } from 'next/image';

import * as Images from './images';

export type Testimonial = {
  name: string;
  title?: string;
  short: string[];
  long: string[];
  image: StaticImageData;
  imagePositionX?: number;
  imagePositionY?: number;
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const testimonials: Record<string, Testimonial> = {
  'TE-0001': {
    name: 'Ayla Otto',
    title: 'Graduate title',
    short: [ 'I loved the convenience of doing training online—rather than in-person—because you can do the course a little bit at a time, whenever it\'s convenient for your schedule.' ],
    long: [ 'The support you receive from people on the back end of QC Event School is unmatched! Just take the leap! There\'s never going to be the “perfect time” in your life when every single thing is lined up and “ready”. In reality, you\'ll learn as you go.' ],
    image: Images.AylaOtto,
    stars: 5,
  },
  'TE-0002': {
    name: 'Carisa Lockery',
    title: 'Graduate title',
    short: [ 'The coursework was pertinent to the industry and it was super convenient to do it online! The ﬂexibility fit into my life perfectly.' ],
    long: [ 'While I\'m a big advocate for getting your feet wet and getting real-life experience, I feel the certification is something you can physically show clients to show them your qualifications. The coursework was pertinent to the industry and it was super convenient to do online!' ],
    image: Images.CarisaLockery,
    stars: 5,
  },
  'TE-0003': {
    name: 'Tyler Reid',
    title: 'Graduate title',
    short: [ 'My experiences were 10/10 overall. As a QC Event School graduate, I would definitely recommend these courses!' ],
    long: [ 'This online certification has given me the networks that will last a lifetime! I\'m thankful for the recommendation that led me to QC Event School and I am eternally grateful for the knowledge I\'ve retained.' ],
    image: Images.TylerReid,
    stars: 5,
  },
  'TE-0004': {
    name: 'Carli Lewis',
    title: 'Graduate title',
    short: [ 'I decided that this was the school for me and took the chance! Looking back, I can confirm that this was the BEST. DECISION. EVER!' ],
    long: [ 'This school offers so many options and provides so many resources. Their courses have 0 deadlines, so you can train on your own time. I also liked that there was always someone to answer all of my questions, whenever I had any.' ],
    image: Images.CarliLewis,
    stars: 5,
  },
  'TE-0005': {
    name: 'Afton Romrell',
    title: 'Graduate title',
    short: [ 'I discovered a whole new creative insight I never even knew I had! One of my favorite sections was learning about different religions and cultures, and how they celebrate special events differently.' ],
    long: [ 'I will ALWAYS recommend QC Event School\'s event planning certification training to anyone interested in weddings and events. Professional training increases your knowledge base and betters your reputation within the planning industry.' ],
    image: Images.AftonRomrel,
    stars: 5,
  },
  'TE-0006': {
    name: 'Madyson Bel',
    title: 'Graduate title',
    short: [ 'I can definitely say that I would not have gotten off to nearly as strong of a start, had it not been for my training through QC.' ],
    long: [ 'I can definitely say that I would not have gotten off to nearly as strong of a start, had it not been for my training through QC. I learned a lot about how to portray myself as a professional, how to deal with difficult situations, and how to make a space look beautiful and molded to a client\'s needs.' ],
    image: Images.MadysonBell,
    stars: 5,
  },
  'TE-0007': {
    name: 'Sydney Schatz',
    title: 'Graduate title',
    short: [ 'These certifications will give me a definite advantage! Having these courses attached to my name and business shows the dedication I have for this industry; that I\'m a true wedding and event professional.' ],
    long: [ 'I\'m continually referring back to my course content for advice and information! I also valued the fact that QC provides each student with a tutor who actually takes the time to not only grade each assignment but give valuable feedback and criticism.' ],
    image: Images.SydneySchatz,
    stars: 5,
  },
  'TE-0008': {
    name: 'Neena McConnell',
    title: 'Graduate title',
    short: [ 'Attending an online school allowed me to learn at my own pace in the comfort of my own home. I was able to work full-time, train a young puppy, plan my own wedding, and travel with my now-husband.' ],
    long: [ 'By studying online at QC, I didn\'t have to give up something that I loved to do. I vividly recall bringing my course materials on long flights to New Zealand and Italy.' ],
    image: Images.NeenaMcConnell,
    stars: 5,
  },
  'TE-0009': {
    name: 'Cherelle Joseph',
    title: 'Graduate title',
    short: [ 'QC\'s Event & Wedding Planning Course provided me with useful knowledge and skills to start my own planning company. It gave me the confidence to work with clients from the first meeting right up to the day of their wedding.' ],
    long: [ 'Not only did the course teach me about event and wedding planning but it also walked me through the process of starting my own wedding planning business. I learned how to write a business plan and received valuable information on how to price my planning services.' ],
    image: Images.CherelleJoseph,
    stars: 5,
  },
  'TE-0010': {
    name: 'Kaloni Jensen',
    title: 'Graduate title',
    short: [ 'It took me less than an hour chatting with Student Support to convince me of the professionalism of this planning school was at the caliber I was looking for.' ],
    long: [ 'Enrolling in a program mentored by professionals in the field absolutely trumps the lecture-style event planning courses I was taking at university. The courses contain information that\'s current and can be tailored to use in any specific situation.' ],
    image: Images.KaloniJensen,
    stars: 5,
  },
  'TE-0011': {
    name: 'Sarah Christopher',
    title: 'Graduate title',
    short: [ 'I wish someone would have told me to do it earlier because it is an awesome starting point.' ],
    long: [ 'QC Event School has prepared me so much for the event planning business because they don\'t miss a detail. I know that they have laid an outstanding foundation for my business to help it continue and grow.' ],
    image: Images.SarahCristopher,
    stars: 5,
  },
  'TE-0012': {
    name: 'Jenna Pelcher',
    title: 'Graduate title',
    short: [ 'Having this background and knowledge really prepared me and made me more confident about my decision to start a business.' ],
    long: [ 'I did not have time to actually go to a physical event school. I loved how QC\'s online event and wedding planning courses were affordable and I could complete them on my own schedule.' ],
    image: Images.JennaPelcher,
    stars: 5,
  },
  'TE-0013': {
    name: 'Katherine Snow',
    title: 'Graduate title',
    short: [ 'The payment plans definitely made things easier for me. The tutors I had were great, helpful, and knowledgeable. I really enjoyed my time!' ],
    long: [ 'I chose QC because it had great reviews and I liked how professional the website was. The tutors were reputable, and I was able to add to my education in different fields like makeup, writing, interior decorating, etc. I liked that I was able to continue my education through easy payments and still be able to keep moving forward. It definitely made things easier for me. The tutors I had were great, helpful, and knowledgeable. I really enjoyed my time!' ],
    image: Images.KateherineSnow,
    stars: 5,
  },
  'TE-0014': {
    name: 'Camasha Isaac',
    title: 'Graduate title',
    short: [ 'I started taking my event and wedding planning course shortly after I had my baby. It fits into my lifestyle and my schedule.' ],
    long: [ 'I wanted to earn my event planner certification because I wanted to do it the correct way and get the proper training from professionals with expertise and experience. I also wanted to earn my clients trust. My certification says that I went through the training and am qualified. QC is the only event planning school that offers International Event Planning, which is something that I was interested in.' ],
    image: Images.CamashaIsaac,
    stars: 5,
  },
  'TE-0015': {
    name: 'Jeanette Spencer',
    title: 'Graduate title',
    short: [ 'It\'s a nice feeling to be able to hang both my certificates on my wall for clients to see. I think people get a sense of ease when they know you\'re a certified professional.' ],
    long: [ 'As I began running my event planning company alongside my full-time job, having enough time was always an issue for me. I was not able to attend a physical wedding planning school, so was very happy to be able to study online in my own time. Doing online event planning courses enabled me to juggle my time efficiently and achieve my goals. It\'s a very nice feeling to be able to hang both my certificates on my wall for clients to see when we meet for consultations.' ],
    image: Images.JeanetteSpencer,
    stars: 5,
  },
  'TE-0016': {
    name: 'Frances (Fran) Steiner',
    title: 'Graduate title',
    short: [ 'I found it incredibly fun and exciting. I think anyone who decides to take the course would enjoy it very much!' ],
    long: [ 'I was very pleased. QC taught me the basic, overall logistics of being an event and wedding planner. I found it incredibly fun and exciting. I think anyone who decides to take the course would enjoy it very much.' ],
    image: Images.FencesSteiner,
    stars: 5,
  },
  'TE-0017': {
    name: 'Tazman Baker',
    title: 'Graduate title',
    short: [ 'The statement that these credentials add to my resume is invaluable. It gives clients reassurance that they\'re in capable hands.' ],
    long: [ 'I wanted to be able to study on my lunch break, on the couch, at my parents\' house when I visit them, etc. I wanted access to a mentor when I needed it, at my own convenience—and that\'s what I got! I got real feedback, just like I would in an in-person classroom. I also needed the flexible payments that I worked into my budget. Not to mention, I loved the associations partnered with QC. As an event and wedding planner, you\'re absolutely going to benefit from that!' ],
    image: Images.TazmanBaker,
    stars: 5,
  },
};

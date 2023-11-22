export type Testimonial = {
  name: string;
  quote: string[];
  stars: 0 | 1 | 2 | 3 | 4 | 5;
};

export const testimonialData: Record<string, Testimonial> = {
  a: {
    name: 'Arnold Schwarzenegger',
    quote: [ 'Consider that a divorce!' ],
    stars: 1,
  },
  b: {
    name: 'Name Surname',
    quote: [ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.' ],
    stars: 5,
  },
};

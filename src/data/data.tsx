/* eslint-disable simple-import-sort/imports */
import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/bg-cloth.png';
import porfolioMFD1 from '../images/portfolio/portfolio-mfd-mobile.png';
import porfolioWeCAB1 from '../images/portfolio/portfolio-wecab-desktop.jpeg';
import profilepic from '../images/profilepic.png';
import testimonialImage from '../images/bg-forest-path-watercolor.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Aimee Pederson',
  description: 'Aimee Pederson | Frontend Developer, Conversion Rate Optimization Expert, QA Engineer',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Aimee Pederson.`,
  description: (
    <>
      <p className="prose-sm text-gray-500 sm:prose-base lg:prose-lg">
        I develop <strong className="text-gray-600">mobile-first websites</strong> and{' '}
        <strong className="text-stone-600">optimize existing websites</strong> for my clients. With over a{' '}
        <strong className="text-stone-600">
          decade of experience in Ecommerce, Conversion Rate Optimization, and User Experience,
        </strong>{' '}
        I know how to build a site that works for the business and the customer.
      </p>
      <p className="prose-sm text-gray-500 sm:prose-base lg:prose-lg">
        Seeing site metrics and user experiences improve is a <strong className="text-gray-600">thrill</strong> that
        keeps me excited about my day-to-day and{' '}
        <strong className="text-gray-600">I'd love to share that with you and your business.</strong>
      </p>
      <p className="prose-sm text-gray-500 sm:prose-base lg:prose-lg">
        In my free time, I watch Blippi with my pre-schooler, read romance, mystery, and self-improvement books, and
        work on the occasional house project (plant this, build/paint that.)
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I love building beautiful, responsive websites.  My experience is primarily based in React, 
  HTML, and Boostrap but I am always interested in learning new technologies.  Because it is where I began,
   I have a soft spot for looking at data and A/B Testing.`,
  aboutItems: [
    {label: 'Location', text: 'Minneapolis, MN', Icon: MapIcon},
    {label: 'Age', text: '40', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Reading, Gardening, Nature', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Minnesota, Twin Cities', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Self Employed / Contractor', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 4,
      },
      {
        name: 'ASL',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML / CSS',
        level: 9,
      },
      {
        name: 'JQuery',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 7,
      },
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Flexbox',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 6,
      },
      {
        name: 'EDI',
        level: 5,
      },
      {
        name: 'PHP',
        level: 5,
      },
      {
        name: 'Java',
        level: 3,
      },
      {
        name: 'Python',
        level: 3,
      },
    ],
  },
  {
    name: 'Analytics',
    skills: [
      {
        name: 'Adobe Analytics',
        level: 8,
      },
      {
        name: 'MS Excel',
        level: 8,
      },
      {
        name: 'MicroStrategy',
        level: 5,
      },
      {
        name: 'SQL',
        level: 3,
      },
    ],
  },
  {
    name: 'Content & Creative',
    skills: [
      {
        name: 'Adobe Photoshop',
        level: 7,
      },
      {
        name: 'Final Cut Pro',
        level: 6,
      },
      {
        name: 'InDesign',
        level: 5,
      },
    ],
  },
  {
    name: 'Miscellaneous',
    skills: [
      {
        name: 'Adobe Target, Monetate, Useitbetter',
        level: 10,
      },
      {
        name: 'SquareSpace',
        level: 8,
      },
      {
        name: 'Aha!',
        level: 8,
      },
      {
        name: 'Atlassian: Confluence, JIRA',
        level: 8,
      },
      {
        name: 'ContentSquare, Glassbox',
        level: 8,
      },
      {
        name: 'Postman',
        level: 5,
      },
      {
        name: 'Git',
        level: 5,
      },
      {
        name: 'Tealium',
        level: 6,
      },
      {
        name: 'Wix',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Mound Fire Department',
    description: 'Webmaster since 2005.',
    url: 'https://moundfire.com',
    image: porfolioMFD1,
  },
  {
    title: 'WeCAB - Site Operations',
    description: 'Site maintenance and consultation, pro bono basis 2013 to 2015.',
    url: 'https://wecab.org',
    image: porfolioWeCAB1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2006',
    location: 'University of Minnesota - Minneapolis, MN',
    title: 'Bachelor of Individualized Studies: Technical Communication, Photography, and Rhetoric',
    content: (
      <p>
        I graduated with a self-designed degree that afforded me excellent communication skills and experience with
        creative tools like PhotoShop, Indesign, and Final Cut.
      </p>
    ),
  },
  {
    date: 'December 2008',
    location: 'Hennepin Technical College - Eden Prairie, MN',
    title: 'Associate of Applied Science: Network Administrator / Analyst',
    content: (
      <p>
        With a focus on computer networking, I studied a variety of topics: subnetting, programming, hardware, Linux and
        command line, server configuration, internet protocol, and more. test.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2013 - April 2024',
    location: 'Fingerhut',
    title: 'Senior Manager, Site Operations & Optimization',
    content: (
      <ul className="list-disc ml-4">
        <li>
          Lead a team of 5, possessing various levels of experience, to deliver promotional and test content while
          maintaining quality customer experience and growing business knowledge through continuous A/B testing.
        </li>
        <li>
          Manage and motivate employees, helping them to think independently, feel productive and valued, and share a
          positive attitude.
        </li>
        <li>Develop and implement business strategies to achieve business goals and stay competitive.</li>
        <li>
          Resolve cross-functional conflicts, actively listening to concerns and finding appropriate middle ground.
        </li>
        <li>Leverage data and analytics to make informed decisions and drive business improvements.</li>
        <li>Ideate, develop, and proof tools used by internal site content and testing teams.</li>
      </ul>
    ),
  },
  {
    date: 'November 2010 - March 2013',
    location: 'Cargill',
    title: 'Container Data Coordinator',
    content: (
      <ul className="list-disc ml-4">
        <li>Increased global container tracking visibility by 450% (185,000 containers annually.)</li>
        <li>Trained more than 30 global business units and 250 users on supply chain software and contracting tool.</li>
        <li>
          Managed carrier integration projects. Directed and managed the mapping of 2,000+ integration key fields from
          27 ocean carriers.
        </li>
        <li>
          Audited vendor billing statement through intelligence reporting; liaised with vendor to resolve reporting
          gaps.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Tim Corsaro',
      text: "I have had the good fortune to know Aimee professionally for many years. In my history with Aimee I have seen her master eCommerce operations, coding, analytics and the concepts of website optimization.  Aimee's integrity, ethics, and ability to deliver will never disappoint.",
      image: '/assets/testimonials/tcorsaro.jpeg',
    },
    {
      name: 'Molly Mann',
      text: 'Aimee brings to the table not only her plethora of technical knowledge and problem solving, but witty humor. She is highly analytical, with great critical thinking skills, and motivated by driving results.',
      image: '/assets/testimonials/mmann.png',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'contact@aimeep.me',
      href: 'mailto:contact@aimeep.me',
    },
    {
      type: ContactType.Location,
      text: 'Minneapolis, MN, USA',
      href: 'https://www.google.ca/maps/place/Minneapolis,+MN/@44.9706674,-93.3438792,12z',
    },
    {
      type: ContactType.Github,
      text: 'pede0364',
      href: 'https://github.com/pede0364',
    },
    {
      type: ContactType.LinkedIn,
      text: 'aimee-pederson',
      href: 'https://www.linkedin.com/in/aimee-pederson/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/pede0364'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/6696064'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/aimee-pederson/'},
];

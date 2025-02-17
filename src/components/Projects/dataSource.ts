import ptuImage from "@/assets/project-images/ptu-image.png";
import cpImage from "@/assets/project-images/convergepoint-project-image.png";
import quizAppImage from "@/assets/project-images/quize-app.png";
import whoSharedImage from "@/assets/project-images/whoshared-image.png";
import graphQLJSONPlaceholder from "@/assets/project-images/graphql-jsonplaceholder-project.png";

export interface IProject {
  title: string;
  content: string;
  category: "company" | "personal";
  src: string;
  isRecent?: boolean;
  link?: {
    website?: string;
    github?: string;
  };
}

export const projects: IProject[] = [
  {
    title: "GraphQL JSONPlaceholder API",
    content:
      "This project is a GraphQL wrapper for the JSONPlaceholder API, providing a GraphQL interface to interact with the JSONPlaceholder endpoints. The data will be stored in a MongoDB database.",
    category: "personal",
    src: graphQLJSONPlaceholder,
    isRecent: true,
    link: {
      github: "https://github.com/SanthoshKumar9028/graphql-jsonplaceholder",
    },
  },
  {
    title: "Incident Management Software",
    content:
      "SharePoint based React Webpart application to track, manage and report incidents.",
    category: "company",
    src: cpImage,
    isRecent: true,
    link: {
      website: "https://www.convergepoint.com/incident-management-software/",
    },
  },
  {
    title: "Conflict of Interest Disclosure Management Software",
    content:
      "SharePoint based React Webpart application for managing conflicts within the organization.",
    category: "company",
    src: cpImage,
    isRecent: true,
    link: {
      website: "https://www.convergepoint.com/conflict-of-interest-software",
    },
  },
  {
    title: "Contract Management Software",
    content:
      "SharePoint based React Webpart application for managing contracts within and between the organization.",
    category: "company",
    src: cpImage,
    isRecent: true,
    link: {
      website: "https://www.convergepoint.com/contract-management-software",
    },
  },
  {
    title: "Puducherry Technological University Website",
    content:
      "I Worked with PTU Front-End team to develop our college website. We used React in our Frontend",
    category: "personal",
    src: ptuImage,
    link: {
      website: "https://ptuniv.edu.in",
    },
  },
  {
    title: "Quiz App",
    content:
      "It is a basic React application, where user can select on the question sectionfrom the list of sections and they can answer the questions. In the end a report will be generated with the score",
    category: "personal",
    src: quizAppImage,
    link: {
      github: "https://github.com/SanthoshKumar9028/quiz-app",
    },
  },
  {
    title: "Whoshared App",
    content:
      "It is a basic React group chat application, users can communicate with each other by sending messages",
    category: "personal",
    src: whoSharedImage,
    link: {
      github: "https://github.com/SanthoshKumar9028/whoshared",
    },
  },
];

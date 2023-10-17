import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    laravel,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    digoplat,
    tesis,
    threejs,
    user,
    portfolio
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "nav_about",
    },
    {
      id: "work",
      title: "nav_work",
    },
    {
      id: "contact",
      title: "nav_contact",
    },
  ];

  const services = [
    {
      title: "card_title1",
      icon: web,
    },
    {
      title: "card_title2",
      icon: mobile,
    },
    {
      title: "card_title3",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "experience_work_digo",
      company_name: "Digopago C.A",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Jun 2021 - Dic 2021",
      points: [
        "point_work_digo1",
        "point_work_digo2",
        "point_work_digo3",
        "point_work_digo4"      
      ],
    },
    {
      title: "experience_work_proyect",
      company_name: "company_work",
      icon: laravel,
      iconBg: "#E6DEDD",
      date: "May 2022 - Dic 2022",
      points: [
        "point_work_proyect1",
        "point_work_proyect2",
        "point_work_proyect3",
        "point_work_proyect4"
      ],
    },
    {
      title: "experience_work_auto",
      company_name: "company_work_auto",
      icon: threejs,
      iconBg: "#383E56",
      date: "Ago 2023 - Ago 2023",
      points: [
        "point_work_auto1",
        "point_work_auto2",
        "point_work_auto3",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "testimonial_from_h",
      name: "M. Hugo",
      designation: "designation_from_h",
      company: "Digopago C.A",
      image: user,
    },
    {
      testimonial: "testimonial_from_d",
      name: "S. Diana",
      designation: "designation_from_d",
      company: "Iuta",
      image: user,
    },
  ];
  
  const projects = [
    {
      name: "project_item_name",
      description:
      "project_item_description",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: digoplat,
      source_code_link: "https://digopago.com/",
    },
    {
      name: "project_item_name1",
      description:
        "project_item_description1",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "Php",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: tesis,
      source_code_link: "#",
    },
    {
      name: "project_item_name2",
      description:
        "project_item_description2",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "#",
    },
  ];
  
export { services, technologies, experiences, testimonials, projects };
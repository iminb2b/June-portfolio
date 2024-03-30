export type ProjectInfo = {
  img?: string;
  video?: string;
  title: string;
  projectPreview: string;
  description: string;
  category: string;
  tools: string;
  deliver: string;
  duration: string;
  intro: string;
  type: "UIUX" | "Branding" | "Motion";
  slug: string;
  designProcessTitle?: string;
  designProcessDescription?: string;
  designProcess?: Array<{
    text?: string;
    image?: string[];
    video?: string;
  }>;
  finalProduct?: Array<{
    text?: string;
    image?: string[];
    video?: string;
  }>;
};

export const projectInfos: ProjectInfo[] = [
  {
    title: "LOCKET WIDGET",
    description: "UX Research - Redesign",
    intro: "UX case study",
    slug: "locket",
    projectPreview:
      "The Locket app enhancement project aims to elevate the user experience by introducing new features and functionalities that enrich the core concept of real-time photo sharing among close friends. Locket has already established itself as a platform that captures and shares precious moments effortlessly. This project seeks to build upon its success by integrating innovative capabilities that enhance user engagement and interaction within the app.",
    deliver: "User interface for App, New Feature",
    duration: "8 weeks",
    type: "UIUX",
    category: "Personal Project",
    tools: "Illustration, Figma",
    img: "/images/Locket/profileImg.png",
    finalProduct: [
      { image: ["/images/locket/cover.png"] },
      { image: ["/images/Locket/1. Locket.png"] },
      { image: ["/images/Locket/2.png"] },
      { image: ["/images/Locket/3. user need.png"] },
      { image: ["/images/Locket/4. problem to solve.png"] },
      { image: ["/images/Locket/5. Assumptions.png"] },
      { image: ["/images/Locket/6. seconadry research.png"] },
      { image: ["/images/Locket/7. competitor.png"] },
      { image: ["/images/Locket/8. CSD MATRIX.png"] },
      { image: ["/images/Locket/9. USER INTERVIEW.png"] },
      { image: ["/images/Locket/9. persona.png"] },
      { image: ["/images/Locket/10.empathy map.png"] },
      { image: ["/images/Locket/11.png"] },
      { image: ["/images/Locket/12.png"] },
      { image: ["/images/Locket/13.png"] },
    ],
  },
  {
    img: "/images/personal/Image0001.png",
    title: "Personal Portfolio",
    deliver: "User interface for App, New Feature",
    description: "UI Design - Web Development - Motion",
    slug: "personal-portfolio",
    tools: "Figma, Visual Studio Code, After effect, Photoshop, Illustrator",
    duration: "6 weeks",
    projectPreview:
      "This project involves creating my own portfolio website and branding, which includes designing website interfaces, web development, and incorporating appealing animations for added features.",
    type: "UIUX",
    category: "Personal Project",
    intro: "Web Development, Web Design, Motion",
    designProcess: [
      {
        text: "I began by creating several logo concepts for your personal branding portfolio, drawing inspiration from my personality, preferences, photo, and job title. Refine these concepts to create a final logo and experiment with different color schemes.",
      },
      {
        text: "Next, I brainstormed ideas that align with insights gained from the logo creation process.",
      },
      {
        image: ["/images/personal/Brand_Template (1).png"],
      },
      {
        image: [
          "/images/personal/blue ver.png",
          "/images/personal/brand june logo typo.png",
          "/images/personal/a.png",
        ],
      },
      {
        text: "I used Figma to design the website, incorporating ideas and leveraging After Effects to add engaging motion elements for a fun user experience.",
      },
      {
        video:
          "/images/personal/Adobe After Effects 2024 - Untitled Project.aep _ 2024-03-25 14-24-15.mp4",
      },
      {
        text: "And Final result..",
      },
      {
        video: "/images/personal/Comp 1.mp4",
      },
      {
        video: "/images/skill2.mp4",
      },
      {
        text: "Then I proceed to web development, coding the design using HTML, CSS, and JavaScript to bring my site to life.",
      },
      {
        image: ["/images/personal/Screenshot_2.png"],
      },
    ],
  },
  {
    title: "NATURCYCLE",
    deliver: "User interface for App, Packaging, Logo of app",
    description: "UI/UX",
    img: "/images/naturCycle/Mockup.png",
    slug: "nature",
    tools: "Illustration, Figma",
    duration: "5 weeks",
    projectPreview:
      "Conducting research that aligns with the client wishlist, design brief and target audience preference. The research will be applied to the design and the flow of the app",
    type: "UIUX",
    category: "",
    intro: "UX Case Study",
    finalProduct: [
      { image: ["/images/naturCycle/Natur2.png"] },
      { image: ["/images/naturCycle/Natur3.png"] },
      { image: ["/images/naturCycle/Natur4.png"] },
      { image: ["/images/naturCycle/Natur5.png"] },
      { image: ["/images/naturCycle/Natur6.png"] },
      { image: ["/images/naturCycle/Natur7.png"] },
      { image: ["/images/naturCycle/Natur8.png"] },
      { image: ["/images/naturCycle/Natur9.png"] },
      { image: ["/images/naturCycle/Natur10.png"] },
      { image: ["/images/naturCycle/Natur11.png"] },
      { image: ["/images/naturCycle/Natur12.png"] },
      { image: ["/images/naturCycle/Natur13.png"] },
      { image: ["/images/naturCycle/Natur14.png"] },
      { image: ["/images/naturCycle/Natur15.png"] },
      { image: ["/images/naturCycle/Natur16.png"] },
      { image: ["/images/naturCycle/Natur17.png"] },
      { image: ["/images/naturCycle/Natur18.png"] },
      { image: ["/images/naturCycle/Natur19.png"] },
      { image: ["/images/naturCycle/Natur20.png"] },
      { image: ["/images/naturCycle/Natur21.png"] },
      { image: ["/images/naturCycle/Natur22.png"] },
      { image: ["/images/naturCycle/Natur23.png"] },
      { image: ["/images/naturCycle/Natur24.png"] },
      { image: ["/images/naturCycle/Natur25.png"] },
      { image: ["/images/naturCycle/Natur26.png"] },
      { image: ["/images/naturCycle/Natur28.png"] },
    ],
  },
  {
    title: "Blanche - COFFEE",
    intro: "Branding & Strategy",
    deliver: "Brand Book",
    description: "Branding",
    slug: "blanche",
    tools: "Indesign, Illustion, Photoshop",
    img: "/images/blanche/Blanche_Brand%20Book.png",
    duration: "4 weeks",
    projectPreview:
      "Create a new coffee brand with brand books including new logo, color pallete, new websites and app for ordering",
    type: "Branding",
    category: "Group Project",
    designProcess: [
      { image: ["/images/blanche/sketch.png"] },
      { image: ["/images/blanche/Blanche_Brand Book.png"] },
      {
        image: [
          "/images/blanche/Blanche_Brand Book2.png",
          "/images/blanche/Blanche_Brand Book3.png",
        ],
      },
      {
        image: [
          "/images/blanche/Blanche_Brand Book4.png",
          "/images/blanche/Blanche_Brand Book5.png",
        ],
      },
      {
        image: [
          "/images/blanche/Blanche_Brand Book6.png",
          "/images/blanche/Blanche_Brand Book7.png",
        ],
      },
      {
        image: [
          "/images/blanche/Blanche_Brand Book8.png",
          "/images/blanche/Blanche_Brand Book9.png",
        ],
      },
      {
        image: [
          "/images/blanche/Blanche_Brand Book10.png",
          "/images/blanche/Blanche_Brand Book11.png",
        ],
      },
      {
        image: [
          "/images/blanche/Blanche_Brand Book12.png",
          "/images/blanche/Blanche_Brand Book13.png",
        ],
      },
      {
        image: [
          "/images/blanche/Blanche_Brand Book14.png",
          "/images/blanche/Blanche_Brand Book15.png",
        ],
      },
    ],
  },
  {
    title: "Stamp Collection - Graphic design",
    deliver: "Stamp Collection",
    description: "VIETNAMESE DISHES THROUGH STAMPS - VIETNAM CUISINE",
    slug: "stamp",
    tools: "Illustrator, Wacom",
    img: "/images/stamp/9.jpg",
    duration: "2 weeks",
    projectPreview:
      "This project is a creative exploration of Vietnamese cuisine through a series of stamp collection illustrations.",
    type: "Branding",
    category: "Personal Project",
    intro: "UX Case Study",
    finalProduct: [
      { image: ["/images/stamp/1.png"] },
      { image: ["/images/stamp/2.png"] },
      { image: ["/images/stamp/3.png"] },
      { image: ["/images/stamp/4.png"] },
      { image: ["/images/stamp/5.png"] },
      { image: ["/images/stamp/6.png"] },
      { image: ["/images/stamp/7.png"] },
      { image: ["/images/stamp/8.png"] },
      { image: ["/images/stamp/9.jpg"] },
      { image: ["/images/stamp/10.png"] },
    ],
  },
  {
    title: "Icon - ALICE IN WONDERLAND",
    deliver: "Brand Book",
    description: "Icon Brand Book",
    slug: "icon",
    tools: "Illustration",
    duration: "3 weeks",
    projectPreview:
      "In the project, my responsibilities include Illustration and Layout. I create visual content that effectively communicates our topic and enhances the project's overall appeal. Additionally, I organize and structure the content and graphics to ensure a coherent, visually engaging, and user-friendly design.",
    type: "Branding",
    img: "/images/icon/Icon_icon%20set.png",
    category: "2 member Group Project",
    intro: "UX Case Study",
    finalProduct: [
      { image: ["/images/icon/Icon_Cover 1.png"] },
      { image: ["/images/icon/Icon_about.png"] },
      { image: ["/images/icon/Icon_mood board.png"] },
      { image: ["/images/icon/Icon_mind map.png"] },
      { image: ["/images/icon/Icon_a col.png"] },
      { image: ["/images/icon/Icon_cat golden.png"] },
      { image: ["/images/icon/Icon_fla gol.png"] },
      { image: ["/images/icon/Icon_golden rabbit.png"] },
      { image: ["/images/icon/Icon-07.png"] },
      { image: ["/images/icon/Icon-05.png"] },
      { image: ["/images/icon/Icon_a col.png"] },
      { image: ["/images/icon/Icon_cat color.png"] },
      { image: ["/images/icon/Icon_fla.png"] },
      { image: ["/images/icon/Icon_r col.png"] },
      { image: ["/images/icon/Icon_q col.png"] },
      { image: ["/images/icon/Icon_h col.png"] },
      { image: ["/images/icon/Icon_icon set.png"] },
      { image: ["/images/icon/Icon_consiss.png"] },
      { image: ["/images/icon/Icon_Thank you.png"] },
    ],
  },
  {
    title: "Too Good To go Campaign",
    deliver: "Campaign Strategy",
    img: "/images/tooGood/12@2x.png",
    description: "",
    slug: "Campaign Strategy",
    tools: "Photoshop, Adobe XD",
    duration: "1 week",
    projectPreview:
      "Our project focuses on enhancing the brand awareness of Too Good To Go, a sustainable food waste reduction platform, in Canada. The client brief highlighted the brand's low awareness in the Canadian market and the desire to become more recognized. To achieve this goal, our team undertook several key tasks.",
    type: "Branding",
    category: "Group Project",
    intro: "Branding & Strategy",
    finalProduct: [
      {
        text: "Firstly, we identified the brand's key attributes, values, and unique selling propositions (USPs) through thorough market research and analysis. This helped us understand what sets Too Good To Go apart from competitors and how to effectively communicate its value to the target audience.",
      },
      {
        image: ["/images/tooGood/3@2x.png"],
      },
      {
        text: "Next, we developed detailed buyer personas representing different segments of the Canadian market. These personas were based on demographic, psychographic, and behavioral data, allowing us to tailor our messaging and strategies to resonate with each audience segment.",
      },
      {
        image: ["/images/tooGood/4@2x.png"],
      },
      {
        text: "We also created a customer journey map to visualize the user experience from awareness to conversion and advocacy. This map helped us identify pain points, opportunities for engagement, and touchpoints where the brand could make a meaningful impact on its audience.",
      },
      { image: ["/images/tooGood/5@2x.png"] },
      { image: ["/images/tooGood/6@2x.png"] },
      { image: ["/images/tooGood/7@2x.png"] },
      { image: ["/images/tooGood/8@2x.png"] },
      { image: ["/images/tooGood/9@2x.png"] },
      { image: ["/images/tooGood/10@2x.png"] },
      { image: ["/images/tooGood/11@2x.png"] },
      { image: ["/images/tooGood/12@2x.png"] },
      { image: ["/images/tooGood/13@2x.png"] },
    ],
  },
  {
    title: "WeEarth Environment Poster - First Prize",
    deliver: "Environment Poster",
    description: "First Prize of Graphic Design category",
    slug: "weearth",
    tools: "Illustration, Figma",
    img: "/images/we%20earth/Citylight_Mockup_1.png",
    duration: "1 weeks",
    projectPreview:
      "Title: Touch and Reflect The environmental issue is certainly not unfamiliar to us anymore; every day, every year, we see numerous organizations, campaigns, environmental protection movements being brought to light, and all these efforts have one ultimate goal: to change people's perceptions about environmental issues. It is partly for this reason that I named my work 'Touch and Reflect.' I hope these messages will 'touch' everyone's minds and leave each person with something to 'reflect' on. I believe that awareness leads to action, and to stimulate that reflection, I want to incorporate the laws of nature and physics into my ideas.",
    type: "Branding",
    category: "Personal Project",
    intro: "Environment Poster",
    finalProduct: [
      {
        image: ["/images/we earth/Ảnh 3.png"],
        text: "I want to address a recent event where the Japanese government planned to release a large amount of treated radioactive water from the Fukushima nuclear plant into the Pacific Ocean despite strong criticism from neighboring countries and even Japanese fishermen. Discharging waste into the ocean is like a drop of clean water turning murky, or it can be compared to the image of 'Ripples on a Pond,' meaning just one raindrop falling into the pond is enough to create ripples, disrupting the entire surface of the water.",
      },
      {
        image: ["/images/we earth/Ảnh 2.png"],
        text: "The second poster illustrates the domino effect, also known as the ripple effect, showing that when you change one behavior, it triggers a chain of reactions. The consequence is that we will be overwhelmed by the weight of nature. Our actions trigger a chain reaction, and we are at the end point.",
      },
      {
        image: [
          "../images/we earth/Chạm, Ngẫm_Ảnh 1_working file_Nguyễn Thị Mai Duyên.png",
        ],
        text: "In the Final poster, I drew inspiration from Newton's law: Newton’s Cradle. It illustrates how if we impact the Earth, represented by the Earth ball here, it will become unbalanced and deviate from its natural orbit. The adjacent balls represent important factors like water and air, which also get affected and push back against the Earth, and as a result, we, the inhabitants of this planet, bear the consequences. This also explains the meaning behind the title of this poster: 'Stop the Cradle, Save the Earth.'",
      },
      {
        image: ["/images/we earth/Citylight_Mockup_1.png"],
      },

      { image: ["/images/we earth/Screenshot_3.png"] },
      { image: ["/images/we earth/Screenshot_4.png"] },
      {
        image: [
          "/images/we earth/395409709_807630237829115_4523478002503349346_n.jpg",
        ],
      },
      {
        image: [
          "/images/we earth/391633187_803060124952793_353002952766498616_n.jpg",
        ],
      },
      {
        image: [
          "/images/we earth/393261726_803056524953153_8554346131519007036_n.jpg",
        ],
      },
      {
        image: [
          "/images/we earth/391633335_803057038286435_2551254459282142911_n.jpg",
        ],
      },
      {
        image: [
          "/images/we earth/394606111_807630484495757_9044646883717594619_n.jpg",
        ],
      },
      {
        image: [
          "/images/we earth/391496597_802606811664791_429614279961112708_n.jpg",
        ],
      },
      {
        image: [
          "/images/we earth/370214068_1402721867345189_2363407546666743987_n.jpg",
        ],
      },
    ],
  },
  {
    title: "Motion Package Brief",
    deliver: "User interface for App, New Feature",
    description: "Motion Graphic Video",
    slug: "motion",
    tools: "After Effect",
    duration: "3 weeks",
    projectPreview: "",
    type: "Motion",
    category: "Personal Project",
    video: "/images/Comp%201_1.mp4",
    intro: "UX Case Study",
    finalProduct: [{ video: "/images/Comp%201_1.mp4" }],
  },
  {
    title: "Drinking Hub",
    deliver: "User interface for App, New Feature",
    description: "3D Staging",
    slug: "3d",
    tools: "Substance 3D Stager",
    duration: "8 weeks",
    projectPreview: "",
    type: "Motion",
    category: "Personal Project",
    video: "/images/3D%20staging-Camera.mp4",
    intro: "3D Staging",
    finalProduct: [{ video: "/images/3D%20staging-Camera.mp4" }],
  },
];

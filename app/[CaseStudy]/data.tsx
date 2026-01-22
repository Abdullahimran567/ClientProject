interface CaseStudyParams {
  params: {
    CaseStudy: string;
  };
}

interface PageData {
  page: string;
  introSection: {
    title: string;
    description: string;
    image: string;
    link: string;
    theme: number[];
  };
  technologySection: {
    theme: number[];
    frontEnd: { name: string; info: string; image: string }[];
    BackEnd: { name: string; info: string; image: string }[];
    Database: { name: string; info: string; image: string }[];
    Others: { name: string; info: string; image: string }[];
  };
  Details: {
    title: string;
    theme: number[];
    sections: {
      heading: string;
      description: string;
      image: string;
      format: string;
    }[];
  };
}

export const data: PageData[] = [
  {
    page: 'Krank',
    introSection: {
      title: 'Krank',
      description: `Krank is a platform for the heavy machinery industry. Their aim is to revolutionize how the market buys and sells heavy equipment.

For that reason, Krank offers to make a sales network for your own company where you can list your machinery for sell/rent/auction.

The privacy of the platform ensures that the integrity of a network remains intact while others on the platform interact with the company's news, posts, sell/rent/auction listings, and most of all the contacts book.`,
      image: '/Images/krank1.png',
      link: '/case-studies/krank',
      theme: [14, 119, 244],
    },

    technologySection: {
      theme: [14, 119, 244],
      frontEnd: [
        {
          name: 'React',
          info: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'React Native',
          info: 'React Native is an open-source UI software framework created by Meta. It allows developers to build mobile apps using React and JavaScript, producing native app experiences for iOS and Android.',
          image: '/Images/react-native.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures the content on the web and works with CSS and JavaScript to build modern applications.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a preprocessor scripting language that is interpreted or compiled into CSS. It allows for variables, nested rules, mixins, and functions, making CSS more maintainable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Expo',
          info: 'Expo is a framework and platform for universal React applications. It helps developers build React Native apps quickly with native features without the need to configure native projects.',
          image: '/Images/expo.svg',
        },
        {
          name: 'Redux',
          info: 'Redux is a predictable state container for JavaScript apps. It helps manage the state of applications in a single global store and works particularly well with React.',
          image: '/Images/redux.svg',
        },
        {
          name: 'AntDesign',
          info: 'AntDesign is a UI design language and React UI library that provides a set of high-quality components to build web applications faster and more consistently.',
          image: '/Images/ant-design.svg',
        },
        {
          name: 'Apollo GraphQL',
          info: 'Apollo GraphQL is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It works with React, React Native, and other frameworks.',
          image: '/Images/apollo-graphql.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node js',
          info: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server and build scalable network applications.",
          image: '/Images/nodejs.svg',
        },
        {
          name: 'GraphQL',
          info: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It allows clients to request exactly the data they need.',
          image: '/Images/graphql.svg',
        },
        {
          name: 'npm',
          info: 'npm (Node Package Manager) is the default package manager for Node.js. It helps developers manage dependencies and packages in JavaScript projects.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Stripe',
          info: 'Stripe is a technology company that builds economic infrastructure for the internet. It provides APIs to handle payments and financial transactions securely.',
          image: '/Images/stripe.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance HTTP server and reverse proxy. It can handle many connections efficiently and is commonly used for web serving, load balancing, and caching.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary is a cloud-based service that provides an end-to-end image and video management solution, including upload, storage, manipulation, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an open-source automation server that helps automate parts of software development, such as building, testing, and deploying code.',
          image: '/Images/jenkins.svg',
        },
      ],
    },

    Details: {
      title: 'WebApps for Super Admin and Clients with Mobile Apps',
      theme: [14, 119, 244],
      sections: [
        {
          heading: 'Features Highlights- Communication',
          description:
            'The disruptive features of the Krank Platform is that it provides the Social Contact linkages between the Buyers and Sellers of the Heavy Machinery Industry which was primarily was working with the old age methods. By cutting the Agent from the equation, Krank provided clear communication through social media type engagement.',
          image: '/Images/krankDetail1.png',
          format: 'left',
        },
        {
          heading: 'Features Highlights- Online Auction',
          description:
            'eForte team was ecstatic while working on the Online Auction module for the Krank platform as this was not only challenging but was a learning experience for handling live Auction bids was no easy task. There are two types of Auction on Krank Platform, Day Auction and Time Auction.',
          image: '/Images/krankDetail2.png',
          format: 'right',
        },
      ],
    },
  },
  {
    page: 'Investment-markets',
    introSection: {
      title: 'Investment Markets',
      description:
        "InvestmentMarkets is a platform for the potential investors that brings them high net worth investment opportunities, primarily aiming for growth, income or both. The platform offers investors a wide range of investment listings and be directly connected with the listee's. In addition to establishing business networking, InvestmentMarkets provides potential investors with and investment seekers latest news and events to stay informed and gain the market insights to inspire their investment journey. There are wide range of features that investors and Listees can interact with and make the best of the carefully engineered platform",
      image: '/Images/investment-Markets1.png',
      link: '/case-studies/Investment-markets',
      theme: [211, 3, 0],
    },
    technologySection: {
      theme: [211, 3, 0],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'Next JS',
          info: 'Next.js is a React framework that provides features like server-side rendering, static site generation, and optimized performance for web applications.',
          image: '/Images/next-js.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a CSS preprocessor that adds variables, nesting, mixins, and functions to make stylesheets more maintainable and scalable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Bootstrap',
          info: 'Bootstrap is a popular CSS framework that helps developers build responsive and mobile-first websites quickly using prebuilt components.',
          image: '/Images/bootstrap.svg',
        },
        {
          name: 'Redux Saga',
          info: 'Redux Saga is a middleware library that manages side effects such as asynchronous API calls in Redux applications using generator functions.',
          image: '/Images/redux-saga.svg',
        },
        {
          name: 'TinyMCE',
          info: 'TinyMCE is a rich text editor that allows users to create and edit content in a WYSIWYG environment for web applications.',
          image: '/Images/tinymce.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Elasticsearch',
          info: 'Elasticsearch is a distributed search and analytics engine designed for fast full-text search, logging, and real-time data analysis.',
          image: '/Images/elasticsearch.svg',
        },
        {
          name: 'npm',
          info: 'npm is the default package manager for Node.js, used to manage and share reusable JavaScript packages.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Strapi',
          info: 'Strapi is an open-source headless CMS that allows developers to build customizable APIs quickly and manage content efficiently.',
          image: '/Images/strapi.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary provides cloud-based image and video management services including optimization, storage, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an automation server used to build, test, and deploy software through continuous integration and delivery pipelines.',
          image: '/Images/jenkins.svg',
        },
        {
          name: 'Eventbrite',
          info: 'Eventbrite is an event management and ticketing platform that enables integration for event creation and registrations.',
          image: '/Images/eventbrite.svg',
        },
        {
          name: 'AWS',
          info: 'Amazon Web Services (AWS) is a cloud computing platform offering scalable infrastructure, storage, and deployment services.',
          image: '/Images/aws.svg',
        },
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'PWA',
          info: 'Progressive Web Apps (PWA) combine the best of web and mobile apps, offering offline support, fast loading, and installable experiences.',
          image: '/Images/pwa.svg',
        },
      ],
    },
    Details: {
      title: `Investment Markets is the
  The transforming discovery tool for astute investors.
      Every kind of investment opportunity - all in one place. Personalised. Unbiased. Free
        `,
      theme: [211, 3, 0],

      sections: [
        {
          heading: 'Every kind of investment opportunity',
          description: 'all in one place. Personalised. Unbiased. Free',
          image: '/Images/investment-MarketsD1.png',
          format: 'left',
        },
        {
          heading: 'PWA Apps',
          description:
            'As required by the clients, eForte created PWA (Progressive Web Apps) for the IM project. PWA is intended to work on any platform that uses a standards-compliant browser, including both desktop and mobile. The PWA apps are great alternative to a Native or Hybrid Mobile apps as they do get installed like any other mobile app and their performance is good.',
          image: '/Images/investment-MarketsD2.png',
          format: 'right',
        },
        {
          heading: 'eForte and InvestmentMarkets Engagement:',
          description: `InvestmentMarkets came to eForte for their startup idea of bridging gap between investment seeking companies and high net-worth individuals and companies. They had done a detailed scope document of many hundred pages to be sure of what they require as a final product.

eForte gave them all the necessary details that would go into developing their idea. We supported our milestones delivery plan with a Level of Efforts Estimate, technical details document, QA and cyber security plan with a post development Technical delivery document so to avoid a vendor lock.

The project has been launched successfully and now in a maintenance and support phase.`,
          image: '/Images/investment-MarketsD3.png',
          format: 'left',
        },
      ],
    },
  },
  {
    page: 'Oddysee',
    introSection: {
      title: 'Oddysee',
      description:
        'Oddysee is the platform to automate the licensing process for domains that require a lot of documentation/plans. It has a documentation module with pre written templates of documents to choose from. A business plan module to automate business plans writing according to the industry and a financial forecast module. All supported with project management tools so to meet deadlines and evaluate team performances.',
      image: '/Images/oddysee1.png',
      link: '/Oddysee',
      theme: [9, 122, 184],
    },
    technologySection: {
      theme: [9, 122, 184],
      frontEnd: [
        {
          name: 'React',
          info: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'React Native',
          info: 'React Native is an open-source UI software framework created by Meta. It allows developers to build mobile apps using React and JavaScript, producing native app experiences for iOS and Android.',
          image: '/Images/react-native.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures the content on the web and works with CSS and JavaScript to build modern applications.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a preprocessor scripting language that is interpreted or compiled into CSS. It allows for variables, nested rules, mixins, and functions, making CSS more maintainable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Expo',
          info: 'Expo is a framework and platform for universal React applications. It helps developers build React Native apps quickly with native features without the need to configure native projects.',
          image: '/Images/expo.svg',
        },
        {
          name: 'Redux',
          info: 'Redux is a predictable state container for JavaScript apps. It helps manage the state of applications in a single global store and works particularly well with React.',
          image: '/Images/redux.svg',
        },
        {
          name: 'AntDesign',
          info: 'AntDesign is a UI design language and React UI library that provides a set of high-quality components to build web applications faster and more consistently.',
          image: '/Images/ant-design.svg',
        },
        {
          name: 'Apollo GraphQL',
          info: 'Apollo GraphQL is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It works with React, React Native, and other frameworks.',
          image: '/Images/apollo-graphql.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node js',
          info: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server and build scalable network applications.",
          image: '/Images/nodejs.svg',
        },
        {
          name: 'GraphQL',
          info: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It allows clients to request exactly the data they need.',
          image: '/Images/graphql.svg',
        },
        {
          name: 'npm',
          info: 'npm (Node Package Manager) is the default package manager for Node.js. It helps developers manage dependencies and packages in JavaScript projects.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Stripe',
          info: 'Stripe is a technology company that builds economic infrastructure for the internet. It provides APIs to handle payments and financial transactions securely.',
          image: '/Images/stripe.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance HTTP server and reverse proxy. It can handle many connections efficiently and is commonly used for web serving, load balancing, and caching.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary is a cloud-based service that provides an end-to-end image and video management solution, including upload, storage, manipulation, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an open-source automation server that helps automate parts of software development, such as building, testing, and deploying code.',
          image: '/Images/jenkins.svg',
        },
      ],
    },
    Details: {
      title: 'Oddysee Marketplace',
      theme: [9, 122, 184],
      sections: [
        {
          heading: 'Oddysee Marketplace',
          description:
            'The platform of Oddysee has a Marketplace where one can purchase already made templates for Cannabis state level Licensing applications. With the premade templates, these documents can be edited with the client company information by filling out a questionnaire',
          image: '/Images/oddysee3.png',
          format: 'left',
        },
        {
          heading: 'Oddysee Template Editor',
          description:
            'The purchased template from the marketplace can be edited with the client company information by filling out a questionnaire. This template editor has can produce many styles of writings for the Cannabis Licensing application to be unique to the applicant. The system remembers the version history of the documents and experienced consultants can be scheduled with from with in the system.',
          image: '/Images/oddysee2.png',
          format: 'right',
        },
      ],
    },
  },

  {
    page: 'Prism',
    introSection: {
      title: 'Project Summary',
      description:
        'A trends Forecasting Engine, Prism is a procedure for forecasting time series data based on an additive model where non-linear trends are adjusted with yearly, weekly, and daily seasonality; this also takes case of the holiday effects. It works best with time series that have strong seasonal effects and several seasons of historical data. The Facebook’s Prophet API is robust to missing data and shifts in the trend, and typically handles outliers well',
      image: '/Images/Prism2.png',
      link: '/case-studies/Prism',
      theme: [220, 58, 217],
    },
    technologySection: {
      theme: [220, 58, 217],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'Next JS',
          info: 'Next.js is a React framework that provides features like server-side rendering, static site generation, and optimized performance for web applications.',
          image: '/Images/next-js.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
      ],
    },
    Details: {
      title: `Problem and Solution`,
      theme: [220, 58, 217],

      sections: [
        {
          heading: 'Problem',
          description:
            'Problem that was most challenging was to smoothen the outliers Outliers in a forecasting engine can cause problems by skewing the forecasted values. Smoothing is a technique used to reduce the impact of outliers on the forecasted values by averaging them with neighboring data points. However, smoothing can also reduce the sensitivity of the forecast to changes in the underlying data, which can lead to a less accurate forecast overall.',
          image: '/Images/prism3.png',
          format: 'left',
        },
        {
          heading: 'Solution',
          description:
            'Problem that was most challenging was to smoothen the outliers Outliers in a forecasting engine can cause problems by skewing the forecasted values. Smoothing is a technique used to reduce the impact of outliers on the forecasted values by averaging them with neighboring data points. However, smoothing can also reduce the sensitivity of the forecast to changes in the underlying data, which can lead to a less accurate forecast overall.',
          image: '/Images/prism3.png',
          format: 'right',
        },
      ],
    },
  },
  {
    page: 'Scheduling-Engine',
    introSection: {
      title: 'Scheduling Engine',
      description:
        "The scheduling engine software developed for Stratex was successful in automating the scheduling process and reducing labor costs for their clients in the Call center and Retail chain industry. The software's additional features such as time-off request system, attendance tracking system, and compliance monitoring system helped the company to remain compliant with labor laws and regulations. The company reported a significant reduction in labor costs and an increase in employee satisfaction after implementing the scheduling engine software",
      image: '/Images/scheduling2.png',
      link: '/case-studies/Scheduling-Engine',
      theme: [39, 37, 81],
    },
    technologySection: {
      theme: [39, 37, 81],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'Next JS',
          info: 'Next.js is a React framework that provides features like server-side rendering, static site generation, and optimized performance for web applications.',
          image: '/Images/next-js.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a CSS preprocessor that adds variables, nesting, mixins, and functions to make stylesheets more maintainable and scalable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Bootstrap',
          info: 'Bootstrap is a popular CSS framework that helps developers build responsive and mobile-first websites quickly using prebuilt components.',
          image: '/Images/bootstrap.svg',
        },
        {
          name: 'Redux Saga',
          info: 'Redux Saga is a middleware library that manages side effects such as asynchronous API calls in Redux applications using generator functions.',
          image: '/Images/redux-saga.svg',
        },
        {
          name: 'TinyMCE',
          info: 'TinyMCE is a rich text editor that allows users to create and edit content in a WYSIWYG environment for web applications.',
          image: '/Images/tinymce.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Elasticsearch',
          info: 'Elasticsearch is a distributed search and analytics engine designed for fast full-text search, logging, and real-time data analysis.',
          image: '/Images/elasticsearch.svg',
        },
        {
          name: 'npm',
          info: 'npm is the default package manager for Node.js, used to manage and share reusable JavaScript packages.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Strapi',
          info: 'Strapi is an open-source headless CMS that allows developers to build customizable APIs quickly and manage content efficiently.',
          image: '/Images/strapi.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary provides cloud-based image and video management services including optimization, storage, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an automation server used to build, test, and deploy software through continuous integration and delivery pipelines.',
          image: '/Images/jenkins.svg',
        },
        {
          name: 'Eventbrite',
          info: 'Eventbrite is an event management and ticketing platform that enables integration for event creation and registrations.',
          image: '/Images/eventbrite.svg',
        },
        {
          name: 'AWS',
          info: 'Amazon Web Services (AWS) is a cloud computing platform offering scalable infrastructure, storage, and deployment services.',
          image: '/Images/aws.svg',
        },
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'PWA',
          info: 'Progressive Web Apps (PWA) combine the best of web and mobile apps, offering offline support, fast loading, and installable experiences.',
          image: '/Images/pwa.svg',
        },
      ],
    },
    Details: {
      title: `Problem and Solution
        `,
      theme: [39, 37, 81],

      sections: [
        {
          heading: 'Problem',
          description:
            'StrateX, as a solutions provider, assessed the need of an efficient Scheduling Engine that be applied to various industry verticals. StrateX current client’s scheduling process was manual and time-consuming, and it has resulted in several problems such as high labor costs, low employee satisfaction, and compliance issues. The Clients wanted to develop a scheduling engine software that can automate the scheduling process, increase efficiency, and reduce labor costs.',
          image: '/Images/scheduling3.png',
          format: 'left',
        },
        {
          heading: 'Solution',
          description:
            'StrateX, our client decided to develop a scheduling engine software with eForte that would automate the scheduling process and optimize staffing levels. The software would use algorithms to create schedules based on factors such as employee availability, skill levels, and job requirements. The software would also include a time-off request system, an attendance tracking system, and a compliance monitoring system to ensure that the company remains compliant with labor laws and regulations.',
          image: '/Images/scheduling4.png',
          format: 'right',
        },
      ],
    },
  },
  {
    page: 'Sellsmart',
    introSection: {
      title: 'Project Summary',
      description:
        'Sellsmart is an online (POS) Point of Sale System. It is a SaaS based platform and is equipped with all the right features of an online POS system.',
      image: '/Images/sellsMart1.png',
      link: '/case-studies/Sellsmart',
      theme: [255, 77, 123],
    },
    technologySection: {
      theme: [255, 77, 123],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'Next JS',
          info: 'Next.js is a React framework that provides features like server-side rendering, static site generation, and optimized performance for web applications.',
          image: '/Images/next-js.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a CSS preprocessor that adds variables, nesting, mixins, and functions to make stylesheets more maintainable and scalable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Bootstrap',
          info: 'Bootstrap is a popular CSS framework that helps developers build responsive and mobile-first websites quickly using prebuilt components.',
          image: '/Images/bootstrap.svg',
        },
        {
          name: 'Redux Saga',
          info: 'Redux Saga is a middleware library that manages side effects such as asynchronous API calls in Redux applications using generator functions.',
          image: '/Images/redux-saga.svg',
        },
        {
          name: 'TinyMCE',
          info: 'TinyMCE is a rich text editor that allows users to create and edit content in a WYSIWYG environment for web applications.',
          image: '/Images/tinymce.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Elasticsearch',
          info: 'Elasticsearch is a distributed search and analytics engine designed for fast full-text search, logging, and real-time data analysis.',
          image: '/Images/elasticsearch.svg',
        },
        {
          name: 'npm',
          info: 'npm is the default package manager for Node.js, used to manage and share reusable JavaScript packages.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Strapi',
          info: 'Strapi is an open-source headless CMS that allows developers to build customizable APIs quickly and manage content efficiently.',
          image: '/Images/strapi.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary provides cloud-based image and video management services including optimization, storage, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an automation server used to build, test, and deploy software through continuous integration and delivery pipelines.',
          image: '/Images/jenkins.svg',
        },
        {
          name: 'Eventbrite',
          info: 'Eventbrite is an event management and ticketing platform that enables integration for event creation and registrations.',
          image: '/Images/eventbrite.svg',
        },
        {
          name: 'AWS',
          info: 'Amazon Web Services (AWS) is a cloud computing platform offering scalable infrastructure, storage, and deployment services.',
          image: '/Images/aws.svg',
        },
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'PWA',
          info: 'Progressive Web Apps (PWA) combine the best of web and mobile apps, offering offline support, fast loading, and installable experiences.',
          image: '/Images/pwa.svg',
        },
      ],
    },
    Details: {
      title: `Welcome to Sellsmart.biz is an online Point of Sale System
        `,
      theme: [255, 77, 123],

      sections: [
        {
          heading: 'About',
          description:
            'SellSmart has all the features of an advanced POS system. You can manage multiple locations from a unified Super Admin panel and can manage their inventories.',
          image: '/Images/sellsMart2.png',
          format: 'left',
        },
        {
          heading: 'RESPONSIVE & COMPATIBLE',
          description:
            'Our online Point of Sale System has been designed to be compatible with all types of devices, including desktop, tablets, and smartphones. Its seamless flow is going to give an exceptional user experience.',
          image: '/Images/sellsMart3.png',
          format: 'right',
        },
        {
          heading: 'Hardware integration',
          description: `SellSmart gets integrated with major 3rd party hardware hassle free`,
          image: '/Images/sellsMart5.jpg',
          format: 'left',
        },
      ],
    },
  },

  {
    page: 'Validatr',
    introSection: {
      title: 'Project Summary',
      description:
        'Validatr.io is a tool for the startups and businesses to do the market validation of the new business ideas and further do Market Research for the same. Both the market validation and market research is done through answering selection of questions which produces detailed report style documents. These documents can be used in business plans and for investor rounds.',
      image: '/Images/validatr1.png',
      link: '/case-studies/Validatr',
      theme: [55, 55, 206],
    },
    technologySection: {
      theme: [55, 55, 206],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'Next JS',
          info: 'Next.js is a React framework that provides features like server-side rendering, static site generation, and optimized performance for web applications.',
          image: '/Images/next-js.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a CSS preprocessor that adds variables, nesting, mixins, and functions to make stylesheets more maintainable and scalable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Bootstrap',
          info: 'Bootstrap is a popular CSS framework that helps developers build responsive and mobile-first websites quickly using prebuilt components.',
          image: '/Images/bootstrap.svg',
        },
        {
          name: 'Redux Saga',
          info: 'Redux Saga is a middleware library that manages side effects such as asynchronous API calls in Redux applications using generator functions.',
          image: '/Images/redux-saga.svg',
        },
        {
          name: 'TinyMCE',
          info: 'TinyMCE is a rich text editor that allows users to create and edit content in a WYSIWYG environment for web applications.',
          image: '/Images/tinymce.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Elasticsearch',
          info: 'Elasticsearch is a distributed search and analytics engine designed for fast full-text search, logging, and real-time data analysis.',
          image: '/Images/elasticsearch.svg',
        },
        {
          name: 'npm',
          info: 'npm is the default package manager for Node.js, used to manage and share reusable JavaScript packages.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Strapi',
          info: 'Strapi is an open-source headless CMS that allows developers to build customizable APIs quickly and manage content efficiently.',
          image: '/Images/strapi.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary provides cloud-based image and video management services including optimization, storage, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an automation server used to build, test, and deploy software through continuous integration and delivery pipelines.',
          image: '/Images/jenkins.svg',
        },
        {
          name: 'Eventbrite',
          info: 'Eventbrite is an event management and ticketing platform that enables integration for event creation and registrations.',
          image: '/Images/eventbrite.svg',
        },
        {
          name: 'AWS',
          info: 'Amazon Web Services (AWS) is a cloud computing platform offering scalable infrastructure, storage, and deployment services.',
          image: '/Images/aws.svg',
        },
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'PWA',
          info: 'Progressive Web Apps (PWA) combine the best of web and mobile apps, offering offline support, fast loading, and installable experiences.',
          image: '/Images/pwa.svg',
        },
      ],
    },
    Details: {
      title: `
        `,
      theme: [55, 55, 206],

      sections: [
        {
          heading: 'Intuitive User Experience',
          description:
            'Multiple Projects can be created through intuitively designed dashboard where team members can be added for collaboration. The Guide Bot is always there to help the user with each section of the application.',
          image: '/Images/validatr2.png',
          format: 'left',
        },
        {
          heading: 'Ready to use Reports',
          description:
            'The output of the platform is beautiful and rich with details report documents that are ready to be used for presentation purposes. Students and Startups both can benefit from this platform.',
          image: '/Images/validatr3.png',
          format: 'right',
        },
      ],
    },
  },

  {
    page: 'Dostpay',
    introSection: {
      title: 'Dostpay',
      description:
        'Dostpay is a 21st century mobile based "Digital Banking Payments platform" which gets easily integrated with the core banking platform and gives the end user power of Digital banking. Dostpay digital Flexible, Branded, Bespoke, Elegantly Simple and Empowering.',
      image: '/Images/Dostpay1.png',
      link: '/case-studies/Dostpay',
      theme: [42, 48, 63],
    },
    technologySection: {
      theme: [42, 48, 63],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },

        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
        {
          name: 'CSS',
          info: 'CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.',
          image: '/Images/css.svg',
        },
        {
          name: 'Bootstrap',
          info: 'Bootstrap is a popular CSS framework that helps developers build responsive and mobile-first websites quickly using prebuilt components.',
          image: '/Images/bootstrap.svg',
        },
        {
          name: 'Redux',
          info: 'Redux is a predictable state container for JavaScript apps. It helps manage the state of applications in a single global store and works particularly well with React.',
          image: '/Images/redux.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
        {
          name: 'PHP',
          info: 'PHP is an open-source server-side scripting language that many devs use for web development. It is also a general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs).',
          image: '/Images/php.svg',
        },
        {
          name: 'npm',
          info: 'npm is the default package manager for Node.js, used to manage and share reusable JavaScript packages.',
          image: '/Images/npm.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
        {
          name: 'SQLite',
          info: 'SQLite is used to develop embedded software for devices like televisions, cell phones, cameras, etc. It can manage low to medium-traffic HTTP requests. SQLite can change files into smaller size archives with lesser metadata. SQLite is used as a temporary dataset to get processed with some data within an application.',
          image: '/Images/sqlite.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
      ],
    },
    Details: {
      title: `
        `,
      theme: [42, 48, 63],

      sections: [
        {
          heading: 'A User App to interact with their daily financial needs',
          description: `This user app is built to handle everyday financial needs quickly and easily. Users can open an online bank account in under a minute and manage their funds without hassle.

The app allows payments to merchants, fund transfers to friends, school fee payments, pocket money management, online shopping, charity donations, and shared committees between friends. It also features DealBook for coupons and vouchers, “My Stores” for following favorite merchants, and supports easy payments through QR codes, point of sale, online methods, and human-memorable hashes.`,
          image: '/Images/Dostpay2.png',
          format: 'left',
        },
      ],
    },
  },
  {
    page: 'emerge-forward',
    introSection: {
      title: 'Emerge Forward',
      description:
        'Emerge as a client wanted to build a platform where they can train the Youth with the soft skills as needed for being successful in the real world. For that they had a plan to develop a platform where students/ participants can create their profiles, take the lectures either online or in person and then take tests for the same. There is an online library for the purpose of continuous update on the knowledge sets needed. Successful candidates were to create a Linkedin type work profiles to get ready for the professional world.',
      image: '/Images/emerge1.png',
      link: '/case-studies/emerge-forward',
      theme: [231, 131, 37],
    },
    technologySection: {
      theme: [231, 131, 37],
      frontEnd: [
        {
          name: 'React JS',
          info: 'React is a JavaScript library for building user interfaces using reusable components. It is widely used for building single-page applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'Next JS',
          info: 'Next.js is a React framework that provides features like server-side rendering, static site generation, and optimized performance for web applications.',
          image: '/Images/next-js.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language used to structure content on the web.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a CSS preprocessor that adds variables, nesting, mixins, and functions to make stylesheets more maintainable and scalable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Bootstrap',
          info: 'Bootstrap is a popular CSS framework that helps developers build responsive and mobile-first websites quickly using prebuilt components.',
          image: '/Images/bootstrap.svg',
        },
        {
          name: 'Redux Saga',
          info: 'Redux Saga is a middleware library that manages side effects such as asynchronous API calls in Redux applications using generator functions.',
          image: '/Images/redux-saga.svg',
        },
        {
          name: 'TinyMCE',
          info: 'TinyMCE is a rich text editor that allows users to create and edit content in a WYSIWYG environment for web applications.',
          image: '/Images/tinymce.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node JS',
          info: 'Node.js is a JavaScript runtime built on Chrome’s V8 engine, enabling server-side development of fast and scalable applications.',
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Elasticsearch',
          info: 'Elasticsearch is a distributed search and analytics engine designed for fast full-text search, logging, and real-time data analysis.',
          image: '/Images/elasticsearch.svg',
        },
        {
          name: 'npm',
          info: 'npm is the default package manager for Node.js, used to manage and share reusable JavaScript packages.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Strapi',
          info: 'Strapi is an open-source headless CMS that allows developers to build customizable APIs quickly and manage content efficiently.',
          image: '/Images/strapi.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL document-oriented database that stores data in flexible JSON-like documents, optimized for scalability and performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance web server and reverse proxy commonly used for load balancing and handling high traffic.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary provides cloud-based image and video management services including optimization, storage, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an automation server used to build, test, and deploy software through continuous integration and delivery pipelines.',
          image: '/Images/jenkins.svg',
        },
        {
          name: 'Eventbrite',
          info: 'Eventbrite is an event management and ticketing platform that enables integration for event creation and registrations.',
          image: '/Images/eventbrite.svg',
        },
        {
          name: 'AWS',
          info: 'Amazon Web Services (AWS) is a cloud computing platform offering scalable infrastructure, storage, and deployment services.',
          image: '/Images/aws.svg',
        },
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'PWA',
          info: 'Progressive Web Apps (PWA) combine the best of web and mobile apps, offering offline support, fast loading, and installable experiences.',
          image: '/Images/pwa.svg',
        },
      ],
    },
    Details: {
      title: `Feature Highlight: Online Tests and Grading System
        `,
      theme: [231, 131, 37],

      sections: [
        {
          heading: 'Feature Highlight: Online Tests and Grading System',
          description:
            'The aim of the platform was not only to embark the students on soft skills learning journey but to gauge them for the receipt of the information. Teachers can create tests and the system would give grades to the students according to the correct answers given by them.',
          image: '/Images/emerge2.png',
          format: 'left',
        },
        {
          heading: 'Feature Highlight: Professional Profile',
          description:
            'The students were encouraged to make their work profile including the Courses they have covered. The profiles are Linkedin like, however those have their personality type mentioned along with the videos and articles they have written. This was to support them in their professional careers in future.',
          image: '/Images/emerge3.png',
          format: 'right',
        },
      ],
    },
  },

  {
    page: 'komb',
    introSection: {
      title: 'Komb',
      description: `Komb
The salon management software ‘Komb’ is designed to automate the day-to-day operations of a salon, including scheduling appointments, managing client information, and inventory management. The software is designed to be user- friendly, with a simple and intuitive interface that makes it easy for salon owners and staff to use.`,
      image: '/Images/komb1.png',
      link: '/case-studies/komb',
      theme: [106, 202, 190],
    },

    technologySection: {
      theme: [106, 202, 190],
      frontEnd: [
        {
          name: 'React',
          info: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications.',
          image: '/Images/reactIcon.svg',
        },
        {
          name: 'React Native',
          info: 'React Native is an open-source UI software framework created by Meta. It allows developers to build mobile apps using React and JavaScript, producing native app experiences for iOS and Android.',
          image: '/Images/react-native.svg',
        },
        {
          name: 'HTML',
          info: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures the content on the web and works with CSS and JavaScript to build modern applications.',
          image: '/Images/html.svg',
        },
        {
          name: 'SCSS',
          info: 'SCSS is a preprocessor scripting language that is interpreted or compiled into CSS. It allows for variables, nested rules, mixins, and functions, making CSS more maintainable.',
          image: '/Images/sass.svg',
        },
        {
          name: 'Expo',
          info: 'Expo is a framework and platform for universal React applications. It helps developers build React Native apps quickly with native features without the need to configure native projects.',
          image: '/Images/expo.svg',
        },
        {
          name: 'Redux',
          info: 'Redux is a predictable state container for JavaScript apps. It helps manage the state of applications in a single global store and works particularly well with React.',
          image: '/Images/redux.svg',
        },
        {
          name: 'AntDesign',
          info: 'AntDesign is a UI design language and React UI library that provides a set of high-quality components to build web applications faster and more consistently.',
          image: '/Images/ant-design.svg',
        },
        {
          name: 'Apollo GraphQL',
          info: 'Apollo GraphQL is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. It works with React, React Native, and other frameworks.',
          image: '/Images/apollo-graphql.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node js',
          info: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server and build scalable network applications.",
          image: '/Images/nodejs.svg',
        },
        {
          name: 'GraphQL',
          info: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It allows clients to request exactly the data they need.',
          image: '/Images/graphql.svg',
        },
        {
          name: 'npm',
          info: 'npm (Node Package Manager) is the default package manager for Node.js. It helps developers manage dependencies and packages in JavaScript projects.',
          image: '/Images/npm.svg',
        },
        {
          name: 'Stripe',
          info: 'Stripe is a technology company that builds economic infrastructure for the internet. It provides APIs to handle payments and financial transactions securely.',
          image: '/Images/stripe.svg',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Nginx',
          info: 'Nginx is a high-performance HTTP server and reverse proxy. It can handle many connections efficiently and is commonly used for web serving, load balancing, and caching.',
          image: '/Images/nginx.svg',
        },
        {
          name: 'Cloudinary',
          info: 'Cloudinary is a cloud-based service that provides an end-to-end image and video management solution, including upload, storage, manipulation, and delivery.',
          image: '/Images/cloudinary.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an open-source automation server that helps automate parts of software development, such as building, testing, and deploying code.',
          image: '/Images/jenkins.svg',
        },
      ],
    },

    Details: {
      title: '',
      theme: [106, 202, 190],
      sections: [
        {
          heading:
            'A User App to interact with the Salon services that you need',
          description: `The Client Mobile App is designed for use by the salon's clients. It allows clients to book, reschedule or cancel appointments, for them and for someone else. The app also includes a feature that allows clients to tip their service provider. Through their mobile app, they can get discount coupons from all the salons available on the Komb platform. One pretty neat feature is that the client can take their selfie before the treatment and after and share with their friends and family. `,
          image: '/Images/komb2.png',
          format: 'left',
        },
        {
          heading: 'Super admin dashboard',
          description:
            'The Super Admin Panel is a webapp that allows the salon owners to manage their employees, view sales, create discount coupons and special offers. The Salon Admin panel has the ability to add, edit, and delete appointments, manage client information, and access inventory management tools. The Super Salon Admin panel includes a reporting feature that provides detailed information about the salons performance, including revenue, client numbers, and appointment statistics. The super Admin Panel on the other hand manages all the Salon Admins, their earnings towards the Komb platform etc.',
          image: '/Images/komb5.png',
          format: 'right',
        },
      ],
    },
  },

  {
    page: 'food-cast',
    introSection: {
      title: 'Project Summary',
      description: `FoodCast Mobile App is designed to forecast ration requirements for an individual or for a family for breakfast, Lunch, and Dinner for a number of days. FoodCast is built to support forecast the food supply, so the user knows when to do the next shopping ahead of time.`,
      image: '/Images/foodCast1.png',
      link: '/case-studies/food-cast',
      theme: [106, 202, 190],
    },

    technologySection: {
      theme: [106, 202, 190],
      frontEnd: [
        {
          name: 'React Native',
          info: 'React Native is an open-source UI software framework created by Meta. It allows developers to build mobile apps using React and JavaScript, producing native app experiences for iOS and Android.',
          image: '/Images/react-native.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node js',
          info: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server and build scalable network applications.",
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'Express js',
          info: 'Express.js is a fast and minimal Node.js framework used to build web servers and APIs with ease.',
          image: '/Images/expressjs.png',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an open-source automation server that helps automate parts of software development, such as building, testing, and deploying code.',
          image: '/Images/jenkins.svg',
        },
      ],
    },

    Details: {
      title: 'Welcome to FoodCast Only buy what you need FoodCast your ration',
      theme: [106, 202, 190],
      sections: [
        {
          heading: 'Make an informed decision about your panry buying!',
          description: `Forecast food supplies for family and members of the society. Using past data and algorithms to produce accurate results. `,
          image: '/Images/foodCast2.png',
          format: 'left',
        },
        {
          heading: 'Want to have forcast of rations into following meal times?',
          description: 'You can, with FoodCast.',
          image: '/Images/Food-cast.png',
          format: 'right',
        },
      ],
    },
  },
  {
    page: 'crowd-check',
    introSection: {
      title: 'Project Summary',
      description: `Crowdcheck is Android and iOS mobile application developed to let individual users know the state of crowd at a given place listed in Google Maps so that users are able to maintain Social Distancing in an informed manner.

We are making use of Google APIs data for displaying an aggregated view of the percentage of crowd present in real time at a searched place.
 User can also perform a search to check out single or multiple destination based on different categories. There is an option to see complete details of a selected destination with crowdedness graph.`,
      image: '/Images/crowd_checkbanner.png',
      link: '/case-studies/crowd-check',
      theme: [4, 250, 4],
    },

    technologySection: {
      theme: [4, 250, 4],
      frontEnd: [
        {
          name: 'Kotlin',
          info: 'Kotlin is a modern programming language used for Android development and backend applications, fully interoperable with Java.',
          image: '/Images/Kotlin.svg',
        },
        {
          name: 'Swift',
          info: 'Swift is a powerful programming language developed by Apple for building iOS, macOS, and other Apple platform applications.',
          image: '/Images/Swift.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node js',
          info: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server and build scalable network applications.",
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'Express js',
          info: 'Express.js is a fast and minimal Node.js framework used to build web servers and APIs with ease.',
          image: '/Images/expressjs.png',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an open-source automation server that helps automate parts of software development, such as building, testing, and deploying code.',
          image: '/Images/jenkins.svg',
        },
      ],
    },

    Details: {
      title: '',
      theme: [4, 250, 4],
      sections: [
        {
          heading: 'Welcome to Chrowd Check Plan your trip with care',
          description: ` `,
          image: '/Images/crowd_check2.png',
          format: 'left',
        },
        {
          heading: 'INSIGHTS',
          description: `We are making use of Google APIs data for displaying an aggregated view of the percentage of crowd present in real time at a searched place.

User can also perform a search to check out single or multiple destination based on different categories. There is an option to see complete details of a selected destination with crowdedness graph.`,
          image: '/Images/crowd_check3.png',
          format: 'right',
        },
      ],
    },
  },
  {
    page: 'instApp-deal',
    introSection: {
      title: 'Project Summary',
      description: `InstApp Deals is a mobile based application that relies on the traditional Word of Mouth Marketing and allows users to search and redeem coupons for discounts on products and services at participating retailers. The app typically allows users to search for coupons by store, category, or product, and also offers push notifications to alert users to new deals and promotions. It also has a chat feature for customers to connect with their family and frineds.`,
      image: '/Images/InstApp-Deal-Mobilebanner.png',
      link: '/case-studies/instApp-deal',
      theme: [145, 0, 29],
    },

    technologySection: {
      theme: [145, 0, 29],
      frontEnd: [
        {
          name: 'Kotlin',
          info: 'Kotlin is a modern programming language used for Android development and backend applications, fully interoperable with Java.',
          image: '/Images/Kotlin.svg',
        },
        {
          name: 'Swift',
          info: 'Swift is a powerful programming language developed by Apple for building iOS, macOS, and other Apple platform applications.',
          image: '/Images/Swift.svg',
        },
      ],
      BackEnd: [
        {
          name: 'Node js',
          info: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It allows developers to run JavaScript on the server and build scalable network applications.",
          image: '/Images/nodejs.svg',
        },
        {
          name: 'Firebase',
          info: 'Firebase is a platform by Google that provides backend services such as authentication, real-time databases, and hosting.',
          image: '/Images/firebase.svg',
        },
        {
          name: 'Express js',
          info: 'Express.js is a fast and minimal Node.js framework used to build web servers and APIs with ease.',
          image: '/Images/expressjs.png',
        },
      ],
      Database: [
        {
          name: 'MongoDB',
          info: 'MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents. It is designed for scalability and high performance.',
          image: '/Images/mongodb.svg',
        },
      ],
      Others: [
        {
          name: 'Docker',
          info: 'Docker is a containerization platform that allows applications to be packaged with their dependencies for consistent deployment.',
          image: '/Images/docker.svg',
        },
        {
          name: 'Jenkins',
          info: 'Jenkins is an open-source automation server that helps automate parts of software development, such as building, testing, and deploying code.',
          image: '/Images/jenkins.svg',
        },
      ],
    },

    Details: {
      title:
        'Welcome InstApp Deal - a revolution in the world of traditional advertisement',
      theme: [145, 0, 29],
      sections: [
        {
          heading: 'Features and Process flow of the App',
          description: `InstApp allows consumers to make purchasing decisions based on word of mouth recommendations of people they know and based on their personal interests
Core features of the word of mouth App are users can:
Share their purchase savings details and recommend promotional products to their social contacts
Follow store promotions based on their interest
Purchase promotional products that have been endorsed by a friend or followed by the user. `,
          image: '/Images/i-mac.png',
          format: 'left',
        },
      ],
    },
  },
];

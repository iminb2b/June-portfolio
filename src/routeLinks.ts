const routeLinks = {
  homePage: () => `/`,
  about: () => `/about`,
  contact: () => `/contact`,
  projects: () => `/projects`,
  project: ({ slug }: { slug: string }) => `/projects/${slug}`,
};

export default routeLinks;

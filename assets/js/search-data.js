// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Research themes and open-source implementations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research experience, publications, and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-cross-tokenizer-distillation",
          title: 'Cross-Tokenizer Distillation',
          description: "Robust transfer between teacher and student models with different tokenizers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cross-tokenizer-distillation/";
            },},{id: "projects-embedding-model-distillation",
          title: 'Embedding Model Distillation',
          description: "Efficient sentence representations through teacher-anchored layer alignment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/embedding-distillation/";
            },},{id: "projects-llm-trajectory-alignment",
          title: 'LLM Trajectory Alignment',
          description: "Aligning how teacher and student representations evolve across model depth.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-trajectory-alignment/";
            },},{id: "projects-neural-topic-modeling",
          title: 'Neural Topic Modeling',
          description: "Representation learning for coherent topics with optimal transport and multi-objective optimization.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neural-topic-modeling/";
            },},{id: "projects-vision-language-model-distillation",
          title: 'Vision-Language Model Distillation',
          description: "A unified map of knowledge transfer methods for efficient multimodal models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vlm-distillation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%68%61%6D%6B%68%61%6E%68%63%68%69%30%34%30%36@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/chiiipk", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=RriETykAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

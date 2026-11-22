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
          description: "Research papers and their implementations.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, research interests, experience, publications, and honors.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-dwa-kd-dual-space-weighting-and-time-warped-alignment-for-cross-tokenizer-knowledge-distillation",
          title: 'DWA-KD: Dual-Space Weighting and Time-Warped Alignment for Cross-Tokenizer Knowledge Distillation',
          description: "Findings of EACL 2026 · Dual-space weighting and time-warped alignment across tokenizers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cross-tokenizer-distillation/";
            },},{id: "projects-talas-teacher-anchored-layer-alignment-with-adaptive-sharpness-aware-minimization-for-embedding-distillation",
          title: 'TALAS: Teacher-Anchored Layer Alignment with Adaptive Sharpness-Aware Minimization for Embedding Distillation',
          description: "ACL 2026 · Efficient embedding distillation through teacher-anchored layer alignment.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/embedding-distillation/";
            },},{id: "projects-mta-multi-granular-trajectory-alignment-for-large-language-model-distillation",
          title: 'MTA: Multi-Granular Trajectory Alignment for Large Language Model Distillation',
          description: "ACL 2026 · Aligning teacher and student trajectories at multiple linguistic granularities.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-trajectory-alignment/";
            },},{id: "projects-a-multi-objective-surrogate-framework-for-training-neural-topic-models",
          title: 'A Multi-Objective Surrogate Framework for Training Neural Topic Models',
          description: "Neurocomputing 2026 · Surrogate objectives for stable multi-objective training of neural topic models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/multi-objective-topic-modeling/";
            },},{id: "projects-a-framework-for-neural-topic-modeling-using-hierarchical-clustering-and-contrastive-learning-with-optimal-transport",
          title: 'A Framework for Neural Topic Modeling Using Hierarchical Clustering and Contrastive Learning with...',
          description: "Neurocomputing 2025 · Hierarchical topic structure and document representations with HiCOLT.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neural-topic-modeling/";
            },},{id: "projects-sra-span-representation-alignment-for-large-language-model-distillation",
          title: 'SRA: Span Representation Alignment for Large Language Model Distillation',
          description: "ACL 2026 · Span-level alignment for knowledge transfer across different tokenizers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/span-representation-alignment/";
            },},{id: "projects-a-survey-on-knowledge-distillation-of-vision-language-models",
          title: 'A Survey on Knowledge Distillation of Vision-Language Models',
          description: "Findings of EMNLP 2026 · A unified taxonomy of knowledge distillation for multimodal models.",
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

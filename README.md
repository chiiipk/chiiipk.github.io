# chiiipk.github.io

Personal academic website of **Pham Khanh Chi**, a Data Science and Artificial Intelligence student at Hanoi University of Science and Technology and a research member of the Foundation Model Lab.

Research interests include efficient language models, knowledge distillation, representation alignment, cross-tokenizer transfer, and natural language processing.

## Local development

This website uses the [al-folio](https://github.com/alshedivat/al-folio) Jekyll theme.
Its structure is adapted from [tmp0810.github.io](https://github.com/tmp0810/tmp0810.github.io).

```bash
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000> to preview the site.

## Deployment

Push changes to the `main` branch. The `Deploy site` GitHub Actions workflow builds the site and publishes the generated files to `gh-pages`.

In the repository settings, configure GitHub Pages to deploy from the `gh-pages` branch.

## Content

- `_pages/`: About, Publications, Projects, Repositories, and CV pages
- `_projects/`: research project pages
- `_news/`: homepage news items
- `_bibliography/papers.bib`: publications and preprints
- `_data/cv.yml`: web CV
- `_data/socials.yml`: public contact and profile links
- `assets/pdf/Pham-Khanh-Chi-CV.pdf`: downloadable CV

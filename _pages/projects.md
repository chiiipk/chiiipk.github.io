---
layout: page
title: Projects
permalink: /projects/
description: Research themes and open-source implementations.
nav: true
nav_order: 3
---

<div class="projects">
  <div class="row row-cols-1 row-cols-md-2 grid">
    {% assign sorted_projects = site.projects | sort: "importance" %}
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>

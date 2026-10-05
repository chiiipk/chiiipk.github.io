---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[published=true]* %}

<h2>Preprints</h2>

{% bibliography --group_by none --query @*[preprint=true]* %}

</div>

<p><small><sup>*</sup> denotes equal contribution.</small></p>

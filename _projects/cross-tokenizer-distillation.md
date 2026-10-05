---
layout: page
title: Cross-Tokenizer Distillation
description: Robust transfer between teacher and student models with different tokenizers.
importance: 2
category: language-model-distillation
github: https://github.com/chiiipk/dwa-kd
---

This line of work builds tokenizer-agnostic units and alignment objectives for transferring knowledge across model families. **SRA** uses span representations and geometric regularization, while **DWA-KD** combines dual-space token weighting with Soft-DTW alignment of embedding and hidden-state sequences.

[SRA](https://aclanthology.org/2026.acl-long.1522/) · [DWA-KD](https://aclanthology.org/2026.findings-eacl.181/)

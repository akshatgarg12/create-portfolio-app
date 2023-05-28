---
title: "FastReport - performance monitoring tool"
description: "An open-source tool from the suite of ToolCity to monitor and measure lighthouse scores for multiple pages and websites, with features like alerting, setting baselines and integrations with multiple workflows."
img: "/blogs/fast-report/hero.png"
---

<p align="center">
  <img src="/blogs/fast-report/hero.png" height="400" />
</p>

## Introduction

Imagine a tool that lets you set baseline scores for different categories in Lighthouse scores. When your website's score falls below these baselines, it sends alerts to your email and Slack channels. It's easy to picture, right? While many performance monitoring tools already exist, they can be difficult to use or have complicated ways to set baseline configurations for all your pages.

Introducing FastReport: a simple, open-source, Lighthouse-based performance monitoring tool that is user-friendly and can be customized to fit your needs. The tool is completely open source, so you can host it yourself for your business. It's designed to make it easy to develop and add plugins that change how it reports, giving you control over the reporting process.

> Open source is not just about free software. It's about the freedom to learn, create, and contribute to something bigger than oneself." - Richard Stallman

## Is FastReport necessary for your business?

Lighthouse scores are well-known for evaluating the overall performance of a website. They provide various metrics that help us understand the kind of experience users have when they visit our site. In short, having a faster website is crucial when it comes to engaging modern customers. According to [Google](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/), if your page load time increases from one to three seconds, there is a 32 percent higher chance that users will leave your site. [Another study](https://neilpatel.com/blog/loading-time/) found that 79 percent of visitors who are dissatisfied with a website's performance state that they won't return to the site again.

FastReport focuses on achieving and maintaining optimal performance. Sometimes, when we make changes to our applications, they can result in longer load times and blocking requests, causing our websites to slow down. It is crucial to identify these issues before merging the changes into the main application. This is where FastReport, a performance monitoring tool, becomes invaluable.

FastReport allows you to define baseline configurations for your pages, enabling you to set performance expectations. It sends alerts when your scores drop below the specified baseline for a particular category. With FastReport, you can run Lighthouse scores for multiple pages in a single API call and receive curated reports for all the pages. This allows you to identify which pages are most affected by the changes you've made.

Additionally, FastReport offers the capability to send alerts through email and Slack channels, giving you the flexibility to schedule performance reports according to your needs. By leveraging FastReport, you can proactively monitor your website's performance, identify performance regressions, and ensure that your application maintains excellent performance standards.

## Integration guide

The simplest way currently to use FastReport is to directly use the [source code](https://github.com/ToolCity/FastReport) and host in on your servers, we are constantly looking for better ways to distribute this software like a [docker](https://www.docker.com/) container or a cloud version for users who dont wan't to go through hassle of setting up things.

Currently the best way is follow the [docs on github](https://github.com/ToolCity/FastReport/blob/main/readme.md) for setting up and using the tool.

## Be a part of the community

[ToolCity](https://github.com/ToolCity) is a organisation dedicated to developing tools that simplify web development. If you'd like to participate and contribute to our community, we encourage you to visit our organization's GitHub page and share your ideas by creating an issue.

We're also in the process of establishing a community channel on Discord, where you can join and engage with fellow developers. Stay tuned for updates on that front!

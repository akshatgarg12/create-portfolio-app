---
title: "FastReport - performance monitoring tool"
description: "An open-source tool from the suite of ToolCity to monitor and measure lighthouse scores for multiple pages and websites, with features like alerting, setting baselines and integrations with multiple workflows."
img: "/blogs/fast-report/hero.png"
---

<p align="center">
  <img src="/blogs/fast-report/hero.png" height="400" />
</p>

## Introduction

FastReport is an open source solution to monitor lighthouse scores across all pages of your application and get curated reports in channels like email and slack. It allows you to trigger lighthouse score reports for all pages of your web app by a single API call, once the report is generated results are sent to your channels in form of table and html.

Features of the tool :

- Define a config, with the urls which you want to test, baseline scores against which report should be generated.
- Call the `/trigger` endpoint from your workflows, such as from a github action , cron job or even a manual trigger using the API client. This will trigger the lighthouse test for all your urls. You can even specify the categories and devices you want to test.
- Get reports in your channels.
- Send these reports to other channels by creating your own plugins!

> Open source is not just about free software. It's about the freedom to learn, create, and contribute to something bigger than oneself." - Richard Stallman

## Is FastReport necessary for your business?

Lighthouse scores are well-known for evaluating the overall performance of a website. They provide various metrics that help us understand the kind of experience users have when they visit our site. In short, having a faster website is crucial when it comes to engaging modern customers. According to [Google](https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/), if your page load time increases from one to three seconds, there is a 32 percent higher chance that users will leave your site. [Another study](https://neilpatel.com/blog/loading-time/) found that 79 percent of visitors who are dissatisfied with a website's performance state that they won't return to the site again.

FastReport focuses on achieving and maintaining optimal performance. Sometimes, when we make changes to our applications, they can result in longer load times and blocking requests, causing our websites to slow down. It is crucial to identify these issues before merging the changes into the main application. This is where FastReport, a performance monitoring tool, becomes invaluable.

FastReport allows you to define baseline configurations for your pages, enabling you to set performance expectations. It sends alerts when your scores drop below the specified baseline for a particular category. With FastReport, you can run Lighthouse scores for multiple pages in a single API call and receive curated reports for all the pages. This allows you to identify which pages are most affected by the changes you've made.

Additionally, FastReport offers the capability to send alerts through email and Slack channels, giving you the flexibility to schedule performance reports according to your needs. By leveraging FastReport, you can proactively monitor your website's performance, identify performance regressions, and ensure that your application maintains excellent performance standards.

## Plugin Friendly

FastReport uses a message-queue system to pass data across the system, each queue is responsible for a specific task. A simple plugin can be created which can cater to your specific business needs for eg. a queue which curates the scope of improvement for all the pages and uses AI to summarize it.

This is a simple architecture diagram of how the tool works.

<p align="center">
  <img src="/blogs/fast-report/architecture.png" height="400" />
</p>

## Integration guide

The simplest way currently to use FastReport is to directly clone the [source code](https://github.com/ToolCity/FastReport) and set the configuration files and enviornment variables and create an docker image out of it. Deploy a container using that image to a hosting service of your choice!

Get to know more about how to setup and use the tool : [docs on github](https://github.com/ToolCity/FastReport/blob/main/readme.md)

## Be a part of the community

[ToolCity](https://github.com/ToolCity) is a organisation dedicated to developing tools that simplify web development. If you'd like to participate and contribute to our community, we encourage you to visit our organization's GitHub page and share your ideas by creating an issue.

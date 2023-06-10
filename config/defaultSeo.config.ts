// eslint-disable-next-line import/no-anonymous-default-export
export default (url: string) => ({
  titleTemplate: "%s | Akshat Garg",
  defaultTitle: "Akshat Garg Blog",
  description: "Personal portfolio @akshatgarg12",
  openGraph: {
    url,
    title: "Akshat Garg Blog",
    description: "Personal portfolio @akshatgarg12",
    images: [
      {
        url: url + "/me.png",
        width: 800,
        height: 600,
        alt: "hero image",
        type: "image/jpeg",
      },
    ],
    siteName: "Akshat Garg Blog",
  },
});

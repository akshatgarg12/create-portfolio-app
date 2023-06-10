import HomeData from "./home.json";
// eslint-disable-next-line import/no-anonymous-default-export
export default (url: string) => ({
  titleTemplate: "%s | Akshat Garg",
  defaultTitle: "Akshat Garg Blog",
  description: "Personal portfolio @akshatgarg12",
  canonical: url,
  openGraph: {
    url,
    title: "Akshat Garg Blog",
    description: "Personal portfolio @akshatgarg12",
    images: [
      {
        url: url + HomeData.myImage,
        width: 800,
        height: 600,
        alt: "hero image",
        type: "image/jpeg",
      },
    ],
    siteName: "Akshat Garg Blog",
  },
});

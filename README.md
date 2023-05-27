# Create your portfolio

A minimalistic portfolio template with blogs (markdown support), made for developers.

## Features

- Home page with about and contact details
- Experience page with multiple experience cards
- Projects page , integrated with github API to fetch projects mentioned in `config/projects.json`
- Blogs page with blogs rendered from `/blogs` folder
- Multi themed, add more themes by adding in `themes.json`
- Comes with i18n configured to support multiple locales, add a new locale by adding in `public/some-lang/common.json` use object from `en` folder and change that for ease.
- Statically generated pages for performance! 🚀

## Create your own

- Fork / Clone the repo
- Change the data in `/config` folder
- Add assets like hero images, company logos in public folder
- Add your resume in `public/documents` as `resume.pdf`
- Publish first blog in `/blog` folder
- Easy deploy on vercel

## Add and configure multiple locales

- Copy the `en` folder in `public/locales` dir and rename in to the language of your choice eg-'de'
- Make content changes in the `common.json` file
- Add the new language to the i18n.locales field in the `next-i18next.config.js` file and change the default locale in case you want the newly added locale as default.
- enable locale change component in `config/footer.json` file to show locale component in footer.

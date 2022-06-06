# NaTelha Blog

- **Live blog**: [URL](https://natelha.blog/)
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Query language**: [GraphQL](https://graphql.org/)
- **Content**: [GraphCMS](https://graphcms.com/)
- **Newsletter**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Data**: [Google Analytics](https://developers.google.com/analytics)

## Project description

I'm extremely thrilled to announce my first blog ever created: NaTelha! One day I was wondering about and realized that I had a lot to say about some topics and wanted to share my thoughts with whoever's willing to listen =)

So go ahead and check out [natelha.blog](https://natelha.blog/), comments are appreciated!

If you don't speak portuguese though I'm not sure you'll care so much about its content (pt-en togglers are on the plans), but if you're looking around here I supposed you're interested in code, so let's get to it, I hope you get intrigued, curious and inspired to give life to your own ideas, really wish this helps somehow.

## Project Overview

- `components/*` - Various components used throughout the site.
- `layouts/*` - The different layout options available to use on each page.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) Powering comments creation.
- `services/index` - Handles requests made with [graphql](https://graphql.org) to graphCMS content, for each purpose.
- `pages/*` - All other static pages such as category post display, each post content and 404.
- `public/*` - Static assets.
- `styles/*` - A handful of global styles to complement tailwindcss.

## Running Locally

```bash
$ git clone https://github.com/brinobruno/na-telha.git
$ cd na-telha
$ yarn install
$ yarn run dev
```

Create a `.env` file similar to `.ENVexample.md` and include the appropriate keys.
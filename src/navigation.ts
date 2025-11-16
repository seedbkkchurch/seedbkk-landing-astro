import { Links } from './const/Links'
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks'
export const headerData = {
    links: [
        {
            text: 'Homes',
            links: [
                {
                    text: 'Give',
                    href: getPermalink('/homes/give'),
                },
                {
                    text: 'History',
                    href: getPermalink('/homes/history'),
                },
                {
                    text: 'Mobile App',
                    href: getPermalink('/homes/mobile-app'),
                },
                {
                    text: 'About us',
                    href: getPermalink('/homes/about'),
                },
                {
                    text: 'culture',
                    href: getPermalink('/homes/culture'),
                },
                {
                    text: 'core value',
                    href: getPermalink('/corevalue'),
                },
            ],
        },
        // {
        //   text: 'Pages',
        //   links: [
        //     {
        //       text: 'Features (Anchor Link)',
        //       href: getPermalink('/#features'),
        //     },
        //     {
        //       text: 'Services',
        //       href: getPermalink('/services'),
        //     },
        //     {
        //       text: 'Pricing',
        //       href: getPermalink('/pricing'),
        //     },
        //     {
        //       text: 'About us',
        //       href: getPermalink('/about'),
        //     },

        //     {
        //       text: 'Terms',
        //       href: getPermalink('/terms'),
        //     },
        //     {
        //       text: 'Privacy policy',
        //       href: getPermalink('/privacy'),
        //     },
        //   ],
        // },
        // {
        //   text: 'Event',
        //   links: [
        //     {
        //       text: 'Lead Generation',
        //       href: getPermalink('/landing/lead-generation'),
        //     },
        //     {
        //       text: 'Long-form Sales',
        //       href: getPermalink('/landing/sales'),
        //     },
        //     {
        //       text: 'Click-Through',
        //       href: getPermalink('/landing/click-through'),
        //     },
        //     {
        //       text: 'Product Details (or Services)',
        //       href: getPermalink('/landing/product'),
        //     },
        //     {
        //       text: 'Coming Soon or Pre-Launch',
        //       href: getPermalink('/landing/pre-launch'),
        //     },
        //     {
        //       text: 'Subscription',
        //       href: getPermalink('/landing/subscription'),
        //     },
        //   ],
        // },
        {
            text: 'Blog',
            links: [
                {
                    text: 'Blog List',
                    href: getBlogPermalink(),
                },
                // {
                //   text: 'Article',
                //   href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
                // },
                // {
                //   text: 'Article (with MDX)',
                //   href: getPermalink('markdown-elements-demo-post', 'post'),
                // },
                // {
                //   text: 'Category Page',
                //   href: getPermalink('tutorials', 'category'),
                // },
                // {
                //   text: 'Tag Page',
                //   href: getPermalink('astro', 'tag'),
                // },
            ],
        },
        {
            text: 'บทเรียน',
            links: [
                {
                    text: 'มานาอาจารย์ใหญ่',
                    href: 'https://youtu.be/gi2aAwn_Xtc?si=Bg3IygEx1gQiwmHj',
                },
                {
                    text: 'บทเรียนผู้เชื่อใหม่',
                    href: 'https://youtu.be/UYIhjhNNRxU?si=EJB-fBWSrDq5x9el',
                },
            ],
        },
        {
            text: 'Tools',
            links: [
                {
                    text: 'สำรวจของประทาน',
                    href: 'https://seedbkkchurch.github.io/GiftFromGod/',
                },
                {
                    text: 'generate QR code',
                    href: 'https://seedbkkchurch.github.io/qr-code-seed/',
                },
            ],
        },
        // {
        //     text: 'Contact',
        //     href: getPermalink('/contact'),
        // },
    ],
    actions: [{ text: 'Worship With Us', href: getPermalink('/contact'), target: '_blank' }],
}

export const footerData = {
    links: [
        {
            title: '',
            links: [
                // { text: 'Features', href: '#' },
                // { text: 'Security', href: '#' },
                // { text: 'Team', href: '#' },
                // { text: 'Enterprise', href: '#' },
                // { text: 'Customer stories', href: '#' },
                // { text: 'Pricing', href: '#' },
                // { text: 'Resources', href: '#' },
            ],
        },
        {
            title: '',
            links: [
                // { text: 'Developer API', href: '#' },
                // { text: 'Partners', href: '#' },
                // { text: 'Atom', href: '#' },
                // { text: 'Electron', href: '#' },
                // { text: 'AstroWind Desktop', href: '#' },
            ],
        },
        {
            title: '',
            links: [
                // { text: 'Docs', href: '#' },
                // { text: 'Community Forum', href: '#' },
                // { text: 'Professional Services', href: '#' },
                // { text: 'Skills', href: '#' },
                // { text: 'Status', href: '#' },
            ],
        },
        {
            title: '',
            links: [
                // { text: 'About', href: '#' },
                // { text: 'Blog', href: '#' },
                // { text: 'Careers', href: '#' },
                // { text: 'Press', href: '#' },
                // { text: 'Inclusion', href: '#' },
                // { text: 'Social Impact', href: '#' },
                // { text: 'Shop', href: '#' },
            ],
        },
    ],
    secondaryLinks: [
        // { text: 'Terms', href: getPermalink('/terms') },
        // { text: 'Privacy Policy', href: getPermalink('/privacy') },
    ],
    socialLinks: [
        { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: Links.youtube },
        { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: Links.instagram },
        { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: Links.facebook },
        { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
        { ariaLabel: 'Github', icon: 'tabler:brand-github', href: Links.github },
    ],
    footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="/icons/SEED_CHURCH_LOGO.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/NantipatSoftEn"> NantipatSoftEn </a> · All rights reserved.
  `,
}

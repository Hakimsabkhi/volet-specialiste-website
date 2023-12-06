import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Type',
      href: getPermalink('/type-volet-roulant'),
    },
    {
      text: 'Prix',
      href: getPermalink('/tarifs-volet-roulant'),
    },
    {
      text: 'Matériaux',
      href: getPermalink('/materiaux-volet-roulant'),
    },
    {
      text: 'Devis gratuit',
      href: '/devis-gratuit',
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [
    {
      type: 'button',
      class: 'btn btn-primary font-medium rounded-4xl md:hidden',
      text: 'Appelez Nous',
      href: 'tel:01 85 49 07 07',
    },
    {
      type: 'button',
      class: 'btn btn-primary font-medium rounded-4xl',
      text: 'Contactez Nous',
      href: '/contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'INFOS LÉGALES',
      links: [
        { text: 'Conditions générales', href: '/conditions-generales' },
        { text: 'politique de confidentialité', href: '/politique-de-confidentialite' },
      ],
    },
    {
      title: 'CONTACT',
      links: [
        { text: 'Qui sommes-nous ?', href: '/qui-sommes-nous ' },
        { text: 'Contact', href: '/contact' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/volet.specialiste' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/volet.specialiste/' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/volet-sepcialiste' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/voletspecialist' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@volet.specialiste' },
  ],
  footNote: `
    Made by <span class="text-blue-600"> © 2023 -S.Abdelhakim </span> · All rights reserved.
  `,
};

////href="http://localhost:4321/type-volet"

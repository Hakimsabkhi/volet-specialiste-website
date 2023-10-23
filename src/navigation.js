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
      href: getPermalink('/tarifs'),
    },
    {
      text: 'Matériaux',
      href: getPermalink('/materiaux'),
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
      class:
        'btn btn-primary font-medium rounded-4xl md:hidden',
      text: 'Appelez Nous',
      href: 'tel:01 85 49 07 07',
    },
    {
      type: 'button',
      class:
        'btn btn-primary font-medium rounded-4xl',
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
        { text: 'Conditions générales', href: '#' },
        { text: 'politique de confidentialité', href: '#' },
      ],
    },
    {
      title: 'CONTACT',
      links: [
        { text: 'Qui sommes-nous ?', href: '#' },
        { text: 'Contact', href: '#' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline " href="/"> © 2023 -Volet specialiste </a> · All rights reserved.
  `,
};

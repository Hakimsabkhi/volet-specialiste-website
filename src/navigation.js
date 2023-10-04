import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Accueil',
      href: getPermalink('/'),
    },
    {
      text: 'Type de volet roulant',
      href: getPermalink('/type-volet-roulant'),
    },
    {
      text: 'Tarifs et prix',
      href: getPermalink('/tarifs'),
    },
    {
      text: 'matériaux',
      href: getPermalink('/materiaux'),
    },
    {
      text: 'Devis gratuit',
      href: '/devis-gratuit',
    },
  ],
  actions: [
    {
      type: 'button',
      class:
        'text-white bg-[var(--aw-color-secondary)] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-4xl text-sm px-5 py-3 text-center inline-flex items-center 2xl:mr-24',
      text: 'Appelez Nous',
      href: 'tel:01 85 49 07 07',
    },
    {
      type: 'button',
      class:
        'md:hidden text-white bg-[var(--aw-color-secondary)] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-4xl text-sm px-5 py-3 text-center inline-flex items-center 2xl:mr-24',
      text: 'Contactez-nous',
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

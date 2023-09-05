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
        'text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 ml-2 md:mr-2 md:mr-24',
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
        { text: 'Politique de vie privée', href: '#' },
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

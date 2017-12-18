/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of people who have contributed to the project*/
const contributors = [
  {
    caption: 'Geoff',
    image: 'https://avatars1.githubusercontent.com/u/16880181?s=460&v=4',
    infoLink: 'https://github.com/nating',
    pinned: true,
  },
  {
    caption: 'Dario',
    image: 'https://avatars2.githubusercontent.com/u/9294058?s=400&v=4',
    infoLink: 'https://github.com/dariota',
    pinned: true,
  },
  {
    caption: 'McGizzle',
    image: 'https://avatars3.githubusercontent.com/u/16902920?s=400&v=4',
    infoLink: 'https://github.com/mcgizzle',
    pinned: true,
  },
  {
    caption: 'Scarlett',
    image: 'https://avatars2.githubusercontent.com/u/11089733?s=400&v=4',
    infoLink: 'https://github.com/scarlehh',
    pinned: true,
  },
];

const siteConfig = {
  title: 'CS Exams' /* title for your website */,
  tagline: 'A website for Computer Science Students in Trinity College Dublin',
  url: 'https://facebook.github.io' /* your website url */,
  baseUrl: '/test-site/' /* base url for your project */,
  projectName: 'test-site',
  headerLinks: [
    {doc: 'electrotechnology', label: 'Modules'},
    {page: 'help', label: 'Contributing'},
    {href: 'https://github.com/nating/cs-exams', label: 'GitHub'},
  ],
  contributors,
  /* path to images for header/footer */
  headerIcon: 'img/cs-exams.svg',
  footerIcon: 'img/cs-exams.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#222222',
    secondaryColor: '#444444',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    'Geoffrey Natin',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/nating/cs-exams',
};

module.exports = siteConfig;

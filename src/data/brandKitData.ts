
import { BrandAsset } from '@/types';

export const brandColors = [
  { name: 'Primary Black', hex: '#000000', rgb: '0, 0, 0' },
  { name: 'Primary White', hex: '#FFFFFF', rgb: '255, 255, 255' },
  { name: 'Light Gray', hex: '#F1F1F1', rgb: '241, 241, 241' },
  { name: 'Dark Gray', hex: '#222222', rgb: '34, 34, 34' },
  { name: 'Gray', hex: '#888888', rgb: '136, 136, 136' },
];

export const typography = [
  { name: 'Playfair Display', usage: 'Display, Headings', weights: ['400', '500', '600', '700'] },
  { name: 'Inter', usage: 'Body Text, UI Elements', weights: ['300', '400', '500', '600', '700'] },
];

export const brandAssets: BrandAsset[] = [
  {
    id: '1',
    name: 'Primary Logo',
    description: 'Our main logo for use on white backgrounds.',
    fileTypes: ['SVG', 'PNG', 'EPS'],
    downloadUrls: {
      SVG: '/assets/brand/realm-primary-logo.svg',
      PNG: '/assets/brand/realm-primary-logo.png',
      EPS: '/assets/brand/realm-primary-logo.eps',
    },
    previewUrl: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Secondary Logo',
    description: 'Alternative logo for use on dark backgrounds.',
    fileTypes: ['SVG', 'PNG', 'EPS'],
    downloadUrls: {
      SVG: '/assets/brand/realm-secondary-logo.svg',
      PNG: '/assets/brand/realm-secondary-logo.png',
      EPS: '/assets/brand/realm-secondary-logo.eps',
    },
    previewUrl: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Monochrome Logo',
    description: 'Single color version for limited color applications.',
    fileTypes: ['SVG', 'PNG', 'EPS'],
    downloadUrls: {
      SVG: '/assets/brand/realm-mono-logo.svg',
      PNG: '/assets/brand/realm-mono-logo.png',
      EPS: '/assets/brand/realm-mono-logo.eps',
    },
    previewUrl: '/placeholder.svg',
  },
  {
    id: '4',
    name: 'Favicon',
    description: 'Icon for browser tabs and app icons.',
    fileTypes: ['SVG', 'PNG', 'ICO'],
    downloadUrls: {
      SVG: '/assets/brand/realm-favicon.svg',
      PNG: '/assets/brand/realm-favicon.png',
      ICO: '/assets/brand/realm-favicon.ico',
    },
    previewUrl: '/placeholder.svg',
  },
  {
    id: '5',
    name: 'Symbol Only',
    description: 'Our standalone symbol for recognizable applications.',
    fileTypes: ['SVG', 'PNG', 'EPS'],
    downloadUrls: {
      SVG: '/assets/brand/realm-symbol.svg',
      PNG: '/assets/brand/realm-symbol.png',
      EPS: '/assets/brand/realm-symbol.eps',
    },
    previewUrl: '/placeholder.svg',
  },
];

export const brandDosDonts = [
  {
    do: 'Use adequate clear space around the logo.',
    dont: 'Crowd the logo with other elements.',
  },
  {
    do: 'Use the provided color variations only.',
    dont: 'Apply custom colors to the logo.',
  },
  {
    do: 'Scale the logo proportionally.',
    dont: 'Stretch or distort the logo.',
  },
  {
    do: 'Use the logo on approved backgrounds.',
    dont: 'Place the logo on busy backgrounds.',
  },
  {
    do: 'Use the monochrome version when needed.',
    dont: 'Create your own logo variations.',
  },
];

export const permissions = [
  'You may use our logo to link to our official website.',
  'You may use our logo in press releases that feature our collaboration or partnership.',
  'You may use our logo in presentations referencing our work or partnership.',
  "You may not use our logo to imply endorsement of products or services we haven't explicitly endorsed.",
  'You may not alter our logo or use it as part of another logo or design.',
];

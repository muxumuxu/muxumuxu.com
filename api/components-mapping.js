/*
** Import your component and parser here, next, fill the array after all imports
*/
import Navigation from '@/components/navigation'
import parseNavigation from './parser/navigation'

import Separator from '@/components/separator'
import parseSeparator from './parser/separator'

import HomeHero from '@/components/home-hero'
import parseHomeHero from './parser/home-hero'

import HomeCustomers from '@/components/home-customers'
import parseHomeCustomers from './parser/home-customers'

import ImageBanner from '@/components/image-banner'
import parseImageBanner from './parser/image-banner'

import ThreeColumnList from '@/components/three-column-list'
import parseThreeColumnList from './parser/three-column-list'

import TwoColumn from '@/components/two-column'
import parseTwoColumn from './parser/two-column'

import FooterSection from '@/components/footer-section'
import parseFooterSection from './parser/footer-section'

/*
** - Mapping is organized this way
** [
**   {
**      contentfulId: <contentful-id>,
**      component: <component>,
**      componenentName: <component camel case name>,
**      parser: <parsing function>
**   }
** ]
*/
export default [
  { contentfulId: 'navigation', parser: parseNavigation, componentName: 'Navigation', component: Navigation },
  { contentfulId: 'separator', parser: parseSeparator, componentName: 'Separator', component: Separator },
  { contentfulId: 'homeCustomersSection', parser: parseHomeCustomers, componentName: 'HomeCustomers', component: HomeCustomers },
  { contentfulId: 'homeHeroSection', parser: parseHomeHero, componentName: 'HomeHero', component: HomeHero },
  { contentfulId: 'imageBannerSection', parser: parseImageBanner, componentName: 'ImageBanner', component: ImageBanner },
  { contentfulId: 'threeColumnListSection', parser: parseThreeColumnList, componentName: 'ThreeColumnList', component: ThreeColumnList },
  { contentfulId: 'twoColumnSection', parser: parseTwoColumn, componentName: 'TwoColumn', component: TwoColumn },
  { contentfulId: 'footerSection', parser: parseFooterSection, componentName: 'FooterSection', component: FooterSection }
]

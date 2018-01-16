/*
** Import your component and parser here, next, fill the array after all imports
*/
import Navigation from '@/components/navigation'
import parseNavigation from './parser/navigation'

import Separator from '@/components/separator'
import parseSeparator from './parser/separator'

import TitleSection from '@/components/title-section'
import parseTitleSection from './parser/title-section'

import HomeHero from '@/components/home-hero'
import parseHomeHero from './parser/home-hero'

import HomeCustomers from '@/components/home-customers'
import parseHomeCustomers from './parser/home-customers'

import ImageBanner from '@/components/image-banner'
import parseImageBanner from './parser/image-banner'

import ThreeColumnList from '@/components/three-column-list'
import parseThreeColumnList from './parser/three-column-list'

import TwoColumnDescription from '@/components/two-column-description'
import parseTwoColumnDescription from './parser/two-column-description'

import ImageGrid from '@/components/image-grid'
import parseImageGrid from './parser/image-grid'

import BlogArticleLink from '@/components/blog-article-link'
import parseBlogArticleLink from './parser/blog-article-link'

import JobList from '@/components/job-list'
import parseJobList from './parser/job-list'

import PartnersGrid from '@/components/partners-grid'
import parsePartnersGrid from './parser/partners-grid'

import LogosList from '@/components/logos-list'
import parseLogosList from './parser/logos-list'

import TwoColumnList from '@/components/two-column-list'
import parseTwoColumnList from './parser/two-column-list'

import TwoColumnLinks from '@/components/two-column-links'
import parseTwoColumnLinks from './parser/two-column-links'

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
  { contentfulId: 'titleSection', parser: parseTitleSection, componentName: 'TitleSection', component: TitleSection },
  { contentfulId: 'homeCustomersSection', parser: parseHomeCustomers, componentName: 'HomeCustomers', component: HomeCustomers },
  { contentfulId: 'homeHeroSection', parser: parseHomeHero, componentName: 'HomeHero', component: HomeHero },
  { contentfulId: 'imageBannerSection', parser: parseImageBanner, componentName: 'ImageBanner', component: ImageBanner },
  { contentfulId: 'threeColumnListSection', parser: parseThreeColumnList, componentName: 'ThreeColumnList', component: ThreeColumnList },
  { contentfulId: 'twoColumnSection', parser: parseTwoColumnDescription, componentName: 'TwoColumnDescription', component: TwoColumnDescription },
  { contentfulId: 'imageGridSection', parser: parseImageGrid, componentName: 'ImageGrid', component: ImageGrid },
  { contentfulId: 'blogArticleLinkSection', parser: parseBlogArticleLink, componentName: 'BlogArticleLink', component: BlogArticleLink },
  { contentfulId: 'jobListSection', parser: parseJobList, componentName: 'JobList', component: JobList },
  { contentfulId: 'partnersGridSection', parser: parsePartnersGrid, componentName: 'PartnersGrid', component: PartnersGrid },
  { contentfulId: 'logosListSection', parser: parseLogosList, componentName: 'LogosList', component: LogosList },
  { contentfulId: 'twoColumnListSection', parser: parseTwoColumnList, componentName: 'TwoColumnList', component: TwoColumnList },
  { contentfulId: 'twoColumnLinksSection', parser: parseTwoColumnLinks, componentName: 'TwoColumnLinks', component: TwoColumnLinks },
  { contentfulId: 'footerSection', parser: parseFooterSection, componentName: 'FooterSection', component: FooterSection }
]

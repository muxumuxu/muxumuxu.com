/*
** Import your component and parser here, next, fill the array after all imports
*/
import Navigation from '@/components/navigation'
import parseNavigation from './parser/navigation'

import HomeCustomers from '@/components/home-customers'
import parseHomeCustomers from './parser/home-customers'

import ImageBanner from '@/components/image-banner'
import parseImageBanner from './parser/image-banner'

import Separator from '@/components/separator'
import parseSeparator from './parser/separator'

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
  { contentfulId: 'homeCustomersSection', parser: parseHomeCustomers, componentName: 'HomeCustomers', component: HomeCustomers },
  { contentfulId: 'imageBannerSection', parser: parseImageBanner, componentName: 'ImageBanner', component: ImageBanner },
  { contentfulId: 'separator', parser: parseSeparator, componentName: 'Separator', component: Separator }
]

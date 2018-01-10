/*
** Import your component and parser here, next, fill the array after all imports
*/
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
  { contentfulId: 'separator', parser: parseSeparator, componentName: 'Separator', component: Separator }
]

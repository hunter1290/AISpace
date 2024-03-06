import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name:"name",
      title:"name",
      type:"string"
    },
    {
      name:"desc",
      title:"description",
      type:"string"
    },
    { 
       name:"img",
       title:"image",
       type:"image"
    },
    {
      name:"trend",
      title:"isTrending",
      type:"boolean"
    },
    {
      name:"upvote",
      title:"upvote",
      type:"number"
    },
    {
      name:"feedback",
      title:"feedback",
      type:"string"
    },
    defineField({
      type: 'code',
      name: 'myCodeField',
      title: 'My code field',
    }),
  ],
})

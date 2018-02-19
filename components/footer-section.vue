<template>
  <div class="wrapper flex-row space-between">
    <div class="section">
      <h3>{{data.companyName}}</h3>
      <a :href="data.email.url">{{data.email.title}}</a>
      <a :href="data.phoneNumber.url">{{data.phoneNumber.title}}</a>
      <div class="location flex-row">
        <span v-for="location in data.locations">
          {{location.title}}
          <image-hi-res-contentful :data="location.image" :width="28" />
        </span>
      </div>
    </div>
    <div class="section">
      <h3>{{data.moreTitle}}</h3>
      <ul>
        <li v-for="item in data.moreItems" :key="item.link.title" :style="{'background': 'url(' + item.image.src + ') no-repeat left 2px', 'background-size': '28px 28px'}" :width="28">
          <hyper-link class="item" :data="item.link" />
        </li>
      </ul>
    </div>
    <div class="section">
      <h3>{{data.newsTitle}}</h3>
      <p>{{data.newsDescription}}</p>
      <!--Begin MailChimp Signup Form-->
      <div id="mc_embed_signup">
        <form action="//muxumuxu.us14.list-manage.com/subscribe/post?u=eccf5f72255b20ee4b052a622&amp;id=34f01c0455" class="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
          <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL">Email Address</label>
            <input class="required email" id="mce-EMAIL" name="EMAIL" placeholder="Enter your email..." type="email" value="" />
            <div aria-hidden="true" style="position: absolute; left: -5000px;">
              <input name="b_eccf5f72255b20ee4b052a622_34f01c0455" tabindex="-1" type="text" value="" />
            </div>
            <input class="button" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped lang="sass">
@import '../assets/css/variables.sass'

.wrapper
  padding: 60px 20px

h3
  margin-bottom: 10px

a
  font-size: 16px
  display: block
  padding-top: 10px

  &:hover
    opacity: 0.7

p
  font-size: 16px
  line-height: 23px

.location
  padding-top: 22px

  img
    height: 28px
    width: 28px
    top: 7px
    position: relative

  span
    &:last-child
      &::before
        content: '/'
        margin: 0 5px

.item
  padding-left: 30px

.section

  &:last-child
    max-width: 300px

    h3
      margin-bottom: 16px

  &:nth-child(2)
    padding-right: 90px

form
  padding-top: 5px

  label
    display: none

  input
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    border-bottom: 1px solid
    font-family: 'Roboto', sans-serif
    font-size: 16px
    padding: 12px 0

    &.email
      border: 0
      border-bottom: 1px solid #D8D8D8
      display: inline-block
      width: 210px
      margin: 0 10px 0 0
      -webkit-appearance: none
      border-radius: 0

      &:hover
        border-bottom: 1px solid #B5B5B5

      &:focus
        border-bottom: 1px solid $muxu-green

    &.button
      border: 0
      background: white
      display: inline-block
      border-bottom: 1px solid white
      -webkit-appearance: none

      &:hover
        color: $muxu-green
        cursor: pointer

@media screen and (max-width: 900px)

  .section:nth-child(2)
    padding-right: 0

@media screen and (max-width: 740px)

  .wrapper
    flex-direction: column
    padding: 50px 20px

  .section:not(:first-child)
    margin-top: 50px

  .location
    padding-top: 0
    margin-top: -6px

</style>

<template>
    <div class="pie-demo">
        <CustomNavMenu :onMenuIconClick="toggleSideMenu" />
        <SideMenu
                :open="shouldShowSideMenu"
                :closeSideMenu="toggleSideMenu"
                :sideBarTitle="'Examples'"
        />
        <div class="element-container" v-html="rawHtml"></div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import CustomNavMenu from './Utils/CustomNavMenu.vue'
  import SideMenu from './Utils/SideMenu.vue';
  import LogRocket from 'logrocket';

  function setupPie(model, schemaJSONURI, configure, index, multiplePies) {
    const pieDemo = document.getElementById(`demo${index}`);

    if (pieDemo) {
      pieDemo.model = model;
      pieDemo.justElement = index > 0;
      pieDemo.multiplePies = multiplePies;
      pieDemo.jsonObjects = [
        {
          "_id": "5c50554112a2e00e4feaca96",
          "index": 0,
          "guid": "5005b3e9-e947-4faf-b389-bf3bc2735cd0",
          "isActive": false,
          "balance": "$2,891.49",
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "eyeColor": "green",
          "name": "Hardin Sargent",
          "gender": "male",
          "company": "PYRAMIS",
          "email": "hardinsargent@pyramis.com",
          "phone": "+1 (894) 498-3554",
          "address": "838 Grove Place, Bodega, Connecticut, 6693",
          "about": "Lorem est nulla officia fugiat amet tempor dolor proident magna officia exercitation sit nostrud magna. Nulla voluptate amet labore dolor dolore pariatur nulla laboris proident nostrud pariatur deserunt est minim. Qui dolor pariatur commodo ad deserunt est qui. Excepteur nostrud deserunt ex labore adipisicing voluptate. Eu culpa anim sunt velit veniam dolor irure.\r\n",
          "registered": "2017-03-15T01:28:11 -02:00",
          "latitude": 47.036331,
          "longitude": 4.853763,
          "tags": [
            "amet",
            "commodo",
            "proident",
            "aliquip",
            "qui",
            "deserunt",
            "Lorem"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Eleanor Conrad"
            },
            {
              "id": 1,
              "name": "Prince Whitfield"
            },
            {
              "id": 2,
              "name": "Rosalind Herrera"
            }
          ],
          "greeting": "Hello, Hardin Sargent! You have 5 unread messages.",
          "favoriteFruit": "strawberry"
        },
        {
          "_id": "5c5055410de35abd49c7403b",
          "index": 1,
          "guid": "b80919ce-6d85-4712-9cc8-ad32fd045c22",
          "isActive": false,
          "balance": "$3,676.37",
          "picture": "http://placehold.it/32x32",
          "age": 25,
          "eyeColor": "green",
          "name": "Katy Duran",
          "gender": "female",
          "company": "KOFFEE",
          "email": "katyduran@koffee.com",
          "phone": "+1 (947) 437-2899",
          "address": "698 McDonald Avenue, Springdale, Minnesota, 624",
          "about": "Lorem et commodo culpa pariatur est voluptate officia. Laborum do enim incididunt laboris laboris dolor aliquip quis labore ut occaecat do aliquip non. Aute sit ullamco qui occaecat pariatur laboris consectetur dolore laboris laborum proident officia irure. Cillum in duis ut pariatur consequat labore velit exercitation aute quis.\r\n",
          "registered": "2014-10-11T09:26:58 -03:00",
          "latitude": 56.880043,
          "longitude": 157.861177,
          "tags": [
            "exercitation",
            "pariatur",
            "proident",
            "voluptate",
            "sint",
            "dolore",
            "sit"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Powers Trevino"
            },
            {
              "id": 1,
              "name": "Darlene Marshall"
            },
            {
              "id": 2,
              "name": "Leblanc Gonzales"
            }
          ],
          "greeting": "Hello, Katy Duran! You have 3 unread messages.",
          "favoriteFruit": "apple"
        },
        {
          "_id": "5c505541941ffb97a7aeff98",
          "index": 2,
          "guid": "8c252660-71e2-4e79-91d7-45c919d1a4f4",
          "isActive": true,
          "balance": "$3,579.87",
          "picture": "http://placehold.it/32x32",
          "age": 33,
          "eyeColor": "brown",
          "name": "Alisa Goodwin",
          "gender": "female",
          "company": "SPEEDBOLT",
          "email": "alisagoodwin@speedbolt.com",
          "phone": "+1 (833) 526-2343",
          "address": "472 Keen Court, Sexton, Oklahoma, 8507",
          "about": "Lorem qui cillum amet nostrud est laboris anim commodo. Occaecat pariatur et minim cupidatat ad eiusmod dolore cupidatat culpa. Adipisicing aute consequat dolor labore id aute duis esse id adipisicing dolore. Laborum labore cillum pariatur occaecat anim nisi Lorem.\r\n",
          "registered": "2017-05-14T12:07:37 -03:00",
          "latitude": -89.219431,
          "longitude": 39.787296,
          "tags": [
            "sunt",
            "mollit",
            "consequat",
            "velit",
            "magna",
            "minim",
            "commodo"
          ],
          "friends": [
            {
              "id": 0,
              "name": "Lamb Albert"
            },
            {
              "id": 1,
              "name": "Fischer Kidd"
            },
            {
              "id": 2,
              "name": "Maxwell Hicks"
            }
          ],
          "greeting": "Hello, Alisa Goodwin! You have 7 unread messages.",
          "favoriteFruit": "banana"
        }
      ];
      pieDemo.schemaJSONURI = schemaJSONURI;
      pieDemo.configure = configure;

      if (pieDemo.loadPies) {
        if (!window['pie']) {
          const packages = [
            "x-calculator@2.0.4",
            "x-categorize@2.7.4",
            "extended-text-entry@3.3.3",
            "graph-lines@1.1.5",
            "inline-choice@2.0.5",
            "x-match@1.5.1",
            "math-inline@0.0.11",
            "multiple-choice@2.4.6",
            "number-line@3.0.9",
            "placement-ordering@3.2.2",
            "point-intercept@3.1.5",
            "x-protractor@2.0.1",
            "x-ruler@3.0.5",
            "select-text@3.3.4",
            "text-entry@3.1.3"
          ];
          const elementNumber = 15;
          const names = packages.slice(0, elementNumber).join('+');
          const packagesName = `@pie-element/${packages.slice(0, elementNumber).join('+@pie-element/')}`.replace(/x-/g, '');

          pieDemo.loadPies({
            [names]: packagesName
          });
        }
      } else {
        setTimeout(() => setupPie(model, schemaJSONURI, configure, index), 200);
      }
    }
  }

  function renderVersions(site) {
    const items = document.querySelectorAll('.pie-menu-content .sidebar-group-items li');
    const pages = site.pages.filter(page => page.path.indexOf('/examples/') >= 0);

    items.forEach((item, index) => {
      if (!item.querySelector('.version')) {
        const span = document.createElement('span');
        const page = pages[index];
        const pie = page.frontmatter.pie.split('@');

        span.className = 'version';
        span.innerText = pie[2];

        item.appendChild(span);
      }
    });
  }

  const getPies = (frontmatter) => {
    if (frontmatter.multiple) {
      return frontmatter.pies;
    }

    return [frontmatter.pie];
  };

  const getModels = (frontmatter) => {
    if (frontmatter.multiple) {
      return frontmatter.models;
    }

    return [frontmatter.model];
  };

  export default {
    components: { CustomNavMenu, SideMenu },

    data () {
      return {
        sideMenuVisible: false,
        observer: null
      };
    },

    computed: {
      navRef() {
        return this.$refs.navMenu;
      },

      rawHtml () {
        const text = [];
        const pies = getPies(this.$page.frontmatter);

        pies.forEach((pie, index) => text.push(
          `<pie-demo id="demo${index}" load="false" editor="true" pie="${pie}"></pie-demo>`
        ));

        return text.join('\n')
      },

      shouldShowSideMenu() {
        return this.sideMenuVisible;
      },
    },

    mounted () {
      const { themeConfig } = this.$site;
      if (themeConfig.logrocketProject)  {
        LogRocket.init(themeConfig.logrocketProject);
      }
      const models = getModels(this.$page.frontmatter);
      const configure = this.$page.frontmatter.configure;
      const schemaJSONURI = this.$page.frontmatter.schemaJSONURI;

      window.addEventListener('scroll', this.onScroll);

      models.forEach((model, index) => setupPie(model, schemaJSONURI, configure, index, models.length > 1));

      this.observer = new ResizeObserver(() => {
        if (this.navRef.offsetWidth > 750) {
          this.sideMenuVisible = false;
        }
      });

      if (this.navRef) {
        this.observer.observe(this.navRef);
      }

      renderVersions(this.$site);
    },

    beforeDestroy() {
      if (this.observer && this.navRef) {
        this.observer.unobserve(this.navRef);
      }
    },

    updated () {
      const models = getModels(this.$page.frontmatter);
      const configure = this.$page.frontmatter.configure;
      const schemaJSONURI = this.$page.frontmatter.schemaJSONURI;

      models.forEach((model, index) => setupPie(model, schemaJSONURI, configure, index, models.length > 1));

      renderVersions(this.$site);
    },

    methods: {
      toggleSideMenu() {
        this.sideMenuVisible = !this.sideMenuVisible;
      },
      toggleSidebar (to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      },
      // side swipe
      onTouchStart (e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },
      onTouchEnd (e) {
        const dx = e.changedTouches[0].clientX - this.touchStart.x
        const dy = e.changedTouches[0].clientY - this.touchStart.y
        if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
          if (dx > 0 && this.touchStart.x <= 80) {
            this.toggleSidebar(true)
          } else {
            this.toggleSidebar(false)
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
    @import "../variables.styl";
    @import "../navMenu.styl";

    .customDemoPage
        height 100%

        .custom-layout
            height 100%
            padding-top 0

            .theme-container
                height 100%

    .customHomePage
        display flex
        flex-direction column
        height 100%

    .pie-demo
        height 100%
        .custom-nav-menu
            .nav-menu
                position initial
        .element-container
            box-sizing border-box
            height calc(100% - 65px)
            overflow scroll
            padding 0 0 0 220px
            width 100%
        .pie-side-menu
            background #fff
            right initial
            top 65px
            width 220px
            .pie-menu-content
                position relative
                width 220px
                .menu-header
                    display none
                & > .nav-links
                    display none
                .search-box-container
                    display flex
                    justify-content flex-start
                    .search-box
                        width 100%
                        input
                            margin 0 20px
                            width calc(100% - 40px)
                        .suggestions
                            z-index 99
                .sidebar
                    display block !important
                    .sidebar-group-items
                        li
                            display flex
                            align-items center
                            justify-content space-between
                            height 36px
                            a
                                margin-left 20px
                                height auto !important
                                padding 0 !important
                                width auto
                            .version
                                color rgba(0, 0, 0, 0.4)
                                font-size 10px
                                margin-right 10px

                    .nav-links
                        display none
                    .sidebar-links
                        display block

    @media (max-width: 1200px)
        .customDemoPage
            padding 0

            .sidebar
                display none !important

        .pie-demo
            height 100%
            .pie-side-menu
                background-color rgba(0, 0, 0, 0.2)
                display none
                width 100%
                &.open
                    display block
                    left initial
                    right 0
                    top 0
                .pie-menu-content
                    position absolute
                    width 300px
                    .menu-header
                        display flex
                        margin 0
                    & > .nav-links
                        display block
                        .nav-item
                            display block
            .element-container
                padding 0

</style>
<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../../../node_modules/vuepress/lib/default-theme/styles/theme.styl" lang="stylus"></style>

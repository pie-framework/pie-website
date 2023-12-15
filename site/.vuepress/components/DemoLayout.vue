<template>
    <div class="pie-demo">
        <CustomNavMenu :onMenuIconClick="toggleSideMenu"/>
        <SideMenu
                :open="shouldShowSideMenu"
                :closeSideMenu="toggleSideMenu"
                :sideBarTitle="'Examples'"
        />
        <div class="element-container" v-html="rawHtml + printRawHtml"></div>
    </div>
</template>

<script>
import Vue from 'vue'
import CustomNavMenu from './Utils/CustomNavMenu.vue'
import SideMenu from './Utils/SideMenu.vue';
import LogRocket from 'logrocket';
import ResizeObserver from 'resize-observer-polyfill';

const Sentry = require('@sentry/browser');

function setupPie(elements, model, schemas, configure, index, multiplePies) {
  const pieDemo = document.getElementById(`demo${index}`);

  if (pieDemo) {
    pieDemo.model = model;
    pieDemo.justElement = index > 0;
    pieDemo.modelSchemaJSONURI = schemas.model;
    pieDemo.configureSchemaJSONURI = schemas.configure;

    /*if (pieDemo.loadPies) {
      if (!window['pie']) {
        const packages = elements.map(el => `${el.name}@${el.version}`);
        const names = packages.join('+');
        const packagesName = `@pie-element/${packages.join('+@pie-element/')}`.replace(/x-/g, '');

        pieDemo.loadPies({
          [names]: packagesName
        });
      }
    } else {
      setTimeout(() => setupPie(elements, model, schemas, configure, index), 200);
    }*/
  }
}

function renderVersions(elements) {
  const items = document.querySelectorAll('.pie-menu-content .sidebar-group-items li');
  const itemObj = elements.reduce((acc, item) => {
    acc[item.label] = `v${item.version}`;

    return acc;
  }, {});

  items.forEach((item) => {
    if (!item.querySelector('.version')) {
      const span = document.createElement('span');
      const version = itemObj[item.textContent];

      span.className = 'version';
      span.innerText = version;

      item.appendChild(span);
    }
  });
}

const renderPrint = (model, pie) => {
    // customElements.whenDefined('pie-print').then(() => {
    const one = document.querySelector('pie-print');
    document.querySelector('#student').addEventListener('click', () => {
        one.config = { item, options };
    });
    document
        .querySelector('#instructor')
        .addEventListener('click', () => {
            one.config = { item, options: { role: 'instructor' } };
        });
    // this resolver loads `@ps` els
    one.resolve = (tagName, pkg) => {
        const [_, n, v] = pkg.match(/@pie-element\/(.*?)@(.*)/);
        let urlToo
        ;
        pkg.includes('next') ? urlToo
         = `https://cdn.jsdelivr.net/npm/@pie-element/${n}@next/module/print.js` : urlToo
         = `https://cdn.jsdelivr.net/npm/@pie-element/${n}@latest/module/print.js`
        return Promise.resolve({
            tagName,
            pkg,
            url: urlToo,
            module: true,
        });

    };
    const item = {
        id: model.id,
        models: [model],
        markup: `<${model.element} id="${model.id}"></${model.element}`,
        elements: {
            [model.element]: pie
        }
    };
    const options = { role: 'student' };
    one.config = { item, options };
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

    data() {
      return {
        sideMenuVisible: false,
        observer: null
      };
    },

    computed: {
      navRef() {
        return this.$refs.navMenu;
      },

      rawHtml() {
        const text = [];
        const pies = getPies(this.$page.frontmatter);
        const { themeConfig } = this.$site;
        const { elements } = themeConfig;
        const packageName = pies[0].replace(/@[0-9]{1}\..*/g, '');
        const element = elements.find(el => el.packageName === packageName);

        if (element) {
          pies.forEach((pie, index) => text.push(
            `<pie-demo id="demo${index}" load="true" editor="true" pie="${element.packageName}@${element.version}"></pie-demo>`
          ));
        }

        return text.join('\n')
      },

    printRawHtml() {
      return `<div class="print-element-container">
        <div class="print-element-container__header">
            <div class="print-element-container__header__title">Print View</div>
            <div class="print-element-container__header__subtitle">The print view an instructor or student sees.</div>
        </div>
        <button id="student" class="toggle-role">student</button>
        <button id="instructor" class="toggle-role">instructor</button>
        <pie-print id="one"></pie-print>
    </div>`;
    },

    shouldShowSideMenu() {
      return this.sideMenuVisible;
    },
  },

    mounted() {
      const { themeConfig } = this.$site;

      if (themeConfig.logrocketProject) {
        LogRocket.init(themeConfig.logrocketProject);
      }
      if (themeConfig.sentryDsn)  {
        Sentry.init({ dsn: themeConfig.sentryDsn });
      }
      if (themeConfig.sentryDsn && themeConfig.logrocketProject)  {
        Sentry.configureScope(scope => {
          scope.addEventProcessor(async event => {
            event.extra.sessionURL = LogRocket.sessionURL;
            return event;
          });
        });
      }
      const models = getModels(this.$page.frontmatter);
      const configure = this.$page.frontmatter.configure;
      const modelSchemaJSONURI = this.$page.frontmatter.modelSchemaJSONURI;
      const configureSchemaJSONURI = this.$page.frontmatter.configureSchemaJSONURI;

    window.addEventListener('scroll', this.onScroll);

      models.forEach((model, index) => setupPie(
        themeConfig.elements,
        model,
        { model: modelSchemaJSONURI, configure: configureSchemaJSONURI },
        configure,
        index,
        models.length > 1
      ));

      this.observer = new ResizeObserver(() => {
        if (this.navRef.offsetWidth > 750) {
          this.sideMenuVisible = false;
        }
      });

      if (this.navRef) {
        this.observer.observe(this.navRef);
      }

    console.log('models', models, configure, themeConfig.elements)
    renderVersions(themeConfig.elements);

      const pies = getPies(this.$page.frontmatter);
      const { elements } = themeConfig;
      const packageName = pies[0].replace(/@[0-9]{1}\..*/g, '');
      const element = elements.find(el => el.packageName === packageName);

      if (element) {
          renderPrint(models[0], `${element.packageName}@${element.version}`);
      }
  },

  beforeDestroy() {
    if (this.observer && this.navRef) {
      this.observer.unobserve(this.navRef);
    }
  },

    updated() {
      const { themeConfig } = this.$site;
      const models = getModels(this.$page.frontmatter);
      const configure = this.$page.frontmatter.configure;
      const modelSchemaJSONURI = this.$page.frontmatter.modelSchemaJSONURI;
      const configureSchemaJSONURI = this.$page.frontmatter.configureSchemaJSONURI;

      models.forEach((model, index) => setupPie(
        themeConfig.elements,
        model,
        { model: modelSchemaJSONURI, configure: configureSchemaJSONURI },
        configure,
        index,
        models.length > 1
      ));

      renderVersions(themeConfig.elements);

        const pies = getPies(this.$page.frontmatter);
        const packageName = pies[0].replace(/@[0-9]{1}\..*/g, '');
        const element = themeConfig.elements.find(el => el.packageName === packageName);

        if (element) {
            renderPrint(models[0], `${element.packageName}@${element.version}`);
        }
    },

    methods: {
      toggleSideMenu() {
        this.sideMenuVisible = !this.sideMenuVisible;
      },
      toggleSidebar(to) {
        this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      },
      // side swipe
      onTouchStart(e) {
        this.touchStart = {
          x: e.changedTouches[0].clientX,
          y: e.changedTouches[0].clientY
        }
      },
      onTouchEnd(e) {
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
        .print-element-container__header__title
            color rgba(0, 0, 0, 0.87)
            font-size 16px
            font-weight 500
            margin 0 8px 4px 0
        .print-element-container__header__subtitle
            font-size 12px
            font-weight 300
            line-height 1.5
            color rgba(0, 0, 0, 0.56)
            border-bottom 1px solid rgba(0, 0, 0, 0.12)
            padding 0 0 8px 0
        .print-element-container
            overflow scroll
            border 16px solid #3f51b5
            padding 16px
        .toggle-role
            background #fff
            border 1px solid #ccc
            border-radius 4px
            box-shadow 0 1px 2px rgba(0, 0, 0, 0.1)
            color #333
            cursor pointer
            font-size 14px
            font-weight 500
            height 40px
            line-height 40px
            margin 10px
            padding 0 20px
            text-align center
            transition all 0.2s ease-in-out
            width 100px
            &:hover
                background #f5f5f5
                box-shadow 0 1px 2px rgba(0, 0, 0, 0.2)
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

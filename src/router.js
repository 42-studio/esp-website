import Vue from "vue";
import Router from "vue-router";
import LayoutHeader from "./layout/Header";
import LayoutFooter from "./layout/Footer";

Vue.use(Router);

export default new Router({
  mode: "history",
  scrollBehavior: (to, from, savedPosition) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let res;
        if (savedPosition) {
          res = savedPosition;
        } else if (to.hash) {
          res = { el: to.hash, behavior: "smooth" };
        } else {
          res = { x: 0, y: 0 };
        }
        resolve(res);
      }, 400);
    });
  },
  routes: [
    {
      path: "/",
      name: "index",
      components: {
        header: LayoutHeader,
        default: () => import("./views/Home/Home"),
        footer: LayoutFooter
      }
    },
    {
      path: "/schedule-demo",
      name: "schedule.demo",
      components: {
        header: LayoutHeader,
        default: () => import("./views/ScheduleDemo"),
        footer: LayoutFooter
      }
    },
    // {
    //   path: '/products/esp-platform',
    //   name: 'product.esp-platform',
    //   components: {
    //     header: LayoutHeader,
    //     default: () => import('./views/products/esp-platform'),
    //     footer: LayoutFooter
    //   }
    // },
    // {
    //   path: '/products/exchange',
    //   name: 'product.exchange',
    //   components: {
    //     header: LayoutHeader,
    //     default: () => import('./views/products/exchange'),
    //     footer: LayoutFooter
    //   }
    // },
    // {
    //   path: '/products/cdm-builder',
    //   name: 'product.cdm.builder',
    //   components: {
    //     header: LayoutHeader,
    //     default: () => import('./views/products/cdm-builder'),
    //     footer: LayoutFooter
    //   }
    // },
    // {
    //   path: '/solutions',
    //   name: 'solutions.overview',
    //   components: {
    //     header: LayoutHeader,
    //     default: () => import('./views/solutions/overview'),
    //     footer: LayoutFooter
    //   }
    // },
    // {
    //   path: '/solutions/cdm-schema',
    //   name: 'solutions.cdm.schema',
    //   components: {
    //     header: LayoutHeader,
    //     default: () => import('./views/solutions/cdm-schema'),
    //     footer: LayoutFooter
    //   }
    // },
    {
      path: "/about/our-story",
      name: "about.story",
      components: {
        header: LayoutHeader,
        default: () => import("./views/about/Story"),
        footer: LayoutFooter
      }
    },
    {
      path: "/about/our-team",
      name: "about.team",
      components: {
        header: LayoutHeader,
        default: () => import("./views/about/Team"),
        footer: LayoutFooter
      }
    },
    {
      path: "/about/licensing",
      name: "about.licensing",
      components: {
        header: LayoutHeader,
        default: () => import("./views/about/License"),
        footer: LayoutFooter
      }
    },
    {
      path: "/about/getting-in-contact",
      name: "about.contact",
      components: {
        header: LayoutHeader,
        default: () => import("./views/about/Contact"),
        footer: LayoutFooter
      }
    },
    {
      path: "/info/terms-conditions",
      name: "info.conditions",
      components: {
        header: LayoutHeader,
        default: () => import("./views/information/TermsConditions"),
        footer: LayoutFooter
      }
    },
    {
      path: "/info/privacy-policy",
      name: "info.privacy",
      components: {
        header: LayoutHeader,
        default: () => import("./views/information/PrivacyPolicy"),
        footer: LayoutFooter
      }
    },
    {
      path: "/info/legal-notice",
      name: "info.legal",
      components: {
        header: LayoutHeader,
        default: () => import("./views/information/LegalNotice"),
        footer: LayoutFooter
      }
    },
    {
      path: "*",
      name: "404",
      components: {
        header: LayoutHeader,
        default: () => import("./views/Error"),
        footer: LayoutFooter
      },
      props: {
        default: () => ({
          title: "404",
          lead: "Page not found",
          description:
            "The page your are looking for no longer exists or the url is incorrect."
        })
      }
    }
  ]
});

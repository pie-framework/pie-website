export default ({ router }) => {
  router.addRoutes([
    { path: '/', redirect: '/'},
    { path: '/examples', redirect: '/'},
    { path: '/examples-next', redirect: '/examples-next'},
    { path: '/examples-next/', redirect: '/examples-next'},
    { path: '/changes', redirect: '/changes/introduction.html' },
    { path: '/changelogs', redirect: '/changelogs/introduction.html' },
  ])
}
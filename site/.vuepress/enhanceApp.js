export default ({ router }) => {
  router.addRoute(
    { path: '/changes', redirect: '/changes/introduction.html' },
    { path: '/changelogs', redirect: '/changelogs/introduction.html' }
  )
}
export default function ({route, store, redirect }) {
  const whiteList = [
      '/login'
  ]

  if (!whiteList.includes(route.path)) {
    if (!store.state.members.myInfo) {
      redirect("/login");
    }
  }
}

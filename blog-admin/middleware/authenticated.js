export default async function ({route, store, redirect}) {
  const whiteList = [
    '/login'
  ]
  if (!whiteList.includes(route.path)) {
    await store.dispatch('members/getMyInfo')
    if (!store.state.members.myInfo) {
      redirect("/login");
    }
  }
}

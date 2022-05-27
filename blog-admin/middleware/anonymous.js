export default async function ({store, redirect}) {
  if (store.state.members.myInfo) {
    redirect("/");
  }

}

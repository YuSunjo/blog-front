export default function ({ store, redirect }) {
  if (store.state.members.myInfo) {
    redirect("/");
  }
}

export default function ({store}) {
  store.dispatch('members/getMyInfo');
  store.commit('updateMyInfoToggle', false)
}

<template>
  <div class='home'>
    ChildHome ----> {{$store.state.mainState.state.user}}
    <router-link to='about'>about</router-link>
    <button @click='handleChangeUser'>切换用户</button>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import { add } from 'common';

export default {
  name: 'ChildHome',
  methods: {
    handleChangeUser() {
      this.$store.state.mainState.commit('SET_USER', 'XiaoZhao');
    },
  },
  mounted() {
    console.log(add(10, 20));
  },
};
</script>

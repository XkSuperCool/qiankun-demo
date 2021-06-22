<template>
  <el-card class='home'>
    ChildHome ---> {{sum}} ----> {{$store.state.mainStore.state.user}}
    <router-link to='about'>about</router-link>
    <el-button @click='handleChangeUser'>切换用户</el-button>
  </el-card>
</template>

<script>
import { add } from 'common';

export default {
  name: 'ChildHome',
  data() {
    return {
      sum: 0,
    };
  },
  methods: {
    handleChangeUser() {
      this.$store.state.mainStore.commit('SET_USER', 'XiaoZhao');
    },
  },
  mounted() {
    this.sum = add(10, 20);
  },
};
</script>

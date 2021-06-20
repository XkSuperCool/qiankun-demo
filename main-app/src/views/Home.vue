<template>
  <div class='home'>
    Home
    <button @click='handleChangeUser'>切换用户</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    handleChangeUser() {
      this.$store.state.user = 'XiaoMing';
    },
  },
  watch: {
    '$store.state.user': {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
};
</script>

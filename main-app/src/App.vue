<template>
  <div class='layout'>
    <header class='header'>Header -  {{$store.state.user}}</header>
    <div class='main'>
      <ul class='menu'>
        <li v-for='menuItem in menus' :key='menuItem.key' @click='$router.push(menuItem.path)'>
          {{menuItem.title}}
        </li>
      </ul>
      <div class='content'>
        <router-view></router-view>
        <div id='frame'></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          key: 'Home',
          title: '主页',
          path: '/',
        },
        {
          key: 'ChildHome',
          title: '子应用首页',
          path: '/micro/childApp/home',
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.$store.state.user = 'kk';
    }, 2000);
  },
};
</script>

<style lang='less' scoped>
  .header {
    height: 60px;
    line-height: 60px;
    padding: 0 40px;
    box-sizing: border-box;
    background-color: skyblue;
  }

  .main {
    display: flex;
  }

  .menu {
    width: 150px;
    height: calc(100vh - 60px);
    border-right: 1px solid #000;

    li {
      text-align: center;
      line-height: 40px;
      cursor: pointer;

      &:hover {
        color: dodgerblue;
      }
    }
  }

  .content {
    width: 0;
    flex: 1;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

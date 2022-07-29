<template>
  <div>
    <button @click="changeSkin">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter.vue"; // shift + alt + 下
import TodoHeader from "./components/TodoHeader.vue"; // shift + alt + 下
import TodoMain from "./components/TodoMain.vue"; // shift + alt + 下
export default {
  data() {
    return {};
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain,
  },

  created() {},

  methods: {
    redomColor() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      return `rgb(${r},${g},${b})`;
    },
    changeSkin() {
      // console.log(111);
      // this.redomColor();
      // console.log(this.redomColor());
      this.$store.dispatch("skin/changeSkin", this.redomColor());
    },
  },
};
</script>

<style scoped></style>

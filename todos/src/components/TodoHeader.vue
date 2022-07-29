<template>
  <header class="header">
    <h1 :style="{ color: color }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="todo"
      @keydown.enter="addItem"
    />
  </header>
</template>

<script>
import { mapActions, createNamespacedHelpers } from "vuex";
const { mapState: mapSkinState } = createNamespacedHelpers("skin");
export default {
  data() {
    return {
      todo: "",
    };
  },
  computed: {
    ...mapSkinState(["color"]),
  },
  methods: {
    ...mapActions(["user/addListItem"]),
    addItem() {
      console.log(this.todo);
      this["user/addListItem"](this.todo);
    },
  },
};
</script>

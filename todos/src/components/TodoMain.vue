<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done }"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          @change="changeRadioS(item)"
          :checked="item.done"
        />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="delItem(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { createNamespacedHelpers, mapActions } from "vuex";
const { mapState: mapListState } = createNamespacedHelpers("user");
// console.log(mapState(["list"]));
export default {
  data() {
    return {};
  },
  computed: {
    ...mapListState(["list", "unFinishList", "Finished"]),
  },
  methods: {
    ...mapActions(["user/delListItem", "user/changeRadioS"]),
    //删除元素
    delItem(id) {
      console.log(id);
      console.log(this.list);
      const index = this.list.findIndex((item) => {
        return item.id == id;
      });
      console.log(index);
      this["user/delListItem"](index);
    },
    //改变代办状态
    changeRadioS(item) {
      console.log(item);
      this["user/changeRadioS"](item);
    },
  },
};
</script>

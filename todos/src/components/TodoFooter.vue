<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余 <strong>{{ list.length }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isShow == 1 }"
          href="javascript:;"
          @click="allList"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isShow == 2 }"
          href="javascript:;"
          @click="unFinish"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isShow == 3 }"
          href="javascript:;"
          @click="Finished"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="cleanFinished">清除已完成</button>
  </footer>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState: mapListState } = createNamespacedHelpers("user");
export default {
  data() {
    return {
      isShow: 1,
    };
  },
  computed: {
    ...mapListState(["list"]),
  },
  methods: {
    //全部
    allList() {
      this.isShow = 1;
      this.$store.dispatch("user/allList");
    },
    //未完成
    unFinish() {
      this.isShow = 2;
      // this.unFinishList = this.list;
      console.log(111);
      this.$store.dispatch("user/unFinish");
    },
    //已完成
    Finished() {
      this.isShow = 3;
      this.$store.dispatch("user/Finished");
    },
    //清除已完成
    cleanFinished() {
      this.$store.dispatch("user/cleanFinished");
    },
  },
};
</script>

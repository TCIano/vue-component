<template>
  <div>
    <!-- 自定义 内容 -->
    <buttonVue type="primary" title="nihao" />
    <hr />
    <!-- 自定义宽高 -->
    <buttonVue type="info" title="按钮2" width="220px" height="50px" />

    <!-- 自定义颜色 -->
    <buttonVue title="按钮2" width="220px" height="50px" color="#f8091" />
    <!-- 自定义边框 -->
    <buttonVue title="按钮2" width="220px" height="50px" color="#f8091" />
  </div>
</template>

<script>
import buttonVue from "./components/buttonVue.vue";
export default {
  data() {
    return {};
  },
  components: {
    buttonVue,
  },
  created() {},

  methods: {},
};
</script>

<style scoped></style>

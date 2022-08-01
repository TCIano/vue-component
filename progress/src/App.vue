<template>
  <div>
    <!-- 百分比 -->
    <tc-progress percentage="50"> </tc-progress>
    <!-- 自定义进度条颜色 -->
    <hr />
    <tc-progress percentage="50" color="#666"> </tc-progress>
    <hr />
    <!-- 圆形进度条 -->
    <tc-progress percentage="70" color="#666" round> </tc-progress>
    <hr />
    <!-- 大小 thin large-->
    <tc-progress percentage="50" thin> </tc-progress>
    <tc-progress percentage="50" large> </tc-progress>
    <!-- 事件触发 -->
    <tc-progress percentage="100" round @fullLoadEvent="fullLoadEvent">
    </tc-progress>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {},

  methods: {
    fullLoadEvent(val, pro) {
      console.log(val, pro);
    },
  },
};
</script>

<style scoped></style>

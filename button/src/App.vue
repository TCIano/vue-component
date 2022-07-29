<template>
  <div>
    <!-- 自定义 内容 -->
    <buttonVue type="primary" title="nihao" />
    <!-- 自定义图标 -->
    <buttonVue type="primary" title="nihao">
      <template #icon>
        <i>图标</i>
      </template>
    </buttonVue>

    <hr />
    <!-- 自定义宽高 -->
    <buttonVue type="info" title="按钮2" width="220px" height="50px" />

    <!-- 自定义颜色 -->
    <buttonVue
      title="按钮2"
      width="220px"
      height="50px"
      color="#f8091"
      @btn="btn"
    />
    <!-- 自定义边框 wideBorder=“1” ...宽边框  wideBorder='0' 没边框，默认没有-->
    <buttonVue
      type="danger"
      title="按钮2"
      width="220px"
      height="50px"
      wideBorder="1"
      @btn="btn"
    />
    <!-- 禁用 按钮 -->
    <buttonVue
      type="danger"
      title="按钮2"
      width="220px"
      height="50px"
      wideBorder="1"
      disable
      @btn="btn"
    />
    <!-- 圆形按钮 round="1" 圆形 默认不是圆形-->
    <buttonVue
      type="warning"
      title="按钮2"
      width="220px"
      height="50px"
      wideBorder="1"
      round="1"
      disable
      @btn="btn"
    />
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

  methods: {
    btn() {
      console.log(111);
    },
  },
};
</script>

<style scoped></style>

<template>
  <div>
    <button
      :class="type"
      :style="{
        width: width,
        height: height,
        backgroundColor: color,
      }"
    >
      <span>{{ title }}</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
    },
    title: {
      type: String,
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    color: {
      type: String,
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
button {
  margin: 5px;
}
.primary {
  background-color: green;
}
.info {
  background-color: blue;
}
.warning {
  background-color: pink;
}
.warning {
  background-color: red;
}
</style>

<template>
  <div>
    <button
      :disabled="disable"
      :class="type"
      :style="{
        width: width,
        height: height,
        backgroundColor: color,
        border: wideBorder === '1' ? `${wideBorder}px soild #000` : '0px',
        borderRadius: round === '1' ? width : '0px',
      }"
      ref="button"
      @click="$emit('click')"
    >
      <slot name="icon"> </slot>
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
    wideBorder: {
      type: String,
    },
    disable: {},
    round: {},
  },
  mounted() {},

  methods: {},
};
</script>

<style scoped>
button {
  /* border: 0; */
  margin: 5px;
  color: #fff;
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
.danger {
  background-color: red;
}
.wideBorder {
  border: 0px solid #ccc;
}
</style>

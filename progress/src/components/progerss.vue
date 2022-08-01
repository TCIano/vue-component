<template>
  <div class="my" @change="fullProcess" ref="pro">
    <div
      class="default"
      :class="[
        { round: !round ? true : false },
        { thin: !thin ? true : false },
        { large: !large ? true : false },
      ]"
    >
      <div
        class="process"
        :class="{ round: !round ? true : false }"
        :style="{ width: `${percentage}%`, backgroundColor: color }"
      ></div>
    </div>
    <!-- <slot /> -->
    <span>{{ `${percentage}%` }}</span>
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: String,
      default: "default",
    },
    color: {
      type: String,
      default: "process",
    },
    round: {
      // type: String,
      default: true,
    },
    thin: {
      // type: String,
      default: true,
    },
    large: {
      default: true,
    },
  },
  data() {
    return {};
  },

  created() {},
  mounted() {
    // console.log(this.$refs);
    if (this.$refs.pro.__vue__.percentage === "100") {
      // console.log(111);
      this.$emit("fullLoadEvent", this.$refs, true);
    }
  },
  methods: {
    fullProcess() {
      if (this.percentage === 100) {
        console.log(111);
      }
    },
  },
};
</script>

<style scoped>
.my {
  display: flex;
  /* text-align: center; */
  /* justify-content: center; */
  align-items: center;
}
.thin {
  height: 10px !important;
}
.large {
  height: 40px !important;
}
.default {
  /* justify-content: center; */
  display: flex;
  margin: 10px;
  width: 300px;
  height: 20px;
  background-color: #ccc;
}
.default .process {
  background-color: skyblue;
  height: 100%;
}
.round {
  border-radius: 10px;
}
</style>

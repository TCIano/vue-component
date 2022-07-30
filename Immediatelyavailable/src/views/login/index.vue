<template>
  <div class="my">
    <!-- 头像 -->
    <div class="avator">
      <img src="../../assets/ava.png" alt="" />
    </div>
    <!-- 表单 -->
    <div class="form">
      <el-form>
        <el-form-item>
          <el-input class="ipt" placeholder="输入账号" v-model="admin">
            <template #prefix>
              <i class="el-icon-mobile-phone"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            class="ipt"
            type="password"
            show-password
            placeholder="请输入密码"
            v-model="password"
          >
            <template #prefix> <i class="el-icon-lock"></i> </template
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="ipt" placeholder="验证码" v-model="check">
            <template #prefix>
              <i class="el-icon-circle-check"></i>
            </template>
            <template #suffix>
              <!-- <img src="../../assets/ava.png" alt="" /> -->
              <span>1212</span>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      admin: "",
      password: "",
      check: "",
    };
  },

  created() {},

  methods: {},
};
</script>

<style scoped lang="less">
.my {
  width: 100%;
  height: 100%;
  background: url("../../assets/bg.png");
  // margin: 0 auto;
  text-align: center;
  .avator {
  }
  .avator img {
    height: 96px;
    z-index: 1000;
    height: 96px;
    position: absolute;
    top: 140px;
    left: 50%;
    transform: translateX(-50%);
  }
  .form {
    width: 518px;
    height: 388px;
    // text-align: center;
    border-radius: 10px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 20px;

    .el-form {
      // width: 518px;
      // height: 388px;
      margin-top: 50px;
      .el-form-item {
        margin: 10px;
        height: 60px;
      }
    }
    // height: 60px;
    .ipt {
      // padding: 10px;
      width: 446px;

      :deep(.el-input__suffix) {
        .el-input__suffix-inner {
          // margin-top: -10px;
          top: -7px;
          right: 5px;
          // -webkit-transition: all 0.3s;
          transition: all 0.3s;
        }
      }
    }

    .loginBtn {
      width: 446px;
      height: 52px;
      border-radius: 10px;
      background-color: #697bee;
      color: #fff;
    }
  }
}
</style>

<template>
  <div class="container">
    <Navbar />
  </div>
</template>

<script>
import { watch } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue";
import getUser from "../composables/getUser";
import { useRouter } from "vue-router";
export default {
  components: { Navbar },

  setup() {
    // get the current user using the getUser composable
    const { user } = getUser();
    const router = useRouter();
    // watch the current user for changes
    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" });
      }
    });
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}
nav p.email {
  font-size: 14px;
  color: #999;
}
</style>

<template>
  <nav>
    <div>
      <p>Hey there... display name here</p>
      <p class="email">Currently logged in as ... email</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";

export default {
  setup() {
    const { logout, error } = useLogout();

    const handleClick = async () => {
      await logout();

      if (!error.value) {
        console.log("user log out");
      }
    };

    return { handleClick };
  },
};
</script>

<style></style>

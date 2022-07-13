<template>
  <button class="button">
    <span class="button__title" v-if="mode === 'text'">
      {{ title }}
    </span>
    <img
      v-if="mode === 'delete'"
      class="button__img"
      :src="require('@/assets/img/basket.svg')"
      alt="delete"
    >
  </button>
</template>

<script>
export default {
  name: 'CtmBtn',
  props: {
    mode: {
      type: String,
      default: 'text'
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 10px;
  background: $grey;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  padding: 10px;
  color: $grey500;

  &__title {
  }

  &__img {
    width: 13px;
    height: 16px;
  }
}
</style>

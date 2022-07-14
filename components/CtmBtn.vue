<template>
  <button class="btn" :class="btnClass" :disabled="disabled" @click="$emit('click')">
    <span
      v-if="mode === 'text'"
      class="btn__title"
    >
      {{ title }}
    </span>
    <img
      v-if="mode === 'img'"
      class="btn__img"
      :src="imgLink"
      alt="delete"
    >
  </button>
</template>

<script>
export default {
  name: 'CtmBtn',
  props: {
    imgLink: {
      type: String,
      default: require('@/assets/img/basket.svg')
    },
    disabled: {
      type: [Boolean, String],
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: 'Название кнопки'
    }
  },
  computed: {
    btnClass () {
      return [
        { btn_disabled: this.disabled }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 10px;
  font-family: Inter, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  padding: 10px;
  color: $white;
  background: $light-green;
  transition: .5s;
  &_disabled {
    background: $grey;
    color: $grey500;
  }

  &__title {
    font-family: Source Sans Pro, sans-serif;
  }

  &__img {
    width: 13px;
    height: 16px;
  }
}
</style>

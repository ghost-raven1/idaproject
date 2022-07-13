<template>
  <div class="input">
    <div class="input__container">
      <label class="input__label" for="name">
        {{ label }}
      </label>
      <div v-if="isRequired" class="input__required"/>
    </div>
    <input id="name" class="input__field" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  name: 'CtmInput',
  props: {
    isRequired: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  flex-direction: column;

  &__container {
    display: flex;
    flex-direction: row;
  }

  &__required {
    background: $pink;
    border-radius: 4px;
    width: 4px;
    height: 4px;
  }

  &__label {
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 10px;
    letter-spacing: -0.02em;
    margin-bottom: 4px;
  }

  &__field {
    padding: 10px 16px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 12px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: $white;
    color: $grey500;
    border: 1px solid transparent;
    transition: .5s;

    &:focus {
      border: 1px solid $blue;
    }

    &:hover {
      border: 1px solid $green;
    }

    &:active {
      border: 1px solid $violet;
    }
  }
}
</style>

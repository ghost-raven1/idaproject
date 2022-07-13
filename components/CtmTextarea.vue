<template>
  <div class="textarea">
    <label
      class="textarea__label"
      for="desc"
    >
      {{ label }}
    </label>
    <textarea
      id="desc"
      rows="5"
      class="textarea__field"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'CtmTextarea',
  props: {
    rows: {
      type: Number,
      default: 2
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
.textarea {
  display: flex;
  flex-direction: column;

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
    resize: none;
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

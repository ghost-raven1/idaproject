<template>
  <ValidationProvider
    v-slot="{errors}"
    tag="div"
    class="textarea"
    :rules="rules"
    :name="name"
    :mode="validationMode"
    slim
  >
    <label
      class="textarea__label"
      for="desc"
    >
      {{ label }}
    </label>
    <textarea
      id="desc"
      ref="input"
      :rows="rows"
      :value="value"
      :autocomplete="autocomplete"
      :disabled="disabled"
      :placeholder="placeholder"
      class="textarea__field"
      @input="input"
      @keyup.enter="enter"
      @keypress.enter="onEnterPress"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <div
      v-if="!isHideError"
      class="textarea__err"
    >
      {{ errorMessage (errors[0]) }}
    </div>
  </ValidationProvider>
</template>

<script>
export default {
  name: 'CtmTextarea',
  props: {
    name: {
      type: String,
      default: ''
    },
    autoFocus: {
      type: Boolean,
      default: () => false
    },
    onEnterPress: {
      type: Function,
      default: () => {}
    },
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      default: 'on'
    },
    isHideError: {
      type: Boolean,
      default: false
    },
    rules: {
      type: [String, Array, Object],
      description: 'Vee validate validation rules',
      default: ''
    },
    validationMode: {
      type: String,
      default: 'aggressive'
    },
    rows: {
      type: [Number, String],
      default: 2
    },
    label: {
      type: String,
      default: ''
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.focus()
  },
  methods: {
    errorMessage (e) {
      if (e === 'min') {
        return 'Введенное значение меньше допустимого'
      } else if (e === 'required') {
        return 'Обязательное поле'
      } else if (e === 'max') {
        return 'Введенное значение больше допустимого'
      } else if (e === 'alpha_num') {
        return 'Нечисловое значение'
      }
    },
    focus () {
      if (this.autoFocus) { this.$refs.input.focus() }
    },
    enter ($event) {
      this.$emit('enter', $event.target.value)
    },
    input ($event) {
      this.$emit('input', $event.target.value)
      if (this.selector) {
        this.$emit('selector', $event.target.value)
      }
    },
    clear () {
      this.$emit('input', '')
      this.$emit('clear', event)
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea {
  display: flex;
  flex-direction: column;

  &__err {
    margin-top: 5px;
    font-family: Source Sans Pro, sans-serif;
    font-size: 12px;
    color: $pink;
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
    resize: none;
    transition: .5s;

    &_red {
      border: 1px solid $pink;
    }

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

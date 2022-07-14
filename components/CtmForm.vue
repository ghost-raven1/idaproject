<template>
  <validation-observer
    ref="validate"
    v-slot="{handleSubmit, passed }"
  >
    <form class="app__body-form form" @submit.prevent="handleSubmit(setProduct)">
      <LazyCtmInput
        v-model="product.title"
        class="form__input"
        is-required="true"
        rules="required|min:3|max:20"
        label="Наименование товара"
        placeholder="Введите наименование товара"
      />
      <LazyCtmTextarea
        v-model="product.desc"
        rules="min:10|max:600"
        class="form__input"
        rows="5"
        label="Описание товара"
        placeholder="Введите описание товара"
      />
      <LazyCtmInput
        v-model="product.img"
        class="form__input"
        rules="required"
        is-required="true"
        label="Ссылка на изображение товара"
        placeholder="Введите ссылку"
      />
      <LazyCtmInput
        v-model="product.price"
        class="form__input"
        rules="required|min:1|alpha_num"
        is-required="true"
        label="Цена товара"
        placeholder="Введите цену"
      />
      <LazyCtmBtn :class="{ passed: '.form__btn_active' }" mode="text" title="Добавить товар" :disabled="!passed" />
    </form>
  </validation-observer>
</template>

<script>
export default {
  name: 'CtmForm',
  data () {
    return {
      product: {
        title: '',
        desc: '',
        img: '',
        price: ''
      }
    }
  },
  methods: {
    setProduct () {
      this.product.price = this.product.price + ' руб'
      this.$emit('currentProduct', this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  background-color: $white;
  padding: 24px;
  width: 332px;
  min-height: 440px;
  position: fixed;
  &__btn_active {
    background-color: #0083C7;
  }

  &__input {
    margin-bottom: 16px;
  }
}

@include _767 {
  .form {
    z-index: 10;
    width: 346px;
  }
}
</style>

<template>
  <form class="app__body-form form">
    <LazyCtmInput
      class="form__input"
      is-required="true"
      label="Наименование товара"
      placeholder="Введите наименование товара"
    />
    <LazyCtmTextarea
      class="form__input"
      rows="5"
      label="Наименование товара"
      placeholder="Введите описание товара"
    />
    <LazyCtmInput
      class="form__input"
      is-required="true"
      label="Ссылка на изображение товара"
      placeholder="Введите ссылку"
    />
    <LazyCtmInput
      class="form__input"
      is-required="true"
      label="Цена товара"
      placeholder="Введите цену"
    />
    <LazyCtmBtn title="Добавить товар"/>
  </form>
</template>

<script>
export default {
  name: 'CtmForm'
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
  height: 440px;
  position: fixed;

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

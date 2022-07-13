<template>
  <div class="card">
    <CtmBtn class="card__btn" mode="delete"/>
    <img
      class="card__img"
      :src="cardData.img"
      :alt="cardData.title"
    >
    <div class="card__container">
      <h3 class="card__title">
        {{ cardData.title }}
      </h3>
      <p class="card__desc">
        {{ cardData.desc }}
      </p>
      <span class="card__price">
        {{ cardData.price }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtmCard',
  props: {
    cardData: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 332px;
  height: 423px;
  background-color: $white;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.04), 0 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  position: relative;
  transition: .5s;

  &:hover {
    -webkit-box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);
    box-shadow: 2px 4px 28px 6px rgba(34, 60, 80, 0.2);
    transform: scale(1.02);

    .card__btn {
      background-color: $pink;
      margin: -22px 309px;
      z-index: 20;
      width: 33px;
      height: 35px;
      transition: .5s;
      opacity: 1;
      position: absolute;
    }
  }

  &__img {
    object-fit: cover;
  }

  &__btn {
    transition: opacity 1s ease-out;
    opacity: 0;
    height: 0;
    overflow: hidden;
    position: absolute;
  }

  &__container {
    margin: 16px 16px 0 16px;
  }

  &__title {
    font-family: Source Sans Pro, sans-serif;
    color: $black;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    margin-bottom: 16px;
  }

  &__desc {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: $black;
    margin-bottom: 32px;
  }

  &__price {
    font-family: Source Sans Pro, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: $black;
  }
}
</style>

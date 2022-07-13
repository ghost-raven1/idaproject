<template>
  <div class="app">
    <div v-click-outside="toggleForm" class="app__header">
      <h2 class="app__header-title">
        Добавление товара
      </h2>
      <button class="app__header-btn app__header-btn-show" @click="toggleForm">
        Показать форму
      </button>
      <button class="app__header-btn">
        По умолчанию
      </button>
    </div>
    <div class="app__body">
      <transition v-if="isShowForm" name="fade" class="app__body-form" appear>
        <div class="app__body-form">
          <LazyCtmForm/>
        </div>
      </transition>
      <div class="app__body-cards">
        <LazyCtmCard v-for="(item, i) in products" :key="i" :card-data="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      isShowForm: true,
      products: [
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        }
      ]
    }
  },
  methods: {
    toggleForm () {
      this.isShowForm = !this.isShowForm
    }
  }
}
</script>
<style lang="scss">

.app {
  margin: 32px;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;

    &-title {
      font-family: Source Sans Pro, sans-serif;
      font-size: 28px;
      font-weight: 600;
    }

    &-btn {
      background-color: $white;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
      font-size: 12px;
      padding: 10px 16px;
      color: $grey500;

      &-show {
        visibility: hidden;
      }
    }
  }

  &__body {
    display: grid;
    grid-template-columns: 2fr 10fr;

    &-form {
      width: 333px;
    }

    &-cards {
      padding-left: 16px;
      display: flex;
      flex-direction: row;
      gap: 16px;
      flex-wrap: wrap;
    }
  }
}

.fade-enter-from {
  opacity: 0;
  z-index: 10;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
  z-index: 10;
}

.fade-leave-to {
  opacity: 0;
  z-index: 10;
}

.fade-leave-active {
  transition: all .3s ease-in;
  z-index: 10;
}

@include _767 {
  .app {
    &__body {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: center;

      &-cards {
        align-content: center;
        justify-content: center;
        align-items: center;
      }
    }

    &__header {
      position: sticky;

      &-title {
        font-size: 20px;
      }

      &-btn-show {
        visibility: visible;
      }
    }
  }
}
</style>

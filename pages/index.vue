<template>
  <div class="app">
    <div class="app__header">
      <h2 class="app__header-title">
        Добавление товара
      </h2>
      <button class="app__header-btn app__header-btn-show" @click="toggleForm">
        Показать форму
      </button>
      <CtmDD v-model="currFilter" :items="filters" placeholder="по умолчанию" type="sort" />
    </div>
    <div class="app__body">
      <transition v-if="isShowForm" name="fade" class="app__body-form" appear>
        <div class="app__body-form">
          <LazyCtmForm @currentProduct="setCurrentProduct" />
        </div>
      </transition>
      <TransitionGroup name="list" class="app__body-cards" tag="div" appear>
        <LazyCtmCard v-for="(item, i) in products" :key="i" :card-data="addIdx(item, i)" @deleteCard="deleteCard" />
      </TransitionGroup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      isShowForm: true,
      currFilter: '',
      filters: [
        'по умолчанию',
        'по цене мин',
        'по цене макс',
        'по наименованию'
      ],
      products: [
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 1',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 2',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 3',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 4',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 5',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 6',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 7',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 8',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 9',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        },
        {
          img: require('@/assets/img/img.png'),
          title: 'Наименование товара 10',
          desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: '10000 pyб'
        }
      ]
    }
  },
  methods: {
    deleteCard (e) {
      const checkedIndex = this.products.indexOf(e)
      if (checkedIndex !== -1) {
        this.products.splice(checkedIndex, 1)
      }
    },
    addIdx (item, i) {
      item.id = i
      return item
    },
    setCurrentProduct (e) {
      this.products.push(e)
    },
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

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  transform: translateX(30px);
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
@include _480 {
  .app__header-title {
    font-size: 14px;
  }
}
</style>

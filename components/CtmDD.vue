<template>
  <div>
    <div
      v-if="label !== ''"
      :class="[{'ctm-field__header' : !tip}, {'ctm-field__header ctm-field__header_mar5' : tip}]"
    >
      {{ label }}
    </div>
    <div
      class="dd"
      :class="[{'dd__top': mode === 'top' }, {'dd_small' : isDotsView}, { 'dd_min-width': type !== 'underline' }]"
    >
      <slot name="card" />
      <button
        class="dd__btn"
        :class="ddClass"
        :disabled="disabled || elementsIsEmpty"
        @click="isShown = !isShown"
      >
        <span class="icon-more_horizontal" />

        <div
          v-if="isIcon"
          class="dd__icon"
        >
          <img
            v-if="items[value].icon"
            :src="items[value].icon"
            :alt="items[value].title"
          >
          <span
            class="dd__title"
            :class="[{'dd__title_white': type === 'blue' }, { 'dd__title_black': mode === 'blackFont' }]"
          >
            {{ dataType === 'array' ? items[value].title : items.title }}
          </span>
        </div>

        <span
          v-else-if="items[value]"
          class="dd__title"
          :class="[{'dd__title_white': type === 'blue' }, { 'dd__title_black': mode === 'blackFont' }]"
        >
          {{ dataType === 'array' ? items[value] : items[value].title }}
        </span>
        <span
          v-else-if="!items[value] && placeholder"
          class="dd__title"
          :class="[{'dd__title_white': type === 'blue' }, { 'dd__title_black': mode === 'blackFont' }]"
        >
          {{ placeholder }}
        </span>
        <img
          v-if="type === 'sort'"
          class="dd__caret dd__caret_dark"
          :class="[{'dd__caret_white': type === 'blue' }]"
          src="../assets/img/arrow-down.svg"
        >
      </button>
      <transition name="fade">
        <div
          v-if="isShown && isIcon"
          class="dd__items"
          :class="[{'dd__items_small' : mode === 'small'}, { 'dd__items_underline-type': type === 'underline' }]"
        >
          <button
            v-for="(item, i) in items"
            :key="`dd__item-${i}`"
            :disabled="disabledIndexes.includes(i)"
            class="dd__item dd__item_icon"
            :class="{dd__item_disabled: disabledIndexes.includes(i)}"
            @click="selectItem(i)"
          >
            <img
              v-if="item.icon"
              :src="item.icon"
              :alt="item.title"
            >
            {{ item.title }}
            <slot name="picture" />
          </button>
        </div>
        <div
          v-if="isShown && !isIcon"
          class="dd__items"
          :class="[{'dd__items_small' : mode === 'small'}, {'dd__items_wide' : isDotsView}, { 'dd__items_underline-type': type === 'underline' } ]"
        >
          <CtmInput
            v-if="isSearch"
            v-model="searchLine"
            class="dd__search"
            :placeholder="searchPlaceholder"
            :is-search="true"
            :is-hide-error="true"
          />
          <button
            v-for="(item, i) in items"
            :key="`dd__item-${i}`"
            class="dd__item"
            :class="{'dd__item_hide': isSelected(i) || (isSearch && !isSearchMatched(item))}"
            @click="selectItem(i)"
          >
            {{ dataType === 'array' ? item : item.title }}
          </button>
          <slot name="buttonCard" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtmDd',
  props: {
    dataType: {
      type: String,
      default: () => 'array'
    },
    disabledIndexes: {
      type: Array,
      default: () => []
    },
    items: {
      type: [Array, Object],
      default: () => []
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: [String, Number],
      default: ''
    },
    tip: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: 0
    },
    type: {
      type: String,
      default: 'default'
    },
    isIcon: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideSelected: {
      type: Array,
      default: () => []
    },
    isDotsView: {
      type: Boolean,
      default: false
    },
    isSearch: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    isShown: false,
    searchLine: ''
  }),
  computed: {
    elementsIsEmpty () {
      return this.items.length - this.hideSelected.length <= 0
    },
    ddClass () {
      const { type, isDotsView } = this
      return [
        { dd__btn_dark: type === 'dark' },
        { dd__btn_disabled: type === 'disabled' || this.elementsIsEmpty },
        { dd__btn_gray: type === 'gray' },
        { dd__btn_blue: type === 'blue' },
        { dd__btn_border: type === 'border' },
        { dd__btn_underline: type === 'underline' },
        { 'dd__dots-btn': isDotsView }
      ]
    }
  },
  methods: {
    hideDd () {
      this.isShown = false
    },
    selectItem (i) {
      if (this.hideSelected.includes(i) || this.disabledIndexes.includes(i)) { return }
      this.isShown = false
      this.$emit('input', i)
    },
    isSelected (i) {
      return this.hideSelected.includes(i)
    },
    isSearchMatched (item) {
      if (this.dataType === 'object') { return item.title.toLowerCase().includes(this.searchLine.toLowerCase()) }
      return item.toLowerCase().includes(this.searchLine.toLowerCase())
    }
  }
}
</script>

<style scoped lang="scss">
.ctm-field__header {
  letter-spacing: -0.025em;
  margin-bottom: 13px;
  height: 24px;
  color: #212529;
}
.dd {
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: $black500;
  position: relative;
  text-align: left;
  &_min-width {
    min-width: 131px;
  }
  &_small {
    min-width: unset;
  }
  &__title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: $black500;
    &_white {
      color: $white;
    }
    &_black {
      color: $black800 !important;
    }
  }
  &__top {
    align-items: flex-start;
  }
  &__items {
    background: #FFFFFF;
    border: 1px solid #F7F8FA;
    box-sizing: border-box;
    box-shadow: 0 17px 17px rgba(0, 0, 0, 0.05), 0 5.125px 5.125px rgba(0, 0, 0, 0.0325794), 0 2.12866px 2.12866px rgba(0, 0, 0, 0.025), 0 0.769896px 0.769896px rgba(0, 0, 0, 0.0174206);
    border-radius: 6px;
    width: 100%;
    flex-basis: 100%;
    position: absolute;
    top: calc(100% + 4px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    grid-gap: 15px;
    padding: 15px 20px;
    z-index: 4;
    &_underline-type {
      width: fit-content;
      min-width: fit-content;
      right: 0;
    }
    &_small {
      max-height: 200px;
      grid-gap: 10px;
      overflow-y: auto;
      overscroll-behavior-y: contain;
    }
    &_wide {
      min-width: 131px;
      right: calc(100% - 30px);
    }
  }
  &__item {
    text-align: left;
    flex-basis: 100%;
    width: 100%;
    height: 100%;
    color: $black500;
    font-size: 11px;
    font-family: Source Sans Pro, sans-serif;
    &:hover {
      color: $black800;
    }
    &_disabled {
      cursor: default;
      color: $black300;
      &:hover {
        color: $black300;
      }
    }
    &_icon {
      display: flex;
      align-items: center;
      img {
        margin-right: 5px;
        height: 24px;
        width: 24px;
      }
    }
    &_hide {
      display: none;
    }
  }
  &__icon {
    display: flex;
    align-items: center;
    img {
      height: 24px;
      width: 24px;
      margin-right: 5px;
    }
    span {
      margin-right: 5px;
    }
  }
  &__btn {
    background-color: $white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    font-family: Source Sans Pro, sans-serif;
    font-weight: 400;
    font-size: 12px;
    padding: 10px 16px;
    color: $grey500;
    display: flex;
    align-items: center;
    gap: 13px;
    &:hover {
      border: 1px solid $black100;
    }
    &_blue {
      background-color: $blue;
    }
    &_dark {
      background: #151552;
    }
    &_gray {
      background-color: $black0;
    }
    &_disabled {
      background-color: #E6E6E7;
    }
    &_border {
      border: 1px solid $black0;
    }
    &_underline {
      border: none;
      background: none;
      min-height: 26px;
      padding-right: 0;
      padding-left: 0;
      margin-top: 5px;
      .dd__title {
        border-bottom: 1px solid $blue !important;
        color: $blue !important;
      }
      &:hover {
        border: none;
      }
    }
  }
  .icon-more_horizontal {
    display: none;
  }
  &__dots-btn {
    display: flex;
    justify-self: flex-end;
    justify-content: center;
    padding: 0;
    width: 30px;
    height: 30px;
    .dd__title,
    .dd__caret {
      display: none;
    }
    .icon-more_horizontal {
      display: block;
      color: #7c838d;
      font-size: 19px;
    }
  }
  &__search {
    width: 100%;
  }
}
</style>

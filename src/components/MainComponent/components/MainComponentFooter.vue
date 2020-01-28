<template>
  <div class="main-component-footer">
    <div class="main-component-footer__left">
      © Копирайт 2020
    </div>
    <a href="#" class="main-component-footer__right">
      <img src="../../../assets/foot-icon.png" alt="" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.main-component-footer {
  position: relative;
  padding-left: 95px;
  padding-right: 95px;
  min-height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
  &__left {
    margin-right: 10px;
    font-weight: 300;
    font-size: 18px;
    line-height: 27px;
    color: #303030;
  }
  img {
    max-width: 100%;
  }
}
</style>

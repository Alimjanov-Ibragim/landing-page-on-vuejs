<template>
  <div class="main-component-third">
    <div class="main-component-third__head-title">
      третий блок
    </div>
    <div class="main-component-third__items">
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third1.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third2.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third3.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third4.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third1.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third2.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third3.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
      <div class="main-component-third__item">
        <a href="#" class="main-component-third__img">
          <img src="../../../assets/third4.png" alt="" />
        </a>
        <div class="main-component-third__title">
          Lorem ipsum dolor sit amet.
        </div>
        <div class="main-component-third__text">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-component-third {
  max-width: 1920px;
  margin: 0 auto;
  padding: 69px 95px 122px;
  background: linear-gradient(180deg, #fdf4f4 0%, #ecf3ec 100%);
  @media (max-width: 1024px) {
    padding-left: 35px;
    padding-right: 35px;
  }
  @media (max-width: 600px) {
    padding-top: 42px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 51px;
  }
  &__head-title {
    margin-bottom: 60px;
    font-family: "Bebas Neue";
    font-size: 70px;
    line-height: 70px;
    text-align: center;
    text-transform: uppercase;
    color: #ff3754;
    @media (max-width: 600px) {
      font-size: 40px;
      line-height: 40px;
      text-align: center;
      text-transform: uppercase;
      color: #ff3754;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -32px;
    @media (max-width: 600px) {
      display: block;
    }
  }
  &__item {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0 0 32px 32px;
    @media (max-width: 768px) {
      flex: 0 0 33.3%;
      max-width: 33.3%;
    }
    @media (max-width: 600px) {
      max-width: 100%;
    }
  }
  &__img {
    margin-bottom: 15px;
    display: block;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:active,
    &:focus {
      border-radius: 20px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
      @media (max-width: 600px) {
        box-shadow: none;
      }
    }
    img {
      max-width: 100%;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
  }
  &__title,
  &__text {
    margin-left: 14px;
  }
  &__title {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 18px;
    line-height: 160%;
    color: #303030;
  }
  &__text {
    font-size: 18px;
    line-height: 160%;
    font-weight: 300;
    color: #303030;
  }
}
</style>

<template>
  <div class="main-component-header" :class="{ active: showMobileMenu }">
    <div class="main-component-header__inner">
      <scroll-fixed-header
        :fixed.sync="fixed"
        :threshold="56"
        :class="{ 'is-fixed': showMobileMenu }"
      >
        <div class="main-component-header__top">
          <div class="main-component-header__left">
            <a href="/" class="main-component-header__logo"></a>
          </div>
          <div class="main-component-header__right">
            <div class="main-component-header__phones">
              <a href="tel:84999999999" class="main-component-header__phone">
                <img src="../../../assets/phone-icon.png" alt="" />
                8 499 999 99 99
              </a>
            </div>
            <div class="main-component-header__socials">
              <a
                href="https://instagram.com/"
                class="main-component-header__solials--item"
              >
                <img src="../../../assets/insta.png" alt="" />
              </a>
              <a
                href="https://vk.com/"
                class="main-component-header__solials--item"
              >
                <img src="../../../assets/vk.png" alt="" />
              </a>
            </div>
            <button
              class="main-component-header__burger"
              :class="{ active: showMobileMenu }"
              @click="showMobileMenu = !showMobileMenu"
            >
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
      </scroll-fixed-header>
      <div class="main-component-header__menu">
        <ul>
          <div class="main-component-header__phones mob">
            <a href="tel:84999999999" class="main-component-header__phone">
              <img src="../../../assets/phone-icon.png" alt="" />
              8 499 999 99 99
            </a>
          </div>
          <li>
            <a href="#">
              пункт меню 1
            </a>
          </li>
          <li>
            <a href="#">
              пункт меню 2
            </a>
          </li>
          <li>
            <a href="#">
              пункт меню 3
            </a>
          </li>
          <li>
            <a href="#">
              пункт меню 4
            </a>
          </li>
          <li>
            <a href="#">
              пункт меню 5
            </a>
          </li>
          <div class="main-component-header__socials mob">
            <a
              href="https://instagram.com/"
              class="main-component-header__solials--item"
            >
              <img src="../../../assets/insta.png" alt="" />
            </a>
            <a
              href="https://vk.com/"
              class="main-component-header__solials--item"
            >
              <img src="../../../assets/vk.png" alt="" />
            </a>
          </div>
        </ul>
      </div>
      <div class="main-component-header__mid">
        <div class="main-component-header__title">
          lorem ipsum dolor sit amet
        </div>
        <div class="main-component-header__subtitle">
          <span>lorem</span> ipsum dolor sit amet
        </div>
      </div>
    </div>
    <div class="main-component-header__bot">
      <div class="main-component-header__list">
        <div class="main-component-header__list--item">
          <div class="main-component-header__list--img">
            <img
              src="../../../assets/main-component-header__list1.png"
              alt=""
            />
          </div>
          <div class="main-component-header__list--title">
            Lorem ipsum dol
          </div>
        </div>
        <div class="main-component-header__list--item">
          <div class="main-component-header__list--img">
            <img
              src="../../../assets/main-component-header__list2.png"
              alt=""
            />
          </div>
          <div class="main-component-header__list--title">
            Lorem ipsum dol
          </div>
        </div>
        <div class="main-component-header__list--item">
          <div class="main-component-header__list--img">
            <img
              src="../../../assets/main-component-header__list3.png"
              alt=""
            />
          </div>
          <div class="main-component-header__list--title">
            Lorem ipsum dol
          </div>
        </div>
        <div class="main-component-header__list--item">
          <div class="main-component-header__list--img">
            <img
              src="../../../assets/main-component-header__list4.png"
              alt=""
            />
          </div>
          <div class="main-component-header__list--title">
            Lorem ipsum dol
          </div>
        </div>
      </div>
      <button class="main-component-header__button">
        lorem ipsum dolor
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      showMobileMenu: false
    };
  },
  watch: {
    // whenever active changes, this function will run
    showMobileMenu: function() {
      document.body.style.overflow = this.showMobileMenu ? "hidden" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
.main-component-header {
  position: relative;
  padding-bottom: 104px;
  background: url("../../../assets/headerbg.png") 50% 0 no-repeat;
  background-size: cover;
  transition: all linear 0.4s;
  @media (max-width: 1023px) {
    padding-bottom: 68px;
    background: none;
  }
  &.active .main-component-header__menu {
    z-index: 24;
    overflow: visible;
    visibility: visible;
    opacity: 1;
  }
  &.active .scroll-fixed-header.is-fixed {
    box-shadow: none;
  }
  &__inner {
    padding-top: 100px;
    padding-left: 95px;
    padding-right: 95px;
    @media (max-width: 1023px) {
      padding-top: 90px;
      padding-left: 35px;
      padding-right: 35px;
      padding-bottom: 12px;
      background: url("../../../assets/headerbg.png") 50% 50% no-repeat;
      background-size: cover;
    }
    @media (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  &__menu {
    position: fixed;
    top: 113px;
    left: 0;
    right: 0;
    min-height: 850px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(50px);
    z-index: -24;
    overflow: hidden;
    visibility: hidden;
    text-align: center;
    transition: all linear 0.2s;
    opacity: 0;
    @media (max-width: 1023px) {
      top: 90px;
    }
    @media (max-width: 600px) {
      top: 70px;
    }
    ul {
      max-width: 50%;
      margin: 0 auto;
      padding: 155px 20px;
      list-style: none;
      height: 850px;
      overflow-y: scroll;
      @media (max-width: 600px) {
        max-width: 90%;
        padding: 21px 20px;
      }
      li {
        margin-bottom: 37px;
        @media (max-width: 1023px) {
          margin-bottom: 15px;
        }
      }
      li a {
        padding: 0 5px;
        text-decoration: none;
        font-weight: bold;
        font-size: 50px;
        line-height: 50px;
        text-align: center;
        color: #303030;
        transition: background 0.3s;
        @media (max-width: 1023px) {
          font-size: 30px;
          line-height: 30px;
        }
        @media (max-width: 600px) {
          font-size: 20px;
          line-height: 24px;
        }
        &:hover,
        &:active,
        &:focus {
          background: rgba(#000, 0.2);
        }
      }
    }
  }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 95px;
    padding-right: 95px;
    @media (max-width: 1023px) {
      padding-left: 35px;
      padding-right: 35px;
    }
    @media (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  &__bot {
    padding-left: 95px;
    padding-right: 95px;
    @media (max-width: 1023px) {
      padding-top: 13px;
      padding-left: 35px;
      padding-right: 35px;
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .scroll-fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 1920px;
    margin: 0 auto;
    padding-bottom: 20px;
    @media (max-width: 600px) {
      padding: 10px 0;
    }
  }
  .scroll-fixed-header.is-fixed {
    background: #fff;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    .main-component-header__logo {
      background: url("../../../assets/logo2.png") 0 0 no-repeat;
      background-size: 100% 100%;
    }
    .main-component-header__phone {
      color: #000;
    }
    .main-component-header__burger div {
      background: #000;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    padding-top: 20px;
    @media (max-width: 600px) {
      padding-top: 0;
    }
  }
  &__left {
    padding-top: 35px;
    padding-right: 10px;
    @media (max-width: 1023px) {
      padding-top: 25px;
    }
    @media (max-width: 600px) {
      padding-top: 0;
    }
  }
  &__logo {
    width: 219px;
    height: 58px;
    display: block;
    font-size: 0;
    background: url("../../../assets/logo.png") 0 0 no-repeat;
    background-size: 100% 100%;
    @media (max-width: 1023px) {
      width: 159px;
      height: 38px;
    }
  }
  &__burger {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 56px;
    margin-bottom: 10px;
    padding: 13px 0;
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    cursor: pointer;
    @media (max-width: 1023px) {
      margin-left: 10px;
    }
    @media (max-width: 600px) {
      margin-bottom: 0;
    }
    &:focus {
      outline: none;
    }
    div {
      width: 50px;
      height: 2px;
      background: #fff;
      transition: all linear 0.4s;
    }
    &.active {
      height: 50px;
      padding: 0;
    }
    &.active div:first-child {
      transform: rotate(45deg) translate(10px, 9px);
    }
    &.active div:last-child {
      top: 10px;
      transform: rotate(-45deg) translate(10px, -8px);
    }
  }
  &__socials {
    display: flex;
    align-items: center;
    max-width: 190px;
    flex-wrap: wrap;
    @media (max-width: 1023px) {
      max-width: 180px;
    }
    @media (max-width: 600px) {
      display: none;
      &.mob {
        display: flex;
        justify-content: center;
        margin: 60px auto 0;
        text-align: center;
      }
    }
    > a {
      display: block;
      width: 34px;
      height: 34px;
      margin-right: 28px;
      margin-bottom: 10px;
      @media (max-width: 1023px) {
        margin-right: 10px;
      }
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
      }
    }
  }
  &__phones {
    @media (max-width: 600px) {
      display: none;
      &.mob {
        display: flex;
      }
    }
  }
  @media (min-width: 601px) {
    .main-component-header__phones.mob,
    .main-component-header__socials.mob {
      display: none;
    }
  }
  &__phone {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-right: 42px;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: right;
    color: #ffffff;
    text-decoration: none;
    @media (max-width: 1023px) {
      margin-right: 20px;
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 600px) {
      margin: 0 auto 23px;
      font-size: 24px;
      line-height: 29px;
      color: #303030;
    }
    img {
      padding-right: 19px;
      @media (max-width: 1023px) {
        padding-right: 10px;
        max-width: 24px;
      }
    }
  }
  &__mid {
    margin-top: 88px;
  }
  &__title {
    margin-bottom: 10px;
    font-family: "Bebas Neue";
    font-size: 90px;
    line-height: 90px;
    text-transform: uppercase;
    color: #ffffff;
    @media (max-width: 1023px) {
      font-size: 50px;
      line-height: 50px;
    }
  }
  &__subtitle {
    margin-bottom: 61px;
    font-weight: bold;
    font-size: 50px;
    line-height: 60px;
    color: #ffffff;
    @media (max-width: 1023px) {
      margin-bottom: 0;
      font-size: 20px;
      line-height: 24px;
    }
    span {
      color: #ff3754;
    }
  }
  &__list {
    margin-bottom: 120px;
    @media (max-width: 1023px) {
      margin-bottom: 0;
    }
  }
  &__list--item {
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__list--item:nth-child(1) .main-component-header__list--img:before {
    background: url("../../../assets/main-component-header__list5.png") 50% 0
      no-repeat;
  }
  &__list--item:nth-child(2) .main-component-header__list--img:before,
  &__list--item:nth-child(3) .main-component-header__list--img:before {
    background: url("../../../assets/main-component-header__list6.png") 50% 0
      no-repeat;
  }
  &__list--item:nth-child(4) .main-component-header__list--img:before {
    background: url("../../../assets/main-component-header__list7.png") 50% 0
      no-repeat;
  }
  &__list--img {
    position: relative;
    width: 70px;
    height: 70px;
    padding-right: 22px;
    margin-right: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    @media (max-width: 1023px) {
      width: 46px;
      height: 46px;
      margin-right: 14px;
      padding-right: 17px;
    }
    img {
      max-width: 100%;
    }
    &:before {
      content: "";
      position: absolute;
      top: 24px;
      right: 0;
      width: 22px;
      height: 22px;
      @media (max-width: 1023px) {
        top: 16px;
        width: 14px;
        height: 14px;
        background-size: 100% 100% !important;
      }
    }
  }
  &__list--title {
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #ffffff;
    @media (max-width: 1023px) {
      color: #000;
      font-size: 14px;
      line-height: 17px;
    }
  }
  &__list--item:nth-child(1) .main-component-header__list--title {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    color: #ffffff;
    background: #ff3754;
    border-radius: 4px;
    min-height: 50px;
    padding: 0 8px;
    @media (max-width: 1023px) {
      min-height: 34px;
      font-size: 20px;
      line-height: 24px;
    }
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 412px;
    width: 100%;
    min-height: 68px;
    font-weight: bold;
    font-size: 19px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.155em;
    text-transform: uppercase;
    color: #ffffff;
    background: #ff3754;
    border: 1px solid #ff3754;
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
    transition: all ease-in-out 0.3s;
    @media (max-width: 1023px) {
      order: -1;
      max-width: 100%;
      margin-bottom: 30px;
    }
    &:hover,
    &:active,
    &:focus {
      background: #900d20;
      border: 1px solid #900d20;
    }
  }
}
</style>

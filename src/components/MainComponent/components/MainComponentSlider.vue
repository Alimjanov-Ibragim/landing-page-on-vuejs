<template>
  <div class="main-component-slider">
    <div class="main-component-slider__head-title">второй блок</div>
    <div class="main-component-slider__container">
      <div class="line"></div>
      <div class="line2"></div>
      <div class="main-component-slider__items">
        <carousel
          :perPage="1"
          :navigationEnabled="true"
          :paginationEnabled="false"
          :autoplay="false"
        >
          <slide v-for="item in carouselItems" :key="item.id">
            <div class="main-component-slider__item">
              <div class="main-component-slider__left">
                <div class="main-component-slider__title">
                  {{ item.title }}
                </div>
                <div class="main-component-slider__subtitle">
                  {{ item.subtitle }}
                </div>
                <div class="main-component-slider__desc">
                  {{ item.desc }}
                </div>
                <ul
                  class="main-component-slider__list"
                  v-for="list in item.list"
                  :key="list.id"
                >
                  <li>{{ list.title }}</li>
                </ul>
                <div class="main-component-slider__extra">
                  <div class="title">{{ item.extra_title }}</div>
                  <div class="text">
                    {{ item.extra_text }}
                  </div>
                </div>
                <div class="main-component-slider__extra2">
                  <div class="title">{{ item.extra2_title }}</div>
                  <div class="text">
                    {{ item.extra2_text }}
                  </div>
                </div>
              </div>
              <div class="main-component-slider__right">
                <img
                  src="../../../assets/main-component-slider__pic1.png"
                  alt=""
                />
              </div>
            </div>
            <div class="vue-slider-numbers">
              <span class="current">{{ item.id }}</span> из
              <span class="all">{{ carouselItems.length }}</span>
            </div>
          </slide>
          <!-- <slide>
            <div class="main-component-slider__item">
              <div class="main-component-slider__left">
                <div class="main-component-slider__title">
                  лоремова 2
                </div>
                <div class="main-component-slider__subtitle">
                  ипсума анатольевна
                </div>
                <div class="main-component-slider__desc">
                  lorem ipsum dolor
                </div>
                <ul class="main-component-slider__list">
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                  <li>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                    ipsum dolor
                  </li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                </ul>
                <div class="main-component-slider__extra">
                  <div class="title">lorem ipsum dolor</div>
                  <div class="text">
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                    ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum
                    dolor
                  </div>
                </div>
                <div class="main-component-slider__extra2">
                  <div class="title">lorem ipsum dolor</div>
                  <div class="text">
                    lorem ipsum dolor lorem ipsum dolor
                  </div>
                </div>
              </div>
              <div class="main-component-slider__right">
                <img
                  src="../../../assets/main-component-slider__pic1.png"
                  alt=""
                />
              </div>
            </div>
          </slide>
          <slide>
            <div class="main-component-slider__item">
              <div class="main-component-slider__left">
                <div class="main-component-slider__title">
                  лоремова 3
                </div>
                <div class="main-component-slider__subtitle">
                  ипсума анатольевна
                </div>
                <div class="main-component-slider__desc">
                  lorem ipsum dolor
                </div>
                <ul class="main-component-slider__list">
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                  <li>
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                    ipsum dolor
                  </li>
                  <li>lorem ipsum dolor</li>
                  <li>lorem ipsum dolor lorem ipsum dolor</li>
                </ul>
                <div class="main-component-slider__extra">
                  <div class="title">lorem ipsum dolor</div>
                  <div class="text">
                    lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem
                    ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum
                    dolor
                  </div>
                </div>
                <div class="main-component-slider__extra2">
                  <div class="title">lorem ipsum dolor</div>
                  <div class="text">
                    lorem ipsum dolor lorem ipsum dolor
                  </div>
                </div>
              </div>
              <div class="main-component-slider__right">
                <img
                  src="../../../assets/main-component-slider__pic1.png"
                  alt=""
                />
              </div>
            </div>
          </slide> -->
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "MainComponentSlider",
  components: { Carousel, Slide },
  data: () => ({
    carouselItems: [
      {
        id: 1,
        title: " лоремова 1 ",
        subtitle: " ипсума анатольевна ",
        desc: " lorem ipsum dolor ",
        list: [
          {
            id: 1,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 2,
            title: "lorem ipsum dolor"
          },
          {
            id: 3,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 4,
            title:
              " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
          },
          {
            id: 5,
            title: "lorem ipsum dolor"
          },
          {
            id: 6,
            title: "lorem ipsum dolor lorem ipsum dolor"
          }
        ],
        extra_title: "lorem ipsum dolor",
        extra_text:
          " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
        extra2_title: "lorem ipsum dolor",
        extra2_text: " lorem ipsum dolor lorem ipsum dolor "
      },
      {
        id: 2,
        title: " лоремова 2 ",
        subtitle: " ипсума анатольевна ",
        desc: " lorem ipsum dolor ",
        list: [
          {
            id: 1,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 2,
            title: "lorem ipsum dolor"
          },
          {
            id: 3,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 4,
            title:
              " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
          },
          {
            id: 5,
            title: "lorem ipsum dolor"
          },
          {
            id: 6,
            title: "lorem ipsum dolor lorem ipsum dolor"
          }
        ],
        extra_title: "lorem ipsum dolor",
        extra_text:
          " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
        extra2_title: "lorem ipsum dolor",
        extra2_text: " lorem ipsum dolor lorem ipsum dolor "
      },
      {
        id: 3,
        title: " лоремова 3 ",
        subtitle: " ипсума анатольевна ",
        desc: " lorem ipsum dolor ",
        list: [
          {
            id: 1,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 2,
            title: "lorem ipsum dolor"
          },
          {
            id: 3,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 4,
            title:
              " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
          },
          {
            id: 5,
            title: "lorem ipsum dolor"
          },
          {
            id: 6,
            title: "lorem ipsum dolor lorem ipsum dolor"
          }
        ],
        extra_title: "lorem ipsum dolor",
        extra_text:
          " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
        extra2_title: "lorem ipsum dolor",
        extra2_text: " lorem ipsum dolor lorem ipsum dolor "
      }
    ]
  })
};
</script>

<style lang="scss">
.main-component-slider {
  max-width: 1920px;
  margin: 0 auto;
  padding: 88px 95px 176px;
  @media (max-width: 600px) {
    padding-top: 0;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 63px;
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
  &__container {
    position: relative;
    padding-left: 110px;
    padding-right: 110px;
    @media (max-width: 1024px) {
      padding-left: 0;
      padding-right: 0;
    }
    .line,
    .line2 {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 30px;
      background: #ff3754;
      @media (max-width: 1024px) {
        display: none;
      }
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 52px;
        height: 30px;
        background: #ff3754;
      }
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 52px;
        height: 30px;
        background: #ff3754;
      }
    }
    .line2 {
      left: auto;
      right: 0;
      &::before {
        left: auto;
        right: 0;
      }
      &::after {
        left: auto;
        right: 0;
      }
    }
  }
  &__items {
    position: relative;
  }
  &__item {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  &__left {
    width: 60%;
    padding-right: 20px;
    @media (max-width: 1024px) {
      width: 100%;
      text-align: center;
    }
  }
  &__right {
    width: 40%;
    @media (max-width: 1024px) {
      order: -1;
      width: 100%;
      text-align: center;
      margin-bottom: 27px;
    }
    @media (max-width: 600px) {
      max-width: 128px;
      max-height: 128px;
      margin: 0 auto 27px;
    }
    img {
      max-width: 100%;
    }
  }
  &__title {
    font-family: "Bebas Neue";
    font-size: 70px;
    line-height: 70px;
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
  &__subtitle {
    margin-bottom: 17px;
    font-family: "Bebas Neue";
    font-size: 40px;
    line-height: 40px;
    text-transform: uppercase;
    color: #888888;
    @media (max-width: 600px) {
      font-size: 30px;
      line-height: 30px;
      text-align: center;
    }
  }
  &__desc {
    margin-bottom: 39px;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 0.155em;
    text-transform: uppercase;
    color: #303030;
    @media (max-width: 600px) {
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      letter-spacing: 0.155em;
      text-transform: uppercase;
      color: #303030;
    }
  }
  &__list {
    margin: 0 0 31px;
    padding: 0;
    list-style: none;
    @media (max-width: 1024px) {
      text-align: left;
      margin-bottom: 70px;
    }
    li {
      position: relative;
      margin-bottom: 19px;
      padding-left: 39px;
      font-weight: 300;
      font-size: 18px;
      line-height: 160%;
      color: #303030;
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 10px;
        height: 10px;
        margin-top: -6px;
        background: #ff3754;
        border-radius: 3px;
      }
    }
  }
  &__extra,
  &__extra2 {
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      text-align: left;
    }
    .title {
      margin-bottom: 4px;
      font-weight: bold;
      font-size: 18px;
      line-height: 160%;
      color: #000000;
    }
    .text {
      font-weight: 300;
      font-size: 18px;
      line-height: 160%;
      color: #303030;
    }
  }
  &__extra2 {
    margin-bottom: 0;
    @media (max-width: 1024px) {
      padding: 0 0 30px;
    }
  }
  .VueCarousel-wrapper {
    padding-bottom: 40px;
  }
  .vue-slider-numbers {
    margin-bottom: -30px;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #303030;
  }
  .VueCarousel-navigation {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    max-width: 15%;
    margin: 0 auto;
    @media (max-width: 1024px) {
      max-width: 150px;
    }
  }
  .VueCarousel-navigation-prev,
  .VueCarousel-navigation-next {
    width: 30px;
    height: 30px;
    font-size: 0;
    outline: none !important;
    opacity: 1;
  }
  .VueCarousel-navigation-prev {
    background: url("../../../assets/right-arrow.png") 0 0 no-repeat;
    transform: rotate(-180deg) translate(0);
  }
  .VueCarousel-navigation-next {
    background: url("../../../assets/right-arrow.png") 0 0 no-repeat;
    transform: none;
  }
  .VueCarousel-navigation-button.VueCarousel-navigation-prev.VueCarousel-navigation--disabled {
    background: url("../../../assets/left-arrow.png") 0 0 no-repeat;
    transform: none;
  }
  .VueCarousel-navigation-next.VueCarousel-navigation--disabled {
    background: url("../../../assets/left-arrow.png") 0 0 no-repeat;
    transform: rotate(-180deg) translate(0);
  }
}
</style>

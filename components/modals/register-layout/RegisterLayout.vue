<template lang="pug">
.registerLayout
  .topBanner
    .mainBanner
      .mainBannerWrapper
        | Save your progress
      .line.left
      .line.right
      img.wireLeft(src='@/assets/img/svg/wire-left.svg', alt='alt')
      img.wireRight(src='@/assets/img/svg/wire-right.svg', alt='alt')
      img(
        v-for='(_, i) in Array(7)',
        :key='`lightning-decor-${i}`',
        :class='`lightning${i + 1}`',
        :src='require(`@/assets/img/svg/lightning-${i + 1}.svg`)',
        alt='alt'
      )
      img(
        v-for='(_, i) in Array(6)',
        :key='`vt-decor-${i}`',
        :class='`decor${i + 1}`',
        :src='require(`@/assets/img/svg/vector-decor-${i + 1}.svg`)',
        alt='vt-decor'
      )
      .dot(v-for='(_, i) in Array(12)', :class='`nth-${i + 1}`')
    .round
      img(src='@/assets/img/svg/question.svg', alt='alt')
  slot
  .footer
    BaseButton(variant='secondary') {{ $t("cancel") }}
</template>

<style lang="scss" >
@use '@/assets/css/_mix.scss' as *;
@use '@/assets/css/_func.scss' as *;

.registerLayout {
  position: relative;
  z-index: 100;
  width: 100%;
  max-width: 290px;
  height: auto;

  background: linear-gradient(
    180deg,
    rgba(109, 189, 215, 0.5) 0%,
    rgba(49, 126, 177, 0.2) 100%
  );
  border-radius: 20px;
  padding: 5px;

  > .topBanner {
    @include flexCenter;

    position: absolute;
    top: -4px;
    width: calc(100% - 10px);

    .mainBanner {
      @include flexCenter;

      position: relative;
      width: 100%;
      max-width: 200px;
      border: 3px solid #3296b5;
      border-radius: 8px;

      box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);

      .mainBannerWrapper {
        @include flexCenter;
        width: 100%;
        max-width: 200px;
        height: 42px;
        border-radius: 5px;

        background: #0e191f;

        color: #dbf9ff;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
      }

      .line {
        width: 5px;
        height: 16px;
        background: #1c6880;
        border-radius: 2px;

        position: absolute;
        z-index: 100;

        &.left {
          left: -6px;
        }

        &.right {
          right: -6px;
        }
      }

      .wireLeft {
        position: absolute;
        max-width: 45.84px;
        left: calc(100% + 1px);

        z-index: 50;
        transform: translateY(4px);
      }

      .wireRight {
        position: absolute;
        right: calc(100% + 1px);

        z-index: 50;
        transform: translateY(4px);
      }

      .lightning1 {
        position: absolute;
        left: calc(100% + 4px);

        z-index: 50;
        transform: translateY(4px);
      }

      .lightning2 {
        position: absolute;
        right: -14px;
        top: -8px;
        width: 35px;
        height: 22px;

        z-index: 50;
        transform: translateY(4px);
      }

      .lightning3 {
        position: absolute;
        right: -7px;
        bottom: -5px;
        width: 35px;
        height: 22px;

        z-index: 50;
        transform: translateY(4px);
      }

      .lightning4 {
        position: absolute;
        right: 50px;
        top: -5px;
        width: 35px;
        height: 22px;

        z-index: 50;
      }

      .lightning5 {
        position: absolute;
        right: 70px;
        bottom: -9px;
        width: 35px;
        height: 22px;

        z-index: 50;
      }

      .lightning6 {
        position: absolute;
        left: -10px;
        bottom: -6px;

        z-index: 50;
        transform: rotate(5.3deg);
      }

      .lightning7 {
        position: absolute;
        left: -15px;
        top: -3px;

        z-index: 50;
      }

      .decor1 {
        position: absolute;
        left: -50px;
        top: 0;
        z-index: 200;
      }

      .decor2 {
        position: absolute;
        left: -24px;
        bottom: 0;
        z-index: 200;
      }

      .decor2 {
        position: absolute;
        left: -23px;
        bottom: 0;
        z-index: 200;
      }

      .decor3 {
        position: absolute;
        left: 7px;
        top: -1px;
      }

      .decor4 {
        position: absolute;
        left: 24px;
        bottom: -1px;
      }

      .decor5 {
        position: absolute;
        right: 39px;
        bottom: -1px;
      }

      .decor6 {
        position: absolute;
        right: -1px;
        top: 12px;
      }

      .dot {
        position: absolute;
        width: 2px;
        height: 2px;

        background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);

        border: 0.2px solid #e1c45d;
        box-shadow: 0px 0px 7px rgba(217, 203, 80, 0.9);
        filter: blur(2px);
        transform: scale(0.8);

        &.nth-1 {
          left: -12px;
          top: 16px;
        }
        &.nth-2 {
          left: -8px;
          bottom: 5px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);

          border: 0.2px solid #e1c45d;
          filter: blur(1px);
        }
        &.nth-3 {
          left: 3px;
          top: 8px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          box-shadow: 0px 0px 7px rgba(217, 203, 80, 0.9);
          filter: blur(2px);
        }
        &.nth-4 {
          left: 6px;
          top: -3px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          filter: blur(1px);
        }
        &.nth-5 {
          width: 1px;
          height: 1px;
          left: 9px;
          bottom: 0;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          opacity: 0.5;

          border: 0.2px solid #e1c45d;
          filter: blur(1px);
          transform: matrix(1, 0, 0, -1, 0, 0);
        }
        &.nth-6 {
          width: 2px;
          height: 2px;
          left: 13px;
          bottom: 0;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          filter: blur(1px);
        }
        &.nth-7 {
          width: 2px;
          height: 2px;
          top: -2px;
          left: 52px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          /* spark/outline */

          border: 0.2px solid #e1c45d;
          box-shadow: 0px 0px 7px rgba(217, 203, 80, 0.9);
          filter: blur(2px);
        }

        &.nth-8 {
          width: 2px;
          height: 2px;
          top: 2px;
          right: 11px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          filter: blur(1px);
        }

        &.nth-9 {
          width: 2px;
          height: 2px;
          bottom: -4px;
          right: 22px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          box-shadow: 0px 0px 7px rgba(217, 203, 80, 0.9);
          filter: blur(2px);
        }

        &.nth-10 {
          width: 2px;
          height: 2px;
          bottom: -1px;
          right: -3px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          filter: blur(1px);
        }

        &.nth-11 {
          width: 2px;
          height: 2px;
          top: 12px;
          right: -16px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          box-shadow: 0px 0px 7px rgba(217, 203, 80, 0.9);
          filter: blur(2px);
        }

        &.nth-12 {
          width: 2px;
          height: 2px;
          bottom: 5px;
          right: -28px;

          background: linear-gradient(180deg, #fffa88 0%, #ffda55 100%);
          border: 0.2px solid #e1c45d;
          box-shadow: 0px 0px 7px rgba(217, 203, 80, 0.9);
          filter: blur(2px);
        }
      }
    }

    .round {
      $size: 42px;

      @include flexCenter;
      position: absolute;
      z-index: 100;
      left: -18px;
      width: $size;
      height: $size;

      background: #121b20;
      border: 3px solid #3296b5;
      border-radius: 100%;
    }
  }

  > .footer {
    @include flexCenter;

    padding: spacing(base) spacing(loose);
    background: #fff;
    border-radius: 0 0 20px 20px;
  }
}
</style>

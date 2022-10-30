<template>
  <section class="services-view">
    <h2 class="services-view__title">
      Услуги
    </h2>

    <div class="services-view__content">
      <div class="services-view__list">
        <div
          v-for="service in servicesWithChosenStatus"
          :key="service.id"
          class="services-view__item"
          :class="{'services-view__item--chosen': service.isChosen}"
          @click="handleServiceClick(service)"
        >
          <div class="services-view__item-title">
            {{ service.title }}
          </div>

          <div class="services-view__item-description">
            {{ service.description }}
          </div>

          <hr>
          <div class="services-view__item-price">
            ${{ service.price }}
          </div>
        </div>
      </div>

      <div class="services-view__result">
        <span>Итого</span>
        <span>{{ resultPrice }} $</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const services = [
  {
    id: 1,
    title: 'Веб разработка',
    price: 300,
  },
  {
    id: 2,
    title: 'Дизайн',
    price: 200,
  },
  {
    id: 3,
    title: 'Тестирование',
    price: 100,
  },
  {
    id: 4,
    title: 'SEO',
    price: 150,
  },
  {
    id: 5,
    title: 'Аналитика',
    price: 50,
  },
  {
    id: 6,
    title: 'Копирайтинг',
    price: 100,
  },
  {
    id: 7,
    title: 'Контекстная реклама',
    price: 150,
  },
];

const chosenServices = ref([]);

const servicesWithChosenStatus = computed(() => services.map((service) => {
  const isChosen = chosenServices.value.includes(service.id);

  return {
    ...service,
    isChosen,
  };
}));

const resultPrice = computed(() => servicesWithChosenStatus.value
  .reduce((acc, service) => (service.isChosen ? acc + service.price : acc), 0));

const handleServiceClick = (service) => {
  if (service.isChosen) {
    chosenServices.value = chosenServices.value.filter((id) => id !== service.id);
    return;
  }

  chosenServices.value.push(service.id);
};
</script>

<style lang="scss" scoped>
.services-view {
  position: relative;
  background: #5aa3ba;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 1rem;

  &__title {
    color: #fff;
    font-size: 2rem;
  }

  &__content {
    padding: 2rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__list {
    padding: 0 15% 1rem 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    overflow: auto;

    @include layout-mobile {
      padding: 0 5% 1rem 5%;
    }

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: #a7a5a5;
      border-radius: 0.5rem;
    }
  }

  &__item {
    user-select: none;
    cursor: pointer;
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;
    background: #e75684;
    border-radius: 0.2rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out;

    &:hover {
      filter: brightness(1.1);
      opacity: 0.8;
    }

    &--chosen {
      background: #8dbf74;
    }

    & + & {
      margin-top: 0.5rem
    }
  }

  &__item-price {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &__result {
    border-top: 0.2rem white solid;
    font-size: 1.2rem;
    font-weight: bold;
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: white;
    width: 100%;
    padding: 1rem 8rem;

    @include layout-mobile {
      padding: 1rem 5%;
    }
  }
}

</style>

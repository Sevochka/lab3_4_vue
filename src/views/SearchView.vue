<template>
  <section class="search-view">
    <div class="search-view__header">
      <SearchBar v-model="searchQuery" />
    </div>

    <transition
      name="fade"
      mode="out-in"
    >
      <div
        v-if="isLoading"
        class="search-view__loader-container"
      >
        <div class="search-view__loader" />
      </div>
      <div
        v-else
        class="search-view__list"
      >
        <div
          v-for="newsItem in newsSearched"
          :key="newsItem.url"
          class="search-view__item"
        >
          <a
            :href="newsItem.url"
            target="_blank"
            class="search-view__link"
          />

          <h4 class="search-view__item-title">
            {{ newsItem.title }}
          </h4>

          <p class="search-view__item-description">
            {{ newsItem.summary }}
          </p>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
import { computed, onMounted, ref } from 'vue';
import getNews from '@/services/getNews';

const news = ref([]);
const searchQuery = ref('');
const isLoading = ref(true);

const newsSearched = computed(() => news.value.filter((newsItem) => newsItem.title
  .toLowerCase()
  .includes(searchQuery.value.toLowerCase())));

onMounted(async () => {
  isLoading.value = true;
  news.value = await getNews();
  isLoading.value = false;
});
</script>

<style lang="scss" scoped>
.search-view {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    padding: 1rem;
    background: #549cb4;
  }

  &__list {
    height: 100%;
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: #a7a5a5;
      border-radius: 0.5rem;
    }
  }

  &__item {
    padding: 1rem;
    border: 1px solid #549cb4;
    border-radius: 0.25rem;
    margin-bottom: 1rem;
    position: relative;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: rgba(84, 156, 180, 0.4);
    }
  }

  &__item-title {
    margin: 0;
    margin-bottom: 0.5rem;
  }

  &__item-description {
    margin: 0;
  }

  &__link {
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &__loader-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__loader {
    width: 4.8rem;
    height: 4.8rem;
    border: 0.5rem solid #FFF;
    border-bottom-color: #FF3D00;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to, .fade-enter-from{
  opacity: 0;
}
</style>

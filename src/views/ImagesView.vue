<template>
  <section class="images-view">
    <div class="images-view__header">
      <div class="images-view__tabs">
        <button
          v-for="tab in tabs"
          :key="tab"
          class="images-view__tab"
          :class="{
            'images-view__tab--active': tab.name === currentTab,
          }"
          @click="handleTabChange(tab.name)"
        >
          <img
            :src="tab.img"
            :alt="tab.name"
          >
        </button>
      </div>
    </div>

    <div
      v-if="images"
      ref="scrollContainer"
      class="images-view__content"
    >
      <keep-alive>
        <component
          :is="currentImageComponent"
          :images="images"
        />
      </keep-alive>
    </div>
  </section>
</template>

<script setup>
import {
  onMounted, ref, computed, watch,
} from 'vue';
import listImg from '@/assets/images/list.svg';
import gridImg from '@/assets/images/grid.svg';
import getImages from '@/services/getImages';
import ImagesGrid from '@/components/images/ImagesGrid.vue';
import ImagesList from '@/components/images/ImagesList.vue';

const tabs = [{
  name: 'list',
  img: listImg,
}, {
  name: 'grid',
  img: gridImg,
}];

const scrollContainer = ref(null);
const images = ref(null);
const currentTab = ref('list');

const currentImageComponent = computed(() => (currentTab.value === 'list' ? ImagesList : ImagesGrid));

const handleTabChange = (tabName) => {
  currentTab.value = tabName;
};

onMounted(async () => {
  images.value = await getImages();
});

watch(() => currentTab.value, () => {
  scrollContainer.value.scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>
.images-view {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  &__header {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
    width: 100%;
    padding: 0 1rem;
    background-color: #549cb4;
  }

  &__tabs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    margin-left: auto;
  }

  &__tab {
    background-color: #40879e;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    transition: background-color 0.2s ease-in-out;

    & + & {
      margin-left: 0.5rem;
    }

    &:hover {
      opacity: 0.8;
    }

    &--active {
      background-color: #c44790;
    }

    img {
      width: 1rem;
      height: auto;
    }
  }

  &__content {
    display: flex;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    flex: 1 1 auto;

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
}
</style>

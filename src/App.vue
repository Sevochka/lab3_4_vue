<template>
  <section class="app">
    <CommonTabs
      v-model="activeTab"
      :tabs="tabs"
    />

    <div class="app__content">
      <keep-alive>
        <component :is="currentView" />
      </keep-alive>
    </div>
  </section>
</template>

<script setup>
import CommonTabs from '@/components/common/CommonTabs.vue';
import { computed, ref } from 'vue';
import ServicesView from '@/views/ServicesView.vue';
import SearchView from '@/views/SearchView.vue';

const tabs = [
  {
    label: 'Лаб.3 - Услуги',
    value: 'services',
    component: ServicesView,
  },
  {
    label: 'Лаб.4 - Поиск',
    value: 'search',
    component: SearchView,
  },
];

const activeTab = ref('services');

const currentView = computed(() => {
  const tab = tabs.find(({ value }) => value === activeTab.value);

  return tab.component;
});
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    border: 1px solid $color-primary;
    border-radius: 0.25rem;
    width: 40rem;
    height: 30rem;
  }
}
</style>

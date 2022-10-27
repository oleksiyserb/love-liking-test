<script setup lang="ts">
defineProps<{
  text: string;
  color: "color-emotion" | "color-love" | "color-liking";
  percent: number;
  min: number;
  max: number;
  totalPoints: number;
  isFlex?: boolean;
}>();
</script>

<template>
  <div class="progress__item" :class="{ flex: isFlex }">
    <p class="progress__text">{{ text }}</p>
    <div class="progress__wrapper">
      <div class="progress__bar">
        <div class="progress__progress-bar">
          <div :class="color" :style="{ width: `${percent}%` }" />
        </div>
        <div class="progress__values">
          <span>{{ min }}</span>
          <span>{{ max }}</span>
        </div>
      </div>
      <div class="progress__count">
        <span>{{ totalPoints }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress__text {
  margin-bottom: 0.5rem;
}

.progress__progress-bar {
  height: 30px;
  background-color: var(--color-background-fourthary);
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.progress__progress-bar > div {
  height: 100%;
}

.progress__values {
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
}

.progress__wrapper {
  display: flex;
}

.progress__bar {
  flex-grow: 1;
}

.progress__count {
  margin-top: 0.2rem;
  margin-left: 0.5rem;
}

.progress__count > span {
  font-weight: bold;
}

.color-emotion {
  background-color: var(--color-emotion);
}

.color-love {
  background-color: var(--color-love);
}

.color-liking {
  background-color: var(--color-liking);
}

.progress__item {
  margin: var(--section-gap) 0;
}

.progress__item.flex {
  display: flex;
}

.progress__item.flex > p {
  margin-top: 0.2rem;
  margin-right: 1.11rem;
}

.progress__item.flex > div {
  flex-grow: 1;
}
</style>

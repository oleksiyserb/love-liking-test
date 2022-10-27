<script setup lang="ts">
import { computed } from "vue";

import type Question from "@/models/question";

const props = defineProps<{
  questions: Question[];
  currentQuestionNumber: number;
}>();
const emit = defineEmits<{
  (e: "next-question", points: number): void;
}>();

const questionIndex = computed(() => {
  return props.currentQuestionNumber - 1;
});

const totalQuestionsPercent = computed(() => {
  return (100 * questionIndex.value) / props.questions.length;
});
</script>

<template>
  <div class="counter">
    <span>{{ currentQuestionNumber }}</span
    >/{{ questions.length }}
  </div>
  <base-container class="wrapper">
    <div class="quiz">
      <h1>
        {{ currentQuestionNumber }}.
        {{ questions[questionIndex].questionText }}
      </h1>
      <div class="buttons">
        <base-button
          v-for="(question, idx) in questions[questionIndex].answerOptions"
          :key="idx"
          @click="emit('next-question', question.points)"
        >
          {{ question.answerText }}
        </base-button>
      </div>
    </div>
  </base-container>
  <div class="bottom-banner">
    <div
      class="bottom-banner-load"
      :style="{ width: `${totalQuestionsPercent}%` }"
    />
  </div>
</template>

<style scoped>
.quiz {
  max-width: 860px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.wrapper {
  display: flex;
  align-items: center;
  min-height: 100vh;
}

.buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.buttons > button {
  margin: 0.5rem 0;
}

.counter {
  position: absolute;
  font-size: 1.78rem;
  top: 2.22rem;
  left: 2.22rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .counter {
    left: 1rem;
  }
}

.counter > span {
  color: var(--color-text-thirdary);
  font-weight: inherit;
}

.bottom-banner {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: 15px;
  background-color: var(--color-background-secondary);
}

.bottom-banner-load {
  height: 15px;
  background-color: var(--color-background-thirdary);
}
</style>

<script setup lang="ts">
import { ref, onBeforeMount, watch } from "vue";

import TheHome from "./components/TheHome.vue";
import TheQuiz from "./components/TheQuiz.vue";
import ResultPage from "./components/ResultPage.vue";

import type Question from "./models/question";

const isTestProceed = ref<boolean>(false);
const isTestEnd = ref<boolean>(false);
const currentQuestion = ref<number>(1);
const lovePoints = ref<number>(0);
const likingPoints = ref<number>(0);

const startTestHandler = () => {
  isTestProceed.value = true;
};

const questions = ref<Question[]>([]);

onBeforeMount(async () => {
  const response = await fetch("questions.json");

  const data: { questions: Question[] } = await response.json();
  questions.value = data.questions;
});

const nextQuestionHandler = (points: number) => {
  if (currentQuestion.value % 2 === 0) {
    likingPoints.value += points;
    currentQuestion.value++;
  } else {
    lovePoints.value += points;
    currentQuestion.value++;
  }
};

const restartTestHandler = () => {
  isTestEnd.value = false;
  isTestProceed.value = true;
  lovePoints.value = 0;
  likingPoints.value = 0;
  currentQuestion.value = 1;
};

watch(currentQuestion, (current) => {
  if (current > questions.value.length) {
    isTestProceed.value = false;
    isTestEnd.value = true;
  }
});
</script>

<template>
  <the-home v-if="!isTestProceed && !isTestEnd" @start="startTestHandler" />
  <the-quiz
    v-else-if="isTestProceed"
    :questions="questions"
    :current-question-number="currentQuestion"
    @next-question="nextQuestionHandler"
  />
  <result-page
    :love-points="lovePoints"
    :liking-points="likingPoints"
    @restart-test="restartTestHandler"
    v-else
  />
</template>

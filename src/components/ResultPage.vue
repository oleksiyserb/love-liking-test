<script setup lang="ts">
import { computed } from "vue";
import ReloadIcon from "./icons/ReloadIcon.vue";
import ProgressItem from "./progress/ProgressItem.vue";

const emit = defineEmits<{
  (e: "restart-test"): void;
}>();
const props = defineProps<{
  lovePoints: number;
  likingPoints: number;
}>();

const totalPoints = computed(() => {
  return props.lovePoints + props.likingPoints;
});
const totalPercentPoints = computed(() => {
  return (100 * (totalPoints.value - 14)) / 56;
});
const totalLovePercentPoints = computed(() => {
  return (100 * (props.lovePoints - 7)) / 28;
});
const totalLikingPercentPoints = computed(() => {
  return (100 * (props.likingPoints - 7)) / 28;
});
</script>

<template>
  <section class="info">
    <base-container>
      <h1>Тест на рівень симпатії і кохання</h1>
      <base-button @click="emit('restart-test')"
        ><reload-icon /> Пройти тест знову</base-button
      >
    </base-container>
  </section>
  <section class="result">
    <base-container>
      <h2 class="result__title">Ваш результат:</h2>
      <div class="progress">
        <progress-item
          text="Загальний рівень емоційних відносин"
          color="color-emotion"
          :percent="totalPercentPoints"
          :min="14"
          :max="56"
          :total-points="totalPoints"
        />
        <progress-item
          text="Шкала кохання"
          color="color-love"
          :percent="totalLovePercentPoints"
          :min="7"
          :max="28"
          :total-points="lovePoints"
          is-flex
        />
        <progress-item
          text="Шкала симпатії"
          color="color-liking"
          :percent="totalLikingPercentPoints"
          :min="7"
          :max="28"
          :total-points="likingPoints"
          is-flex
        />
      </div>
      <p>
        <span class="color-love">Шкала кохання</span> реєструє три компонента
        кохання: прив’язаність, турбота та степінь інтимності стосунків.
      </p>
      <p>
        <span class="color-liking">Шкала симпатії</span> реєструє степінь поваги
        і ступінь захопленості, що сприймається.
      </p>
      <p>
        Сумарний бал по обом шкалам характеризує загальний рівень
        <span class="color-emotion">емоційних відносин</span>.
      </p>
    </base-container>
  </section>
</template>

<style scoped>
.info {
  text-align: center;
}

.info h1 {
  margin-top: 3.33rem;
  font-size: 2rem;
}

.result {
  color: var(--color-text-secondary);
  background-color: var(--color-background-thirdary);
}

.result__title {
  color: var(--color-heading-primary);
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.7rem;
}

.color-emotion {
  color: var(--color-emotion);
}

.color-love {
  color: var(--color-love);
}

.color-liking {
  color: var(--color-liking);
}
</style>

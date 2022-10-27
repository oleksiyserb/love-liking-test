<template>
  <button type="button" class="button">
    <slot />
  </button>
</template>

<style scoped>
.button {
  background-color: var(--color-background-secondary);
  border: 2px solid transparent;
  border-radius: 5px;
  margin: var(--section-gap) 0;
  padding: 1rem 2.22rem;
  cursor: pointer;
  color: var(--color-text-primary);
  font-weight: bold;
  font-size: 1.11rem;
  transition: border, background 0.2s ease-in-out;
}

.button:hover {
  border: 2px solid var(--color-border-primary);
  background: transparent;
}
</style>

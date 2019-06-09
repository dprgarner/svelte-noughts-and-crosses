<script>
  import GridButton from './GridButton.svelte';
  import { getWinner } from './utils';
  import { createEventDispatcher } from 'svelte';

  export let buttons;
  export let complete;

  const dispatch = createEventDispatcher();
</script>

<style>
  .grid {
    display: grid;
    grid-template-columns: 100px 100px 100px;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
</style>

<div class="grid">
  {#each buttons as button, i}
    <GridButton
      on:click={() => dispatch('play', i)}
      disabled={!!button || complete}>
      {button}
    </GridButton>
  {/each}
</div>

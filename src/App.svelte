<script>
  import Grid from './Grid.svelte';
  import { all, getWinner, range } from './utils';

  let buttons;
  let nextPlayer;
  let winner;

  function handlePlay(event) {
    buttons = [...buttons];
    buttons[event.detail] = nextPlayer;
    nextPlayer = nextPlayer == 'X' ? 'O' : 'X';
    winner = getWinner(buttons);
  }

  function reset() {
    buttons = range(9).map(() => '');
    nextPlayer = 'X';
    winner = null;
  }

  reset();
</script>

<style>
  main {
    margin: auto;
    width: 350px;
  }

  button {
    margin-top: 16px;
  }
</style>

<main>
  {#if winner}
    <h2>Winner: {winner}</h2>
  {:else if all(buttons)}
    <h2>Draw</h2>
  {:else}
    <h2>Next player: {nextPlayer}</h2>
  {/if}

  <Grid {buttons} on:play={handlePlay} complete={!!winner} />

  <button on:click={reset}>Reset</button>
</main>

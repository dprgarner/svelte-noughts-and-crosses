<script>
  import NewCpt from './NewCpt.svelte';

  export let name;
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<div>
  <h1>Hello {name.toUpperCase()}!</h1>

  <NewCpt />
</div>

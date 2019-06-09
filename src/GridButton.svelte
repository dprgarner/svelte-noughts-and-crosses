<script>
  export let disabled;
</script>

<style>
  button {
    background-color: #f4f4f4;
    border-radius: 2px;
    border: 1px solid #ccc;
    color: black;
    font-size: 32px;
    height: 100px;
    margin: 0;
    outline: none;
    width: 100px;
  }
</style>

<button on:click {disabled}>
  <slot />
</button>

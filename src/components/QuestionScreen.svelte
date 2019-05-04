<script>
  import Screen from './Screen.svelte'
  export let dog = null
  export let service
  export let state
  function onClickYes() {
    service.send('YES')
  }
  function onClickNo() {
    service.send('NO')
  }
</script>
  
<Screen service={service}>
  {#if dog !== null}
    <img src={dog} height={200} alt="dog" />
  {/if}
  <header>Would you adopt this dog?</header>
  <button on:click={onClickYes} data-variant="yes">
    Yes
  </button>
  <button on:click={onClickNo} data-variant="no">
    No
  </button>
</Screen>

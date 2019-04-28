<script>
  import Screen from './Screen.svelte'

  let value = ''
  export let service

  function onSubmit(e) {
    e.preventDefault()
    service.send({ type: 'SUBMIT', value })
  }
  function onEscape(e) {
    if (e.key === 'Escape') {
      e.stopPropagation()
      service.send('CLOSE')
    }
  }
</script>

<Screen service={service}>
  <form on:submit={onSubmit}>
    <header>Care to tell us why?</header>
    <textarea
      placeholder="Complain here"
      bind:value
      on:keydown={onEscape}
    ></textarea>
    {#if service.current.matches({ form: 'loading' })}
      <div>...loading</div>
    {:else}
      <button>Submit</button>
    {/if}
  </form>
</Screen>

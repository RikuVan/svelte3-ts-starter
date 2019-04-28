<script>
  import Screen from './Screen.svelte'
  export let service
</script>
<Screen service={service}>
  <header>Thanks for your feedback:</header>
  <p>{service.current.context.feedback.message}</p>
</Screen>
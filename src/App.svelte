<script>
  import { onMount } from 'svelte'
  import FormScreen from './components/FormScreen.svelte'
  import QuestionScreen from './components/QuestionScreen.svelte'
  import ThanksScreen from './components/ThanksScreen.svelte'
  import { machine } from './stores/surveyStore'

  let dogSrc
  onMount(async () => {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const { message } = await res.json()
    dogSrc = message
  })

  let current

  machine.subscribe(state => {
    current = state
  })

  console.log('current', current)
  console.log('dog', dogSrc)
</script>

<style lang="less">
  @import './less/vars.less';
  .app {
    background: @green;
  }
</style>

<main class="app">
  {#if current.matches('question')}
    <QuestionScreen dog={dogSrc} service={{...machine, current}} />
  {/if}
  {#if current.matches('form')}
    <FormScreen service={{...machine, current}} />
  {/if}
  {#if current.matches('thanks')}
    <ThanksScreen service={{...machine, current}} />
  {/if}
</main>
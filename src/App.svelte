<script>
  import { onMount } from 'svelte'
  import FormScreen from './components/FormScreen.svelte'
  import QuestionScreen from './components/QuestionScreen.svelte'
  import ThanksScreen from './components/ThanksScreen.svelte'
  import { machine } from './stores/surveyStore'
  
  let dog = null
  onMount(async () => {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`)
    const { message } = await res.json()
  })

  let current

  machine.subscribe((state) => {
    current = state
  })
</script>

<main class="app">
  {#if current.matches('question')}
    <QuestionScreen dog={dog} service={{...machine, current}} />
  {/if}
  {#if current.matches('form')}
    <FormScreen service={{...machine, current}} />
  {/if}
  {#if current.matches('thanks')}
    <ThanksScreen service={{...machine, current}} />
  {/if}
</main>
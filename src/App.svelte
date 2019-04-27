<style>
  p,
  button {
      color: purple;
      font-family: 'Comic Sans MS';
      font-size: 2em;
  }
</style>

<script>
  import Image from './components/Image.svelte'
  import { countStore } from './stores/custom.ts'
  let input = ''

  function handleClick() {
      $countStore.count += 1
  }
</script>

<button on:click={handleClick}>
	Clicked {$countStore.count} {$countStore.count === 1 ? 'time' : 'times'}
</button>

<button on:click={countStore.increment}>
  +
</button>

<input id="input"  bind:value={input}/>
<p>{input}</p>
<Image src="https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="dog" />
<Image />
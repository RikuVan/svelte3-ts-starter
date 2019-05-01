<script>
    export let service
    export let state
    function onClose() {
      service.send('CLOSE')
    }
</script>

<section class="screen">
  <button title="close" type="button" on:click={onClose} />
  <slot></slot>
</section>

<script lang="ts" setup>

const props = defineProps<{diagram: string}>();
const diagram = props.diagram;

const id="c4_eddie_someCrazyIdThingy"
const src=`https://diagrams-eddie.projekte.fh-hagenberg.at/embed/1?diagram=${diagram}&amp;diagramSelector=false&amp;iframe=${id}`;
</script>

<style>
.c4-diagram {
    border-top: 1px solid var(--vp-c-divider);
    border-bottom: 1px solid var(--vp-c-divider);
}
</style>

<template>
  <iframe
    class="c4-diagram"
    :id
    :src
    width="1152px"
    marginwidth="0"
    marginheight="0"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true"
    height="929px"
  >
  </iframe>
</template>

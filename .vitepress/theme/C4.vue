<script lang="ts" setup>
const props = defineProps<{ diagram: string }>();
let diagramKey = props.diagram;

// prevent users form accidentally prefixing the diagramKey with '#'
if (diagramKey.startsWith("#")) {
  console.warn(
    `WARNING (${diagramKey}): please do not prefix the diagram key with '#'`
  );
  diagramKey = diagramKey.substring(1);
}

// generate random suffix so that ids do not collide (https://stackoverflow.com/a/33146982)
const suffix = btoa(String(Math.random())).slice(-7, -2);
const id = `c4_${diagramKey}_${suffix}`;

// TODO: read from environment variables, so that local builds are possible as well
// reference: https://vitejs.dev/guide/env-and-mode
// how it was: https://github.com/eddie-energy/architecture/pull/59/files#diff-88644e2fe55cfcc9d38322f85653f8a3ee472c5bf5cc477c0e0d6e81b0209733
const structurizrWorkspaceId = 1;
const structurizrBasePath = "https://diagrams-eddie.projekte.fh-hagenberg.at";

// create the URL using JavaScript's URL API (this allows us to properly append the pathname and search params)
const src = new URL(structurizrBasePath);
src.pathname = `embed/${structurizrWorkspaceId}`;
src.searchParams.append("diagram", diagramKey);
src.searchParams.append("diagramSelector", String(false));
src.searchParams.append("iframe", id);
</script>

<style>
.c4-diagram {
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  width: 100%;
  background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23333333" x="50%" y="50%" font-family="\'Lucida Grande\', sans-serif" font-size="24" text-anchor="middle">loading...</text></svg>')
    0px 0px no-repeat;
}
</style>

<template>
  <iframe
    class="c4-diagram"
    :id
    :src="src.href"
    marginwidth="0"
    marginheight="0"
    frameborder="0"
    scrolling="no"
    allowfullscreen="true"
  >
  </iframe>
</template>

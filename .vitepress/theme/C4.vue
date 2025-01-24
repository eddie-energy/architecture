<script lang="ts" setup>
import { ref } from "vue";

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

const isMaximized = ref(false);

function maximize() { isMaximized.value = true; }
function minimize() { isMaximized.value = false; }

</script>

<style>
.outer {
  position: relative;
}

.maxdiv {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.catchall {
  cursor: zoom-in;
}

.darkened-maxed {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  cursor: zoom-out;
  background-color: #00000066;
  padding: 1ex 1ex;
}

.closer {
  font-size: 1.5em;
  font-weight: 500;
  color: white;
  text-align: right;
}

.c4-diagram {
  border-top: 1px solid var(--vp-c-divider);
  border-bottom: 1px solid var(--vp-c-divider);
  width: 100%;
  background: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100% 100%"><text fill="%23333333" x="50%" y="50%" font-family="\'Lucida Grande\', sans-serif" font-size="24" text-anchor="middle">loading...</text></svg>') 0px 0px no-repeat;
}

.c4-maximized {
  position: fixed;
  width: calc(100% - 4rem);
  height: calc(100% - 6rem);
  top: 4rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  z-index: 200;
}
</style>

<template>
  <div class="outer">
    <div class="maxdiv closer" :class="{ 'darkened-maxed' : isMaximized }" @click="minimize">
      <span v-if="isMaximized">close<span style="font-size: 1.5em;">&times;</span></span> 
    </div>
    <iframe class="c4-diagram" :class="{ 'c4-maximized': isMaximized }" :id :src="src.href" marginwidth="0"
      marginheight="0" frameborder="0" :scrolling="isMaximized ? 'yes' : 'no'" allowfullscreen="true">
    </iframe>
    <div class="maxdiv catchall" @click="maximize">
    </div>
  </div>
</template>

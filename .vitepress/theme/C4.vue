<script lang="ts" setup>
import { nextTick, onMounted, reactive, ref } from "vue";

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
const sizerRef = ref<HTMLDivElement>();
const iframeRef = ref<HTMLIFrameElement>();
const iframeStyles = reactive({} as { width: string });
var originalAspectRatio = 0;

/**
 * Resize the iframes width when maximized. It basically limits the width of the iframe because
 * the C4 diagrams are always zoomed to fit the iframe's width. If the diagram doesn't match
 * in height however, the lower part of the diagram cannot be seen.
 * 
 * It works like this:
 * 1. when maximized, the original aspect ratio is stored in the variable `originalAspectRatio`
 * 2. there is a div.c4-sizer as a parent around the iframe that is maximized when the diagram is clicked on
 * 3. after resizing the .c4-sizer, that element is queried to determine the available space on screen
 * 4. the maximum width of the iframe is calculated and set on the iframe
 */
function resizeMaxedIframe() {
  if (isMaximized.value && iframeRef.value && sizerRef.value && originalAspectRatio) {
    const { width, height } = sizerRef.value.getBoundingClientRect();
    const matchingWidth = Math.min(height * originalAspectRatio, width);
    console.log("resize maximized iframe to " + matchingWidth);
    iframeStyles.width = matchingWidth + "px";
  } else {
    console.log("not resizing iframe");
  }
}

function maximize() {
  isMaximized.value = true;
  if (iframeRef.value) {
    const { width, height } = iframeRef.value.getBoundingClientRect();
    originalAspectRatio = width / height;
    nextTick(resizeMaxedIframe);
    window.addEventListener("resize", resizeMaxedIframe);
  }
}

function minimize() {
  isMaximized.value = false;
  window.removeEventListener("resize", resizeMaxedIframe);
  iframeStyles.width = "";
}

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
  pointer-events: all;
}

.c4-sizer {
  width: 100%;
  height: auto;
  pointer-events: none;
}

.c4-sizer-maxed {
  position: fixed;
  width: calc(100% - 4rem);
  height: calc(100% - 6rem);
  top: 4rem;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  z-index: 200;
}

.c4-sizer-maxed .c4-diagram {
  height: 100%;
  margin: 0 auto;
}
</style>

<template>
  <div class="outer">
    <div class="maxdiv closer" :class="{ 'darkened-maxed': isMaximized }" @click="minimize">
      <span v-if="isMaximized">close<span style="font-size: 1.5em;">&times;</span></span>
    </div>
    <div class="c4-sizer" :class="{ 'c4-sizer-maxed': isMaximized }" ref="sizerRef">
      <iframe :id class="c4-diagram"  :style="iframeStyles" ref="iframeRef"
        :src="src.href" marginwidth="0" marginheight="0" frameborder="0" scrolling="no" allowfullscreen="true">
      </iframe>
    </div>
    <div class="maxdiv catchall" @click="maximize">
    </div>
  </div>
</template>

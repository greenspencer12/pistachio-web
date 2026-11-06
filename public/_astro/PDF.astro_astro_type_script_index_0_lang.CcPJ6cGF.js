import{n as g}from"./dangerouslyConsole.CfbKyowj.js";globalThis.process??={};globalThis.process.env??={};var v="/_astro/pdf.min.iwdRJ05h.mjs",b="/_astro/pdf.worker.min.Dkey6ZUl.mjs",E="/_astro/jbig2.BUnLb-NU.wasm",_="/_astro/openjpeg.tw7Aizcv.wasm",F="allow-scripts",o={render:"owner-pdf-viewer:render",size:"owner-pdf-viewer:size",rendered:"owner-pdf-viewer:rendered",error:"owner-pdf-viewer:error"},P=1e6,R=e=>{if(typeof e!="object"||e===null||!("type"in e))return null;switch(e.type){case o.rendered:return{type:"rendered"};case o.error:return{type:"error"};case o.size:{const t="height"in e?e.height:void 0;return typeof t!="number"||!Number.isFinite(t)||t<0?null:{type:"size",height:Math.min(Math.ceil(t),P)}}default:return null}},k=["default-src 'none'","script-src 'unsafe-inline' blob: 'wasm-unsafe-eval'","worker-src blob:","style-src 'unsafe-inline'","img-src blob: data:","font-src blob: data:"].join("; "),x=`
(() => {
  const types = ${JSON.stringify(o)}
  const send = (message) => window.parent.postMessage(message, '*')
  const pages = document.getElementById('pages')
  let started = false

  const toModuleUrl = (bytes) =>
    URL.createObjectURL(new Blob([bytes], { type: 'text/javascript' }))

  const render = async ({ library, worker, pdf, decoders }) => {
    const pdfjs = await import(toModuleUrl(library))
    pdfjs.GlobalWorkerOptions.workerSrc = toModuleUrl(worker)

    class BinaryDataFactory {
      async fetch({ kind, filename }) {
        if (kind !== 'wasmUrl' || !Object.hasOwn(decoders, filename)) {
          throw new Error('Unavailable PDF resource: ' + filename)
        }
        return new Uint8Array(decoders[filename])
      }
    }

    const doc = await pdfjs.getDocument({
      data: new Uint8Array(pdf),
      BinaryDataFactory,
      useWorkerFetch: false,
    }).promise

    const maxWidth = Math.min(document.documentElement.clientWidth - 32, 900)
    const pixelRatio = window.devicePixelRatio || 1

    const canvases = await Promise.all(
      Array.from({ length: doc.numPages }, async (_, index) => {
        const page = await doc.getPage(index + 1)
        const scale = maxWidth / page.getViewport({ scale: 1 }).width
        const viewport = page.getViewport({ scale: scale * pixelRatio })
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        canvas.style.width = viewport.width / pixelRatio + 'px'
        canvas.style.height = viewport.height / pixelRatio + 'px'
        await page.render({ canvas, viewport }).promise
        return canvas
      })
    )

    for (const canvas of canvases) {
      pages.appendChild(canvas)
    }

    const sendSize = () =>
      send({ type: types.size, height: pages.getBoundingClientRect().height })
    new ResizeObserver(sendSize).observe(pages)
    sendSize()
    send({ type: types.rendered })

    void pages.offsetHeight
    pages.classList.add('visible')
  }

  window.addEventListener('message', (event) => {
    if (started || event.source !== window.parent) return
    if (!event.data || event.data.type !== types.render) return
    started = true
    render(event.data).catch(() => send({ type: types.error }))
  })
})()
`,M=`<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Security-Policy" content="${k}">
<style>
html, body { margin: 0; padding: 0; overflow: hidden; background: transparent; }
#pages { display: flex; flex-direction: column; align-items: center; gap: 16px; }
#pages canvas { display: block; border-radius: 8px; box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05); opacity: 0; transition: opacity 300ms; }
#pages.visible canvas { opacity: 1; }
</style>
</head>
<body>
<div id="pages"></div>
<script>${x}<\/script>
</body>
</html>`,S=6e4;async function s(e,t){const n=await fetch(e,t);if(!n.ok)throw new Error(`Failed to fetch ${e}: ${n.status}`);return await n.arrayBuffer()}function j(e){const t=document.createElement("iframe");return t.setAttribute("sandbox",F),t.title=e,t.className="block w-full border-0",t.style.height="0px",t.srcdoc=M,t}function D(e){return new Promise(t=>{e.addEventListener("load",()=>t(),{once:!0})})}function A(e){return new Promise((t,n)=>{const r=window.setTimeout(()=>{n(new Error("PDF viewer timed out"))},S);window.addEventListener("message",i=>{if(i.source!==e.contentWindow)return;const a=R(i.data);a&&(a.type==="size"?e.style.height=`${a.height}px`:a.type==="rendered"?(window.clearTimeout(r),t()):(window.clearTimeout(r),n(new Error("PDF viewer failed to render"))))})})}async function L(e,t){const n=e.querySelector(".pdf-frame-container"),r=e.querySelector(".pdf-skeleton"),i=e.querySelector(".pdf-error");if(!(!n||!r||!i))try{const a=j(e.dataset.pdfTitle??"PDF document"),m=D(a);n.appendChild(a);const[d,c,l,p,f]=await Promise.all([s(v),s(b),s(t,{credentials:"omit"}),s(E),s(_),m]),w=a.contentWindow;if(!w)throw new Error("PDF viewer frame is unavailable");const h=A(a),y={type:o.render,library:d,worker:c,pdf:l,decoders:{"jbig2.wasm":p,"openjpeg.wasm":f}};w.postMessage(y,"*",[d,c,l,p,f]),await h,r.classList.add("hidden")}catch(a){g("Failed to load PDF:",a),r.classList.add("hidden"),n.classList.add("hidden"),i.classList.remove("hidden")}}function u(){document.querySelectorAll(".pdf-section[data-pdf-url]").forEach(e=>{if(e.dataset.pdfInitialized)return;e.dataset.pdfInitialized="true";const t=e.dataset.pdfUrl;if(!t)return;e.dataset.pdfInline==="true"&&L(e,t);const n=e.querySelector(".pdf-download-button");n&&n.addEventListener("click",()=>{const r=document.createElement("a");r.href=t,r.download="",r.target="_blank",r.rel="noopener noreferrer",document.body.appendChild(r),r.click(),document.body.removeChild(r)})})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",u):u();

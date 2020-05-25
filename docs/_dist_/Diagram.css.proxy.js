
const code = "svg.svelte-1q5u4ch{background:#fafafa;width:100%}.grid.svelte-1q5u4ch{display:grid;grid-template-columns:min-content 1fr min-content;grid-template-rows:min-content 1fr;grid-column-gap:5px;grid-row-gap:5px}.y-label.svelte-1q5u4ch{writing-mode:vertical-rl;transform:rotate(180deg)}.y-label-right.svelte-1q5u4ch{writing-mode:vertical-rl}.border.svelte-1q5u4ch{stroke:#adadad;stroke-width:0.25}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);

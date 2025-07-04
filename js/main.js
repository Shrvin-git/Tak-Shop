import { loadFooterSite } from "./core/include.js";
import { loadMegaMenuNavbar } from "./ui/megaMenu.js";

window.addEventListener('load', () => {
    loadFooterSite()
    loadMegaMenuNavbar()
})
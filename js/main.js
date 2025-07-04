import { loadFooterSite } from "./core/include.js";
import { loadMegaMenuNavbar } from "./ui/megaMenu.js";
import { accordionToggle } from "./ui/accordion.js";

window.addEventListener('load', () => {
    loadFooterSite()
    loadMegaMenuNavbar()
    accordionToggle()
})
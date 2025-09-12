import { Edge, Node } from "reactflow";
import { SLIDE_WIDTH, SLIDE_HEIGHT, SLIDE_PADDING, SlideData } from "./Slide.tsx";
import TrustDex from "./trust-dex";
import BoxCarouselDemo from "./intro/cover.tsx";
import Interests from "./intro/interests";
import ExperimentalCode from "./intro/experimentalcode";
import ThinkingAbout from "./intro/thinkingabout";
// import ArchiveBoard from "./intro/archiveboard";

// DirectExpress components
import HeroDirectExpress from "./directexpress/hero-directexpress";
import PersonasDex from "./directexpress/personas-dex";
import PillarsDex from "./directexpress/pillars-dex";
import AtmDex from "./directexpress/atm-dex";
import BillpayDex from "./directexpress/billpay-dex";
import MobileflowsDex from "./directexpress/mobileflows-dex";
import TechnicalFeaturesDirectExpress from "./directexpress/technicalfeatures-directexpress";

// Coinbase components
import HeroCloud from "./coinbase/hero-cloud";
import PersonasCloud from "./coinbase/personas-cloud";
import { CloudIllustration as IllustrationCloud } from "./coinbase/illustration-cloud";
import { NodesCloud } from "./coinbase/nodes-cloud";
import SandboxCloud from "./coinbase/sandboxcloud";
import TechnicalFeaturesCloud from "./coinbase/technicalfeatures-cloud";
import { DevsCloud } from "./coinbase/devs-cloud";
import { DocsCloud } from "./coinbase/docs-cloud";
import { BisonTrails } from "./coinbase/bisontrails";

// Row 1 (top row) - 5 slides with flow to next row
const slide01 = { id: "01", data: { left: "04", right: "02", down: "06", component: BoxCarouselDemo } };
const slide02 = { id: "02", data: { left: "01", right: "05", down: "07", component: Interests } };
const slide03 = { id: "03", data: { left: "05", right: "04", down: "08", component: ExperimentalCode } };
const slide04 = { id: "04", data: { left: "03", right: "06", down: "09", component: ThinkingAbout } }; // right goes to first slide of row 2
const slide05 = { id: "05", data: { left: "02", right: "03", down: "10", source: `![Archive Board](https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/597d0c9a-0bf5-435e-30d0-2b20dd145500/public)` } };

// Row 2 - ALL DirectExpress components (8 slides) with flow to next row
const slide06 = { id: "06", data: { left: "04", right: "07", up: "01", down: "15", component: HeroDirectExpress } }; // left goes back to last slide of row 1
const slide07 = { id: "07", data: { left: "06", right: "08", up: "02", down: "16", component: PersonasDex } };
const slide08 = { id: "08", data: { left: "07", right: "09", up: "05", down: "17", component: MobileflowsDex } };
const slide09 = { id: "09", data: { left: "08", right: "10", up: "05", down: "18", component: TechnicalFeaturesDirectExpress } };
const slide10 = { id: "10", data: { left: "09", right: "11", up: "05", down: "19", component: PillarsDex } };
const slide11 = { id: "11", data: { left: "10", right: "12", up: "05", down: "20", component: AtmDex } };
const slide12 = { id: "12", data: { left: "11", right: "13", up: "05", down: "21", component: BillpayDex } };
const slide13 = { id: "13", data: { left: "12", right: "15", up: "05", down: "22", component: TrustDex } }; // right goes to first slide of row 3

// Row 3 - ALL Coinbase components (9 slides) with flow back to first row
const slide15 = { id: "15", data: { left: "13", right: "16", up: "06", component: HeroCloud } }; // left goes back to last slide of row 2
const slide16 = { id: "16", data: { left: "15", right: "17", up: "07", component: BisonTrails } };
const slide17 = { id: "17", data: { left: "16", right: "18", up: "08", component: PersonasCloud } };
const slide18 = { id: "18", data: { left: "17", right: "19", up: "09", component: SandboxCloud } };
const slide19 = { id: "19", data: { left: "18", right: "20", up: "10", component: TechnicalFeaturesCloud } };
const slide20 = { id: "20", data: { left: "19", right: "21", up: "11", component: IllustrationCloud } };
const slide21 = { id: "21", data: { left: "20", right: "22", up: "12", component: DocsCloud } };
const slide22 = { id: "22", data: { left: "21", right: "23", up: "13", component: DevsCloud } };
const slide23 = { id: "23", data: { left: "22", right: "01", up: "13", component: NodesCloud } }; // right goes to first slide of row 1

const slideArray = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10,
 slide11, slide12, slide13, slide15, slide16, slide17, slide18, slide19, slide20,
 slide21, slide22, slide23];

console.log("Slide array length:", slideArray.length);
console.log("Checking for undefined slides...");
slideArray.forEach((slide, index) => {
  if (!slide) {
    console.error(`Undefined slide at index ${index}`);
  }
});

export const slides = Object.fromEntries(
  slideArray.map(({ id, data }) => [id, data]),
) as Record<string, SlideData>;

export const slidesToElements = (
  initial: string,
  slides: Record<string, SlideData>,
) => {
  // Define the organized grid layout
  const gridLayout = {
    // Row 1 (top row) - 5 slides
    row1: ["01", "02", "05", "03", "04"],
    // Row 2 (DirectExpress) - 8 slides  
    row2: ["06", "07", "08", "09", "10", "11", "12", "13"],
    // Row 3 (Coinbase) - 9 slides
    row3: ["15", "16", "17", "18", "19", "20", "21", "22", "23"]
  };

  const nodes: Node<SlideData>[] = [];
  const edges: Edge[] = [];

  // Position slides in organized rows
  Object.entries(gridLayout).forEach(([rowName, slideIds], rowIndex) => {
    slideIds.forEach((slideId, colIndex) => {
      const data = slides[slideId];
      if (data) {
        const position = {
          x: colIndex * (SLIDE_WIDTH + SLIDE_PADDING),
          y: rowIndex * (SLIDE_HEIGHT + SLIDE_PADDING)
        };
        
        nodes.push({ id: slideId, type: "slide", position, data });
      }
    });
  });

  // Create edges based on navigation links
  Object.entries(slides).forEach(([id, data]) => {
    if (data.left) {
      edges.push({ id: `${id}->${data.left}`, source: id, target: data.left });
    }
    if (data.right) {
      edges.push({ id: `${id}->${data.right}`, source: id, target: data.right });
    }
    if (data.up) {
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up });
    }
    if (data.down) {
      edges.push({ id: `${id}->${data.down}`, source: id, target: data.down });
    }
  });

  return { nodes, edges };
};

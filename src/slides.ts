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
import LearningsDex from "./directexpress/learnings-dex";

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

// Row 1 (top row) - 5 slides
const slide01 = { id: "01", data: { right: "02", down: "06", component: BoxCarouselDemo } };
const slide02 = { id: "02", data: { left: "01", right: "03", down: "07", component: Interests } };
const slide03 = { id: "03", data: { left: "02", right: "04", down: "08", component: ExperimentalCode } };
const slide04 = { id: "04", data: { left: "03", right: "05", down: "09", component: ThinkingAbout } };
const slide05 = { id: "05", data: { left: "04", down: "10", source: `![Archive Board](https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/597d0c9a-0bf5-435e-30d0-2b20dd145500/public)` } };

// Row 2 - ALL DirectExpress components (9 slides)
const slide06 = { id: "06", data: { right: "07", up: "01", down: "15", component: HeroDirectExpress } };
const slide07 = { id: "07", data: { left: "06", right: "08", up: "02", down: "16", component: TrustDex } };
const slide08 = { id: "08", data: { left: "07", right: "09", up: "03", down: "17", component: PersonasDex } };
const slide09 = { id: "09", data: { left: "08", right: "10", up: "04", down: "18", component: PillarsDex } };
const slide10 = { id: "10", data: { left: "09", right: "11", up: "05", down: "19", component: AtmDex } };
const slide11 = { id: "11", data: { left: "10", right: "12", up: "05", down: "20", component: BillpayDex } };
const slide12 = { id: "12", data: { left: "11", right: "13", up: "05", down: "21", component: MobileflowsDex } };
const slide13 = { id: "13", data: { left: "12", right: "14", up: "05", down: "22", component: TechnicalFeaturesDirectExpress } };
const slide14 = { id: "14", data: { left: "13", up: "05", down: "23", component: LearningsDex } };

// Row 3 - ALL Coinbase components (9 slides)
const slide15 = { id: "15", data: { right: "16", up: "06", component: HeroCloud } };
const slide16 = { id: "16", data: { left: "15", right: "17", up: "07", component: PersonasCloud } };
const slide17 = { id: "17", data: { left: "16", right: "18", up: "08", component: IllustrationCloud } };
const slide18 = { id: "18", data: { left: "17", right: "19", up: "09", component: NodesCloud } };
const slide19 = { id: "19", data: { left: "18", right: "20", up: "10", component: SandboxCloud } };
const slide20 = { id: "20", data: { left: "19", right: "21", up: "11", component: TechnicalFeaturesCloud } };
const slide21 = { id: "21", data: { left: "20", right: "22", up: "12", component: DevsCloud } };
const slide22 = { id: "22", data: { left: "21", right: "23", up: "13", component: DocsCloud } };
const slide23 = { id: "23", data: { left: "22", up: "14", component: BisonTrails } };

const slideArray = [slide01, slide02, slide03, slide04, slide05, slide06, slide07, slide08, slide09, slide10,
 slide11, slide12, slide13, slide14, slide15, slide16, slide17, slide18, slide19, slide20,
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
  const stack = [{ id: initial, position: { x: 0, y: 0 } }];
  const visited = new Set();
  const nodes: Node<SlideData>[] = [];
  const edges: Edge[] = [];

  while (stack.length) {
    const { id, position } = stack.pop()!;
    const data = slides[id];
    
    // Skip if slide data is undefined
    if (!data) {
      console.warn(`Slide data not found for id: ${id}`);
      continue;
    }
    
    const node = { id, type: "slide", position, data };

    if (data.left && !visited.has(data.left)) {
      const nextPosition = {
        x: position.x - (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: data.left, position: nextPosition });
      edges.push({
        id: `${id}->${data.left}`,
        source: id,
        target: data.left,
      });
    }

    if (data.up && !visited.has(data.up)) {
      const nextPosition = {
        x: position.x,
        y: position.y - (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: data.up, position: nextPosition });
      edges.push({ id: `${id}->${data.up}`, source: id, target: data.up });
    }

    if (data.down && !visited.has(data.down)) {
      const nextPosition = {
        x: position.x,
        y: position.y + (SLIDE_HEIGHT + SLIDE_PADDING),
      };

      stack.push({ id: data.down, position: nextPosition });
      edges.push({
        id: `${id}->${data.down}`,
        source: id,
        target: data.down,
      });
    }

    if (data.right && !visited.has(data.right)) {
      const nextPosition = {
        x: position.x + (SLIDE_WIDTH + SLIDE_PADDING),
        y: position.y,
      };

      stack.push({ id: data.right, position: nextPosition });
      edges.push({
        id: `${id}->${data.right}`,
        source: id,
        target: data.right,
      });
    }

    nodes.push(node);
    visited.add(id);
  }

  return { nodes, edges };
};

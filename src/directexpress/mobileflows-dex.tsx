import { Lightbulb, ExternalLink } from "lucide-react";
import SectionHeader from "../section-header";
import { Button } from "../components/ui/button";

const MobileFlowsDex = () => {
  return (
    <section className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full">
        <div className="flex-shrink-0 mb-2">
          <SectionHeader
            category="SOLUTION"
            title="Remapping a complex onboarding"
            icon={Lightbulb}
            description=""
            className="border-none"
          />
        </div>
        <div className="flex-1 flex flex-col min-h-0 justify-center">
          <div className="flex-1 min-h-0 relative">
            <img
              src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/8115d3a0-6092-45cd-a759-84626bbabc00/public"
              alt="Mobile flows"
              className="h-full w-full rounded-xl border object-contain"
            />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="absolute bottom-4 right-4"
            >
              <a
                href="https://www.figma.com/design/8l00E9hm8sQMuQcJiqa5tt/-Onsite--Bethany-Roberston--Figma-?node-id=44-49162&t=gxIuH5QqLb7Um1EB-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                View Figma
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFlowsDex;

import { Search } from "lucide-react";

import SectionHeader from "../section-header";

const PillarsDex = () => {
  return (
    <section className="py-16 md:py-28 lg:py-32 relative">
       <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2 -z-10"></div>
        <SectionHeader
          category="STRATEGY"
          title="Design Pillars"
          icon={Search}
            description=""
            className=""
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3 xl:gap-20">
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://www.dropbox.com/scl/fi/0a3nvtg9jb8s31osmqrm4/fees.png?rlkey=fug3st8srbdi6js91ml737sxx&st=8e30nr7n&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex items-center font-mono gap-2 font-bold">
              Transparency—Transform fee anxiety into fee confidence.
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Problem:
                  <br />
                  57% of users withdraw their funds immediately after registration due to fee anxiety.
                  <br />
                  <br />
                  Solution: 
                  <br />
                  Improve fee visibility and communication, update and improve the ATM locator, and make paying bills as simple as possible.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://www.dropbox.com/scl/fi/vhdp2pc470cno1zoa2gjf/Donut-Chart_-3-Parts-remix.gif?rlkey=vezap2gdd5f5n2jge3sdd9i5f&st=bnvnh8dp&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex items-center font-mono gap-2 font-bold">
              Autonomy—Eliminate 40% of customer service calls through self-service.
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Problem:
                  <br />
                  54% of users call customer services just to check their balance.
                  <br />
                  <br />
                  Solution: 
                  <br />
                  We made checking your balance a snap, complete with real-time notifications and spending tracking.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:block">
            <div className="h-full max-h-[500px] rounded-lg border bg-muted p-3">
              <img
                src="https://imagedelivery.net/N-MD9o_LYLdDJqNonHl96g/6b993d08-fe12-48be-345b-d4c554b48800/public"
                alt="placeholder"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="mb-1 flex font-mono items-center gap-2 font-bold">
              Accessibility—Turn feature blindness into excitement and discovery.
              </h3>
              <p className="text-muted-foreground">
                  <br />
                  Problem: 
                  <br />
                  48% of users were completely unaware of the free ATMs that existed near them.
                  <br />
                  <br />
                  Solution:
                  <br />
                  In addition to an improved ATM locator, we revamped the entire onboarding and in-app education process.
              </p>
            </div>
          </div>
        </div>

    </section>
  );
};

export default PillarsDex;

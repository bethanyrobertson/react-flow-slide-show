import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Receipt,
  MessagesSquare,
  Map,
  Bell,
  Smartphone,
  ArrowRightLeft,
  LayoutList,
  Lightbulb,
} from "lucide-react";

import SectionHeader from "../section-header";

const MobileFlowsDex = () => {
  return (
    <section className="h-full w-full flex items-center justify-center p-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full">
      <div className="flex-shrink-0 mb-2">
        <SectionHeader
            category="SOLUTION"
            title="Mapping a Complex Financial Ecosystem"
            icon={Lightbulb}
            description=""
            className="border-none"
        />
      </div>
      <div className="flex-1 flex flex-col min-h-0 justify-center">
        <Tabs defaultValue="tab-1" className="flex-1 flex flex-col min-h-0">
          <div className="flex-shrink-0 mb-2">
            <div className="max-w-[100vw-1rem] overflow-x-visible">
              <TabsList className="mx-auto flex w-fit justify-center gap-1 border-b border-gray-200 bg-transparent p-0">
                <TabsTrigger
                  value="tab-1"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <span className="text-xs">Full App</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-2"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <Receipt className="w-4 h-4" />
                  </span>
                  <span className="text-xs">Bill Pay</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-3"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <Map className="w-4 h-4" />
                  </span>
                  <span className="text-xs">ATM Locator</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-4"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <ArrowRightLeft className="w-4 h-4" />
                  </span>
                  <span className="text-xs">ACH Transfer</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-5"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <Bell className="w-4 h-4" />
                  </span>
                  <span className="text-xs">Notifications</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-6"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <MessagesSquare className="w-4 h-4" />
                  </span>
                  <span className="text-xs">Chatbot</span>
                </TabsTrigger>
                <TabsTrigger
                  value="tab-7"
                  className="flex flex-col items-center gap-1 px-2 py-1 text-xs font-medium text-gray-400 hover:text-gray-900 data-[state=active]:text-black data-[state=active]:border-b-2 data-[state=active]:border-black min-h-[60px] bg-transparent data-[state=active]:bg-transparent"
                >
                  <span className="flex size-8 items-center justify-center rounded-md bg-gray-50 data-[state=active]:bg-gray-200 transition-colors">
                    <LayoutList className="w-4 h-4" />
                  </span>
                  <span className="text-xs">Transactions</span>
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <TabsContent value="tab-1" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/njrf3z2dn0atarasuiy9j/SiteMap-SVG.png?rlkey=avlkx51hjj3wk7pp0fz3rbei1&st=ilyux9mf&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
            <TabsContent value="tab-2" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/eh4jk62hbkmxyt8h403kr/BillPay-SVG.png?rlkey=3c6umfdr72yfr48g6hys9u1gx&st=mwfd3aq6&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
            <TabsContent value="tab-3" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/qk503gtnd3pmj66xut5ku/ATM-SVG.png?rlkey=euldutnn4bnt1auv1amne9f7w&st=e25m7l57&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
            <TabsContent value="tab-4" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/s1jvrzdje2iwdyduni47k/ACHTransfer-SVG.png?rlkey=yh4uzihvokr0zk5ntcxm7ckcs&st=vkbpsjs2&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
            <TabsContent value="tab-5" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/qp4ifdgy8c7awu0tnkujo/Notifications.png?rlkey=6hfrnzjxpbooys0rk7qxgzqhm&st=be8157wg&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
            <TabsContent value="tab-6" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/q7ukqrfwm3xo0qtydm68j/Chatbot-Lofi.png?rlkey=69odypuoy24jnymu7d7ipmtxe&st=8kqim7wy&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
            <TabsContent value="tab-7" className="h-full mt-0">
              <img
                src="https://www.dropbox.com/scl/fi/6ej63u6cj8jl8ft6roku4/Transactions-SVG.png?rlkey=nugsu6dcqirs2u6kyz0gc9m3s&st=enxxhs09&raw=1"
                alt="placeholder"
                className="h-full w-full rounded-xl border object-contain"
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
      </div>
    </section>
  );
};

export default MobileFlowsDex;
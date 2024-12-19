import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Smartphone, Laptop, Tablet } from "lucide-react";

interface PreviewPaneProps {
  previewUrl?: string;
  isLoading?: boolean;
}

const PreviewPane = ({
  previewUrl = "https://dummyimage.com/360x640/f0f0f0/666666&text=Mobile+Preview",
  isLoading = false,
}: PreviewPaneProps) => {
  return (
    <Card className="w-[600px] h-[500px] p-4 bg-background">
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">PWA Preview</h3>
          <p className="text-sm text-muted-foreground">
            Preview your PWA across different devices
          </p>
        </div>

        <Tabs defaultValue="mobile" className="flex-1">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="mobile" className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              Mobile
            </TabsTrigger>
            <TabsTrigger value="tablet" className="flex items-center gap-2">
              <Tablet className="w-4 h-4" />
              Tablet
            </TabsTrigger>
            <TabsTrigger value="desktop" className="flex items-center gap-2">
              <Laptop className="w-4 h-4" />
              Desktop
            </TabsTrigger>
          </TabsList>

          <div className="relative flex-1 border rounded-lg overflow-hidden">
            {isLoading && (
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center z-10">
                <p className="text-sm font-medium">Loading preview...</p>
              </div>
            )}

            <TabsContent value="mobile" className="h-full m-0">
              <div className="w-full h-full flex items-center justify-center bg-muted/30 p-4">
                <div className="w-[360px] h-[640px] border rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={previewUrl}
                    alt="Mobile preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tablet" className="h-full m-0">
              <div className="w-full h-full flex items-center justify-center bg-muted/30 p-4">
                <div className="w-[768px] h-[400px] border rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={previewUrl.replace("360x640", "768x400")}
                    alt="Tablet preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="desktop" className="h-full m-0">
              <div className="w-full h-full flex items-center justify-center bg-muted/30 p-4">
                <div className="w-[1024px] h-[360px] border rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={previewUrl.replace("360x640", "1024x360")}
                    alt="Desktop preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </Card>
  );
};

export default PreviewPane;

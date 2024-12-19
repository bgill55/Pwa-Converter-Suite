import React from "react";
import { Card } from "@/components/ui/card";
import PreviewPane from "./PreviewPane";
import ManifestEditor from "./ManifestEditor";
import GenerationOptions from "./GenerationOptions";

interface ConversionDashboardProps {
  previewUrl?: string;
  manifestData?: string;
  onManifestUpdate?: (manifest: string) => void;
  onGenerateAssets?: () => void;
  onTypeScriptToggle?: (enabled: boolean) => void;
  isTypeScriptEnabled?: boolean;
  isLoading?: boolean;
}

const ConversionDashboard = ({
  previewUrl = "https://dummyimage.com/360x640/f0f0f0/666666&text=Mobile+Preview",
  manifestData,
  onManifestUpdate = () => {},
  onGenerateAssets = () => {},
  onTypeScriptToggle = () => {},
  isTypeScriptEnabled = false,
  isLoading = false,
}: ConversionDashboardProps) => {
  return (
    <Card className="w-full h-[500px] p-6 bg-background">
      <div className="flex flex-col h-full gap-6">
        <div className="flex gap-6 flex-1">
          <PreviewPane previewUrl={previewUrl} isLoading={isLoading} />
          <div className="flex flex-col gap-4">
            <ManifestEditor
              manifestData={manifestData}
              onManifestUpdate={onManifestUpdate}
              isLoading={isLoading}
            />
            <GenerationOptions
              onGenerateAssets={onGenerateAssets}
              onTypeScriptToggle={onTypeScriptToggle}
              isTypeScriptEnabled={isTypeScriptEnabled}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ConversionDashboard;

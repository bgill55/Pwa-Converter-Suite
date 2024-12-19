import React from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Settings, Code, Download } from "lucide-react";

interface GenerationOptionsProps {
  onGenerateAssets?: () => void;
  onTypeScriptToggle?: (enabled: boolean) => void;
  isTypeScriptEnabled?: boolean;
  isLoading?: boolean;
}

const GenerationOptions = ({
  onGenerateAssets = () => {},
  onTypeScriptToggle = () => {},
  isTypeScriptEnabled = false,
  isLoading = false,
}: GenerationOptionsProps) => {
  return (
    <Card className="w-[580px] h-[100px] p-4 bg-background">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10">
              <Settings className="w-4 h-4 text-primary" />
            </div>
            <h3 className="text-sm font-semibold">Generation Options</h3>
          </div>

          <Button
            onClick={() => onGenerateAssets()}
            disabled={isLoading}
            className="flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Generate PWA Assets
          </Button>
        </div>

        <div className="flex items-center gap-6 mt-2">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-muted-foreground" />
            <Label htmlFor="ts-mode" className="text-sm cursor-pointer">
              Convert to TypeScript
            </Label>
            <Switch
              id="ts-mode"
              checked={isTypeScriptEnabled}
              onCheckedChange={onTypeScriptToggle}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GenerationOptions;

import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Loader2, FileIcon } from "lucide-react";

interface GenerationProgressProps {
  progress?: number;
  currentStep?: string;
  generatedFiles?: string[];
  isComplete?: boolean;
  isLoading?: boolean;
}

const GenerationProgress = ({
  progress = 0,
  currentStep = "Initializing...",
  generatedFiles = ["manifest.json", "service-worker.js", "icons/"],
  isComplete = false,
  isLoading = false,
}: GenerationProgressProps) => {
  return (
    <Card className="w-full h-[100px] p-4 bg-background">
      <div className="flex items-center justify-between h-full">
        <div className="flex-1 pr-6">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              {isComplete ? (
                <CheckCircle2 className="w-5 h-5 text-primary animate-in fade-in" />
              ) : isLoading ? (
                <Loader2 className="w-5 h-5 text-primary animate-spin" />
              ) : null}
              <span className="text-sm font-medium">{currentStep}</span>
            </div>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="border-l pl-6 h-full flex items-center">
          <div>
            <p className="text-sm font-medium mb-2">Generated Files:</p>
            <div className="flex gap-3">
              {generatedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 text-xs text-muted-foreground"
                >
                  <FileIcon className="w-3 h-3" />
                  {file}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GenerationProgress;

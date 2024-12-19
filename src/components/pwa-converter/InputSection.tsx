import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DragDropZone from "./DragDropZone";
import URLInput from "./URLInput";

interface InputSectionProps {
  onFilesDrop?: (files: FileList) => void;
  onURLSubmit?: (url: string) => void;
  isLoading?: boolean;
}

const InputSection = ({
  onFilesDrop = () => {},
  onURLSubmit = () => {},
  isLoading = false,
}: InputSectionProps) => {
  return (
    <Card className="w-full h-[300px] p-6 bg-background">
      <div className="flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-6">
          Convert Your Website to PWA
        </h2>
        <div className="flex-1 flex items-center justify-between gap-6">
          <DragDropZone onFilesDrop={onFilesDrop} isLoading={isLoading} />
          <div className="h-full flex items-center">
            <Separator orientation="vertical" className="h-[200px]" />
            <div className="mx-6 text-sm font-medium text-muted-foreground">
              OR
            </div>
            <Separator orientation="vertical" className="h-[200px]" />
          </div>
          <URLInput onURLSubmit={onURLSubmit} isLoading={isLoading} />
        </div>
      </div>
    </Card>
  );
};

export default InputSection;

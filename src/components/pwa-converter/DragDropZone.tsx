import React from "react";
import { Upload } from "lucide-react";
import { Card } from "@/components/ui/card";

interface DragDropZoneProps {
  onFilesDrop?: (files: FileList) => void;
  isLoading?: boolean;
}

const DragDropZone = ({
  onFilesDrop = () => {},
  isLoading = false,
}: DragDropZoneProps) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      onFilesDrop(e.dataTransfer.files);
    }
  };

  return (
    <Card
      className={`w-[580px] h-[200px] flex flex-col items-center justify-center p-6 border-2 border-dashed transition-colors bg-background
        ${isDragging ? "border-primary bg-primary/5" : "border-border"}
        ${isLoading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Upload className="w-6 h-6 text-primary" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium">
            {isDragging
              ? "Drop your HTML files here"
              : "Drag and drop your HTML files here"}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            or click to browse files
          </p>
        </div>
        <input
          type="file"
          className="hidden"
          accept=".html,.htm"
          multiple
          onChange={(e) => e.target.files && onFilesDrop(e.target.files)}
          disabled={isLoading}
        />
      </div>
    </Card>
  );
};

export default DragDropZone;

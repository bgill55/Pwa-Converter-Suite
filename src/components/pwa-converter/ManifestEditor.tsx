import React from "react";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FileJson, RefreshCw, Save } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ManifestEditorProps {
  manifestData?: string;
  onManifestUpdate?: (manifest: string) => void;
  isLoading?: boolean;
}

const defaultManifest = {
  name: "My PWA App",
  short_name: "PWA App",
  description: "A Progressive Web App",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#000000",
  icons: [
    {
      src: "/icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      src: "/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
    },
  ],
};

const ManifestEditor = ({
  manifestData = JSON.stringify(defaultManifest, null, 2),
  onManifestUpdate = () => {},
  isLoading = false,
}: ManifestEditorProps) => {
  const [editorContent, setEditorContent] = React.useState(manifestData);
  const [error, setError] = React.useState("");

  const validateJSON = (json: string) => {
    try {
      JSON.parse(json);
      return true;
    } catch {
      return false;
    }
  };

  const handleUpdate = () => {
    if (!validateJSON(editorContent)) {
      setError("Invalid JSON format");
      return;
    }
    setError("");
    onManifestUpdate(editorContent);
  };

  const handleReset = () => {
    setEditorContent(JSON.stringify(defaultManifest, null, 2));
    setError("");
  };

  return (
    <Card className="w-[580px] h-[400px] p-4 bg-background">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-primary/10">
              <FileJson className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">manifest.json Editor</h3>
          </div>

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={handleReset}
                    disabled={isLoading}
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset to default</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Button
              onClick={handleUpdate}
              disabled={isLoading}
              className="flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              Update Manifest
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <Textarea
            value={editorContent}
            onChange={(e) => setEditorContent(e.target.value)}
            className={`h-full font-mono text-sm resize-none ${error ? "border-destructive" : ""}`}
            placeholder="Enter your manifest.json content here..."
            disabled={isLoading}
          />
          {error && (
            <p className="text-sm text-destructive absolute bottom-2 left-2">
              {error}
            </p>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-2">
          Edit the manifest.json file to customize your PWA's metadata and
          appearance
        </p>
      </div>
    </Card>
  );
};

export default ManifestEditor;

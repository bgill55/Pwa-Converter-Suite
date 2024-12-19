import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Globe, ArrowRight } from "lucide-react";

interface URLInputProps {
  onURLSubmit?: (url: string) => void;
  isLoading?: boolean;
}

const URLInput = ({
  onURLSubmit = () => {},
  isLoading = false,
}: URLInputProps) => {
  const [url, setUrl] = React.useState("");
  const [error, setError] = React.useState("");

  const validateURL = (input: string) => {
    try {
      new URL(input);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setError("Please enter a URL");
      return;
    }
    if (!validateURL(url)) {
      setError("Please enter a valid URL");
      return;
    }
    setError("");
    onURLSubmit(url);
  };

  return (
    <Card className="w-[580px] h-[200px] p-6 bg-background">
      <div className="flex flex-col h-full justify-between">
        <div className="flex items-center gap-2 mb-4">
          <div className="p-2 rounded-full bg-primary/10">
            <Globe className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Enter Website URL</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              type="text"
              placeholder="https://your-website.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={error ? "border-destructive" : ""}
              disabled={isLoading}
            />
            {error && <p className="text-sm text-destructive mt-1">{error}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Processing..."
            ) : (
              <>
                Convert to PWA
                <ArrowRight className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default URLInput;

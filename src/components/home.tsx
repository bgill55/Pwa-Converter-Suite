import React from "react";
import InputSection from "./pwa-converter/InputSection";
import ConversionDashboard from "./pwa-converter/ConversionDashboard";
import GenerationProgress from "./pwa-converter/GenerationProgress";

const Home = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [currentStep, setCurrentStep] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [previewUrl, setPreviewUrl] = React.useState("");
  const [manifestData, setManifestData] = React.useState("");
  const [isTypeScriptEnabled, setIsTypeScriptEnabled] = React.useState(false);

  const handleFilesDrop = (files: FileList) => {
    setIsLoading(true);
    // Simulated file processing
    setCurrentStep("Processing HTML files...");
    setProgress(25);
    // Add actual file processing logic here
  };

  const handleURLSubmit = (url: string) => {
    setIsLoading(true);
    setPreviewUrl(url);
    // Simulated URL processing
    setCurrentStep("Analyzing website...");
    setProgress(30);
    // Add actual URL processing logic here
  };

  const handleManifestUpdate = (manifest: string) => {
    setManifestData(manifest);
    setCurrentStep("Updating manifest...");
    setProgress(60);
    // Add actual manifest update logic here
  };

  const handleGenerateAssets = () => {
    setCurrentStep("Generating PWA assets...");
    setProgress(80);
    // Add actual asset generation logic here

    // Simulated completion
    setTimeout(() => {
      setProgress(100);
      setIsComplete(true);
      setCurrentStep("PWA generation complete!");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full p-6 space-y-6 bg-background">
      <InputSection
        onFilesDrop={handleFilesDrop}
        onURLSubmit={handleURLSubmit}
        isLoading={isLoading}
      />

      <ConversionDashboard
        previewUrl={previewUrl}
        manifestData={manifestData}
        onManifestUpdate={handleManifestUpdate}
        onGenerateAssets={handleGenerateAssets}
        onTypeScriptToggle={setIsTypeScriptEnabled}
        isTypeScriptEnabled={isTypeScriptEnabled}
        isLoading={isLoading}
      />

      {(isLoading || isComplete) && (
        <GenerationProgress
          progress={progress}
          currentStep={currentStep}
          isComplete={isComplete}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default Home;

import { useState } from "react";
import { Download, SquareArrowLeft } from "lucide-react";
import { VerticalChart } from "@/components/vertical-chart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function DetailCuttingP() {
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // State untuk file yang di-upload
  const [previewImage, setPreviewImage] = useState<string | null>(null); // State untuk preview gambar

  const handleBackToMenu = () => {
    navigate("/dashboard-cutting"); // Sesuaikan dengan path DashboardCutting.tsx
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file); // Simpan file ke state
      setPreviewImage(URL.createObjectURL(file)); // Buat URL blob untuk preview
    }
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert("Please select a file before submitting.");
      return;
    }

    // Proses pengiriman file (misalnya ke API)
    console.log("File submitted:", selectedFile);

    // Reset state setelah submit
    setSelectedFile(null);
    setPreviewImage(null);
    alert("File uploaded successfully!");
  };

  return (
    <main className="flex h-[93%] py-2 px-3 flex-wrap max-h-[93%]">
      <div className="flex flex-col w-fit max-w-min min-w-fit xl:grow max-h-full ml-auto mr-2">
        <div className="my-2">
          <div className="w-full flex flex-col items-center bg-white p-4 rounded">
            {/* Preview Image */}
            {previewImage ? (
              <AspectRatio ratio={2 / 1} className="w-full bg-gray-100">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            ) : (
              <AspectRatio ratio={2 / 1} className="w-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No image uploaded</span>
              </AspectRatio>
            )}

            {/* Upload Field */}
            <div className="flex w-full mt-4 items-center space-x-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="flex-grow border p-2 rounded"
              />
              <Button onClick={handleSubmit} className="flex-shrink-0">
                Submit
              </Button>
            </div>
          </div>
        </div>
        <Card className="rounded-b-xl rounded-t-none h-full">
          <CardContent className="flex flex-col sm:flex-row space-y-0 rounded-b-xl rounded-t-none p-0 h-full grow">
            <div className="flex flex-1 space-x-6 py-3 px-3 sm:py-3 h-full">
              <div className="gap-1 flex flex-col justify-center">
                <CardTitle>Streaming Camera - PTM-87-23A</CardTitle>
                <CardDescription>
                  Showing amount percent of cutting at shale shaker
                </CardDescription>
                <Button onClick={handleBackToMenu}>
                  <SquareArrowLeft />
                  Back to Menu
                </Button>
              </div>
            </div>
            <div className="flex">
              <div className="flex align-middle justify-center">
                <div className="my-auto space-y-3 px-3">
                  <DatePicker />
                  <Button className="w-[225px]">
                    <Download />
                    Download
                  </Button>
                </div>
              </div>
              <button className="flex flex-col my-auto justify-center gap-1 px-6 py-4 text-left sm:px-8 sm:py-6 bg-primary rounded-br-xl text-white h-full">
                <span className="sm:text-lg text-xs w-full">Last Value</span>
                <span className="text-lg font-bold leading-none sm:text-4xl 2xl:text-5xl">
                  87%
                </span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
      <VerticalChart />
    </main>
  );
}

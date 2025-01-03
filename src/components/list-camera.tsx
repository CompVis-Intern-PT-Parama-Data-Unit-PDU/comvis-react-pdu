import { useState } from "react";
import { Edit, Trash2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Camera {
  id: number;
  name: string;
  client: string;
  site: string;
  well: string;
}

export function ListCamera() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Camera | null>(null);
  const [editData, setEditData] = useState<Camera | null>(null);
  const [cameras, setCameras] = useState<Camera[]>([
    { id: 1, name: "Camera 1", client: "Client A", site: "Site X", well: "Well 1" },
    { id: 2, name: "Camera 2", client: "Client B", site: "Site Y", well: "Well 2" },
    { id: 3, name: "Camera 3", client: "Client C", site: "Site Z", well: "Well 3" },
  ]);

  const openModal = (rowData: Camera) => {
    setEditData(rowData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditData(null);
    setIsModalOpen(false);
  };

  const openConfirm = (camera: Camera) => {
    setDeleteTarget(camera);
    setIsConfirmOpen(true);
  };

  const closeConfirm = () => {
    setDeleteTarget(null);
    setIsConfirmOpen(false);
  };

  const handleDelete = () => {
    if (deleteTarget) {
      setCameras((prevCameras) =>
        prevCameras.filter((camera) => camera.id !== deleteTarget.id)
      );
    }
    closeConfirm();
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prevData) => (prevData ? { ...prevData, [name]: value } : prevData));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editData) {
      setCameras((prevCameras) =>
        prevCameras.map((camera) => (camera.id === editData.id ? editData : camera))
      );
    }
    closeModal();
  };

  return (
    <Card className="min-h-full ml-auto mr-2 border-primary">
      <CardHeader>
        <CardTitle className="text-2xl">List Camera</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Camera Name</th>
              <th className="border border-gray-300 px-4 py-2">Client</th>
              <th className="border border-gray-300 px-4 py-2">Site</th>
              <th className="border border-gray-300 px-4 py-2">Well</th>
              <th className="border border-gray-300 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cameras.map((camera) => (
              <tr key={camera.id}>
                <td className="border border-gray-300 px-4 py-2">{camera.name}</td>
                <td className="border border-gray-300 px-4 py-2">{camera.client}</td>
                <td className="border border-gray-300 px-4 py-2">{camera.site}</td>
                <td className="border border-gray-300 px-4 py-2">{camera.well}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <Button
                    onClick={() => openModal(camera)}
                    variant="outline"
                    size="sm"
                    className="flex items-center">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => openConfirm(camera)}
                    variant="destructive"
                    size="sm"
                    className="flex items-center">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Modal Edit */}
        {isModalOpen && editData && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
              <h2 className="text-xl font-semibold mb-4">Edit Camera</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium">
                      Camera Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={editData.name}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="client" className="block text-sm font-medium">
                      Client
                    </label>
                    <input
                      type="text"
                      id="client"
                      name="client"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={editData.client}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="site" className="block text-sm font-medium">
                      Site
                    </label>
                    <input
                      type="text"
                      id="site"
                      name="site"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={editData.site}
                      onChange={handleFormChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="well" className="block text-sm font-medium">
                      Well
                    </label>
                    <input
                      type="text"
                      id="well"
                      name="well"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={editData.well}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
                <div className="mt-6 flex justify-end gap-4">
                  <Button type="button" onClick={closeModal} variant="outline">
                    Cancel
                  </Button>
                  <Button type="submit">
                    Save
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Pop-up Confirm */}
        {isConfirmOpen && deleteTarget && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg p-6 w-1/3">
              <h2 className="text-xl font-semibold mb-4">Do you really want to delete?</h2>
              <p className="mb-6">
                Do you really want to delete <strong>{deleteTarget.name}</strong>?
                This action cannot be undone.
              </p>
              <div className="flex justify-end gap-4">
                <Button type="button" onClick={closeConfirm} variant="outline">
                  Cancel
                </Button>
                <Button type="button" onClick={handleDelete} variant="destructive">
                  Yes, Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

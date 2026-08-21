import ArchiveClient from "./archive-client";

export default function ArchivePage() {
  return (
    <main className="w-full min-h-screen bg-white text-[#0000FF] font-serif selection:bg-[#0000FF] selection:text-white overflow-hidden">
      <ArchiveClient />
    </main>
  );
}

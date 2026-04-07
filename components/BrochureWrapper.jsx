"use client";

import { useState } from "react";
import BrochureDownload from "./BrochureDownload";
import LeadModal from "./LeadModal";

export default function BrochureWrapper() {
  const [openPanel, setOpenPanel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <BrochureDownload
        id="brochure"
        openPanel={openPanel}
        setOpenPanel={setOpenPanel}
        topPosition={"top-60 md:top-50"}
        frmName={"Brochure"}
      />

      <BrochureDownload
        id="costsheet"
        openPanel={openPanel}
        setOpenPanel={setOpenPanel}
        topPosition={"top-120 md:top-110"}
        frmName={"Cost Sheet"}
      />
      <div className="fixed top-1/2 right-[-37px] z-50">
        <button 
        onClick={() => {
                  setIsModalOpen(true);
                }}
        className="bg-primary px-2 py-1 text-white rotate-[270deg] cursor-pointer">Enquiry Now</button>
      </div>
      <LeadModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              modelHeading={"Enquire Now For More Details"}
              modelBtnLabel={"Submit"}
            />
    </>
  );
}
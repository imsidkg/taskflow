import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import useMedia from "use-media";
type Props = {
  open: boolean;
  onOpenChange: (open : boolean) => void;
  children: React.ReactNode;
};

const ResponsiveModal = ({ open, onOpenChange, children }: Props) => {
  const isDesktop = useMedia("(min-width: 1024px)", true);
  {
    isDesktop ?  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]">
      {children}
    </DialogContent>
  </Dialog> : <div>hii</div>;
  }
    <Drawer open={open} onOpenChange={onOpenChange}>
  <DrawerContent>
    <div className="overflow-y-auto hide-scrollbar max-h-[85vh]">
      {children}
    </div>
  </DrawerContent>
</Drawer>;
};

export default ResponsiveModal;

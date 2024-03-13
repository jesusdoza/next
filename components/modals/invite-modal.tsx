"use client";

import { Copy } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function InviteModal() {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "invite";

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={onClose}>
      <DialogContent className=" bg-gray-400 text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl font-bold">
            Invite Freinds
          </DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Label className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
            Server invite link
          </Label>
          <div className="flex item-center mt-2 gap-x-2">
            <Input
              value="invite-link"
              className="bg-zinc-3--/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
            />

            <Button size="icon">
              <Copy></Copy>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

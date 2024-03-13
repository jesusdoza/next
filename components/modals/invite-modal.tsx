"use client";

import { Copy, RefreshCw } from "lucide-react";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOrigin } from "@/hooks/use-origin";
import { useState } from "react";

export function InviteModal() {
  const { isOpen, onClose, type, data } = useModal();

  const origin = useOrigin();
  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const inviteURl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    //copy to clipboard
    navigator.clipboard.writeText(inviteURl);
    setCopied(true);
  };

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
              value={inviteURl}
              className="bg-zinc-3--/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
            />

            <Button size="icon">
              <Copy className="w-4 h-4"></Copy>
            </Button>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-xs text-zinc-500 mt-4">
            Generate a new link
            <RefreshCw className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

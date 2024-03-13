"use client";

import axios from "axios";
import { Check, Copy, RefreshCw } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useModal } from "@/hooks/use-modal-store";
import { useOrigin } from "@/hooks/use-origin";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

export function InviteModal() {
  const { isOpen, onClose, onOpen, type, data } = useModal();

  const origin = useOrigin();
  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inviteURl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    //copy to clipboard
    navigator.clipboard.writeText(inviteURl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `/api/servers/${server?.id}/invite-code`
      );

      onOpen("invite", { server: response.data });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error @onNew InviteModal :", error);
    }
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
              disabled={isLoading}
              value={inviteURl}
              className="bg-zinc-3--/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
            />

            {/* copy link button */}
            <Button
              disabled={isLoading}
              onClick={onCopy}
              size="icon">
              {copied ? (
                <Check className="w-4 h-4"></Check>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          <Button
            onClick={onNew}
            disabled={isLoading}
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

'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface DeniedPopupProps {
  isOpen: boolean;
  onClose: () => void;
  companyProfileUrl?: string;
}

export default function DeniedPopup({ isOpen, onClose, companyProfileUrl, message }: DeniedPopupProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Access Denied</DialogTitle>
          <DialogDescription>
            {message}
          </DialogDescription>
        </DialogHeader>
        {companyProfileUrl && (
          <a href={companyProfileUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 text-center">
            Company Profile
          </a>
        )}
      </DialogContent>
    </Dialog>
  );
}

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface PdfViewerPopupProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const PdfViewerPopup: React.FC<PdfViewerPopupProps> = ({
  isOpen,
  onClose,
  pdfUrl,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] w-full h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Curriculum Vitae</DialogTitle>
          <DialogDescription>
            Here is my Curriculum Vitae. You can view it directly here.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow">
          <iframe src={pdfUrl} frameBorder="0" style={{ border: 'none', height: '100%', width: '100%' }}></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PdfViewerPopup;

import { cn } from "@/lib/utils";

interface PlaceholderBlockProps {
  label: string;
  className?: string;
  children?: React.ReactNode;
}

const PlaceholderBlock = ({ label, className, children }: PlaceholderBlockProps) => (
  <div className={cn("rounded-lg border-2 border-dashed border-border bg-muted/50 p-6", className)}>
    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-muted-foreground">
      {label}
    </span>
    {children}
  </div>
);

export default PlaceholderBlock;

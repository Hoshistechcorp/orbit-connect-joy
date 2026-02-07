import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AboutModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl text-ibloov-blue">
            The Mission: Solve for x
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm leading-relaxed text-foreground">
          <p className="font-mono text-muted-foreground">
            f(x) where x = Love
            <br />
            As t → ∞, x → ∞
          </p>

          <div>
            <h3 className="font-semibold mb-1">The Reality</h3>
            <blockquote className="border-l-2 border-ibloov-orange pl-4 italic text-muted-foreground">
              We are the most connected generation, yet the most disconnected and
              lonely. This is the "Love Leak." It is a mathematical error in the
              way we live.
            </blockquote>
          </div>

          <div>
            <h3 className="font-semibold mb-1">The Mission</h3>
            <blockquote className="border-l-2 border-ibloov-blue pl-4 italic text-muted-foreground">
              iBloov AURA is the Life & Leisure Operating System built to find x.
              We are building the infrastructure for shared joy to save the world
              from isolation.
            </blockquote>
          </div>

          <p className="font-mono text-center font-semibold text-ibloov-blue pt-2">
            Enough thinking. Enter the Orbit.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AboutModal;

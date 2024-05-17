import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
export default function Contact() {
  return (
    <>
      <div className="hidden md:flex">
        <Dialog>
          <DialogTrigger>
            <Button size={"sm"} variant={"geist"}>
              Contact <ArrowRight className="ml-1.5 h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact us</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose>
                <Button variant="outline">Close</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="md:hidden">
        <Drawer>
          <DrawerTrigger>
            <Button size={"sm"} variant={"geist"}>
              Contact <ArrowRight className="ml-1.5 h-5 w-5" />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Contact us</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

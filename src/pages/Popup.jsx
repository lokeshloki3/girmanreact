import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "../components/ui/dialog";
import profile from "../assets/profile.png";

const Popup = ({ user, onClose }) => {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="w-1/3 p-8 bg-white rounded-lg shadow-lg [&>button]:hidden">
        <DialogHeader>
          <DialogTitle>
            <p className="text-2xl">Fetch Details</p>
          </DialogTitle>
          <DialogDescription>
            Here are the details for the following employee:
          </DialogDescription>
        </DialogHeader>

        <div>
          <p>
            Name: {user.first_name} {user.last_name}
          </p>
          <p>Location: {user.city}</p>
          <p>Phone: {user.contact_number}</p>
          <p className="mt-2 mb-2">Profile Image:</p>
          <img src={profile} className="h-32 w-auto" />
        </div>

        <DialogFooter>
          <DialogClose className="p-1 pr-3 pl-3 border bg-white rounded-lg">
            
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Popup;

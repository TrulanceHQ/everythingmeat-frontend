import OTPVerification from "@/app/forgotPassword/verification/components/OTPVerification";
import { Modal } from "flowbite-react";
import React from "react";

type Props = {
  show: boolean;
  onClose: () => void;
  onSubmit: (otp: string) => void;
  loading?: boolean;
  verificationResponse?: string;
  userEmail: string;
  existingUserEmail: boolean
};

const UserVerificationModal = ({
  show,
  onClose,
  onSubmit,
  loading,
  verificationResponse,
  userEmail,
  existingUserEmail = false,
}: Props) => {
  return (
    <Modal show={show} size="sm" onClose={onClose}>
      <Modal.Header>User Verification</Modal.Header>
      <Modal.Body>
        <div className="text-center">
            {existingUserEmail && (
                <div>
                    <label htmlFor="">Email</label>
                    <input placeholder="Enter Email" type="email"> </input>
                </div>
            )}
          <OTPVerification
            onSubmit={onSubmit}
            loading={loading}
            userEmail={userEmail}
          />
          <h3 className="py-2 text-red-600">{verificationResponse}</h3>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default UserVerificationModal;

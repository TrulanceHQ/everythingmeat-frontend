import Link from "next/link";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useStore } from "@/app/store";
import { useLogout } from "@/hooks/useLogout";

const DynamicSection = () => {
  const router = useRouter();
  const pathname = usePathname();

  const role = useStore((state) => state.role);
  const clearRole = useStore((state) => state.clearRole);
  const logout = useLogout();

  const handleLogout = () => {
    clearRole();
    logout();
    router.push("/");
  };

  const getDashboardLink = () => {
    switch (role) {
      case "admin":
        return "/admin";
      case "seller":
        return "/seller-dashboard";
      case "buyer":
        return "/buyer-dashboard";
      default:
        return "/login";
    }
  };

  return (
    <div>
      {role === "no-role" ? (
        <p>
          Sign in to promote your livestock for meat sharing.{" "}
          <span>
            <Link href="/login" className="text-yellow-300 font-bold">
              Sign in now
            </Link>
          </span>
        </p>
      ) : (
        <>
          {pathname === "/" ? (
            <>
              <p>
                Welcome back {role}{" "}
                <span>
                  <Link
                    href={getDashboardLink()}
                    className="text-yellow-300 font-bold"
                  >
                    Go to Dashboard
                  </Link>
                </span>
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome back {role}{" "}
                <span>
                  <button
                    onClick={handleLogout}
                    className="text-yellow-300 font-bold"
                  >
                    Logout
                  </button>
                </span>
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DynamicSection;

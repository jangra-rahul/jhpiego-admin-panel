"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CommonTitleProps {
  title: string;
}

export default function CommonTitle({ title }: CommonTitleProps) {
  const pathname = usePathname();

  return (
    <div className="mb-4">
<h2 className="fw-bold fs_40 clr_lightblack mb-0">{title}</h2>

      {title.toLowerCase() !== "dashboard" && (
        <div className="d-flex align-items-center mt-1 gap-2">
          <Link style={{textDecoration:"none"}} href="/dashboard" className=" clr_theme fw-medium">
            Dashboard
          </Link>
          <span className="text-muted ">/</span>
          <span className="text-dark fw-medium clr_lightbalck ">{title}</span>
        </div>
      )}
    </div>
  );
}

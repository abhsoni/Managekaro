import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateStr: string) {
  if (!dateStr) {
    return "";
  }

  if (dateStr.includes("-")) {
    const [year, month, day] = dateStr.split("-");
    return `${year}-${month}-${day}`;
  } else if (dateStr.includes("/")) {
    const [day, month, year] = dateStr.split("/");
    return `${year}-${month}-${day}`;
  } else {
    return "";
  }
}

export function formatISODate(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const monthName = date.toLocaleString("en-US", { month: "short" });

  return `${day} ${monthName}, ${year}`;
}
